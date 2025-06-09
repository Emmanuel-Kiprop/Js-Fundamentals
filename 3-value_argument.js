// Grab the first argument (the third item in process.argv)
const firstArg = process.argv[2];

// If it's undefined, no argument was given
if (firstArg === undefined) {
  console.log("No argument");
} else {
  // Otherwise, print exactly what was given
  console.log(firstArg);
}

