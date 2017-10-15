jQuery(document).ready(function() {

    ///////////////////
    // CALENDAR ///////
    ///////////////////
    if (jQuery.fn.fullCalendar) {
        jQuery('#calendar').fullCalendar({
            // put your options and callbacks here
            defaultDate: '2014-06-12',
                defaultView: 'month',
                eventLimit: true,
                editable: true,
                events: [
                    {
                        title: 'All Day Event',
                        start: '2014-06-01',
                        end: '2014-06-01',
                        className: 'event-warning'
                    },
                    {
                        title: 'Long Event',
                        start: '2014-06-07',
                        end: '2014-06-10',
                        className: 'event-success'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2014-06-09',
                        end: '2014-06-11'
                    },
                    {
                        id: 999,
                        title: 'Repeating Event',
                        start: '2014-06-16',
                        end: '2014-06-18'
                    },
                    {
                        title: 'Meeting',
                        start: '2014-06-12T10:30:00',
                        end: '2014-06-12T12:30:00',
                        className: 'event-danger'
                    },
                    {
                        title: 'Lunch',
                        start: '2014-06-12T12:00:00',
                        end: '2014-06-12T12:00:00'
                    },
                    {
                        title: 'Birthday Party',
                        start: '2014-06-13T07:00:00',
                        end: '2014-06-13T07:00:00'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: '2014-06-28',
                        className: 'event-info'
                    }
                ],
            droppable: true,
            drop: function(date) {
            },
            eventClick:  function(event, jsEvent, view) {
                jsEvent.preventDefault();
                jQuery('#modalTitle').html(event.title);
                jQuery('#modalBody').html(event.description);
                jQuery('#eventUrl').attr('href',event.url);
                jQuery('#fullCalModal').modal();
            }
        });
    }


    jQuery('.fc-toolbar').find('.fc-button-group').addClass('btn-group');
    jQuery('.fc-toolbar').find('.fc-button').addClass('btn btn-primary');
    jQuery('.fc-toolbar').find('.fc-prev-button').html($('<span />').attr('class', 'glyphicon glyphicon-chevron-left'));
    jQuery('.fc-toolbar').find('.fc-next-button').html($('<span />').attr('class', 'glyphicon glyphicon-chevron-right'));

    jQuery( ".draggable-event" ).draggable({
        revert: true,      // immediately snap back to original position
        revertDuration: 0  //
    });

});