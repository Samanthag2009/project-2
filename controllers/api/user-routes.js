const router = require('express').Router();

const { User } = require('../../models');

const hasAuth = require('../../utils/auth')

// in / => api/ => user/ => new-player
// Add new user to database from new-user fetch/POST
router.post('/', (req, res) => {
  User.create({
      //from fetch js post

    // Create request is not setting the ID automatically, even thought it's set to autoIncrement, keeps returning NULL

      username: req.body.username,
      password: req.body.password
  })
  .then(newUserData => {

      req.session.save(() => {

          // session tracks user_id for logged in status, set each to model reference
          req.session.user_id = newUserData.id;
          // Keep new user logged in
          req.session.logged_in = true;
          //save new user
          res.json(newUserData)
      })
  })
  .catch(err => {
      console.log(err)
      res.status(500).json(err)
      return;
  })
})



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
