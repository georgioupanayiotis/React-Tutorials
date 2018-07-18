**Example1**

var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
 
  if (// worked) {
    resolve("Sucessfully completed");
  }
  else {
    reject("something went wrong"));
  }
});
--------------------------------

**Example 2**

Also chanining can be used, 
if used in a synchronous code, you want to do one after another.

getData('data.json').then(function(mydata) {
  return getData(mydata[0]);
}).then(function(mydata0) {
  console.log("Got mydata!", mydata);
})

--------------------------------

**Example 3**

Promises with Error functions.
Two functions inside the then(),
one for success and other for failure.

getData('data.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.log("Failed!", error);
})
--------------------------------

**Example 4**

Promises with catch

getData('data.json').then(function(response) {
  console.log("Success!", response);
}).catch(function(error) {
  console.log("Failed!", error);
})
--------------------------------

**Example 5**

All Promises at once

What if we have a chain of functions and
we want to process it only when all completes.

Then the code will be like this.

Promise.all(arrayOfPromises).then(function(arrayOfResults) {
  //...
})
