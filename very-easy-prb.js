// Return the Last Element in an Array 
// Create a function that accepts an array and returns the last item in the array.
let arry = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10];

function lastElement (arry) {
    let elememt = arry[arry.length - 1];
    return elememt;
}

let element = lastElement(arry);
console.log(element);


// Create a function that takes an array and returns the types of values (data types) in a new array. 
let data = [2, "majedul", true, "null", {}];

function dataType (arry) {
    let newArry = [];
    for (let element of arry) {
        let type = typeof(element);
        newArry.push(type);
    }
    return newArry;
}

let getDataType = dataType(data);
console.log(getDataType);

// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array. 
let integerString = [1, 2, 3, 4, 5, 6, "majedul", "ontor", "shipon"];

function convertIntegers (arry) {
    let newArry = [];
    for (let element of arry) {
        let type = typeof(element);
        if (type != 'string') {
            element = element.toString();
        }
        newArry.push(element);

    }

    return newArry;
}

let getString = convertIntegers(integerString);
console.log(getString);

// Create a function that takes an array of numbers or letters and returns a string. 

let array = [1, 2, 3, 4, 5, 6];

function convertString (arry) {
    let string = '';
    for(let element of arry) {
        let convert = element.toString();
        string = string + convert; 
    }
    return string;
}

let gotString = convertString(array);
console.log(gotString);

//Create a function to concatenate two integer arrays.

let arry1 = [1, 2, 3, 4, 5, 6];
let arry2 = [7, 8, 9, 10, 11];

function concatArry (arry1, arry2) {
    let resultArry = [];
    for (let element1 of arry1) {
        resultArry.push(element1);
    }
    for (let element2 of arry2) {
        resultArry.push(element2);
    }
    return resultArry;
}

let finalArry = concatArry(arry1, arry2);
console.log(finalArry);
