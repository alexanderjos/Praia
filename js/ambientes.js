//Galeria de Ambientes
// Se ejecuta cuando el DOM ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function () {

  // Lista de objetos que contienen las rutas de las imágenes de ambientes
  let imagenes_ambientes = [{
      img: 'img/Ambientes(1).webp'
    },
    {
      img: 'img/Ambientes(2).webp'
    },
    {
      img: 'img/Ambientes(3).webp'
    },
    {
      img: 'img/Ambientes(4).webp'
    },
    {
      img: 'img/Ambientes(5).webp'
    },
    {
      img: 'img/Ambientes(6).webp'
    },
    {
      img: 'img/Ambientes(7).webp'
    },
    {
      img: 'img/Ambientes(8).webp'
    },
    {
      img: 'img/Ambientes(9).webp'
    },
    {
      img: 'img/Ambientes(10).webp'
    },
    {
      img: 'img/Ambientes(11).webp'
    },
    {
      img: 'img/Ambientes(12).webp'
    },
    {
      img: 'img/Ambientes(13).webp'
    },
  ]
  // Contador para mantener el índice de la imagen actual en el carrusel
  let contador1 = 0;

  // Selecciona el contenedor del carrusel y los botones de navegación
  const contenedor1 = document.querySelector('.slideshow1')
  const overlay1 = document.querySelector('.overlay1')
  const galeria_imagenes_ambientes = document.querySelectorAll('.galeria__ambientes img')
  const img_slideshow1 = document.querySelector('.slideshow1 img')

  // Agrega un evento de clic al contenedor del carrusel
  contenedor1.addEventListener('click', function (event1) {
    let atras = contenedor1.querySelector('.atras'),
      adelante = contenedor1.querySelector('.adelante'),
      img = contenedor1.querySelector('img'),
      tgt1 = event1.target

    // Si se hace clic en el botón "atrás", muestra la imagen anterior
    if (tgt1 == atras) {
      if (contador1 > 0) {
        img.src = imagenes_ambientes[contador1 - 1].img
        contador1--
      } else {
        img.src = imagenes_ambientes[imagenes_ambientes.length - 1].img
        contador1 = imagenes_ambientes.length - 1
      }
    }
    // Si se hace clic en el botón "adelante", muestra la siguiente imagen
    else if (tgt1 == adelante) {
      if (contador1 < imagenes_ambientes.length - 1) {
        img.src = imagenes_ambientes[contador1 + 1].img
        contador1++
      } else {
        img.src = imagenes_ambientes[0].img
        contador1 = 0
      }
    }
  })

  // Agrega eventos de clic a todas las miniaturas de imágenes en la galería
  Array.from(galeria_imagenes_ambientes).forEach(img => {
    img.addEventListener('click', event => {
      // Obtiene el índice de la imagen seleccionada a través del atributo personalizado 'data-img-mostrar'
      const imagen__selecionadaa = +event.target.dataset.imgMostrar
      // Cambia la imagen en el visor a la imagen seleccionada
      img_slideshow1.src = imagenes_ambientes[imagen__selecionadaa].img
      // Actualiza el contador para mantener el índice de la imagen actual
      contador1 = imagen__selecionadaa
      // Muestra el visor de imágenes con una animación
      overlay1.style.opacity = 1
      overlay1.style.visibility = 'visible'
    })
  })

  // Agrega un evento de clic al botón de cerrar en el visor de imágenes
  document.querySelector('.btn__cerrar1').addEventListener('click', () => {
    // Oculta el visor de imágenes con una animación
    overlay1.style.opacity = 0
    overlay1.style.visibility = 'hidden'
  })
})