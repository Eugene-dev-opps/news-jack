// get all the subscribe/unsubscribe buttons
const buttons = document.querySelectorAll('.button');

// loop through each button and add an event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const channel = button.parentElement;
    if (channel.classList.contains('subscribed')) {
      // user is already subscribed, so unsubscribe
      channel.classList.remove('subscribed');
      button.textContent = 'Subscribe';
    } else {
      // user is not subscribed, so subscribe
      channel.classList.add('subscribed');
      button.textContent = 'Unsubscribe';
    }
  });
});

const channelList = document.getElementById('channel-list');

// Fetch emails from the email API
function fetchEmails(channelId) {
  // Replace with your email API endpoint and authentication
  const endpoint = `https://api.emailservice.com/channels/${channelId}/emails`;
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer your_api_key'
    }
  };

  fetch(endpoint, options)
    .then(response => response.json())
    .then(emails => {
      // Add the emails to the channel list
      const channelItem = document.getElementById(`channel-${channelId}`);
      const emailList = document.createElement('ul');
      emails.forEach(email => {
        const emailItem = document.createElement('li');
        emailItem.innerText = email.subject;
        emailList.appendChild(emailItem);
      });
      channelItem.appendChild(emailList);
    })
    .catch(error => {
      console.error(error);
    });
}

// Add a click event listener to each channel item
const channelItems = document.querySelectorAll('.channel-item');
channelItems.forEach(channelItem => {
  const channelId = channelItem.dataset.channelId;
  channelItem.addEventListener('click', () => {
    fetchEmails(channelId);
  });
});

const toggleSwitch = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

toggleSwitch.addEventListener('change', function() {
  if(this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }    
});
