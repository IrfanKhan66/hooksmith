const fs = require("fs");
const path = require("path");
const {renameFromKebabToCamel} = require("./methods");

const genHook = (hookName, folderPath) => {
    try {

        const hooksDir = path.resolve(__dirname, '../../hooks');
        const data = fs.readFileSync(path.join(hooksDir, `${hookName}.txt`), {
            encoding: "utf8"
        });
        const finalPath = path.isAbsolute(folderPath) ? folderPath : path.join(process.cwd(), folderPath);

        if (!fs.existsSync(finalPath)) {
            fs.mkdirSync(finalPath, { recursive: true });
        }
        const filePath = path.join(finalPath, `${renameFromKebabToCamel(hookName)}.js`);
        fs.writeFileSync(filePath, data, {
            encoding: "utf8",
        });

        console.log(`${renameFromKebabToCamel(hookName)} hook successfully generated in ${path.relative("../",path.join(folderPath, `${renameFromKebabToCamel(hookName)}.js`))} !`);

    } catch(err) {
        console.error(`Failed to generate hook ! ${err}`);
        process.exit(1);
    }
}

module.exports = genHook;