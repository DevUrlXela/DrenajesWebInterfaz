jQuery(document).ready(function() {

    /////////////////////
    // DATATABLES ///////
    /////////////////////
    if (jQuery.fn.DataTable) {
        jQuery('table.datatable').DataTable();
        jQuery('.dataTables_wrapper .paginate_button').attr('href', '#').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
    }

});