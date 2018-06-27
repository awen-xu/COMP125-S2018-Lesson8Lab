let objects; // objects namespace or module
(function(objects){

    // Person class
    let Person = (function() {

        function Person(name, age) {
          this._name = name;
          this._age = age;
        }
        
        Person.prototype.SaysHello = function() {
          console.log(`${this._name} says hello!`);
        };
        return Person;
      })();

    objects.Person = Person;

})(objects || (objects = {}));



