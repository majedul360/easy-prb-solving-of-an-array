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


// Create a function that takes an array and a string as arguments and returns the index of the string. 

let newArry = ['a', 'b', 'c', 'd'];

function findIndexOfArry (input1, input2) {
    let newArry = [];
    for (let element of input1) {
        newArry.push(element);
    }
    newArry.push(input2);
    return newArry;
}

let getNewArrey =findIndexOfArry(newArry, 'e');
let last=getNewArrey[getNewArrey.length -1];
console.log(getNewArrey.indexOf(last));


// add arry numbers 

let testArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(arr) {
	let sum = 0;	
    for (let element of arr) {
        sum+= element;
      }
  return sum
}

let getAddNumbers = sumArray(testArry);
console.log(getAddNumbers);

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order. 

let arryNumbers = [2, 3, 4, 5, 1, 6, 7, 8, 9, 10, 11];

function minmax (arry) {
    let minmax = [];
    let min = arry[0];
    let max = arry[0];
    for (let element of arry) {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    }
    minmax.push(min);
    minmax.push(max);
    return minmax;
}

let getMinMax = minmax(arryNumbers);
console.log(getMinMax);



