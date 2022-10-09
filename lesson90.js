function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// Hints

// You do not need to declare any additional variables or define any objects inside of your function. You must use the function arguments obj and checkProp.

// Testing Objects for Properties

// Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

// Example

// const myObj = {
//   top: "hat",
//   bottom: "pants"
// };

// myObj.hasOwnProperty("top");
// myObj.hasOwnProperty("middle");

// The first hasOwnProperty returns true, while the second returns false.

// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
