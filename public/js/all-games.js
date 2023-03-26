//View all games in DB
const getGames = () =>
  fetch('/api/games', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

// MAY NEED ADDITIONAL FUNCTIONALITY lIKE LISTEN FOR window.location.pathname === '/games'
// Gets notes from the db and renders them to the sidebar
// const getAndRenderGames = () => getGames().then(renderAllGames);