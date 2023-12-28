function rollDie(){
    let num = Math.floor(Math.random()*6)+1
    document.querySelector('#dieResult').style.backgroundColor = randomColor()
    document.querySelector('#dieResult').innerText = num
}
const color = '123456789ABCDEF'
function randomColor(){
    let str = '#'
    for(let i = 0 ; i<6 ; i++){
        let rand = Math.floor(Math.random()*color.length)
        str += color[rand]
    }
    return str
}