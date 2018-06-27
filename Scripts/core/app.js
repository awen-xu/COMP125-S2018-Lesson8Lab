let core;
// core module - IIFE
(function(core) {
  // App variables
  let person;
  let student;

  /*
  let Student = (function(){
    function Student (name, age, studentID){
      objects.Person.call(this, name, age);
      this._studentID = studentID;
    }

    // extends the Person class or inherit from the person class
    Student.prototype = Object.create(objects.Person);
    //Student.prototype.constructor = Student;

    Student.prototype.SaysHello = objects.Person.SaysHello;

    Student.prototype.studies = function(){
      console.log(`${this._name} is studying!`);
    }

    return Student;
  })();
  */

  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px;"
    );
    
    // instantiation - object creation
    person = new objects.Person("Tom", 49);

    student = new objects.Student("Carol", 20, "123456789");
    

    Main();
  }

  
  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");

    person.SaysHello();
    
    console.log(person);
    console.log(student);

    student.studies();
    student.SaysHello();
  }


  window.addEventListener("load", Start);
})(core || (core = {}));
