const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) && (eqArrays(arrayOne[i], arrayTwo[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(arrayOne[i])) && arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true 
};


//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

//eqArrays([1, 2, 3], [3, 2, 1]) // => false
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)

//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)




const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
};

assertArraysEqual(["1", "2", "3"], ["1", "2", 3])
