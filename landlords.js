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

    // Add Landlord Form Submission
    $('#addLandlordForm').submit(function(e) {
        e.preventDefault();
        var name = $('#landlordName').val();
        var email = $('#landlordEmail').val();
        var phone = $('#landlordPhone').val();
        alert('Landlord added: ' + name + ', ' + email + ', ' + phone);
        $('#addLandlordModal').modal('hide');
        $('#addLandlordForm')[0].reset();
    });

    // Edit buttons
    $('button:contains("Edit")').click(function() {
        alert('Edit landlord feature coming soon!');
    });

    // Delete buttons
    $('button:contains("Delete")').click(function() {
        if (confirm('Are you sure you want to delete this landlord?')) {
            alert('Landlord deleted!');
        }
    });
});
