document.addEventListener('DOMContentLoaded', function () {
    var animatedText1 = document.getElementById('animatedText1');
    var animatedText2 = document.getElementById('animatedText2');

    // Al cargar la página, inicia la animación del primer div
    setTimeout(function () {
      animatedText1.style.opacity = '0';
      animatedText2.style.transform = 'translateY(0)';
      animatedText1.style.transform = 'scale(2)';

    }, 10);

    // Después de que termine la animación del primer div, inicia la animación del segundo div
    setTimeout(function () {
      animatedText2.style.opacity = '1';
      animatedText2.style.transform = 'translateY(0)';
      animatedText2.style.transform = 'scale(1)';
      animatedText1.style.display = 'none';
    }, 5500); // El tiempo total de espera es 500ms (del primer div) + 5900ms (duración total de la animación del primer div)
  });