
function searchAgain() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm) {
        alert(`Searching again for: ${searchTerm}`);
        // In a real app, you would trigger an API call here
        console.log(`Searching for user: ${searchTerm}`);
    } else {
        alert('Please enter a username or email to search');
    }
}

function goHome() {
    alert('Redirecting to home page');
    // window.location.href = '/';
    console.log('Navigating to home page');
}

function contactSupport() {
    alert('Opening support contact form');
    // window.location.href = '/support';
    console.log('Redirecting to support');
}

function suggestUsers() {
    alert('Showing suggested users');
    // window.location.href = '/users/suggested';
    console.log('Loading suggested users');
}

// Add event listener for Enter key in search box
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchAgain();
    }
});
