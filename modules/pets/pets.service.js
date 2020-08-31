/* eslint-disable no-self-assign */
const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------


module.exports = {
  get() {
    if(pets.cats.first === null){
      store.cats.forEach(cat => pets.cats.enqueue(cat));
    }
    if(pets.dogs.first === null){
      store.dogs.forEach(cat => pets.dogs.enqueue(cat));
    }
    const cat = pets.cats.show();
    const dog = pets.dogs.show();
    return {cat,dog};
    // Return the pets next in line to be adopted.
  },
  showAll(){
    const catList = pets.cats.all();
    const dogList = pets.dogs.all();
    const pack = {catList, dogList};
    return pack ; 
     
  },
  dequeue(type) {
    // console.log('PRE CALL ############',pets.cats.all());
    let pet = pets[type].dequeue();
    // console.log('POST CALL ############',pets.cats.all());
    pets[type] = pets[type];
    return pet;
  }
};
