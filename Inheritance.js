class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}

const myVehicle = new Vehicle('運送手段', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}

const myBicycle0 = new Bicycle('自転車0', 2)
const myBicycle1 = new Bicycle('自転車1', 2)

console.log(myBicycle0)
console.log(myBicycle1)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}

const myCar0 = new Car('車0', 4, true)
const myCar1 = new Car('車1', 4, false)

console.log(myCar0)
console.log(myCar1)