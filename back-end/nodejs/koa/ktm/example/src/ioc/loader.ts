import "../controllers/TestController";
import "../services/impl/TestServiceImpl";
import "../models/Test";
import "../dao/TestDao";



// import fs from "fs";
// import path from "path";


// loader
// (() => {
//     const folders: string[] = ["./src/services", "./src/models", "./src/controllers", "./src/dao"]
//     let files: any[] = [];
//     // read
//     folders.map(folder => {
//         const folderPath = path.resolve(folder);
//         files = [...files, ...fs.readdirSync(folderPath)];
//     })
//     // filter
//     files.filter(file => {
//         if (![__dirname, 'index.ts', 'index.js'].includes(file)) {
//             console.log("files module must be 'index.ts' or 'index.js'")
//         }
//         return file !== "index.ts";
//     }).map(async file => {
//         const filePath = path.resolve(file);
//         if (!fs.statSync(filePath).isDirectory()) {
//             await import(filePath)
//         }
//     })
// })();