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

Park.prototype.findAllDinosaursBySpecies = function (species) {
    let dinosaursSpeciesList = [];
    for (let dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.species === species) {
            dinosaursSpeciesList.push(dinosaur);
        }
    }
    return dinosaursSpeciesList;
}

Park.prototype.calculateDailyVisitors = function () {
    let dailyVisitors = 0;
    for (let dinosaur of this.collectionOfDinosaurs){
        dailyVisitors += dinosaur.guestsAttractedPerDay;
    }
    return dailyVisitors;
}

Park.prototype.calculateYearlyVisitors = function () {
    const dailyVisitors = this.calculateDailyVisitors();
    let yearlyVisitors = dailyVisitors * 365;
    return yearlyVisitors;

}

Park.prototype.calculateYearlyRevenue = function (){
    const yearlyVisitors = this.calculateYearlyVisitors();
    let yearlyRevenue = yearlyVisitors * this.ticketPrice;
    return yearlyRevenue;
}

module.exports = Park