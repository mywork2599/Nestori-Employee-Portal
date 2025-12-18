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

    // Landlord Management buttons
    $('button:contains("View Landlords")').click(function() {
        window.location.href = 'landlords.html';
    });

    $('button:contains("Add New Landlord")').click(function() {
        alert('Add New Landlord feature coming soon!');
    });

    // Property Oversight buttons
    $('button:contains("Manage Properties")').click(function() {
        window.location.href = 'properties.html';
    });

    // Tenant Management buttons
    $('button:contains("View Tenants")').click(function() {
        window.location.href = 'tenants.html';
    });

    $('button:contains("Add New Tenant")').click(function() {
        alert('Add New Tenant feature coming soon!');
    });

    // Lease Administration buttons
    $('button:contains("Administer Leases")').click(function() {
        window.location.href = 'leases.html';
    });

    // Roommate Matching buttons
    $('button:contains("View Matches")').click(function() {
        window.location.href = 'roommates.html';
    });

    $('button:contains("Manage Preferences")').click(function() {
        alert('Manage Preferences feature coming soon!');
    });

    $('button:contains("Verify Profiles")').click(function() {
        alert('Verify Profiles feature coming soon!');
    });

    // Customer Support buttons
    $('button:contains("Resolve")').click(function() {
        alert('Ticket resolved!');
    });

    $('button:contains("Update")').click(function() {
        alert('Ticket updated!');
    });

    $('button:contains("View")').click(function() {
        alert('Viewing ticket details...');
    });

    $('button:contains("View All Tickets")').click(function() {
        window.location.href = 'support.html';
    });

    // Communication Tools buttons
    $('button:contains("Open Team Chat")').click(function() {
        window.location.href = 'communication.html';
    });

    $('button:contains("Create Announcement")').click(function() {
        alert('Create Announcement feature coming soon!');
    });

    $('button:contains("View Notifications")').click(function() {
        alert('Viewing notifications...');
    });

    // Analytics buttons
    $('button:contains("View Reports")').click(function() {
        window.location.href = 'analytics.html';
    });

    $('button:contains("View Analytics")').click(function() {
        window.location.href = 'analytics.html';
    });

    // Document Management buttons
    $('button:contains("Access Repository")').click(function() {
        window.location.href = 'documents.html';
    });

    $('button:contains("Upload Document")').click(function() {
        alert('Upload Document feature coming soon!');
    });

    // Employee Settings buttons
    $('button:contains("Edit Profile")').click(function() {
        window.location.href = 'settings.html';
    });

    $('button:contains("Permissions")').click(function() {
        alert('Permissions feature coming soon!');
    });
});
