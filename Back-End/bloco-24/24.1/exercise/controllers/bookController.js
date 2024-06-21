const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something wrong does not rigth' });
  };
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something wrong does not rigth' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something wrong does not rigth' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    if(!updateBook) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ message: 'User successfully updated!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something wrong does not rigth' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    return res.status(200).json({ message: 'User successfully deleted!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something wrong does not rigth' });
  }
});

module.exports = router;