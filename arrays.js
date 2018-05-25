var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(element,array){
  var newArr = [element,...array]
  return newArr
}
function destructivelyAddElementToBeginningOfArray(element, array){
  array.unshift
  return array
}

function addElementToEndOfArray() {
  var newArr = [array,...element]
  return newArr
}

function destructivelyAddElementToEndOfArray() {
  array.push(elemnt)
}

function accessElementInArray (array, index) {
  console.log(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
return array.shift  
} 

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop()
  return array
}
removeElementFromEndOfArray