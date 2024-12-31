// // console.log("hello world");
// // process.exitCode = 0

// const _ = require("lodash")
// const arr = [1,2,34,5];
// console.log(_.chunk(arr));

// const car = require("./car");
const {ford, tesla} = require("./car")
const replacer = (key, value) => {
    if( key == "branch"){
        return undefined;
    }
    return value;
}

;
console.log(JSON.stringify(ford, replacer, 2));
console.log(JSON.stringify(tesla, null, 2));



