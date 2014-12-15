$(document).ready(function() {
  var $body = $(document.body);
  var $nav_box = $('.navigation-box').first();
  var $nav = $nav_box.find('.main-navigation').first();
  var $sticky_nav = $('.sticky-nav').first();
  var $doc = $(document);
  var sticky_nav_visible = false;
  var timer = null;
  var transitioning = false;

  $sticky_nav.html('<div class="sticky-content large-12 columns text-center">'+$nav_box.html()+'</div>');
  $sticky_nav.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
      sticky_nav_visible = ($sticky_nav.css('top') == '0px');
      transitioning = false;
      clearTimeout(timer);
      timer = null;
  });

  $doc.scroll(function(event) {
    var new_offset = Math.floor($(this).scrollTop() / 4, 0);
    $body.css('background-position', '0px ' + new_offset + 'px');
    if (timer) {
      return;
    }
    if ($(this).scrollTop() > $nav.offset().top + $nav.height() - 25) {
        if (!sticky_nav_visible && !timer) {
          timer = setTimeout(function(){
              $sticky_nav.addClass('active');
          }, 100);
        }
    } else if (sticky_nav_visible && !timer) {
        timer = setTimeout(function(){
            $sticky_nav.removeClass('active');
        }, 100);
    }
  });
});
