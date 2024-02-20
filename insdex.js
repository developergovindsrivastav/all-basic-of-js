var a = 1;
for (let i = 0; i < 10; i++) {
    console.log(a + i);
}
let obj = {
    name: "govind",
    class: "9th acheiver",
    percent: 100
}
for (const key in obj) {
console.log(key)
}
for (const keys of "govind") {
    console.log(keys)
}
let arr = [1,2,3,4,5,6,7,8,9,10]
let p = document.querySelector(".ram")
arr.forEach(lelu => {
    console.log(lelu)
    // p.innerHTML += lelu+1
     let rn = Math.floor(Math.random()*3)
     p.innerHTML += rn
});
try {
    console.log(arrrrr)
} catch (error) {
    console.log("mar gaya")
}
finally{
    console.log("finally")
}
// async await
a = [1,2,2,3,4]
const result = ()=>{
    let  b = setInterval(() => {
        console.log(a)
    }, 1000);
    clearInterval(b);
}
result();
// async await
async function fetchmy(){

    const result = await fetch("https://dummyjson.com/products/add")   
   const result2 = await result.json()
   result2.message =document.querySelector(".ram").innerHTML 
}

fetchmy();