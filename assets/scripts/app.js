// 2 ways to import/export variables between files in JavaScript

// 1. you can import the default export with any name you like, but you do NEED to assign a name
import apikKey from "./util.js";

// console.log(apiKey);

// 2. if you want to import a named export, you MUST use the same name as the exported variable
// import { apikKey } from "./util.js";

// you also import multiple named exports (as an object) in one line:
import * as util from "./util.js";

console.log(util);
console.log(util.abc);
console.log(util.def);
console.log(util.default);

// 3. you can mix default and named imports in one line:
import apik, { abc, def } from "./util.js";

console.log(apik);
console.log(abc);
console.log(def);

// 4. you can also rename named imports using "as":
import { abc as myAbc, def as myDef } from "./util.js";

console.log(myAbc);
console.log(myDef);
