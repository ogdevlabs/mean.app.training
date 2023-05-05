const express = require('express');
const apiRoutes = require('../server/routes/api.routes');

function createServerApp(){
    const app = express();
    app.use(express.json());
    app.use('/api/', apiRoutes);

    return app;
}

module.exports = createServerApp;