// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for your message, ' + name + '! We will get back to you soon.');
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill in all fields before submitting.');
    }
  });
// Get references to elements
const toggleBtn = document.getElementById('toggle-btn');
const navbarLinks = document.getElementById('nav-links');

// Toggle the 'active' class on click
toggleBtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
  