$(document).ready(function() {
    // Check login status
    if (localStorage.getItem('loggedIn') === 'true') {
        var employeeName = localStorage.getItem('employeeName');
        $('#userBtn').text(employeeName);
    } else {
        window.location.href = 'login.html';
    }

    $('#logoutBtn').click(function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('employeeName');
        window.location.href = 'login.html';
    });

    $('#helpBtn').click(function() {
        alert('Help: Contact support at support@nestori.com');
    });

    // Add Property button
    $('button:contains("Add Property")').click(function() {
        alert('Adding new property...');
    });

    // Search button
    $('button:contains("Search")').click(function() {
        alert('Searching properties...');
    });

    // View All button
    $('button:contains("View All")').click(function() {
        alert('Viewing all properties...');
    });

    // Edit buttons
    $('button:contains("Edit")').click(function() {
        alert('Editing property...');
    });

    // Delete buttons
    $('button:contains("Delete")').click(function() {
        if (confirm('Are you sure you want to delete this property?')) {
            alert('Property deleted.');
        }
    });
});
