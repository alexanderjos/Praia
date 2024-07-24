// Esta función se ejecuta cuando la ventana ha cargado completamente
window.onload = function() {
    // Oculta el elemento con el id 'onload' mediante una animación de desvanecimiento
    $('#onload').fadeOut();
    
    // Remueve la clase 'hidden' del elemento 'body', haciéndolo visible
    $('body').removeClass('hidden');

    /* Menú Desplegable */
    (function() {
        // Selecciona todos los elementos con la clase 'menu__item--show' y los guarda en 'listElements'
        const listElements = document.querySelectorAll('.menu__item--show');
        
        // Selecciona el primer elemento con la clase 'menu__links' y lo guarda en 'list'
        const list = document.querySelector('.menu__links');
        
        // Selecciona el primer elemento con la clase 'menu__hamburguer' y lo guarda en 'menu'
        const menu = document.querySelector('.menu__hamburguer');

        // Esta función añade un evento de clic a cada elemento con la clase 'menu__item--show'
        const addClick = () => {
            listElements.forEach(element => {
                element.addEventListener('click', () => {
                    // Obtiene el submenú del elemento actual
                    let subMenu = element.children[1];
                    let height = 0;

                    // Alterna la clase 'menu__item--active' del elemento actual
                    element.classList.toggle('menu__item--active');

                    // Si el submenú está oculto, se calcula la altura necesaria para mostrarlo
                    if (subMenu.clientHeight === 0) {
                        height = subMenu.scrollHeight;
                    }

                    // Establece la altura del submenú para mostrarlo o ocultarlo con una animación
                    subMenu.style.height = `${height}px`;
                });
            });
        };

        // Esta función elimina los estilos de altura establecidos previamente para todos los elementos
        const deleteStyleHeight = () => {
            listElements.forEach(element => {
                if (element.children[1].getAttribute('style')) {
                    // Elimina el estilo de altura del submenú
                    element.children[1].removeAttribute('style');
                    
                    // Remueve la clase 'menu__item--active' del elemento actual
                    element.classList.remove('menu__item--active');
                }
            });
        };

        // Añade un evento de redimensionamiento de ventana
        window.addEventListener('resize', () => {
            // Si la ventana tiene un ancho mayor a 800px
            if (window.innerWidth > 800) {
                // Elimina los estilos de altura y la clase 'menu__links--show'
                deleteStyleHeight();
                if (list.classList.contains('menu__links--show'))
                    list.classList.remove('menu__links--show');
            } else {
                // Si la ventana tiene un ancho menor o igual a 800px, añade los eventos de clic
                addClick();
            }
        });

        // Si la ventana tiene un ancho menor o igual a 960px, añade los eventos de clic
        if (window.innerWidth <= 960) {
            addClick();
        }

        // Añade un evento de clic al elemento 'menu__hamburguer' para mostrar/ocultar el menú
        menu.addEventListener('click', () => list.classList.toggle('menu__links--show'));
    })();
};














