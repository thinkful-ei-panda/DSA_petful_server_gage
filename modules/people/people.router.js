const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(People.get());
});

router.post('/', json, (req, res) => {

  const {person} = req.body;
  People.enqueue(person);
  res.status(201).send(`${person} has been entered in queue`).end();
  // Add a new person to the queue.
});



module.exports = router;
