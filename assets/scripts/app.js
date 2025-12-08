// 2 ways to import/export variables between files in JavaScript

// 1. you can import the default export with any name you like, but you do NEED to assign a name
import apikKey from "./util.js";

console.log(apikKey);

// 2. if you want to import a named export, you MUST use the same name as the exported variable
// import { apikKey } from "./util.js";

// you also import multiple named exports (as an object) in one line:
import * as util from "./util.js";

console.log(util);
console.log(util.abc);
console.log(util.def);
