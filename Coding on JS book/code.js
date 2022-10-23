var word = "bottles";
var count = 99;
while (count > 0) {
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer,");
  console.log("Take one down, pass it around,");
  count = count - 1;
  if (count > 0) {
    console.log(count + " " + word + " of beer on the wall.");
  } else {
    console.log("No more " + word + " of beer on the wall.");
  }
}

var temp = 81;
var willRain = true;
var humid = temp > 80 && willRain == true;
console.log(humid);

// This will display an alert box.
true && alert("Hello"); // This won't do anything.
false && alert("Not hello");
