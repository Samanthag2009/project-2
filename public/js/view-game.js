
async function handleSingleView(event) {
    event.preventDefault();  

    //get value of game id
    const gameId = document.querySelector('#game-id').value.trim();
    console.log(gameId)
    // If both username and password have been entered, convert username/password to json string
    if (gameId) {
        document.location.replace(`/${gameId}`);
      } else {
        alert('Unable to load game view');
      }
}


document.querySelector('.view-btn').addEventListener('click', handleSingleView);