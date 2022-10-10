const express = require('express');
const morgan = require('morgan');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.app.use(morgan('dev'));

        this.router();
    }

    router() {
        this.app.get('/', (req, res) => {
            res.json({
                ok: true,
                message: 'Hola mundo!!!'
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor iniciado en puerto ${this.port}`);
        });
    }
}

module.exports = Server;