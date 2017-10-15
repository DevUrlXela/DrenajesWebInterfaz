jQuery(document).ready(function() {

    ////////////////////////
    // WYSIWYG /////////////
    ////////////////////////
    if (jQuery.fn.wysiwyg) {
        function initToolbarBootstrapBindings() {
            var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier', 'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times', 'Times New Roman', 'Verdana'],
            fontTarget = jQuery('.btn-toolbar [title=Font]').siblings('.dropdown-menu');

            jQuery.each(fonts, function (idx, fontName) {
                fontTarget.append(jQuery('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'+fontName + '</a></li>'));
            });

            jQuery('.btn-toolbar a[title]').tooltip({container:'body'});

            jQuery('.btn-toolbar .dropdown-menu input').click(function() {return false;})
                .change(function () { jQuery(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle'); })
                .keydown('esc', function () { this.value=''; jQuery(this).change(); });

            jQuery('.btn-toolbar [data-role=magic-overlay]').each(function () { 
                var overlay = jQuery(this);
                var target = jQuery(overlay.data('target')); 

                overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
            });

            if ("onwebkitspeechchange"  in document.createElement("input")) {
                var editorOffset = jQuery('.wysiwyg-textarea').offset();
                jQuery('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+jQuery('.wysiwyg-textarea').innerWidth()-35});
            } 
            else {
                $('#voiceBtn').hide();
            }
        };

        initToolbarBootstrapBindings();  
        jQuery('.wysiwyg-textarea').wysiwyg();
    }

    ////////////////////////////////
    // MULTIPLE SELECT /////////////
    ////////////////////////////////
    if (jQuery.fn.selectator) {
       jQuery('.multipleselect').selectator({
            labels: {
                search: 'Search here...'
            },
            showAllOptionsOnFocus: true
        });
        jQuery(window).resize(function() {
            jQuery('.multipleselect').selectator('destroy').selectator({
                labels: {
                    search: 'Search here...'
                },
                showAllOptionsOnFocus: true
            });
        })
    }

    ////////////////////////
    // MASKED INPUTS ///////
    ////////////////////////
    if (jQuery.fn.mask) {
        jQuery('input.masked-input').each(function () {
            var _t = jQuery(this);
            var _mask = _t.attr('masked-format');
            _t.mask(_mask);
        })
    }

    //////////////////////////
    // MULTIPLE SELECT ///////
    //////////////////////////
    if (jQuery.fn.multipleSelect) {
        jQuery('select.multiple-select').each(function () {
            var opts = {};
            var _t = jQuery(this);

            var _hasfilter = jQuery(this).attr('has-filter');
            if (_hasfilter == 'true') {
                opts['filter'] = true;
            }

            var _hasph = jQuery(this).attr('has-placeholder');
            if (_hasph !== undefined) {
                opts['placeholder'] = _hasph;
            }

            _t.multipleSelect(opts);
        })
    }

    //////////////////////////
    // TAG FIELD /////////////
    //////////////////////////
    if (jQuery.fn.tags) {
        jQuery('.tag-list').each(function() {
            var opts = {};
            var _t = jQuery(this);

            var _tags = jQuery(this).attr('tags');
            if (_tags !== undefined) {
                opts['tagData'] = _tags.split(',');
            }

            _t.tags(opts);
        });
    }

    //////////////////////////////
    // SIMPLE COLOR PICKER ///////
    //////////////////////////////
    if (jQuery.fn.simplecolorpicker) {
        jQuery('select.simple-colorpicker').simplecolorpicker();
    }

    ///////////////////////////////
    // COMPLEX COLOR PICKER ///////
    ///////////////////////////////
    if (jQuery.fn.colorpicker) {
        jQuery('.complex-colorpicker').colorpicker();
    }

    ///////////////////////////////
    // TIME PICKER ////////////////
    ///////////////////////////////
    if (jQuery.fn.timepicker) {
        jQuery('.timepicker').timepicker({
            minuteStep: 1,
            showInputs: false,
            disableFocus: true
        });
    }

    ///////////////////////////////
    // DATE PICKER ////////////////
    ///////////////////////////////
    if (jQuery.fn.datepicker) {
        jQuery('.datepicker, .datepicker-inline').datepicker({ todayHighlight: true });
    }

    ///////////////////////////////
    // DATE RANGE PICKER //////////
    ///////////////////////////////
    if (jQuery.fn.daterangepicker) {
        jQuery('.daterangefinder').each(function() {
            var _t = jQuery(this);

            _t.daterangepicker({
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Last 7 Days': [moment().subtract('days', 6), moment()],
                    'Last 30 Days': [moment().subtract('days', 29), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                },
                startDate: moment().subtract('days', 29),
                endDate: moment()
                },
                function(start, end) {
                    _t.find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                }
            );
        });
    }

    ///////////////////////////////
    // SPINNER ////////////////////
    ///////////////////////////////
    if (jQuery.fn.TouchSpin) {
        jQuery('.spinner').TouchSpin();
        jQuery('.spinner-vertical').TouchSpin({
          verticalbuttons: true
        });
    }

    ///////////////////////////////
    // SLIDER /////////////////////
    ///////////////////////////////
    if (jQuery.fn.ionRangeSlider) {
        jQuery('#slider_example_1').ionRangeSlider();
        jQuery('#slider_example_2').ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: "$"
        });
        jQuery('#slider_example_3').ionRangeSlider({
            type: "double",
            grid: true,
            from: 1,
            to: 5,
            values: [0, 10, 100, 1000, 10000, 100000, 1000000]
        });
        jQuery('#slider_example_4').ionRangeSlider({
            grid: true,
            from: 5,
            values: [
                "zero", "one",
                "two", "three",
                "four", "five",
                "six", "seven",
                "eight", "nine",
                "ten"
            ]
        });
    }


    ///////////////////////////////
    // PASSWORD ///////////////////
    ///////////////////////////////
    jQuery('#password').password().on('show.bs.password', function(e) {
        jQuery('#eventLog').text('On show event');
        jQuery('#methods').prop('checked', true);
    }).on('hide.bs.password', function(e) {
                jQuery('#eventLog').text('On hide event');
                jQuery('#methods').prop('checked', false);
            });
    jQuery('#methods').click(function() {
        jQuery('#password').password('toggle');
    });

});