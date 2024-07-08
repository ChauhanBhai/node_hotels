// const pro1 = new Promise((res,rej)=>{
//     res('Succesfully');
//     rej('Failed');
// })
// pro1.then(
//     (data)=>{console.log(`true:${data}`);},
//     (err)=>{console.log(`Error!~!! : ${err}`)}
// )



// const pro1 = new Promise((res,rej)=>{
//     const temp=3;
//     if (!(temp > 9)){
//         res('Succesfully');
//     }else{
//         rej('Failed');
//     }
// })
// pro1.then(
//     (data)=>{console.log(`true:${data}`);},
//     (err)=>{console.log(`Error!~!! : ${err}`)}
// )


// let ready = "00000000";
// const checker =new Promise ((resolve,reject)=>{
//     if (ready==="00000001"){
//         const markReady = 'This is the result';
//         resolve(markReady)}
//         else{
//             const markNotReady = 'Still working on it. ';
//             reject(markNotReady)
//         }
// })
// console.log(checker);