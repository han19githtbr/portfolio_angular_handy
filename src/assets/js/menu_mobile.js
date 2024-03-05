$(function(){
  var open = true;
  var windowSize = $(window)[0].innerWidth;
  var targetSizeMenu = (windowSize <= 400) ? 200 : 300;

  $('nav.menu_item i').click(function(){
    var el = $(this).parent().find('ul');
    if (el.is(':visible') == false) {
      el.fadeIn();
    } else {
      el.fadeOut();
    }
  });

  // Esconder o menu ao carregar a página em dispositivos móveis
  if ($(window).width() <= 768) {
    $('nav.menu_item ul').hide();
  }
});



$(document).ready(function(){
  $('.exibir-mais').click(function(){
      $(this).prev('p').css('max-height', 'none'); // Remove a altura máxima
      $(this).hide(); // Esconde o botão "Exibir mais"
      $(this).next('.exibir-menos').show(); // Exibe o botão "Exibir menos"
  });

  $('.exibir-menos').click(function(){
      $(this).prev().prev('p').css('max-height', '50px'); // Restaura a altura máxima
      $(this).hide(); // Esconde o botão "Exibir menos"
      $(this).prev('.exibir-mais').show(); // Exibe o botão "Exibir mais"
  });

  // Verifica se o texto precisa ser truncado inicialmente
  $('p').each(function(){
    if ($(this).height() > 50) { // Verifica se o texto ultrapassa a altura máxima
      $(this).css('max-height', '50px'); // Trunca o texto
      $(this).next('.exibir-mais').show(); // Exibe o botão "Exibir mais"
    }
  });
});

