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

async function getEmails() {
    const response = await fetch('emails.json');
    const data = await response.json();
  
    return data;
  }
  
  getEmails().then(emails => {
    console.log(emails);
  
    const emailContainer = document.querySelector('#emailContainer');
    const searchInput = document.querySelector('#searchBar');
  
    searchInput.addEventListener('input', function(event) {
      const query = event.target.value.toLowerCase();
      const filteredEmails = emails.filter(email => {
        const senderName = email.senderName.toLowerCase();
        const subject = email.subject.toLowerCase();
        const snippet = email.snippet.toLowerCase();
        
        return senderName.includes(query) || subject.includes(query) || snippet.includes(query);
      });
  
      if (filteredEmails.length === 0) {
        emailContainer.innerHTML = '<p>No messages matched your search.</p>';
      } else {
        emailContainer.innerHTML = filteredEmails.map(email => `
          <div class="emailRow" onclick="toggleFontWeight(this)">
            <div class="emailRow__checkbox">
              <input type="checkbox" name="email"> 
            </div>
            <div class="emailRow__senderName">${email.senderName}</div>
            <div class="emailRow__sender" onclick="navigateToPage()">
              <div class="emailRow__subject">${email.subject}
                <span class="emailRow__snippet">${email.snippet}</span>
              </div>
            </div>
            <div>
              <span style="color: gray;" class="material-icons mark_chat_unread" onclick="toggleReadState(event)">mark_chat_unread</span>
              <span style="color: gray;" class="material-icons" onclick="deleteRow(this.closest('.emailRow'))">delete</span>
              <span style="color: gray;" class="material-icons" onclick="archiveRow(this.closest('.emailRow'))">archive</span>
            </div>
            <div class="emailRow__date">
              <div class="emailRow__dateText">${email.date}</div>
              <div class="emailRow__timeText">${email.time}</div>
            </div>
          </div>
        `).join('');
      }
    });
  });

  
  // Retrieve the existing emails from local storage
let emails = JSON.parse(localStorage.getItem('emails')) || [];

// Create a new email object
let newEmail = {
  sender: 'John Doe',
  subject: 'New Email Subject',
  snippet: 'New email snippet',
  date: 'Apr 9',
  time: '2:30 PM'
};

// Add the new email to the array
emails.push(newEmail);

// Store the updated emails array in local storage
localStorage.setItem('emails', JSON.stringify(emails));


const emailRows = document.querySelectorAll('.emailRow');

emailRows.forEach(emailRow => {
  const icons = emailRow.querySelectorAll('.material-icons');
  
  emailRow.addEventListener('mouseover', () => {
    icons.forEach(icon => {
      icon.style.display = 'inline-block';
    });
  });
  
  emailRow.addEventListener('mouseout', () => {
    icons.forEach(icon => {
      icon.style.display = 'none';
    });
  });
});
