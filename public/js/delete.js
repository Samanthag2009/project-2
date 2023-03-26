let deleteGameBtn = document.querySelector('.delete-btn')

async function deleteGameById(event) {
    event.preventDefault();

    // delete by specific game id
    const deleteGame = await
      fetch(`/api/games/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    // If game is deleted correctly, return to all-games page to reload all games w/o the deleted one
    if (deleteGame.ok) {
        document.location.replace('/all-games')
    } else {
        alert(deleteGame.statusText)
    }

}
// May need function to re-render all games in db after game has been removed
//so user doesn't need to refresh for the game to disapear

deleteGameBtn.addEventListener('click', deleteGameById);