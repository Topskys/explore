import createHeading from "./heading.js"
import "./index.css" // 相应样式loader也会运行
import icon from "./assets/logo512.png"; // 文件加载器
import footerHTML from "./footer.html"; // 默认导入html字符串 
import readMe from "./README.md"; 

const heading = createHeading();
document.body.append(heading);

const img=new Image();
img.src=icon;
document.body.append(img);

// 将html字符串写入页面中
document.write(footerHTML);

// md-loader
console.log(readMe)