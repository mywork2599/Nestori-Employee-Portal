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

    // View Reports button
    $('button:contains("View Reports")').click(function() {
        alert('Viewing revenue reports...');
    });

    // View Analytics button
    $('button:contains("View Analytics")').click(function() {
        alert('Viewing user engagement analytics...');
    });

    // Download buttons
    $('button:contains("Download")').click(function() {
        alert('Downloading report...');
    });

    // View buttons
    $('button:contains("View")').click(function() {
        alert('Viewing detailed report...');
    });
});
