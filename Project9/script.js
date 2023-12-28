let ids;
let idm;
document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault()
    let minutes = document.querySelector('#minutes').value
    let milliseconds = minutes*60*1000
    document.querySelector('#minutesDisplay').innerText = minutes < 10 ? `0${minutes}` : `${minutes}`
    let sec = 60
    document.querySelector('#secondsDisplay').innerText = `00`
    ids = setInterval(()=>{
        if(sec==60){
            document.querySelector('#minutesDisplay').innerText = minutes-1 < 10 ? `0${minutes-1}` : `${minutes-1}`
        }
        if(sec!=0){
            sec-=1
            document.querySelector('#secondsDisplay').innerText = sec < 10 ? `0${sec}` : `${sec}`
        }
        console.log('seconds')
    },1000)

    idm = setInterval(()=>{
        let date = new Date()
        date.setSeconds(0)
        minutes-=1
        sec = 59
        if(minutes!=0){
            document.querySelector('#secondsDisplay').innerText = sec < 10 ? `0${sec}` : `${sec}`
            document.querySelector('#minutesDisplay').innerText = minutes-1 < 10 ? `0${minutes-1}` : `${minutes-1}`
        }
    },60000)
    setTimeout(()=>{
        clearInterval(ids)
        clearInterval(idm)
        document.querySelector('#minutes').value = ''
        alert('Time completed')
    },milliseconds)
    
})
document.querySelector('form').addEventListener('reset',event=>{
    if(ids && idm){
        clearInterval(ids)
        clearInterval(idm)
        document.querySelector('#minutesDisplay').innerText = `00`
        document.querySelector('#secondsDisplay').innerText = `00`
    }
})