t express = require("express");
const app = express();

let nombres = [
    "Héctor",
    "Javier",
    "Santos",
    "Marco",
    "Cayetano",
    "Rodrigo",
    "Francisco",
    "Flavio",
    "Juan",
    "Andoni",
    "Martín",
    "Mateo",
    "Pedro",
    "Unai",
];

app.get('/', function (req, res) {
    respuesta = {
        error: true,
        codigo: 200,
        cotenido: 'home'
    };
    res.send('home');
});

app.get('/nombres', function (req, res) {
    res.send(nombres);
});

app.use(function (req, res, next) {
    res.status(404).send('URL no encontrada');
});

app.listen(3000, () => {
    console.log("El servidor está inicializado");
});
