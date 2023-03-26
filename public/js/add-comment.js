const commentForm = document.getElementById('');
const commentButton = document.getElementById('');

commentButton.addEventListener('click', function(event) {
    event.preventDefault();

   const game = document.querySelector('').value;
   const comment = document.querySelector('').value;

   const newComment = {
    game: game,
    comment: comment
   };


   fetch('api/game-comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newComment),
  })
    .then((res) => res.json())
})
.catch((error) => {
  console.error('Error:', error);
});















