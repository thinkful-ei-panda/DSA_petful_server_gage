const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  Pets.get()
    .then(catDog =>{
      res.json(catDog);
    });
  // Return all pets currently up for adoption.
});

router.delete('/', json, (req, res) => {
  let {type} = req.body;
  
  Pets.dequeue(type)
    .then(res.status(204).end());
  // Remove a pet from adoption.
});

module.exports = router;
