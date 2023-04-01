
async function handleLogin(event) {
    event.preventDefault();  

    //get value of username/password login
    const username = document.querySelector('.username-login').value.trim();
    const password = document.querySelector('.password-login').value.trim();
  
    // If both username and password have been entered, convert username/password to json string
    if (username && password) {
      const  login = await fetch('/api/user/login', { // might also be api/users/login but idk
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(username, password, login)
      // if login authenticated, load dashboard, else alert login status failed
      if (login.ok) {
        console.log('success');
        document.location.replace('/games');
      } else {
        alert(login.statusText);
      }
    }
}

// async function handleSignUpForm(event) {
//   event.preventDefault();

//   const username = document.getElementById('sign-up-username').value.trim();
//   const password = document.getElementById('sign-up-password').value.trim();

//   if (username && password) {
//     const signUp = await
//   }
// }

document.querySelector('.login-form').addEventListener('submit', handleLogin);




