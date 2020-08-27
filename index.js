const express = require('express');
require('dotenv').config();
const cors = require('cors');

// Se inicializa express
const app = express();

// SE configura CORS para evitar problemas al enlazar con angular
app.use(cors());

// Configuración y parseo del body en las peticiones
app.use(express.json());

//Directorio publico
app.use(express.static('public'));


// Rutas
app.use('/api/login', require('./routes/auth'));


//Se levanta el servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo por el puerto: ${process.env.PORT}`);
});