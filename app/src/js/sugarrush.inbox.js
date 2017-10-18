jQuery(document).ready(function() {

    //////////////////////////////
    // INBOX CHECKBOX MENU ///////
    //////////////////////////////
    jQuery('.checkbox-menu.all').click(function(e) {
        e.preventDefault()
        jQuery('.messages-table input').prop('checked', true);
    });
    jQuery('.checkbox-menu.none').click(function(e) {
        e.preventDefault();
        jQuery('.messages-table input').prop('checked', false);
    });
    jQuery('.checkbox-menu.read').click(function(e) {
        e.preventDefault();
        jQuery('.messages-table input').prop('checked', false);
        jQuery('.messages-table tr:not(.unread) input').prop('checked', true);
    });
    jQuery('.checkbox-menu.unread').click(function(e) {
        e.preventDefault();
        jQuery('.messages-table input').prop('checked', false);
        jQuery('.messages-table tr.unread input').prop('checked', true);
    });
    jQuery('.checkbox-menu.starred').click(function(e) {
        e.preventDefault();
        jQuery('.messages-table input').prop('checked', false);
        jQuery('.messages-table tr.starred input').prop('checked', true);
    });
    jQuery('.checkbox-menu.unstarred').click(function(e) {
        e.preventDefault();
        jQuery('.messages-table input').prop('checked', false);
        jQuery('.messages-table tr:not(.starred) input').prop('checked', true);
    });

    jQuery('.messages-table .ti-star').click(function() {
        jQuery(this).closest('tr').toggleClass('starred');
    });

});
