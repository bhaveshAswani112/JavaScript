document.querySelector('form').addEventListener('submit',(event) =>{
    event.preventDefault()
    let weight = parseFloat(document.querySelector('#weight').value);
    let height = parseFloat(document.querySelector('#height').value);
    let bmi = calculateBMI(weight,height)
    let categ = category(bmi)
    document.querySelector('#result').style.display = 'block'
    document.querySelector('#bmiValue').innerText = `${bmi}`
    document.querySelector('#bmiCategory').innerText = `${categ}`
    document.querySelector('#weight').value = ''
    document.querySelector('#height').value = ''
})
function calculateBMI(weight,height){
    height = height/100;
    let bmi = weight/(height*height);
    return bmi.toFixed(2)
}

function category(bmi){
    if(bmi<18.5){
        return 'UnderWeight'
    }
    else if(bmi>=18.5 && bmi<=24.9){
        return 'Healthy Weight'
    }
    else{
        return 'OverWeight'
    }
}