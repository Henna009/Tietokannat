var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET cars */
router.get('/', (req, res) => {
  db.query('SELECT * FROM car', (err, results) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(results);
  });
});

/* POST add car */
router.post('/', (req, res) => {
  const { brand, model } = req.body;

  db.query(
    'INSERT INTO car (brand, model) VALUES (?, ?)',
    [brand, model],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.json({ message: 'Auto lisätty!', id: result.insertId });
    }
  );
});

/* PUT update car */
router.put('/:id', (req, res) => {
  const { brand, model } = req.body;
  const id = req.params.id;

  db.query(
    'UPDATE car SET brand = ?, model = ? WHERE id = ?',
    [brand, model, id],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.json({ message: 'Auto päivitetty!' });
    }
  );
});

/* DELETE car */
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.query(
    'DELETE FROM car WHERE id = ?',
    [id],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.json({ message: 'Auto poistettu!' });
    }
  );
});

// GET books
router.get('/books', (req, res) => {
  db.query('SELECT * FROM book', (err, results) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(results);
  });
});

module.exports = router;
