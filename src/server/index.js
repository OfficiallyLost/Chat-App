const express = require('express');
const app = express();
const routes = require('./routers/routes');

app.use('/', routes);
app.set('view engine', 'ejs');

app.listen(4000, () => console.log('Listening on port 4000'));
