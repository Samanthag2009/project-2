const commentForm = document.getElementById('comment-form');
const commentButton = document.getElementById('comment-btn');

commentButton.addEventListener('click', function(event) {
    event.preventDefault();

   const gameId = document.querySelector('input[name="game-id"]').value;
   const comment = document.querySelector('textarea[name="comment-string"]').value;

   const newComment = {
    game: gameId,
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















