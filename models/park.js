const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}

Park.prototype.add_to_collection = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.remove_from_collection = function (dinosaur) {
    const indexToRemove = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexToRemove,1)
};

module.exports = Park