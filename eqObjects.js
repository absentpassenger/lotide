//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};


// eqArrays function 
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false
  }
for (let i = 0; i < arrayOne.length; i++) {
  if (arrayOne[i] !== arrayTwo[i]) {
    return false
  }
} return true
};



//eqObjects function 
const eqObjects = function(object1, object2) {
  let kObject1 = Object.keys(object1);
  let kObject2 = Object.keys(object2);

  if (kObject1.length !== kObject2.length) {
    return false;
  }

  for (const key of kObject1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
    if (Array.isArray(kObject1[key]) && Array.isArray(kObject2[key])) {
      if (eqArrays(kObject1[key], kObject2[key])) {
        return true;
      }
    }
  }
  return true;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);