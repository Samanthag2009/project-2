const router = require('express').Router();

const { User, Game, Comment } = require('../../models');

const hasAuth = require('../../utils/auth')

// COMMENTED OUT FUNCTIONALITY THAT WILL BE IMPLEMENTED IN FUTURE DEVELOPMENT

// create new user
router.post('/', async (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(newUser => {
    req.session.save(() => {
      res.session.id = newUser.id;
      res.session.username = newUser.username,
      req.session.logged_in = true
    })
    .catch(err => console.log(err))
  })
});


//post request getting one user from a stored email
router.post('/login', async (req, res) => {
  try {
    const userName = await User.findOne({ where: { username: req.body.username } });

    if (!userName) {
      res
        .status(404)
        .json({ message: 'Login unsuccessful, incorrect username or password.' });
      return;
    }

    //comparing password to the db to ensure it is correct
    const validPassword = await userName.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Login unsuccessful, incorrect username or password.' });
      return;
    }
    //creating session variables based on the user
    req.session.save(() => {
      req.session.user_id = userName.id;
      req.session.logged_in = true;
      
      res.json({ user: userName, message: 'Login successful!' });
    });

  } catch (err) {
    res.status(err).json(err);
  }
});





//end the session upon user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Get user profile data

module.exports = router;
