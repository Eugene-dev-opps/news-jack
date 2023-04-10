//star
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
   star.addEventListener('click', toggleStar);
});

function toggleStar() {
   this.classList.toggle('selected');
}

function selectAllEmailRows() {
  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  const emailCheckboxes = document.querySelectorAll('.emailRow__checkbox input[type="checkbox"]');
  
  for (let i = 0; i < emailCheckboxes.length; i++) {
    emailCheckboxes[i].checked = selectAllCheckbox.checked;
  }
}


//next page navivigation
function navigateToPage() {
    const emailRows = document.querySelectorAll('.emailRow:not(.exclude)');
    let emailRowHTML = '';
    emailRows.forEach(row => emailRowHTML += row.outerHTML);
    const nextPageURL = `Mail.html?emailRow=${encodeURIComponent(emailRowHTML)}`;
    window.location.href = nextPageURL;

    // Get the email row element that was clicked
  var emailRow = event.target.closest('.emailRow');

  // Add the "emailRow--clicked" class to the clicked email row
  emailRow.classList.add('emailRow--clicked');
  }

 function toggleReadState(event) {
  const emailRow = event.target.closest('.emailRow');
  emailRow.classList.toggle('unread');
  const markIcon = emailRow.querySelector('.mark_chat_unread');
  markIcon.innerHTML = emailRow.classList.contains('unread') ? 'mark_chat_read' : 'mark_chat_unread';
  const emailSubject = emailRow.querySelector('.emailRow__subject');
  emailSubject.style.fontWeight = emailRow.classList.contains('unread') ? 'normal' : 'bold';
}


function toggleReadState(event) {
  const emailRow = event.target.closest('.emailRow');
  emailRow.classList.toggle('unread');
  const markIcon = emailRow.querySelector('.mark_chat_unread');
  markIcon.innerHTML = emailRow.classList.contains('unread') ? 'mark_chat_read' : 'mark_chat_unread';
  const emailSubject = emailRow.querySelector('.emailRow__subject');
  emailSubject.style.fontWeight = emailRow.classList.contains('unread') ? 'normal' : 'bold';
}




