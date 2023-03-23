//View all games in DB
const getGames = () =>
  fetch('/api/games', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

