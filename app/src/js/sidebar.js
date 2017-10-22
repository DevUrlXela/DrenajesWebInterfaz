//////////////////////////
  // SIDEBAR SUBMENU ///////
  //////////////////////////
jQuery('#sidebar .nav#main-nav > li > ul').each(function() {
  var _t = jQuery(this);
  var _li = _t.parent();
  var _a = _li.find('> a');

  _a.click(function(e) {
    e.preventDefault();

          var s_width = jQuery( window ).width();
          if ((s_width >= 768) && (!jQuery('body').hasClass('collapsed-sidebar')) ) {
              if (!_a.hasClass('active')) {
                  jQuery('#sidebar .nav a.active').removeClass('active').parent().find('> ul').slideToggle();
              }

        _a.toggleClass('active');
        _t.slideToggle();
          }
  })

      if (_t.find('.active_submenu').length > 0) {
          _a.click();
      }
});
