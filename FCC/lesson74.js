const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if ((par, strokes == 1)) {
    return "Hole-in-one!";
  } else if ((par, strokes <= par - 2)) {
    return "Eagle";
  } else if ((par, strokes == par - 1)) {
    return "Birdie";
  } else if ((par, strokes == par)) {
    return "Par";
  } else if ((par, strokes == par + 1)) {
    return "Bogey";
  } else if ((par, strokes == par + 2)) {
    return "Double Bogey";
  } else if ((par, strokes >= par + 3)) {
    return "Go Home!";
  } else {
    return "Change Me";
    // Only change code above this line
  }

  golfScore(5, 4);
}
