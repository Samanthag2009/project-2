const allGames = document.getElementsByClassName('view-btn');
//Event listener for click on view-btn
allGames
    .addEventListener('click', (event) => {
        //get request to all page
        get()
    })


// NEEDS to listen for click event on all-games page on class='view-btn' 
//to redirect to page to view a single note