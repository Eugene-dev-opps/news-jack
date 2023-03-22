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
  

  function getSubscriberCount() {
    const channelName = document.getElementById("channelInput").value;
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${channelName}&key=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => {
        const subscriberCount = data.items[0].statistics.subscriberCount;
        document.getElementById("subscriberCount").innerHTML = `Subscriber Count: ${subscriberCount}`;
      })
      .catch(error => console.error(error));
  }
  