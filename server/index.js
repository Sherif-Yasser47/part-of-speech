const http = require('http');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const wordsRouter = require('./routers/wordsRouter');
const rankRouter = require('./routers/rankRouter');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const app = express();

app.use(express.json());
app.use(logger('common'));
app.use(cors());

//Invoking Routes handlers middlewares.
app.use('/api/words', wordsRouter);
app.use('/api/rank', rankRouter);

//Invoking Error-handler middlewares
app.use(notFound);
app.use(errorHandler);


//Setting up express server
const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
})