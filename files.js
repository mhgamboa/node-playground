const fs = require("fs");

fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) console.log(err);
  console.log(`Here is blog one: ${data.toString()}`);
});

console.log(fs.existsSync("./docs")); //checks if folder exists

console.log(fs.existsSync("./docs/blog1.txt")); //checks if folder exists
console.log(fs.existsSync("./docs/blog2.txt")); //checks if folder exists

//Creates/Deletes asset folder
if (fs.existsSync("./assets")) {
  fs.rmdir("./assets", (err) => {
    if (err) console.log(err);
  });
  console.log("Asset folder deleted");
} else {
  fs.mkdir("./assets", (err) => {
    if (err) console.log(err);
  });
  console.log("Asset folder created");
}
