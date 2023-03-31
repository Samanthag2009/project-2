//View all games in DB
const getGames = () =>
  fetch('/games', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  

  //like button
const whiteHeart = '\u{2661}';
const blackHeart = document.getElementById('get-likes').innerHTML;
// '\u{2665}';
const button = document.querySelector('button');
button.addEventListener('click', toggle);

function toggle() {
  const like = button.textContent;
  if(like==whiteHeart) {
    button.textContent = blackHeart;
  } else {
    button.textContent = whiteHeart;
  }
}

// MAY NEED ADDITIONAL FUNCTIONALITY lIKE LISTEN FOR window.location.pathname === '/games'
// Gets games from the db and renders them 
// const getAndRenderGames = () => getGames().then(renderAllGames);