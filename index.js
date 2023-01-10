function receivesAFunction(callback) {
  callback()
}
function returnsANamedFunction() {
  return function named() {
    console.log("She has a name.")
  }
}
function returnsAnAnonymousFunction() {
  return function() {
    console.log('She does not have a name.')
  }
}