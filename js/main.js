const evento = document.getElementById('send');

const enviarFormulario = () => {
    let names = document.getElementById('names').value; // Cambié 'names' a 'nombre'
    let pedido = document.getElementById('pedido').value; // Cambié 'asunto' a 'pedido'
    let numero = 541126429710; // Puedes cambiar este número según sea necesario

    // Crea el mensaje para enviar por WhatsApp
    let mensaje = `Solicitud%20de%20Pedido%0A
        Nombre%20y%20Apellido:%20${names} 
        Detalles:%20${pedido}%0A`;

    // Abre la ventana de WhatsApp con el mensaje predefinido
    var win = window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
};

// Añadir el evento al botón
evento.addEventListener('click', enviarFormulario);

            evento.addEventListener('click', enviarFormulario)
(function ($) {
    "use strict";
    
  
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    


    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


 
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

