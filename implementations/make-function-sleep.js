const sleep=function(delay){
    return new Promise((resolve,reject)=>setTimeout(resolve,delay))
}
sleep(3000).then(()=>{
    console.log(`Slept for 3 seconds`);
})
const waitFor=async function(delay){
    const p=await sleep(delay)
    console.log(`Slept for 2 seconds`);
}
waitFor(2000)//not done yet