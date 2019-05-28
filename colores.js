const express = require("express");
const app = express();

let colores = [
    "rojo",
    "azul",
    "verde",
    "cafe",
    "pardo",
    "celeste"
];

app.get('/', function (req, res) {
    respuesta = {
        error: true,
        codigo: 200,
        cotenido: 'home'
    };
    res.send('home');
});

app.get('/colores', function (req, res) {
    res.send(colores);
});

app.use(function (req, res, next) {
    res.status(404).send('URL no encontrada');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado");
});
