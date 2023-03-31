async function handleSignUpForm(event) {
    event.preventDefault();
  
    //get value of username/password form input
    const username = document.querySelector('#sign-up-username').value.trim();
    const password = document.querySelector('#sign-up-password').value.trim();
  
    // if both username/password are entered save key/values and redirect to dashboard
    if (username && password) {
      const newUser = await fetch('/api/user/new-users', { // might also be api/users/login but idk
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
        if (newUser.ok) {
            console.log('success');
            document.location.replace('/dashboard');
        } else {
            alert(newUser.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', handleSignUpForm);