// Generar código QR para WiFi Gratis

// Detectar si está en producción o local
function obtenerURL() {
    const hostname = window.location.hostname;
    const protocolo = window.location.protocol;
    
    // Si está en el hosting de producción
    if (hostname === 'ganacososavalle.com' || hostname.includes('ganacosos')) {
        return 'https://ganacososavalle.com/wifigratis/mono.jpg';
    }
    
    // Si está en localhost, usar la dirección IP local
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        // Obtener la IP local del servidor
        const puerto = window.location.port || 3000;
        // Para local, usar http
        return `http://localhost:${puerto}/mono.jpg`;
    }
    
    // Para cualquier otra dirección (IP local en red)
    const puerto = window.location.port || 3000;
    return `http://${hostname}:${puerto}/mono.jpg`;
}

// Obtener la URL
const urlImagen = obtenerURL();

// Crear el código QR
const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: urlImagen,
    width: 300,
    height: 300,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
});

