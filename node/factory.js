function Factory() {
    this.createVehicle = function (type) {
        var vehicle;
    }
    
}

function car() {
    this.numberOfDoors = 4;
    this.numberOfTyres = 4;
    this.engineCC = 1200;
}
function bike() {
    this.engineCC = 350;
    this.numberOfTyres = 2;
}

var x = new Factory();
