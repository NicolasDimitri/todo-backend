const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const Router = require('./Router');
const app = express();
app.use(express.json());

app.use(Router);

app.use(errorMiddleware);