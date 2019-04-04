$(function(){
  $("#nav_toggle").click(function(){
    $("header").toggleClass("open");
    $("nav").fadeToggle(300);
  });
  $("nav a").click(function(){
    $("header").removeClass("open");
    $("nav").fadeOut(300);
  });
});