let i = 0
let timer
let start = ()=>{
    timer= setInterval(
    ()=> {
        i += 1
    document.getElementById('time').
        innerHTML = i},
1000)
}

let pause = ()=>{
clearInterval(timer)
}
let stop = ()=>{
    i=0
    clearInterval(timer)

    document.getElementById('time').
        innerHTML = i
}
