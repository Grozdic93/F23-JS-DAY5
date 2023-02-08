
//| | | print function
function print(e) {
    console.log(e)
};


// | | first basic
const Car = {
    model: 'Mustang',
    age: 1967,
    color: 'red',

    drive() {
        return `you drive the ${this.model}`
    }
}

const Animal = {
    name: "Fish",
    color: "blue",
    age: 2,

    swim() {
        return `the ${this.name} is swiming`
    }

}

const Person = {
    fname: "John",
    lname: "Doe",
    age: 29,
    alive: true,

    walk() {
        return `${this.fname} ${this.lname} is walking`
    }
}


print(Car.model)
print(Car.drive())
print(Animal.color)
print(Animal.swim())
print(Person.alive)
print(Person.walk())


// | | Second basic

class Car1 {
    model;
    age;
    color;
    constructor(model, age, color) {
        this.model = model;
        this.age = age;
        this.color = color;

    }

    drive() {
        return `you drive the ${this.model}`
    }
}

let car1 = new Car1("Corvette", 2020, "Yellow");
print(car1)
print(car1.drive())


class Animal1 {
    name;
    color;
    age;
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;

    }

    swim() {
        return `the ${this.name} is an Animal`
    }
}

let animal1 = new Animal1("Fish", "Blue", 2);
print(animal1)
print(animal1.swim())


class Person1 {
    fname;
    lname;
    birthYear;
    alive;

    constructor(fname, lname, birthYear, alive) {
        this.fname = fname;
        this.lname = lname;
        this.birthYear = birthYear;
        this.alive = alive;

    }

    walk() {

        if (this.alive != true) {

            return `${this.fname} ${this.lname} cant walk anymore`
        }
        else {
            return `${this.fname} ${this.lname} is walking`
        }

    }

}

let person1 = new Person1("Jon", "Doe", 1926, false);
print(person1)
print(person1.walk())

// | | intermediate

class Motorbike extends Car1 {

    hp;
    wheels;

    constructor(model, age, color, wheels, hp) {
        super(model, age, color);
        this.wheels = wheels;
        this.hp = hp;
    }

    driveMotor() {
        return `you drive the ${this.model} with ${this.hp} hp`
    }


}

let motorbike = new Motorbike("Harley", 2020, "Black", 2, 200);
print(motorbike)
print(motorbike.driveMotor())
print(motorbike.drive())


class Fish extends Animal1 {

    size;
    weight;

    constructor(name, color, age, size, weight) {
        super(name, color, age);
        this.size = size;
        this.weight = weight;
    }

    swimFish() {
        return `the ${this.name} is swiming with its ${this.size} cm lenght and ${this.weight} kg weigth`
    }
}

let Fish1 = new Fish("Fish", "Blue", 2, 10, 0.4);
print(Fish1);
print(Fish1.swimFish());
print(Fish1.swim());
print(Fish1.name);


class Profession extends Person1 {

    profession;
    salary;

    constructor(fname, lname, birthYear, alive, profession, salary) {
        super(fname, lname, birthYear, alive);
        this.profession = profession;
        this.salary = salary;
    }

    work() {
        return `${this.fname} ${this.lname} is a ${this.profession} and earns ${this.salary} €`
    }
}

let profession1 = new Profession("Jon", "Doe", 1993, true, "Doctor", 2000);
print(profession1);
print(profession1.work());
print(profession1.walk());