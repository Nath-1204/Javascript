//SELECTEURS

//document.querySelector('h4').style.background = 'yellow';

/*
const baliseHTML = document.querySelector('h4');
console.log(baliseHTML);
baliseHTML.style.background = 'yellow';
*/ 

//CLICK EVENT
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const response = document.querySelector('p');
//console.log(questionContainer);

//console.log(response);

//questionContainer.style.borderRadius = '150px'; 
questionContainer.addEventListener('click', ()=>{
    /*
    questionContainer.style.background = 'red';
    questionContainer.style.border = '3px solid teal';
    */ 
    
    //questionContainer.classList.add('question-click');
    //questionContainer.classList.remove('question-click');
    questionContainer.classList.toggle('question-click'); //s'il en a donc il ajoute

}); 

btn1.addEventListener('click', ()=>{
    //response.style.visibility = 'visible';
    response.classList.add('show-response');
    response.style.background = 'green';
});

btn2.addEventListener('click', ()=>{
    //response.style.visibility = 'visible';
    response.classList.add('show-response');
    response.style.background = 'red';
});

btn3.addEventListener('click', ()=>{
    //response.style.visibility = 'visible';
    response.classList.add('show-response');
    response.style.background = 'orange';
});

// <div> > #id > .class >baliseHTML

//-------------------------------------------------------------------------------------------------------

//MOUSE EVENTS
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e)=>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener('mouseup', ()=>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', ()=>{
    questionContainer.style.background = 'rgba(0,0,0,0.6)';
});

questionContainer.addEventListener('mouseout', ()=>{
    questionContainer.style.background = "teal";
});

response.addEventListener('mouseover', ()=>{
    response.style.transform = 'rotate(180deg)';
});

response.addEventListener('mousedown', ()=>{
    response.style.transform = 'rotate(-360deg)';
});

//-----------------------------------------------------------------------------------------------------------------------------------------

//KEYPRESS EVENTS

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = (key) =>{
    const audio = new Audio();
    audio.src = key + ".mp4";
    //console.log(audio.src);  
    audio.play(); 
}

document.addEventListener('keypress', (e)=>{
    //console.log(e.key);
    key.textContent = e.key;

    switch(e.key){
        case "a":
            keypressContainer.style.background = 'pink'; break;
        case "Enter":
            keypressContainer.style.background = "orange"; break;
        case "n":
            keypressContainer.style.background = "orangered"; break;
        case "l":
            keypressContainer.style.background = "orchid"; break;
        default:
            keypressContainer.style.background = "silver"; break;
    }
    
    /*
    if(e.key === "a"){
        keypressContainer.style.background = 'pink';
    }else if(e.key === "Enter"){
        keypressContainer.style.background = "teal";
    }else{
        keypressContainer.style.background = "red";
    }
    */
    
    ring("Enter");
});

//-------------------------------------------------------------------------------------------------------------------------------------------

//SCROLL EVENTS 

const nav = document.querySelector('nav');

window.addEventListener('scroll', ()=>{
    //console.log(window.scrollY);

    if(window.scrollY > 120){
        nav.style.top = 0;
    }else{
        nav.style.top = "-50px";
    }
});

//------------------------------------------------------------------------------------------------------------------------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = prompt("Entrez votre nom, svp!");
let language = "";

inputName.style.width = '250px';

inputName.addEventListener('click',()=>{
    pseudo ;
});

select.addEventListener('input', (e)=>{
    //console.log(e);
    language = e.target.value;
});

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    form.classList.toggle('form');

    //console.log(cgv.checked);
    if(cgv.checked){
        //on affiche le contenu des variables
        document.querySelector("form > div").innerHTML = pseudo.toUpperCase() + '<span> votre langage préféré est : ' + language + '</span>';
    }else{
        alert('Veuillez accepter les CGV');
    }
    
});

//---------------------------------------------------------------------------------

//LOAD EVENT

window.addEventListener('load', ()=>{
    //console.log("document chargé!");
});

//----------------------------------------------------------------------------------

const boxes = document.querySelectorAll('.box');
//console.log(boxes);

boxes.forEach(box => {
    box.addEventListener('click', (e)=> {
        box.style.transform = "scale(0.9)";
    }); 
});

//--------------------------------------------------------------------------------------------

//addEventListener VS onclick

/*
document.body.onclick = () => {
    console.log('Click !');
};
*/ 

//BUBBING => fin de base l'eventlistener est paramétré en mode Bubbling
document.body.addEventListener('click', ()=>{
    console.log('Click 1 !');
});

//USECAPTURE
document.body.addEventListener(
    'click', 
    ()=>{
        console.log('Click 2 !');
    },
    true
);

//-----------------------------------------------------------------------------------------------

// STOP PROPAGATION

/*
questionContainer.addEventListener('click', (e)=>{
    alert('Test !');
    e.stopPropagation();
});
*/

//REMOVE ADDEVENTLISTENER

//--------------------------------------------------------------------------------------------------

//BOM (Browser Object Model)

/*
console.log(window.innerHeight);
console.log(window.scrollY);
*/

btn2.addEventListener('click', ()=>{
    confirm('Mauvaise réponse ' + pseudo.toUpperCase() + ', essaye encore !');
    //questionContainer.innerHTML += 'Mauvaise réponse ' + pseudo.toUpperCase() + ', essaye encore !';
});

btn3.addEventListener('click', ()=>{
    confirm('Desolé '+ pseudo.toUpperCase() +', ce n\'est pas la bonne réponse !');
    //questionContainer.innerHTML += 'Desolé '+ pseudo.toUpperCase() +', ce n\'est pas la bonne réponse !';
});

//let answer;

//prompt
btn1.addEventListener('click', ()=>{
    pseudo ;

    questionContainer.innerHTML += "<h3>Bravo  " + pseudo.toUpperCase() + ", c'est la bonne réponse (: </h3>";
});

//Timer, compte à rebours
setTimeout(()=>{
    //logique à exécuter
    questionContainer.style.borderRadius = '300px';
}, 2000);

/*
setInterval(()=>{
    document.body.innerHTML += 
        '
            <div class='box'>
                <h2>Nouvelle boîte!</h2>
            </div>
        ';
}, 1000);
*/ 
 
//retirer un élément de DOM on utilise 
// e.target.remove();

//LOCATION
/*
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);
location.replace("http://lequipe.fr");
*/ 

/*
window.onload = () =>  {
    location.href = "http://twinter.fr";
};
*/ 

//NAVIGATOR
//console.log(navigator.userAgent);

//HISTORY
//console.log(window.history);
//window.history.back();

//history.go(-2);

//---------------------------------------------------------------------------------------------------------------------------

//SETPROPERTY
window.addEventListener('mousemove', (e)=>{
    nav.style.setProperty('--x', e.layerX+ 'px');
    nav.style.setProperty('--y', e.layerY+ 'px');
});
