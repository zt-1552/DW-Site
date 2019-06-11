;(function($, undefined){

 $('#button-menu').on('click', function (){

  var  $this = $("#main");

    if(!$this.hasClass('95-pecent')){
      $("#aside").animate({left: '-285px'}, 300);
      $("#aside").hide(200);
      $this.addClass('95-pecent').css({width: '95%'});

    } else {
      $this.removeClass('95-pecent').css({width: '82%'});
      $("#aside").show();
      $("#aside").animate({left: '0px'}, 1000);
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
