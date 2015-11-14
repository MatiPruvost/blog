$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".header").addClass('smaller');
      $("#content").addClass('smaller-content');
      /*var headerHeight = $('.header').height();
      console.log(headerHeight)
      $(".smaller-content").css("margin-top", headerHeight+"px");*/
    } else {
      $(".header").removeClass("smaller");
      $("#content").removeClass("smaller-content");
      /*$(".smaller-content").css("margin-top", "inherit");*/
    }
  });
});