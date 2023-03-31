//View all games in DB
const getGames = () =>
  fetch('/games', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  

  //Like Button / Counter

  //variables
const whiteHeart = '\u{2661}';
let blackHeart = document.getElementById('get-likes').innerHTML + ' likes ' +'\u{2665}';
const button = document.querySelector('button');
button.addEventListener('click', toggle);

//Increment/Decrement
//select current total count
let likeCount = document.getElementById("get-likes").innerHTML;
console.log(likeCount)

//track counting and display
let count = 0;
likeCount.innerHTML = count;
console.log(count);
//increment counter
const handleIncrement = () => {
  likeCount++;
}
//decrement counter
const handleDecrement = () => {
  likeCount--;
}
//click event function
const like = button.textContent;
  //like button
  function toggle() {
    const like = button.textContent;
    if(like==whiteHeart) {
      button.textContent = blackHeart;
      handleIncrement();
      button.textContent = blackHeart;
    } else {
      button.textContent = whiteHeart;
      handleDecrement();
    }
    console.log(likeCount);
  }

// MAY NEED ADDITIONAL FUNCTIONALITY lIKE LISTEN FOR window.location.pathname === '/games'
// Gets games from the db and renders them 
// const getAndRenderGames = () => getGames().then(renderAllGames);