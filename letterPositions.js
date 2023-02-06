// assertArraysEqual function 
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
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


//letter position function

const letterPositions = function(sentence) {
  const results = {};

  for (i = 0; i < sentence.length; i++) {
    
      if (!results[sentence[i]]) {
        (results[sentence[i]]) = [i]
      } else {
        results[sentence[i]].push([i])
      
    }

  }
  // logic to update results here
  return results;
};




assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"))