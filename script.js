const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


//share Button
//const shareBtn = document.getElementById('shareBtn')

//shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  //if (navigator.share) {
    // Browser supports native share api
   // navigator.share({
   //   text: 'Please read this great article: ',
    //  url: 'https://www.google.com/'
   // }).then(() => {
   //   console.log('Thanks for sharing!');
   // })
   //   .catch((err) => console.error(err));
  //} else {
    // Fallback
 //   alert("The current browser does not support the share function. Please, manually share the link")
//  }
//)

//searchTable
const search = document.querySelector('.input-group input'),
    email_Row = document.querySelectorAll('.emailRow');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchemailRow);

function searchemailRow() {
  email_Row.forEach((row, i) => {
        let emailRow = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', emailRow.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('emailRow:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

$(document).ready(function() {
    $('.deleteButton').on('click', function() {
      $(this).closest('.emailRow').remove();
    });
  });
  

// Load the Gmail API client library
gapi.load('client', initClient);

function initClient() {
  // Initialize the API client with your API key and discovery document
  gapi.client.init({
    apiKey: '449454008110-maiq16cegur89mnsj3s2m3rjcjh06bp6.apps.googleusercontent.com',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
  }).then(() => {
    // Get the search form element
    const searchForm = document.getElementById('search-form');
    
    // Add a form submit event listener
    searchForm.addEventListener('search', async (event) => {
      event.preventDefault(); // prevent the form from reloading the page
      
      // Get the search query from the input field
      const searchInput = document.getElementById('search-input');
      const query = searchInput.value;
      
      // Call the Gmail API to search for emails
      const response = await gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': query
      });
      
      // Parse the search results and display them
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = response.result.messages.map(message => `
        <div>
          <strong>${message.id}</strong>
          <br>
          From: ${message.payload.headers.find(header => header.name === 'From').value}
          <br>
          Subject: ${message.payload.headers.find(header => header.name === 'Subject').value}
        </div>
      `).join('');
    });
  });
}

