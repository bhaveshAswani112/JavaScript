function openLightbox(image){
    if(document.querySelector('.lightbox-content')){
        return 
    }
    let box = document.querySelector('.lightbox')
    let img = document.createElement('img')
    img.classList.add('lightbox-content')
    img.id = 'lightbox-image'
    img.src = `images/${image}`
    box.style.display = 'flex'
    box.appendChild(img)
}

function closeLightbox(){
    let child = document.querySelector('.lightbox-content')
    if(child){
        document.querySelector('.lightbox').style.display = 'none'
        document.querySelector('.lightbox').removeChild(child)
    }
}