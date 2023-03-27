let deleteGameBtn = document.querySelector('.delete-btn')

async function deleteGameById(event) {
    event.preventDefault();

    // delete by specific game id
    const deleteGame = await
      fetch(`/api/games/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
    });

    // If game is deleted correctly, return to all-games page to reload all games w/o the deleted one
    if (deleteGame.ok) {
        document.location.replace('/all-games')
    } else {
        alert(deleteGame.statusText)
    }

}

deleteGameBtn.addEventListener('click', deleteGameById);

// ADD DELETE USER FUNCTION 

// MODAL FOR DELETE USER
//get the button by id 
$("#clearBtn").click(function(){
  $("#clearModal").css("display", "block");
});

//when clicking anywhere outside of the window, the modal goes invisible
$(window).click(function(event){
  if(event.target == $("#clearModal")){
      $("#clearModal").css("display", "none");
  }
});

//when you click the "whoops" button, the modal disappears
$("#no").click(function(){
  $("#clearModal").css("display", "none")
})

//when you click the "Proceed" button, the modal disappears and the USER is deleted
$("#yes").click(function(event){
  event.preventDefault();
  // delete by specific user id
  const deleteUser = await
  fetch(`/api/user/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // If user is deleted correctly, return to about/login/homepage
  if (deleteUser.ok) {
      document.location.replace('/')
  } else {
      alert(deleteUser.statusText)
  }
})
