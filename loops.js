var obj={
    name:"vandana",
    age:22,
    city:"hyd"
}
for (key in obj){
    console.log(key)
   
    }
    console.log(obj["name"])

   // Print Array in Reverse Order


function printArrayReverse(arr) {
  return arr.slice().reverse();
}

const inputArray = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
console.log(printArrayReverse(inputArray));
    

// Print String in Reverse Order


function reverseString(str) {
  return str.split("").reverse().join("");
}

const inputString = "vamsi";
console.log(reverseString(inputString));
// Output: "ismav"

const anotherString = "hello";
console.log(reverseString(anotherString));

// Print Age from Array


function findAge(arr) {
  return arr.find(obj => obj && obj.age);
}

const newArray = [1, 2, 3, 4, 5, { id: 1, age: 25 }, [1, 2, 3]];
const ageObject = findAge(inputArray);
console.log(ageObject.age);