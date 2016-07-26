 (function() {
     "use strict";
     // variables
     var result = 0;
     var operator = null;
     var completed = false;
     var isDecimal = false;
     // elements
     var leftInput = document.getElementById("left");
     var centerInput = document.getElementById("center");
     var rightInput = document.getElementById("right");
     var activeInput = leftInput;
     var buttons = document.getElementsByTagName("button");
     // display values
     function toDisplay(event) {
         switch (this.getAttribute("data-value")) {
             case "clear":
                 leftInput.value = null;
                 centerInput.value = null;
                 rightInput.value = null;
                 operator = null;
                 completed = true;
                 isDecimal = false;
                 activeInput = leftInput;
                 break;
             case "divide":
                 centerInput.value = "/";
                 operator = "divide";
                 completed = false;
                 isDecimal = false;
                 activeInput = rightInput;
                 break;
             case "multiply":
                 centerInput.value = "X";
                 operator = "multiply";
                 completed = false;
                 isDecimal = false;
                 activeInput = rightInput;
                 break;
             case "subtract":
                 centerInput.value = "-";
                 operator = "subtract";
                 completed = false;
                 isDecimal = false;
                 activeInput = rightInput;
                 break;
             case "add":
                 centerInput.value = "+";
                 operator = "add";
                 completed = false;
                 isDecimal = false;
                 activeInput = rightInput;
                 break;
             case "equals":
                 leftInput.value = doMath(parseFloat(leftInput.value), operator, parseFloat(rightInput.value));
                 rightInput.value = null;
                 completed = true;
                 isDecimal = false;
                 activeInput = leftInput;
                 break;
             case "decimal":
                 if (!isDecimal) {
                     if (completed) {
                         activeInput.value = this.innerText;
                         centerInput.value = null;
                         operator = null;
                         isDecimal = true;
                         completed = false;
                     } else {
                         activeInput.value += this.innerText;
                         isDecimal = true;
                     }
                 }
                 break;
             default:
                 if ((activeInput == leftInput) && (completed)) {
                     activeInput.value = this.innerText;
                     centerInput.value = null;
                     operator = null;
                     completed = false;
                 } else {
                     activeInput.value += this.innerText;
                 }
         }
     }

     function doMath(left, operator, right) {
         switch (operator) {
             case "add":
                 if (isNaN(right)) {
                     right = left;
                 }
                 result = left + right;
                 return result;
             case "subtract":
                 if (isNaN(right)) {
                     right = left;
                 }
                 result = left - right;
                 return result;
             case "multiply":
                 if (isNaN(right)) {
                     right = left;
                 }
                 result = left * right;
                 return result;
             case "divide":
                 if (isNaN(right)) {
                     right = left;
                 }
                 result = left / right;
                 return result;
             default:
                 result = 0;
                 return result;
         }
     }
     //Listener
     for (var i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener('click', toDisplay);
     }
 })();
