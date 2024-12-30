// // const x = '1';
// // const y = 'Anu';
// // console.log(x,y);
// // console.log("I am %s and my age is %d", "Anu", 21);

// // console.count("A");
// // console.count("A");
// // console.count("A");
// // console.count("D");
// // console.countReset("A");
// // console.count("A")



// // const func = () => console.trace();
// // const func2 = () => func();
// // func2();

// const sum = () => console.log(`the sum of 2 numbers is ${2+1}`);
// const mult = () => console.log(`the multiply of 2 numbers is ${2*3}`);

// const measureTime = () => {
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("mult()");
//     mult();
//     console.timeEnd("mult()");
    
// }
// measureTime()

const pb = require("progress");
const bar = new pb("downloading [:bar] :rate/bps :precent :etas", {
    total: 20,
});

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100)








