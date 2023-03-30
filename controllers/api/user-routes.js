const router = require('express').Router();

const { User, Game, Comment } = require('../../models');

const hasAuth = require('../../utils/auth')

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
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Login unsuccessful, incorrect username or password.' });
      return;
    }

    //comparing password to the db to ensure it is correct
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Login unsuccessful, incorrect username or password.' });
      return;
    }
    //creating session variables based on the user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'Login successful!' });
    });

  } catch (err) {
    res.status(err).json(err);
  }
});


// get game by id get by user id
router.get('/:id', hasAuth, (req, res) =>{
  //Find specific game data for requested game by id
  console.log(req.params.id)
  User.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
          'username',
          'password',
          'created_at'
      ]
  })
  .then(dbData => {
    // Then populate the single-game template with what was found ^
    const user = dbData.get({ plain: true});
    console.log(user)
    res.render('user-profile', user) 
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

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
