$(function() {
  console.log('[uwin.js]');

  $("#main-nav li a.main-link").hover(function(){
      $("#main-nav li a.close").fadeIn();
      $("#main-nav li a.main-link").removeClass("active");
      $(this).addClass("active");
      $("#sub-link-bar").animate({
          height: "70px"
      });
      $(".sub-links").hide();
      $(this).siblings(".sub-links").fadeIn();
  });
  $("#main-nav li a.close").click(function(){
      $("#main-nav li a.main-link").removeClass("active");
      $(".sub-links").fadeOut();
      $("#sub-link-bar").animate({
          height: "30px"
      });
      $("#main-nav li a.close").fadeOut();
  });

});
