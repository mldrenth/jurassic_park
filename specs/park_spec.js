const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    trex  = new Dinosaur('T-Rex', 'Carnivore', 200)
    brachiosaurus = new Dinosaur('Brachiosaurus', 'Herbivore', 10)
    velociraptor = new Dinosaur('Velociraptor', 'Carnivore', 250)
    park = new Park('Jurassic Park', 50);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addToCollection(trex);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual,[trex])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addToCollection(trex);
    park.addToCollection(brachiosaurus);
    park.removeFromCollection(trex);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual,[brachiosaurus])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addToCollection(trex);
    park.addToCollection(velociraptor);
    park.addToCollection(brachiosaurus);
    const actual = park.findHighestRanked();
    assert.deepStrictEqual(actual, velociraptor);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addToCollection(trex);
    park.addToCollection(trex);
    park.addToCollection(brachiosaurus);
    const actual = park.findAllDinosaursBySpecies('T-Rex')
    assert.deepStrictEqual(actual, [trex,trex]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addToCollection(trex);
    park.addToCollection(brachiosaurus);
    park.addToCollection(velociraptor);
    park.addToCollection(brachiosaurus);
    const actual = park.calculateDailyVisitors();
    assert.deepStrictEqual(actual, 470)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addToCollection(trex);
    park.addToCollection(brachiosaurus);
    park.addToCollection(velociraptor);
    park.addToCollection(brachiosaurus);
    const actual = park.calculateYearlyVisitors();
    assert.deepStrictEqual(actual, 171550);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addToCollection(trex);
    park.addToCollection(brachiosaurus);
    park.addToCollection(velociraptor);
    park.addToCollection(brachiosaurus);
    const actual = park.calculateYearlyRevenue();
    assert.deepStrictEqual(actual,8577500);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addToCollection(trex);
    park.addToCollection(brachiosaurus);
    park.addToCollection(velociraptor);
    park.addToCollection(brachiosaurus);
    park.removeDinosaurBySpecies("Brachiosaurus");
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [trex, velociraptor])
  })

});
