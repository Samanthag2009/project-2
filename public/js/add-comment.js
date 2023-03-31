const commentForm = document.getElementById('comment-form');
const commentButton = document.getElementById('new-comment-btn');

  async function newCommentForm (event) {
    event.preventDefault();

    //game id is /# at very end of url
   const game_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
   ];
   const comment_username = document.querySelector('input[name="user"]').value.trim();
   const comment_text = document.querySelector('textarea[name="comment-string"]').value.trim();
   
   console.log(comment_username, comment_text)

   const newComment = await fetch('/api/post/:id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id,
        comment_username,
        comment_text
      }),
    })  

    // If post is status 200, reload page to show new comment
    if (newComment.ok) {
      document.location.reload();
      console.log(newComment)
    } else {
      alert(newComment.statusText)
    }
}

commentButton.addEventListener('click', newCommentForm) 