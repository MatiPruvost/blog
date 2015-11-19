$(function() {
  var window_ = $(window).height();
  var body = $("body").height();
  if(window_ < body){
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 10) {
        $(".header").addClass('smaller');
        $("#content").addClass('smaller-content');
        var headerHeight = $('.header').height();
        var headerMarginBottom = parseInt($(".header").css("margin-bottom"),10);
        var headerMarginTop = parseInt($(".header").css("margin-top"),10);
        var contentMarginTop = headerHeight + headerMarginBottom;
        $("#content").css("margin-top", contentMarginTop+"px");
      } else {
        $(".header").removeClass("smaller");
        $("#content").removeClass("smaller-content");
        $("#content").css("margin-top", "inherit");
      }
    })
  }
});