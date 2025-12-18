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

    // Update Profile Form Submission
    $('form').first().submit(function(e) {
        e.preventDefault();
        var name = $('#employeeName').val();
        var email = $('#employeeEmail').val();
        var phone = $('#employeePhone').val();
        alert('Profile updated: ' + name + ', ' + email + ', ' + phone);
    });

    // Change Password Form Submission
    $('form').eq(1).submit(function(e) {
        e.preventDefault();
        var currentPassword = $('#currentPassword').val();
        var newPassword = $('#newPassword').val();
        var confirmPassword = $('#confirmPassword').val();
        if (newPassword === confirmPassword) {
            alert('Password changed successfully!');
        } else {
            alert('Passwords do not match!');
        }
    });

    // Save Preferences Form Submission
    $('form').last().submit(function(e) {
        e.preventDefault();
        var theme = $('#theme').val();
        var language = $('#language').val();
        var notifications = $('#notifications').is(':checked');
        alert('Preferences saved: Theme: ' + theme + ', Language: ' + language + ', Notifications: ' + notifications);
    });
});
