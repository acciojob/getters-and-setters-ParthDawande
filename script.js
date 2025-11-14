class Person {
    constructor(name, age) {
        this._name = name;   // internal storage
        this._age = age;     // internal storage
    }

    // getter for name
    get name() {
        return this._name;
    }

    // getter for age (optional but tests use person.age)
    get age() {
        return this._age;
    }

    // setter for age
    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
