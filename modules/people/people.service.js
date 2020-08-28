const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach(person => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    let allPeople = people.all();
    // Return all people in the queue.
  },

  enqueue(person) {
    people.enqueue(person);
    return;
    // Add a person to the queue.
  },

  dequeue() {
    let person = people.dequeue();
    // Remove a person from the queue.
  }
};
