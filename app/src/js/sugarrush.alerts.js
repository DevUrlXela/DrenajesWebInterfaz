jQuery(document).ready(function() {

    // Delete button / sweet alerts
    jQuery('.delete-btn').click(function (e) {
        e.preventDefault();
        swal(
            {
                title: "Are you sure?",   
                text: "You will not be able to recover this user!",   
                type: "warning",   
                showCancelButton: true,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "Yes, delete it!",   
                closeOnConfirm: false
            }, 
            function() {  
                swal("Deleted!", "The user has been deleted.", "success"); 
            }
        );
    });

    // Alert demos
    jQuery('.alert-demo-1').on('click', function(e){
        e.preventDefault();

        jQuery.notify({
            // options
            message: 'Hello World' 
        },{
            // settings
            type: 'primary'
        });
    });

    jQuery('.alert-demo-2').on('click', function(e){
        e.preventDefault();
        
        jQuery.notify({
            // options
            message: 'Hello World' 
        },{
            // settings
            type: 'danger'
        });
    });

    jQuery('.alert-demo-3').on('click', function(e){
        e.preventDefault();
        
        jQuery.notify({
            // options
            message: 'Hello World' 
        },{
            // settings
            type: 'info'
        });
    });

    jQuery('.alert-demo-4').on('click', function(e){
        e.preventDefault();
        
        jQuery.notify({
            // options
            message: 'Hello World' 
        },{
            // settings
            type: 'success'
        });
    });

    jQuery('.alert-demo-5').on('click', function(e){
        e.preventDefault();
        
        jQuery.notify({
            // options
            message: 'Hello World' 
        },{
            // settings
            type: 'warning'
        });
    });

    jQuery('.alert-demo-6').on('click', function(e){
        e.preventDefault();
        swal("Here's a message!")
    });

    jQuery('.alert-demo-7').on('click', function(e){
        e.preventDefault();
        swal("Here's a message!", "It's pretty, isn't it?")
    });

    jQuery('.alert-demo-8').on('click', function(e){
        e.preventDefault();
        swal("Good job!", "You clicked the button!", "success")
    });

    jQuery('.alert-demo-9').on('click', function(e) {
        e.preventDefault();
        swal({   title: "Are you sure?",   text: "You will not be able to recover this imaginary file!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   cancelButtonText: "No, cancel plx!",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {     swal("Deleted!", "Your imaginary file has been deleted.", "success");   } else {     swal("Cancelled", "Your imaginary file is safe :)", "error");   } });
    });

    jQuery('.alert-demo-10').on('click', function(e) {
        e.preventDefault();
        swal({   
            title: "An input!",   
            text: "Write something interesting:",   
            type: "input",   
            showCancelButton: true,   
            closeOnConfirm: false,   
            animation: "slide-from-top" 
        }, 
            function(inputValue){   
                if (inputValue === false) {
                    return false;
                }      
                if (inputValue === "") {     
                    swal.showInputError("You need to write something!");     
                    return false;   
                }      
                swal("Nice!", "You wrote: " + inputValue, "success");   
            } 
        );
    });

});