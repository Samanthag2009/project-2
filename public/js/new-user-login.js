
async function handleSignUpForm(event) {
    event.preventDefault();
  
    //get value of username/password form input
    const username = document.querySelector('input[name="username"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();


    
    // if both username/password are entered save key/values and redirect to dashboard
    if (username && password) {
      const newUser = await fetch('/api/user/', { 
        method: 'POST',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
        if (newUser.ok) {
            // if 200, display alert and load all games page
            alert(`New Player ${username} added!`)
            
            document.location.replace('/games');
        } else {
            alert(newUser.statusText);
            return;
        }
    }
}

// Call sing up function on submit
document.querySelector('.signup-form').addEventListener('submit', handleSignUpForm);