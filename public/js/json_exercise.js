 "use strict";

 var student = {
  "name": "Bob",
  "pizzaPreference": "black olives and mushrooms",
  "grades": {
    "html": [
      90,
      77
    ],
    "css": [
      82
    ],
    "js": [
      91,
      90,
      89
    ]
  },
  "languages": [
    "html",
    "css",
    "js"
  ],
  "cars": [
    {
      "make": "honda",
      "model": "civic",
      "parkingPermits": [
        {
          "name": "Travis Park Garage",
          "isActive": true
        },
        {
          "name": "Apartment Complex",
          "isActive": false
        }
      ]
    },
    {
      "make": "honda",
      "model": "accord",
      "parkingPermits": []
    }
  ]
};

   

        console.log("Student Name: " + student.name);
        console.log(student.name + "'s Pizza Preference is: " + student.pizzaPreference);
        console.log(student.name + "'s Second Language is: " + student.languages[1]);
        console.log(student.name + "'s grades for HTML are: " + student.grades.html);
        console.log(student.name + "'s last grade for JavaScript is: " + student.grades.js[student.grades.js.length -1]);
        console.log(student.name + "'s First Language is: " + student.languages[0]);
        console.log(student.name + "'s Second Car is a: " + student.cars[1].make);
        console.log(student.cars[0].parkingPermits.length);
        console.log(student.cars[1].parkingPermits.length);
        console.log(student.cars[0].parkingPermits[0].isActive);

        var htmlGrades = student.grades.html;

        var total = 0;

        htmlGrades.forEach(function(grade) {
            total = total + grade;
        });

        console.log(student.name + " made the following average grade in HTML: " + (total / htmlGrades.length) + "!"); 



// alternate fnct 

// function getAverageGrade(arrayOfNumbers) {
//     var numberOfGrades = arrayOfNumbers.length;
//     var total = 0;
//     var average;

//     arrayOfNumbers.forEach(function(grade){
//         total.
//     })
// }

 //   Task                                                        Output
 //   ----                                                        ------
 // get Bob's name .............................................. 'Bob'
 // console.log(student.name)
     // get Bob's pizzaPreference ................................... 'black olives and mushrooms'
     // get Bob's 2nd language ...................................... 'css'
     // get Bob's grades for html ................................... [90, 77]
     // get Bob's last grade for javascript ......................... 89
     // get Bob's first language .................................... 'html'
     // get the make of Bob's second car ............................ 'honda'
     // number of parking permits for Bob's civic ................... 2
     //                           for Bob's accord .................. 0
     // find out if Bob's parking permit for travis park is active .. true

 // find the average of Bob's grades for html (your solution should not break if more items are added to the grades.html array)
