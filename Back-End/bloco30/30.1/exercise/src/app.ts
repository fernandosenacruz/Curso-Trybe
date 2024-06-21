import express from 'express';
import connection from './model/TournamentModel';
import router from './router';

class App {
  public express: express.Express;

  constructor() {
    this.express = express();
    this.middlewares();
    this.router();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private router() {
    this.express.use(router);
  }
}

export default App;
