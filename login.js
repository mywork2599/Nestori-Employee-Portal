$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        var employeeId = $('#employeeId').val();
        var password = $('#password').val();
        // Dummy authentication
        if (employeeId === '2599' && password === '2599') {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('employeeName', 'Raj Varma');
            window.location.href = 'index.html';
        } else {
            alert('Invalid credentials');
        }
    });
});
