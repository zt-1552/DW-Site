;(function($, undefined){

 $('#button-menu').on('click', function (){
  console.log('Menu');
})


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
