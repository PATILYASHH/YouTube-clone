// Example: Log a message when the search button is clicked
document.querySelector('.btn-outline-success').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    console.log('Search button clicked');
});
