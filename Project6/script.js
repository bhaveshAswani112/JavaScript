function setTime(){
    setInterval(()=>{
        let date = new Date()
        document.querySelector('#time').innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `
        },1000)
}

setTime()