require('dotenv').config();
const express = require('express');
const app = express();
const loggerMiddleware = require('./route/middlewares/logger.middlewares');
app.use(express.json());
app.use(loggerMiddleware);
app.use("/users", require("./route/users.route"));