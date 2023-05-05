const createServerApp = require('./utils/createServer');

require('dotenv').config();
require('./server/config/db');

const app = createServerApp();
const port = process.env.PORT || 5001;

app.listen(port, () =>{
    console.log(`The server is running at http://localhost:${port}/api/user`);
});
