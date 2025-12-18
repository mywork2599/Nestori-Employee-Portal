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

    // Upload button
    $('button:contains("Upload")').click(function() {
        alert('Upload document functionality...');
    });

    // Search button
    $('button:contains("Search")').click(function() {
        alert('Search documents functionality...');
    });

    // View Recent button
    $('button:contains("View Recent")').click(function() {
        alert('Viewing recent documents...');
    });

    // Download buttons
    $('button:contains("Download")').click(function() {
        alert('Downloading document...');
    });

    // View buttons
    $('button:contains("View")').click(function() {
        alert('Viewing document...');
    });
});
