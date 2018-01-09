// sticky nav js hare
var  mn = $(".navbar");
    mns = "bg-color";
    hdr = $("#slider").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});