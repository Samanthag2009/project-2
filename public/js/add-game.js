const { v4: uuidv4 } = require('uuid');

// Re-wrote as async/await function
async function newGameForm(event) {
  event.preventDefault();

  // get values from input boxes
  let title = document.querySelector('#game-title').value;
  let cover = document.querySelector('#cover-link').value;
  let genre = document.querySelector('#genre').value;
  let description = document.querySelector('#description').value;
  let rating = document.querySelector('#rating').value;
  let playStatus = document.querySelector('#play-status').value; 

  // Create an object with the game info
  const newGameObj = {
    id: uuidv4(),
    title,
    cover,
    genre,
    description,
    rating,
    playStatus
  };

  // Stringify new game instance to save it
  const newGameInstance = await fetch('api/all-games', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGameObj),
  })

  // If new game is added correctly (res 200 ok), load page to view the created note by it's id
  if (newGameInstance.ok) {
    document.location.replace(`/view-game/${newGameObj.id}`)
  }else {
    alert(newGameInstance.statusText);
  }

}
  // Call async function when form is submited
  document.querySelector('#new-game-form').addEventListener('submit', newGameForm);

// Validate all imgs user tries to upload
function imgFileValidation() {
    var imgFile = document.getElementById('cover-file');
     
    var filePath = imgFile.value;
 
    // Allowing file type
    var allowedFileTypes = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
    // Handle invalid file types
    if (!allowedFileTypes.exec(filePath)) {
        alert('Invalid file type');
        imgFile.value = '';
        return false;
    }
    else
    {
     
        // Image preview
        if (imgFile.files && imgFile.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(
                    'imagePreview').innerHTML =
                    '<img src="' + e.target.result
                    + '"/>';
            };
             
            reader.readAsDataURL(imgFile.files[0]);
        }
    }
}

imgFileValidation();