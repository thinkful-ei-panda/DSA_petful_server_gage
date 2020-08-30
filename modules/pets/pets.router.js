const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  const petPack = Pets.get();

  res.json(petPack);

});

router.delete('/', json, (req, res) => {
  let {type} = req.body;
  
  const adaptedPet = Pets.dequeue(type);
  if(!adaptedPet){
    res.status(400).send({error : 'sorry no more pets up for adaption'});
  }
  res.status(204).end();
  // Remove a pet from adoption.
});

module.exports = router;
