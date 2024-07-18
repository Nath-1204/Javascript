const submit = document.getElementById('btn')
const Affichage = document.getElementById("affichage")
const inputField1 = document.querySelector('#textfield1')
const inputField2 = document.querySelector('#textfield2')
const inputField3 = document.querySelector('#textfield3')
const inputField4 = document.querySelector('#textfield4')
const inputField5 = document.querySelector('#textfield5')
const inputField6 = document.querySelector('#textfield6')
const inputField7 = document.querySelector('#textfield7')

submit.onclick = () => {

    const name = document.getElementById('name')
    const firstname = document.getElementById('firsame')
    const email = document.getElementById('email')
    const adresse = document.getElementById('adresse')
    const tel = document.getElementById('tel')
    const ville = document.getElementById('ville')
    const bio = document.getElementById('bio')

    name.innerHTML = inputField1.value;
    firstname.innerHTML = inputField4.value;
    email.innerHTML = inputField2.value;
    adresse.innerHTML = inputField3.value;
    tel.innerHTML = inputField5.value;
    ville.innerHTML  = inputField6.value;
    bio.innerHTML = inputField7.value;
    
    Affichage.hidden = 'false'
}