;(function($, undefined){

 $('#button-menu').on('click', function (e){

  var  $this = $("#main");

  if(!$this.hasClass('col-11')){
    $("#aside").hide();
    $this.addClass('col-11');
    $this.removeClass('col-8');

  } else {
    $this.removeClass('col-11');
    $this.addClass('col-8');
    $("#aside").show(400);
  }
});

$(".img-post-footer").on("click", function () { // Отображение на весь экран
  var img = $(this);
  var src = img.attr('src');
  $("#img-post-footer-big").attr('src', src);
  $("#modal-window").show();
});

$("#img-post-footer-big").on("click", function () { // Кнопка закрыть
	$("#modal-window").hide();
});

})(jQuery);
