/**
 Lorsque je clique sur le boutton dans .spoiler
 Alors
    J'ajoute la classe .visible à l'élement suivant


var button = document.querySelector('.spoiler button')
button.addEventListener('click', function(){
    this.nextElementSibling.classList.add('visible')
    this.parentNode.removeChild(this)
})

**/

var elements = document.querySelectorAll('.spoiler')

var createSpoilerButton = function(element){
   
    // on crée la span .spoiler-content
    var span = document.createElement('span')
    span.className = 'spoiler-content'
    span.innerHTML = element.innerHTML

    //On crée le boutton
    var button = document.createElement('button')
    button.textContent = 'Afficher le spoiler'

    //On ajoute les éléments au DOM
    element.innerHTML = ''
    element.appendChild(button)
    element.appendChild(span)

    //On met l'écouteur au click
    button.addEventListener('click', function(){
        button.parentNode.removeChild(button)
        span.classList.add('visible')
    })
}


for(var i = 0; i < elements.length; i++){
    createSpoilerButton(elements[i])
}

