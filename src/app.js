import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes.js';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  database() {
    mongoose.connect('mongodb://db:27017/database-example', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
