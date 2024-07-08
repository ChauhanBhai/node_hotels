// console.log("Server file is running") 
// function add(a,b)
// {
//  return a+b
// }
// var result = add(1,8);
// console.log(result)
// let a = 5;
// let b = 6;
// console.count('test'+a)
// console.count('test'+a)
// console.clear();
// console.count('test'+b);
// console.warn('warn');
// console.info('info');
// console.table([{a:1,b:2},{a:5,b:50}])

// const first = process.argv[1];
// const second = process.argv[3];
// console.log("hi"+ process.argv[0]+second)


/*Open the REPL mode and list the process object. Return the process.
ppid and the pid into the terminal.*/ 
// console.log(process)
// console.log(process.pid)
// console.log(process.ppid)


/*Run the node script with 2 arguments: your first name and lastname.
 Create a node application and output process.argv[2] process.argv[3] 
 into the terminal like the example below. */
// console.log(process.argv[0],process.argv[1]);
// const first = process.argv[2];
// const second = process.argv[3];
// console.log(`hi ${first} ${second}`)



// for (let x = 0; x<100; x++){
//     console.log(x);
//     if (x>9){
//         process.exit();
//     }
// }

// let aakash =6;
// let hsakaa = 8;



// const click = (num) =>{
//     num.push(num.shift());
//     console.log(num);
// };
// let num = [1,2,3,4,5];
// console.log(typeof num);



// Fuction Closure 

// function maker( a ,b){
//     return function (){
//         return a+b;
//         }
// }
// function d (x, y){
// let sumFunction = maker(x,y);
// let sum = sumFunction();
// console.log("Sum:",sum); 
// }
// d(4,7);



// let count =5;
// for (let x = 0; x<=10;x++){
//     console.log(x)
//     count++
//     console.log(count)
// }




// const arr=[1,2,3,4,5,6];
// arr.map(element => {
//     console.log(element)
// }); 



// const arr = [1,2,3,4,5];
// let counter = 0;


// function aFun(arr,callback){  
//     arr.forEach((el)=>{
//         setTimeout(callback,1000,el);
//     })
//     arr .forEach((el)=>{
//         setTimeout(callback,0,`${el}-`);
//     })
// }
// aFun(arr, (val) => {
//     counter++;
//     console.log(counter+' '+val);
// })
// counter++;
// console.log(counter+' '+'test');




// function sum (a,b){
//     return a+b;
// }
// function num(x,y,sum){
//  return sum (x,y)
// }
// console.log(num(2,3,sum))





// function test1(){
//     return test1();
// }
// console.log('one');
// test1();
// console.log('two');



// function recursive(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * recursive(n - 1);
//     }
// }

// module.exports = {
//     recursive
// };


