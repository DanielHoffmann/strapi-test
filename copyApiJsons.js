const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

function copyFile(filePath, from, to) {
  const sourcePath = path.resolve(cwd, filePath);
  const finalPath = path.resolve(cwd, filePath.replace(from, to));
  if (!fs.existsSync(path.dirname(finalPath))) {
    fs.mkdirSync(path.dirname(finalPath), { recursive: true });
  }
  return new Promise((resolve, reject) => {
    fs.copyFile(sourcePath, finalPath, (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    });
  });
}

function findFilesByExtRecursive(base, ext, files, result) {
  files = files || fs.readdirSync(base);
  result = result || [];

  files.forEach(function (file) {
    const newbase = path.join(base, file);
    if (fs.statSync(newbase).isDirectory()) {
      result = findFilesByExtRecursive(
        newbase,
        ext,
        fs.readdirSync(newbase),
        result
      );
    } else {
      if (file.substr(-1 * (ext.length + 1)) == "." + ext) {
        result.push(newbase);
      }
    }
  });
  return result;
}

if (process.argv.find((v) => v === "--watch" || v === "-w")) {
  chokidar.watch("api_ts/**/routes.json", {}).on("all", (event, filePath) => {
    if (event === "add" || event === "change") {
      copyFile(filePath, "api_ts", "api")
        .then(() => {
          console.log(`Copied ${filePath}`);
        })
        .catch((err) => {
          console.error(`Error copying ${filePath}: ${err}`);
        });
    }
  });

  // when using the Content-types Builder it writes to api/modelName/models/modelName.settings.json
  // we want to get that file back into api_ts
  const files = findFilesByExtRecursive(
    path.resolve("api_ts"),
    "settings.json"
  );
  Promise.all(
    files.map((file) => {
      // copy .settings.json files to /api/
      return copyFile(file, "api_ts", "api");
    })
  ).then(() => {
    // listen for changes in /api/**/*.settings.json and copy them to /api_ts
    chokidar
      .watch("api/**/*.settings.json", {})
      .on("all", (event, filePath) => {
        if (event === "add" || event === "change") {
          copyFile(filePath, "api", "api_ts")
            .then(() => {
              console.log(`Copied ${filePath}`);
            })
            .catch((err) => {
              console.error(`Error copying ${filePath}: ${err}`);
            });
        }
      });
  });
} else {
  const files = findFilesByExtRecursive(path.resolve("api_ts"), "json");
  Promise.all(
    files.map((file) => {
      return copyFile(file, "api_ts", "api");
    })
  )
    .then(() => {
      console.log("All JSON files copied successfully");
    })
    .catch((err) => {
      console.error(`Error copying ${filePath}: ${err}`);
    });
}
