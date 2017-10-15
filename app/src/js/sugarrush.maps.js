jQuery(document).ready(function() {

    // MAP DEMO
    if (jQuery.fn.vectorMap) {
        jQuery('#world-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: "#4e4e4e",
            panOnDrag: true,
            focusOn: {
              x: 0.5,
              y: 0.5,
              scale: 1,
              animate: true
            },
            regionStyle: {
                initial: {
                    fill: '#5479aa'
                },
                hover: {
                    fill: "#edb758"
                }
            },
            hoverColor: false,
            hoverOpacity: 0.5
        });
    

        jQuery('#argentina-map').vectorMap({
            map: 'ar_mill_en',
            backgroundColor: "#f8f8f8",
            panOnDrag: true,
            focusOn: {
              x: 0.5,
              y: 0.5,
              scale: 1,
              animate: true
            },
            regionStyle: {
                initial: {
                    fill: '#bd5151'
                },
                hover: {
                    fill: "#5479aa"
                }
            },
            hoverColor: false,
            hoverOpacity: 0.5
        });

        jQuery('#argentina-map-widget').vectorMap({
            map: 'ar_mill_en',
            backgroundColor: "#fff",
            panOnDrag: true,
            focusOn: {
              x: 0.5,
              y: 0.5,
              scale: 1,
              animate: true
            },
            regionStyle: {
                initial: {
                    fill: '#bd5151'
                },
                hover: {
                    fill: "#5479aa"
                }
            },
            hoverColor: false,
            hoverOpacity: 0.5
        });

        

    }
    
});