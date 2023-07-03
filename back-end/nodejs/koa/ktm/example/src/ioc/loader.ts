import "../controllers/TestController";
import "../controllers/UserController";
import "../controllers/ProductController";
import "../controllers/UploadController";
import "../services/impl/TestServiceImpl";
import "../services/impl/UserServiceImpl";
import "../services/impl/ProductServiceImpl";
import "../services/impl/UploadServiceImpl";
import "../models/Test";
import "../models/User";
import "../models/Product";
import "../dao/TestDao";
import "../dao/UserDao";
import "../dao/ProductDao";



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