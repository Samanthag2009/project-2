const newGameForm = document.getElementById('new-game-form');

// Handle on click when a user submits new game
if (newGameForm) {
  newGameForm
    .addEventListener('submit', (e) => {
      e.preventDefault();

      // get values from input boxes
      let title = document.querySelector('#game-title').value;
      let cover = document.querySelector('#cover-link').value;
      let genre = document.querySelector('#genre').value;
      let description = document.querySelector('#description').value;
      let rating = document.querySelector('#rating').value;
      let playStatus = document.querySelector('#play-status').value; 

      // Create an object with the game info
      const newGameObj = {
        title,
        cover,
        genre,
        description,
        rating,
        playStatus
      };

      // Then fetch a POST request dashboard (view all games) to the server to store new game
      fetch('api/dashboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGameObj),
      })
        .then((res) => res.json())
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
