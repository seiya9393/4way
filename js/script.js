$(function(){
  $(".asn a").append("<img class='cont_art' src='./img/asunojokei_logo.png' alt='明日の叙景' >");
  $(".pale a").append("<img class='cont_art' src='./img/pale_logo.png' alt='pale' >");
  $(".nhom a").append("<img class='cont_art' src='./img/nhomme_logo.png' alt='nhomme' >");
  $(".tcks a").append("<img class='cont_art' src='./img/tcks_logo.png' alt='冬蟲夏草' >");
});

$(function(){
  $(window).on('load',function(){
    $("#loading-wrap").fadeOut('slow');
  });
  function loaderClose(){
    $("#loading-wrap").fadeOut('slow');
  }
  setTimeout(loaderClose,5000);
});