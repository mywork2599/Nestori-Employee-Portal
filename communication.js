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

    // Open Team Chat button
    $('button:contains("Open Team Chat")').click(function() {
        alert('Opening team chat...');
    });

    // Create Announcement button
    $('button:contains("Create Announcement")').click(function() {
        alert('Creating announcement...');
    });

    // View Notifications button
    $('button:contains("View Notifications")').click(function() {
        alert('Viewing notifications...');
    });

    // View buttons
    $('button:contains("View")').click(function() {
        alert('Viewing message...');
    });
});
