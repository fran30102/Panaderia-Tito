document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    
    // Obtiene los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const pedido = document.getElementById('pedido').value;
    
    // Define el número de WhatsApp (sin el '+')
    const telefono = '541126429710';
    
    // Construye el mensaje de WhatsApp
    const mensaje = `Hola, soy ${nombre}. Me gustaría hacer el siguiente pedido: ${pedido}`;
    
    // Construye la URL de WhatsApp usando la variable 'telefono'
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    
    // Redirige a la URL de WhatsApp
    window.open(url, '_blank');
});
