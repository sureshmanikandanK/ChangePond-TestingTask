//Task 1

console.log('Task 1')
//Task 2
console.log('Task 2')
// setTimeout(()=>{
//     console.log('Task 2')
// },"1000");

//Task 3
console.log('Task 3')

//Task 4
console.log('Task 4')


function resolveAfter1Second(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved')
        },"1000");
        console.log(resolve)
    })
}

resolveAfter1Second().then(value =>{
    console.log(value);
    setTimeout(()=>{
        Promise.resolve('resolved')
    },5000)

}).then(value=>{
    console.log(value)
})
