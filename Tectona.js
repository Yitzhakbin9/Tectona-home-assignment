

/**
 * Please describe in a few sentences the MVC architecture.
 *
 *  The MVC architecture is a design pattern to implement user interface.
 *  It splits large applications into different section with different purpose.
 *  Controller : responsible for handling the request from the client.
 *  (act as a intermediary between the Model and View).
 *  Model : responsible for handling the data and logic.
 *  View : responsible for render the data in a way the user can understand and use.
 *
 *  The Controller receives a request from the client. Then it send it to Model in order to get the
 *  specific data the user wants. After the Controller get the data back from the Model, it interacts with
 *  the View so it render the data in a way the client would understand and be able
 *  to use it. After the Controller receives the rendered data from the View, it send it to the client.
 */


/**
 * Write a program that prints the numbers from 1 to 100. But for multiples of
 * three print “Tec” instead of the number and for the multiples of five print “tona”.
 * For numbers which are multiples of both three and five print “Tectona”.
 */



    let ans = [];
    for(let i = 1 ; i <= 100 ; i++){
        if( i % 5 === 0 && i % 3 === 0) ans.push("Tectona");
        else if( i % 3 === 0) ans.push("Tec");
        else if( i % 5 === 0) ans.push("Tona");
        else ans.push(i);
    }
    console.log(ans);



/**
 * Explain the difference (in Javascript) between "==" & "===" logical operators:
 *
 *  == : Compare equality of value, but not equality of type. javascript convert the
 *  operands to the same type and then compare them.
 *  === : Compare equality of value AND equality of type.
 *  For example, if we do 3 == "3" javascript will return True.
 *  But if we do 3 === "3" javascript will return False.
 */



/**
 * Extend the "Array" class in Javascript with a new method that calculates and returns the
 sum of the Array's items (you can assume all of the items are numbers).
 */


Array.prototype.sumAllElements = function(){
    let sum = 0;
    for(let item of this){
        sum += item;
    }
    return sum;
}

const arr = [1,2,3,4,5,6];
console.log(`Sum of array [1,2,3,4,5,6] is: ${arr.sumAllElements()}`);