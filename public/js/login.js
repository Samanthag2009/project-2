// Moved these imports to the top w the export @the bottom - emma
const app = express();
app.use(passport.initialize());
app.use(passport.session());

async function handleLogin(event) {
    event.preventDefault();  

    //get value of username/password login
    const username = document.querySelector('.username').value.trim();
    const password = document.querySelector('.password').value.trim();
  
    // If both username and password have been entered, convert username/password to json string
    if (username && password) {
      const  login = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // if login authenticated, load dashboard, else alert login status failed
      if (login.ok) {
        console.log('success');
        document.location.replace('/dashboard');
      } else {
        alert(login.statusText);
      }
    }
}


document.querySelector('.login-form').addEventListener('submit', handleLogin);

module.exports = app;


