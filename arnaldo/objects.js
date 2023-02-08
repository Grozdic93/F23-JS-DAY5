// Ex 1.1

let person = {
    firstName: "Arnaldo",
    lastName: "Bismarques",
    age: 32,
    married: true,
    hobbies: ['playing', 'football', 'videogames', 'coding (of course)'],
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(person.fullName());

let animal = {
    animalName: "Lion",
    weightFemale: "130kg",
    weightMale: "190kg",
    homecountry: "africa",
    food: "meat",
    fullAnimal: function() {
        return this.animalName + ` ` + 'is living in ' + this.homecountry;
    }

}
console.log(animal.fullAnimal());

// let car = {
//     brand: "Ford",
//     model: "Mustang",
//     horsepower: 700,
//     maximumspeed: "322km/h",
//     fullCar: function() {
//         return this.brand + ` ` + this.model + ` ` + `is able to drive` + ` ` + this.maximumspeed;
//     }
// };
// document.getElementById("result").innerHTML = `
// <h1>${person.firstName}</h1><br>
// <p>${person.age}</p>
// <p>${car.brand} ${car.model}</p>
// <p> Favourite Animal: <h2>${animal.animalName}</h2>`;

// Ex 1.2
class Person {
    firstName;
    lastName;
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    fullName() {
        return this.firstName + ` ` + this.lastName;
    }
}
let person1 = new Person("Arnaldo", "Bismarques");
document.getElementById("solution").innerHTML += `
<h1>${person1.firstName} ${person1.lastName}</h1>`
let person2 = new Person("Lukasz", "Lang");
document.getElementById("solution").innerHTML += `
<p>The name of this guy is ${person2.firstName} ${person2.lastName}`
let person3 = new Person("Thomas", "Sonnleitner");
document.getElementById("solution").innerHTML += ` 
<p > He is ${ person3.firstName }`;

class Animal {
    animalName;
    weight;
    homecountry;
    constructor(animalName, weight, homecountry) {
        this.animalName = animalName;
        this.weight = weight;
        this.homecountry = homecountry;
    }
    Animalindex() {
        return this.animalName + ` ` + this.weight + ` ` + this.homecountry;
    }
}
let Animal1 = new Animal("lion", "190kg", "africa");
document.getElementById("solution").innerHTML += `
<h1>${Animal1.Animalindex()}</h1>`;

let Animal2 = new Animal("Sealion", "300kg", "New Zealand");
document.getElementById("solution").innerHTML += `
<p> The animal called ${Animal2.animalName} is ${Animal2.weight} and lives in ${Animal2.homecountry}. </p>`;

class Carexpo {
    brand;
    type;
    model;
    constructor(brand, type, model) {
        this.brand = brand;
        this.type = type;
        this.model = model;
    }
    carfacts() {
        return (`The car Brand is ${this.brand} and the car type is ${this.type} and the car model is ${this.model}. <br>`)
    }

}

let Car1 = new Carexpo("Ford", "Mustang", "3");
document.getElementById("solution").innerHTML += `${Car1.carfacts()}`;
let Car2 = new Carexpo("Volvo", "S60", "4");
document.getElementById("solution").innerHTML += `${Car2.carfacts()}`;
let Car3 = new Carexpo("Mitsubishi", "Evolution", "2");
document.getElementById("solution").innerHTML += `${Car3.carfacts()}`;

// Intermediate Ex 1

class Motorbike extends Carexpo {
    hp;
    wheels;

    constructor(brand, type, model, hp, wheels) {
        super(brand, type, model);
        this.wheels = wheels;
        this.hp = hp;
    }
    driveMotor() {
        return `you drive the ${this.brand} with ${this.hp} hp`
    }

}
let motorbike = new Motorbike("Harley", 2020, "Black", 2, 200);
document.getElementById("solution").innerHTML += (motorbike.driveMotor());