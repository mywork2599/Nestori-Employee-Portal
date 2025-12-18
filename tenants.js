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

    // Add Tenant Form Submission
    $('#addTenantForm').submit(function(e) {
        e.preventDefault();
        var name = $('#tenantName').val();
        var email = $('#tenantEmail').val();
        var phone = $('#tenantPhone').val();
        var property = $('#tenantProperty').val();
        alert('Tenant added: ' + name + ', ' + email + ', ' + phone + ', Property: ' + property);
        $('#addTenantModal').modal('hide');
        $('#addTenantForm')[0].reset();
    });

    // Edit buttons
    $('button:contains("Edit")').click(function() {
        alert('Edit tenant feature coming soon!');
    });

    // Delete buttons
    $('button:contains("Delete")').click(function() {
        if (confirm('Are you sure you want to delete this tenant?')) {
            alert('Tenant deleted!');
        }
    });
});
