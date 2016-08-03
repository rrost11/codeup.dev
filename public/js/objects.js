(function() {
    "use strict";

    // TODO: Create person object
    var person = {};

    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    person.firstName = "Rachel";
    person.lastName = "Rost";


    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties


    person.sayHello = function() {
        console.log(person.firstName + " " + person.lastName + " says Hello!!!!");

    }

    // Say hello from the person object.
    person.sayHello();
})();
