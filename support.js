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

    // Add Ticket Form Submission
    $('#addTicketForm').submit(function(e) {
        e.preventDefault();
        var customerType = $('#ticketCustomerType').val();
        var issue = $('#ticketIssue').val();
        var priority = $('#ticketPriority').val();
        alert('Ticket created: ' + customerType + ', ' + issue + ', Priority: ' + priority);
        $('#addTicketModal').modal('hide');
        $('#addTicketForm')[0].reset();
    });

    // Resolve buttons
    $('button:contains("Resolve")').click(function() {
        if (confirm('Are you sure you want to resolve this ticket?')) {
            alert('Ticket resolved!');
        }
    });

    // Update buttons
    $('button:contains("Update")').click(function() {
        alert('Update ticket feature coming soon!');
    });

    // View buttons
    $('button:contains("View")').click(function() {
        alert('Viewing ticket details...');
    });
});
