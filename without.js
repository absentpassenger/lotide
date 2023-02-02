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




// assertarraysEqual function
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
};





// without function 

const without = function(source, itemsToRemove){
  let newArray = []
  for (let i = 0; i < source.length; i++) {
    let shouldIPush = true
    for (let x = 0; x < itemsToRemove.length; x++) {

      // console.log(source[i],itemsToRemove[i])
      if (source[i] === itemsToRemove[x]) {
        shouldIPush = false
      }
    }
    if (shouldIPush) {
      newArray.push(source[i])
    }
  }
  return newArray
}


assertArraysEqual(without([1, 2, 3], [1] ),[2,3]) 
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]) 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// console.log(words)
// console.log("withouttest", without(words, ["lighthouse"]))
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
