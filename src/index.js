#!/usr/bin/env node
const fs = require("fs");
const genHook = require("./utils/genHook");
const path = require("path");

function main() {
    
    const args = process.argv.slice(2);
    if(args.length === 0) {
        console.error("Error: Specify a hook !");
        process.exit(1);
    }

    const hookName = args[0];
    const destination = args[1] || "hooks";

    const hooksDir = path.resolve(__dirname, '../hooks');
    const destinationDir = path.resolve(process.cwd(), destination);

    try {
        const allHooks = fs.readdirSync(hooksDir);
        let hookFound = false;

        for (let hookTxt of allHooks) {
            const hook = path.basename(hookTxt, ".txt").trim();
            if (hook === hookName) {
                genHook(hookName, destinationDir);
                hookFound = true;
                break;
            }
        }
   
        if (!hookFound) {
            console.log("Hook not found!");
        }

    } catch (err) {
        console.error(`Error reading hooks directory: ${err.message}`);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}