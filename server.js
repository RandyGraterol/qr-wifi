const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const PORT = 3000;

// Servir archivos estáticos (HTML, JS, imágenes)
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Servir la imagen mono.jpg
app.get('/mono.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'mono.jpg'));
});

// Servir el logo wifigratis.jpg
app.get('/wifigratis.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'wifigratis.jpg'));
});

// Obtener la IP local
function obtenerIPLocal() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Saltar IPs internas y IPv6
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// Iniciar servidor
app.listen(PORT, () => {
  const ipLocal = obtenerIPLocal();
  console.log(`\n🚀 Servidor corriendo en:`);
  console.log(`   http://localhost:${PORT}`);
  console.log(`   http://${ipLocal}:${PORT}`);
  console.log(`\n📱 En la misma red, accede desde: http://${ipLocal}:${PORT}`);
  console.log(`🔗 El QR apunta a: http://${ipLocal}:${PORT}/mono.jpg\n`);
});

