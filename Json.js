var jsonString = '{"name":"aakash","age":21,"city":"Delhi"}';
console.log(jsonString); 
console.log(typeof jsonString); 
var jsonObject = JSON.parse(jsonString);
console.log(jsonObject); 
console.log(typeof jsonObject); 


// Json Form
var jsonObject = {
    name: "aakash",
    age: 21,
    city: "Delhi"
};
console.log(jsonObject); 
console.log(typeof jsonObject);
var jsonString = (JSON.stringify(jsonObject));
console.log(jsonString);
console.log(typeof jsonString);
// Outputs: object
