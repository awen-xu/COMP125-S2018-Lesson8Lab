let core;
// core module - IIFE
(function(core) {
  // App variables
  let myObject;

  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px;"
    );

    myObject = {}; // object literal notation
    //myObject = new Object(); // constructor notation

    //myObject = Object.create(null);

    /* 
    // property definition
    myObject.name = "";
    myObject.age = 0;
    */

    // private properties
    Object.defineProperty(myObject, "_name", {
      configurable: false,
      enumerable: false,
      value: "",
      writable: true
    });

    Object.defineProperty(myObject, "_age", {
      configurable: false,
      enumerable: false,
      value: 0,
      writable: true
    });

    // public properties
    Object.defineProperty(myObject, "name", {
      configurable: false,
      enumerable: false,
      get: function() {
        return this._name;
      },
      set: function(newValue) {
        this._name = newValue;
      }
    });

    Object.defineProperty(myObject, "age", {
      configurable: false,
      enumerable: false,
      get: function() {
        return this._age;
      },
      set: function(newValue) {
        this._age = newValue;
      }
    });

    Main();
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");

    myObject.name = "Tom";
    myObject.age = 49;

    console.log(myObject);
  }

  window.addEventListener("load", Start);
})(core | (core = {}));
