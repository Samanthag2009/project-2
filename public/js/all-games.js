//View all games in DB
const getGames = () =>
  fetch('/games', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

// MAY NEED ADDITIONAL FUNCTIONALITY lIKE LISTEN FOR window.location.pathname === '/games'
// Gets games from the db and renders them 
// const getAndRenderGames = () => getGames().then(renderAllGames);