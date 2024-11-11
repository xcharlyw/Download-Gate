document.getElementById('download-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    const emailInput = document.getElementById('email');
  
    if (emailInput.value) {
      document.getElementById('download-link').style.display = 'block';
      emailInput.value = ''; // Clear the email field
    }
  });
  