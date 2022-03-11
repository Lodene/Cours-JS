//EX 1
const btnOn = document.querySelector('#btnOn');
const btnOff = document.querySelector('#btnOff');
const lampe = document.querySelector('#lumiere');
const lampeImg = document.querySelector('#lampe');

function lumiere(chiffre){
    if ( chiffre == 0){
        lampe.style.backgroundColor = "black";
        lampeImg.src="eteint.png";
        console.log("on eteint");
    } else {
        lampe.style.backgroundColor = "yellow";
        lampeImg.src="allume.png";
        console.log("on allume");
    }
}

//EX 2
const pseudo = document.querySelector('#pseudo');
const age = document.querySelector('#age');
const identifiant = document.querySelector('#identifiant');
const mail = document.querySelector('#mail');
const mdp = document.querySelector('#mdp');
const mdpConf = document.querySelector('#mdpConf');
const accept = document.querySelector('#accept');
const validerBtn = document.querySelector('#validerBtn');

const pseudoText = document.querySelector('#pseudoText');
const ageText = document.querySelector('#ageText');
const identifiantText = document.querySelector('#identifiantText');
const mailText = document.querySelector('#mailText');
const mdpText = document.querySelector('#mdpText');
const mdpConfText = document.querySelector('#mdpConfText');
const acceptText = document.querySelector('#acceptText');
const erreur = document.querySelector('#erreur');
const mdpTextDeux = document.querySelector('#mdpTextDeux');

var a = [0, 0, 0, 0, 0];

function verificationPseudo(){
    return pseudo.value.length >= 2 && pseudo.value.length <= 25;
}

function infoPseudo(){
    if (!verificationPseudo()){
        pseudo.style.borderColor = "red";
        pseudoText.innerHTML = "Il faut entre 2 et 25 carractères";
    } else {
        pseudo.style.borderColor = "green";
        pseudoText.innerHTML = "";
    }
}


function verificationAge(){
    return age.value >= 15 && age.value <= 115;
}

function infoAge(){
    if (!verificationAge()){
        age.style.borderColor = "red";
        ageText.innerHTML = "Il faut être majeur";
    } else {
        age.style.borderColor = "green";
        ageText.innerHTML = "";
    }
}

function verificationIdentifiant(){
    var onlyLetters = /^[a-zA-Z]*$/.test(identifiant.value);
    return identifiant.value.length >= 12 && onlyLetters == true
}

function infoIdentifiant(){
    if (!verificationIdentifiant()){
        identifiant.style.borderColor = "red";
        identifiantText.innerHTML = "il faut au moins 12 carractères avec QUE des lettres";
    } else {
        identifiant.style.borderColor = "green";
        identifiantText.innerHTML = "";
    }
}

function verificationMail(){
    var exp= /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ ;
    console.log(mail.value.match(exp))
    if(mail.value.match(exp)){
        return true;
    } else {
        return false;
    }
}

function infoMail(){
    if (!verificationMail()){
        mail.style.borderColor = "red";
        mailText.innerHTML = "le format du mail est incorrecte";
    } else {
        mail.style.borderColor = "green";
        mailText.innerHTML = "";
    }
}

function verificationMdp(){
    var phrase = mdp.value;
    if (mdp.value.length >= 8 && a[4] == 0){
        a[4] = 1;
    } else if (mdp.value.length <= 8 && a[4] == 1) {
        a[4] = 0;
    }
    if (phrase.match(/[A-Z]/g) != null && a[3] == 0){
        a[3] = 1;
    } else if (phrase.match(/[A-Z]/g) == null && a[3] == 1) {
        a[3] = 0;
    }
    if (phrase.match(/[a-z]/g) != null && a[2] == 0){
        a[2] = 1;
    } else if (phrase.match(/[a-z]/g) == null && a[2] == 1) {
        a[2] = 0;
    }
    if (phrase.match(/[1-9]/g) != null && a[1] == 0){
        a[1] = 1;
    } else if (phrase.match(/[1-9]/g) == null && a[1] == 1) {
        a[1] = 0;
    }
    if (phrase.match(/\W/g) != null && a[0] == 0){
        a[0] = 1;
    } else if (phrase.match(/\W/g) == null && a[0] == 1) {
        a[0] = 0;
    }
    var compteur = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 1){
            compteur = compteur + 1;
        } 
    }
    switch (compteur) {
        case 0:
            mdpText.innerHTML = "0%";
            mdp.style.borderColor = "red";
            break;
        case 1:
            mdpText.innerHTML = "20%";
            mdp.style.borderColor = "red";
            break;
        case 2:
            mdpText.innerHTML = "40%";
            mdp.style.borderColor = "red";
            break;
        case 3:
            mdpText.innerHTML = "60%";
            mdp.style.borderColor = "red";
            break;
        case 4:
            mdpText.innerHTML = "80%";
            mdp.style.borderColor = "red";
            break;
        case 5:
            mdpText.innerHTML = "100%";
            mdp.style.borderColor = "green";
            return true;
        default:
            mdpText.innerHTML = "what ?";
            break;
    }
    return false;
}

function infoMdp(){
    if (!verificationMdp()){
        mdp.style.borderColor = "red";
        mdpTextDeux.innerHTML = "le mdp n'est pas correcte";
    } else {
        mdp.style.borderColor = "green";
        mdpTextDeux.innerHTML = "";
    }
    
}

function verificationDeuxiemeMdp(){
    return mdpConf.value == mdp.value;
}

function infoDeuxiemeMdp(){
    if (!verificationDeuxiemeMdp()){
        mdpConf.style.borderColor = "red";
        mdpConfText.innerHTML = "Ce n'est pas le meme mdp";
    } else {
        mdpConf.style.borderColor = "green";
        mdpConfText.innerHTML = "";
    }
}


function end(){
    if(accept.checked == true){
        if (verificationPseudo() && verificationAge() && verificationIdentifiant() && verificationMail() && verificationMdp() && verificationDeuxiemeMdp()){
            erreur.innerHTML = "Vous etes connecté !";
        } else {
            erreur.innerHTML = "Remplissez TOUS les champs";
        }
    }
    else{
        erreur.innerHTML = "Il faut accepter les conditions";
    }
}


window.addEventListener("load", function() {
    pseudo.addEventListener("input", infoPseudo);
    age.addEventListener("input", infoAge);
    identifiant.addEventListener("input", infoIdentifiant);
    mail.addEventListener("input", infoMail);
    mdp.addEventListener("input", infoMdp);
    mdpConf.addEventListener("input", infoDeuxiemeMdp);
});