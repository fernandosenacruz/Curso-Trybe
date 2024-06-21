const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const Actors = require('./models/Actors');

app.get('/actor', async (_req, res) => {
  const actors = await Actors.getAll();

  return res.status(200).json(actors);
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});