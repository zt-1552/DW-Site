;(function($, undefined){

 $('#button-menu').on('click', function (){

  var  $this = $("#main");
  var $aside = $("#aside");

    if ($(window).width() >= 768) {
      if(!$this.hasClass('95-pecent')){
        $this.addClass('95-pecent').css({width: '95%'});
        $("#aside").animate({left: '-285px'}, 500);
        $("#aside").hide(500);

      } else {
        $this.removeClass('95-pecent').css({width: '82%'});
        $("#aside").show(600);
        $("#aside").animate({left: '0px'}, 1000);
      }
    } else {
      if(!$aside.hasClass('sidebar-on')){
        $aside.addClass('sidebar-on');
        $aside.animate({left: '0px'}, 1000);
        if ($(window).width() >= 340) {
          $("#button-menu").animate({left: '305px'}, 1000);
        } else {
          $("#button-menu").animate({left: '275px'}, 1000);
        }

      } else {
        $aside.removeClass('sidebar-on');
        $aside.animate({left: '-295px'}, 1000);
        $("#button-menu").animate({left: '10px'}, 1000);
      }
    }
  });

$(".img-post-footer").on("click", function () {
  var img = $(this);
  var src = img.attr('src');
  $("#img-post-footer-big").attr('src', src);
  $("#modal-window").show();
});

$("#img-post-footer-big").on("click", function () {
	$("#modal-window").hide();
});

})(jQuery);
