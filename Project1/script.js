document.querySelector('#tipPercentage').value = ''
function calculateTip(){
    let bill = document.querySelector('#billAmount').value
    let tip = document.querySelector('#tipPercentage').value
    let result = tip*bill/100
    document.querySelector('#tipResult').innerText = Math.round(result)
    document.querySelector('#billAmount').value = ''
    document.querySelector('#tipPercentage').value = ''
}