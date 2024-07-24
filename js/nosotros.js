$(document).ready(function() {
  let indice = 1;
  muestraSlides(indice);

  function avanzaSlide(n) {
    muestraSlides(indice += n);
  }

  function posicionSlide(n) {
    muestraSlides(indice = n);
  }

  function muestraSlides(n) {
    let slides = $('.card');
    let barras = $('.barra');

    // Verificar y ajustar el índice si es necesario
    if (n > slides.length) {
      indice = 1; // Reiniciar el índice al primer slide
    }
    if (n < 1) {
      indice = slides.length; // Establecer el índice al último slide
    }

    // Ocultar todos los slides y eliminar la clase 'active' de las barras
    slides.hide();
    barras.removeClass('active');

    // Mostrar los slides correspondientes según el tamaño de la pantalla
    if (window.innerWidth > 900) {
      let startIndex = indice - 1;
      let endIndex = startIndex + 3;

      // Asegurar que el endIndex no supere la cantidad de slides
      if (endIndex > slides.length) {
        endIndex = slides.length;
        startIndex = Math.max(endIndex - 2, 0); // Ajuste para evitar el espacio vacío al final
      }

      // Mostrar los slides en el rango startIndex - endIndex
      slides.slice(startIndex, endIndex).show();
    } else {
      slides.eq(indice - 1).show(); // Mostrar solo el slide actual
    }

    barras.eq(indice - 1).addClass('active'); // Resaltar la barra correspondiente al slide actual
  }

  window.addEventListener('resize', function() {
    muestraSlides(indice); // Actualizar la visualización al cambiar el tamaño de la pantalla
  });

  $('.prev-btn').click(function() {
    avanzaSlide(-1);
  });

  $('.next-btn').click(function() {
    avanzaSlide(1);
  });

  $('.barra').click(function() {
    let posicion = $(this).index() + 1;
    posicionSlide(posicion);
  });
});
