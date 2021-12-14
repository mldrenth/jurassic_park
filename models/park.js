const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}

Park.prototype.addToCollection = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur)
};

Park.prototype.removeFromCollection = function (dinosaur) {
    const indexToRemove = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexToRemove,1)
};

Park.prototype.findHighestRanked = function () {
    let highestRankedAmount = 0;
    let highestRankedDinosaur;
    for (let dinosaur of this.collectionOfDinosaurs) {
        if (dinosaur.guestsAttractedPerDay > highestRankedAmount) {
            highestRankedAmount = dinosaur.guestsAttractedPerDay;
            highestRankedDinosaur = dinosaur;
        }
    }  
    return highestRankedDinosaur;
};

module.exports = Park