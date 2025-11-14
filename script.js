//complete this code
class Person {
	_name;
	_age;
	name;
	age;
	constructor(name,age){
		this._name = name;
		this._age = age;
		this.name = name;
		this.age = age;
	}

	getName(){
		return this._name;
	}

	setAge(age){
		this._age = age;
		this.age=age;
	}
}

class Student extends Person {
	study(){
		console.log(this._name+" is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this._name+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
