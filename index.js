const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const Router = require('./Router');
const app = express();
app.use(express.json());

app.use(Router);

app.use(errorMiddleware);

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});