declare module objects{
    export class Person {
        /**
         *Creates an instance of Person.
         * @param {String} name
         * @param {number} age
         */
        constructor(name:String, age:number);

        /**
         * This method outputs _name and says hello to the console
         * @returns {void}
         */
        SaysHello():void;
    }
}