let float = document.getElementById('myFloat')
let flex = document.getElementById('flex')
let openButtons = document.querySelectorAll('.open-article')
let close = document.getElementById('close')


openButtons.forEach(boton => {
    boton.addEventListener('click', function(event){
        float.style.display = 'block'
    })
});

close.addEventListener('click', function () {
    float.style.display = 'none'
})

window.addEventListener('click', function(event){
    if (event.target == flex) {
        float.style.display = 'none'
    }
})