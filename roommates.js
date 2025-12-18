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

    // View Matches button
    $('button:contains("View Matches")').click(function() {
        alert('Viewing roommate matches...');
    });

    // Manage Preferences button
    $('button:contains("Manage Preferences")').click(function() {
        alert('Managing roommate preferences...');
    });

    // Verify Profiles button
    $('button:contains("Verify Profiles")').click(function() {
        alert('Verifying roommate profiles...');
    });

    // Edit buttons
    $('button:contains("Edit")').click(function() {
        alert('Edit roommate match feature coming soon!');
    });

    // Unmatch buttons
    $('button:contains("Unmatch")').click(function() {
        if (confirm('Are you sure you want to unmatch this roommate pair?')) {
            alert('Roommate pair unmatched!');
        }
    });
});
