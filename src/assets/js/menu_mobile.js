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



// Função para mostrar o texto letra por letra
function showText(el, text, interval) {
  var index = 0;
  var timer = setInterval(function() {
    if (index < text.length) {
      el.innerHTML += text[index];
      index++;
    } else {
      clearInterval(timer);
    }
  }, interval);
}

// Função para animar a mensagem
function animateMessage() {
  var mensagemContainer = document.getElementById('mensagem_boas_vindas');
  mensagemContainer.style.left = '30px'; /* ou ajuste conforme necessário */
  setTimeout(function() {
    mensagemContainer.style.left = '-200px'; /* ou ajuste conforme necessário */
    setTimeout(function() {
      mensagemContainer.classList.add('hide');
    }, 1000); // 1 segundo para esconder a mensagem após a animação de saída
  }, 6000); // 4 segundos para manter a mensagem na tela
}

// Espera 3 segundos após o carregamento da página
setTimeout(function() {
  var mensagem = document.getElementById('welcome_message');
  var text = "Hi! Welcome";
  var interval = 200;

  // Inicia a digitação da mensagem
  showText(mensagem, text, interval);

  // Inicia a animação da mensagem
  animateMessage();
}, 5000); // 3 segundos antes de começar a animação

