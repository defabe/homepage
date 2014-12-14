$(document).ready(function() {
  var body = $(document.body);
  $(document).scroll(function(event) {
    var new_offset = Math.floor($(this).scrollTop() / 4, 0);
    body.css('background-position', '0px ' + new_offset + 'px');
  });
});
