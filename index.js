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

  
  

