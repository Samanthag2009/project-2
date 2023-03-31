const commentForm = document.getElementById('comment-form');
const commentButton = document.getElementById('comment-btn');
const comment = document.getElementById("msg");

// commentButton.addEventListener('click', function(event) {
//     event.preventDefault();

//    const gameId = document.querySelector('input[name="game-id"]').value;
//    const comment = document.querySelector('textarea[name="comment-string"]').value;

//    const newComment = {
//     game: gameId,
//     comment: comment
//    };


//    fetch('api/game-comments', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newComment),
//   })
//     .then((res) => res.json())
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

function saveComment() {
  // Save related form data as an object
  const commentText = {
    comment: comment.value.trim()
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("commentText", JSON.stringify(commentText));
}

function renderComment() {
  // Use JSON.parse() to convert text to JavaScript object
  const newComment = JSON.parse(localStorage.getItem("commentText"));
  // Check if data is returned, if not exit out of the function
  if (newComment !== null) {
  document.getElementById("saved-comment").innerHTML = commentText.comment;
  } else {
    return;
  }
}

saveButton.addEventListener("submit", function(event) {
  event.preventDefault();
  saveComment();
  renderComment();
  });
  
  // The init() function fires when the page is loaded 
  function init() {
    // When the init function is executed, the code inside render comment function will also execute
    renderComment();
  }
  init();

//RENDER IN COMMENT CONTAINER









