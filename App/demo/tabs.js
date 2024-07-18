(function(){
    /*
    LORSQUE l'on clique sur un onglet
      On RETIRE la classe active de l'onglet actif
      J'ajoute la class active à l'onglet actuel

      On retire la class active sur le contenu actif
      J'ajoute la class active sur le contenu correspondant à mon clic

    */

    var afficherOnglet = function(a, animations){
       if(animations === undefined){
          animations = true
       } 
       var li = a.parentNode
       var div = a.parentNode.parentNode.parentNode
       var activeTab = div.querySelector('.tab-content.active') //contenu actif
       var aAfficher = div.querySelector(a.getAttribute('href')) // contenu à afficher

        if(li.classList.contains('active')){
           return false
        }

        //ON RETIRE la class active de l'onglet actif
        div.querySelector('.tabs .active').classList.remove('active')

        //J'ajoute la class active à l'onglet actuel
        li.classList.add('active')

        //On retire la class active sur le contenu actif
       // div.querySelector('.tab-content.active').classList.remove('active')

        //J'ajoute la class active sur le contenu correspondant à mon clic
       // div.querySelector(a.getAttribute('href')).classList.add('active')

        
        if(animations){
            activeTab.classList.add('fade')
            activeTab.classList.remove('in')
            activeTab.addEventListener('transitionend', function(){
                this.classList.remove('fade')
                this.classList.remove('active')
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.offsetWidth
                aAfficher.classList.add('in')
            })       
        }else{
            aAfficher.classList.add('active')
            activeTab.classList.remove('active')
        }
        //ON ajoute la class fade sur l'element actif 
        //A LA fin de l'animation 
        //      on retire le class fade et active
        //      on ajoute la class active et fade à l'élément à afficher
        //      on ajoute la class in
    }

    var tabs = document.querySelectorAll('.tabs a')
    for(var i = 0; i < tabs.length; i++){
       tabs[i].addEventListener('click', function(e){

        afficherOnglet(this)
       })
    }

   /*
    Je recupère le hash 
    AJOUTER LA CLASS ACTIVE sur le lien href="hash"
    RETIRER LA CLASS active sur les autres onglets
    AFFICHER / MASQUER les contenus 

   */

   var hash = windows.location.hash
   var a = document.querySelector('a[href = "' + hash + '"]')
   if (a !== null && !a.classList.contains('active')){
        afficherOnglet(a, false)
    }
})()