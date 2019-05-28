const fetch = require("node-fetch");
const express = require("express");
const app = express();

app.get('/', function (req, res) {
    respuesta = {
        error: true,
        codigo: 200,
        cotenido: 'home'
    };
    res.send('home');
});

app.get('/persona', function (req, res) {
    let persona = {
        nombre: '',
        ojos: ''
    }
    fetch(process.env.NOMBRES_EP + '/nombres')
        .then(response => response.json())
        .then(nombres => {
            persona.nombre = nombres[Math.floor(Math.random() * nombres.length)];
            fetch(process.env.COLORES_EP + '/colores')
                .then(response => response.json())
                .then(colores => {
                    persona.ojos = colores[Math.floor(Math.random() * colores.length)];
                    res.send(persona)
                })
        });
})

app.use(function (req, res, next) {
    res.status(404).send('URL no encontrada');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado");
});
