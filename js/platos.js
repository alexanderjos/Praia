//Galeria de platos
document.addEventListener('DOMContentLoaded', function (){


    let imagenes = [
      {img: 'img/plato(1).webp'},
      {img: 'img/plato(2).webp'},
      {img: 'img/plato(3).webp'},
      {img: 'img/plato(4).webp'},
      {img: 'img/plato(5).webp'},
      {img: 'img/plato(6).webp'},
      {img: 'img/plato(7).webp'},
      {img: 'img/plato(8).webp'},
      {img: 'img/plato(9).webp'},
      {img: 'img/plato(10).webp'},
      {img: 'img/plato(11).webp'},
      {img: 'img/plato(12).webp'},
      {img: 'img/plato(13).webp'},
      {img: 'img/plato(14).webp'},
      {img: 'img/plato(15).webp'},
      {img: 'img/plato(16).webp'},
      {img: 'img/plato(17).webp'},
      {img: 'img/plato(18).webp'},
      {img: 'img/plato(19).webp'},
      {img: 'img/plato(20).webp'},
    ]
    let contador = 0;
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')
  
  
    contenedor.addEventListener('click', function (event) {
      let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target
      if (tgt==atras) {
        if (contador > 0) {
          img.src = imagenes[contador - 1].img
          contador--
        }else {
          img.src=imagenes[imagenes.length-1].img
          contador=imagenes.length - 1
        }
      } else if (tgt == adelante) {
        if (contador < imagenes.length-1) {
          img.src = imagenes[contador + 1].img
          contador++ 
        } else {
          img.src=imagenes[0].img
          contador =0
        }
      }
    })
  
    Array.from(galeria_imagenes).forEach(img =>{
      img.addEventListener('click',event =>{
        const imagen__selecionada = +event.target.dataset.imgMostrar
        img_slideshow.src = imagenes[imagen__selecionada].img
        contador = imagen__selecionada
        overlay.style.opacity = 1
        overlay.style.visibility='visible'
      })
    })
    document.querySelector('.btn__cerrar').addEventListener('click',()=>{
      overlay.style.opacity = 0
        overlay.style.visibility='hidden'
    })
  })