//star
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
   star.addEventListener('click', toggleStar);
});

function toggleStar() {
   this.classList.toggle('selected');
}

//next page navivigation
function navigateToPage() {
    const emailRows = document.querySelectorAll('.emailRow:not(.exclude)');
    let emailRowHTML = '';
    emailRows.forEach(row => emailRowHTML += row.outerHTML);
    const nextPageURL = `Mail.html?emailRow=${encodeURIComponent(emailRowHTML)}`;
    window.location.href = nextPageURL;
  }

//ARCHIVE
  function archiveEmail() {
   // Get the checkbox element in the current email row
   const checkbox = document.querySelector('.emailRow__options input[type="checkbox"]');
 
   // Check if the checkbox is checked
   if (checkbox.checked) {
     // If checked, move the email to the archive folder
     // You can replace this with your own implementation to archive the email
     console.log("Archiving email...");
 
     // Hide the email row from the UI
     const emailRow = document.getElementById('email_Row');
     emailRow.style.display = 'none';
   } else {
     // If not checked, show an error message
     alert("Please select the email(s) you want to archive.");
   }
 }
 



  
  

