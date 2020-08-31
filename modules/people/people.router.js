const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  if(People.get() === 'nothing in queue'){
    res.status(400).json([]);
  }
  res.json(People.get());
});

router.post('/', json, (req, res) => {

  const {person} = req.body;
  People.enqueue(person);
  res.status(201).json(People.get).end();
  // Add a new person to the queue.
});

router.delete('/',json, (req,res) =>{
  let person = People.dequeue();
  res.send({person : person}).status(204).end();
});



module.exports = router;
