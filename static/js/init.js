$(document).ready(function() {
    var $body = $(document.body);
    var $nav_box = $('.navigation-box').first();
    var $nav = $nav_box.find('.main-navigation').first();
    var $sticky_nav = $('.sticky-nav').first();
    var $doc = $(document);
    var sticky_nav_visible = false;
    var timer = null;
    var transitioning = false;
    var content_offsets = [];

    $sticky_nav.find('.sticky-content').html($nav_box.html());
    $sticky_nav.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
        sticky_nav_visible = ($sticky_nav.css('top') == '0px');
        if (sticky_nav_visible) {
            $nav.addClass('inactive');
        }
        transitioning = false;
        clearTimeout(timer);
        timer = null;
    });

    $sticky_nav.find('li a').each(function(idx, anchor) {
        var content_id = $(anchor).attr('href');
        var $content_element = $(content_id);
        var content_offset = Math.floor($content_element.offset().top);
        content_offsets.push({ 'id': content_id, 'element': $content_element, 'offset': content_offset });
    });

    $doc.scroll(function(event) {
        var new_offset = $(this).scrollTop();

        // animate bg image
        var bg_offset = Math.floor(new_offset / 4, 0);
        $body.css('background-position', '0px ' + bg_offset + 'px');

        // handle the scroll-spy
        var active_id = false;
        $.each(content_offsets, function(idx, content_offset) {
            if (new_offset > content_offset.offset - 100) {
                active_id = content_offset.id;
            }
        });
        if (new_offset + $(window).height() >= $doc.height()) {
            active_id = content_offsets[content_offsets.length - 1].id;
        }
        $sticky_nav.find('li a').each(function(idx, nav_item) {
          $nav_item = $(nav_item);
          if ($nav_item.attr('href') === active_id) {
              $nav_item.addClass('active');
          } else {
              $nav_item.removeClass('active');
          }
        });

        // handle displaying the sticky navigation
        if (timer) {
          return;
        }
        if (new_offset > $nav.offset().top) {
            if (!sticky_nav_visible && !timer) {
              timer = setTimeout(function(){
                  $sticky_nav.addClass('active');
              }, 20);
            }
        } else if (sticky_nav_visible && !timer) {
            timer = setTimeout(function(){
                $sticky_nav.removeClass('active');
                $nav.removeClass('inactive');
            }, 20);
        }
    });
});
