class Person {
    constructor(firstName, lastName, age, gender, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    displayDetails() {
      console.log(`Name: ${this.getFullName()}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  // Example usage:
  const johnDoe = new Person('John', 'Doe', 25, 'Male', 'john.doe@example.com');
  johnDoe.displayDetails();
  