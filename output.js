// // const x="1";
// // const y="2";

// // console.log(x,y);

// // //%s format variable to string
// // //%d
// // //%i
// // //%o
// // // console.log("I am %s and mu age is %d","Htoo",21);
// // // console.clear();
// // // console.count("I am htoo");
// // // console.count("I am htoo");
// // // console.count("I am aung");
// // // console.countReset("I am htoo");
// // // console.count("I am htoo");


// // const function1=()=>console.trace();
// // const function2=()=>function1();

// // function2();

// const sum=()=>console.log(`The sum of 2 and 3 is: ${2+3}`);
// const multiply=()=>console.log(`The multiplication of 2 and 3 is:${2*3}`);

// const measureTime=()=>{
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("sum()");
//     multiply();
//     console.timeEnd("sum()");
// };
// measureTime();
const progressBar=require("progress");

const bar=new ProgressBar("downloading [:bar] :rate/bps :percent :etas",{
    total:20,
});

const timer=setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
}, 100);

    
