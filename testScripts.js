const fs = require("fs/promises");
const path = require("path");
const terser = require("terser");

// MINIFYING CSS AND JS FILES
async function test() {
  let data = await fs.readFile(path.resolve(__dirname, "_src/assets/js/bundle.js"), 'utf-8');
  let minifiedJS = await terser.minify(data);

  fs.writeFile('_src/assets/js/bundle.min.js', minifiedJS.code, (err) => {
    console.log(err);
  })
};

test();