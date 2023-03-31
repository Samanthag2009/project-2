function gameLookup(event) {
    event.preventDefault();

    //Get value of entered game ID
    const gameId = document.querySelector('input[name="gameId"]').value.trim()

    // If user tries to enter a game name, alert, load w game ID
    if (!isNaN(gameId)) {
        document.location.replace(`/${gameId}`)
    } else {
        alert('Please enter a valid game ID!')
    }
}

document.querySelector('.look-up-form').addEventListener('submit', gameLookup)