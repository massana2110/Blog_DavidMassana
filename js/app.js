let float = document.getElementById('myFloat')
let flex = document.getElementById('flex')
let open = document.getElementById('open-article')
let close = document.getElementById('close')

open.addEventListener('click', function(){
    float.style.display = 'block'
})

close.addEventListener('click', function () {
    float.style.display = 'none'
})

window.addEventListener('click', function(event){
    if (event.target == flex) {
        float.style.display = 'none'
    }
})