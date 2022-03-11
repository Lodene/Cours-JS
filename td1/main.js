// Ex 1
const btn = document.querySelector('#bouton');
var prenom, nom;

function afficherNomPrenom(){
    prenom = document.querySelector('#prenom').value;
    nom = document.getElementById("nom").value;
    console.log("EX1, Bonjour", prenom, nom);
}

// Ex 2, partie 1
const voyelle = ["a", "e", "i", "o", "u", "y"];
var compteurVoyelle = 0;

function nombreVoyelle(){
    var mot = document.querySelector('#mot').value;
    var tabMot = mot.split('');
    for(var x = 0; x <= tabMot.length; x++){
        for(var i = 0; i <= 5; i++){
            if (tabMot[x] == voyelle[i]){
                compteurVoyelle++ ;
            }
        }
    }
    console.log("EX2 partie 1, Nombre de voyelle(s) : ", compteurVoyelle);
}


// Ex 3
var max, min;
function splitTab(chiffre){
    if (chiffre === 1){
        var chiffres = document.querySelector('#tab').value;
        tableau = chiffres.split('');
        petitEtGrandTableau(tableau);
    } else if (chiffre  === 2){
        var chiffres = document.querySelector('#tabParti3').value;
        tableau = chiffres.split('');
        moyenneArray(tableau);
    } else if (chiffre === 3){
        var chiffres = document.querySelector('#tabParti4').value;
        tableau = chiffres.split('');
        codePin(tableau);
    } else if (chiffre === 4){
        var phrase = document.querySelector('#tabParti5').value;
        majusculeMinuscule(phrase);
    } else if (chiffre === 5){
        var age = document.querySelector('#age').value;
        choixAge(age);
    }
}

// Ex2, partie 2
function petitEtGrandTableau(tableau){
    if (tableau != null){
        max = tableau[0];
        min = tableau[0];
        for (var i = 0; i < tableau.length; i++) {
            if (max < tableau[i]){
                max = tableau[i];
            } else if (min > tableau[i]){
                min = tableau[i];
            }
        }
    }
    console.log("Ex2 partie 2, max : ", max, " min : ", min);
}

// Ex2, partie 3
function moyenneArray(tableau){
    var moyenne = 0;
    if (tableau != null){
        console.log(moyenne);
        for (var i = 0; i < tableau.length; i++) {
            console.log(moyenne, " = ", tableau[i], " + ", moyenne);
            moyenne = parseInt(tableau[i]) + moyenne;
        }
        moyenne = moyenne / tableau.length;
    }
    console.log("Ex2 partie 3, moyenne = ", moyenne);
}

// Ex2, partie 4
function codePin(tableau){
    if (tableau.length == 4 || tableau.length == 6){
        console.log("Ex2 partie 4, True");
    } else {
        console.log("Ex2 partie 4, False");
    }
}

// Ex2, partie 5
function majusculeMinuscule(phrase){
    var min, maj;
    min = phrase.toLowerCase();
    maj = phrase.toUpperCase();
    console.log("Ex2 partie 5, minuscule : ", min);
    console.log("Ex2 partie 5, majuscule : ", maj);
}

// Ex3
function choixAge(nbr){
    var age = parseInt(nbr);
    if (age <= 17){
        console.log("Vous n'êtes pas encore majeur.");
    } else if (age >= 18 && age <= 49){
        console.log("Vous êtes majeur mais pas encore senior.");
    } else if (age >= 50 && age <= 59){
        console.log("Vous êtes senior mais pas encore retraité.");
    } else if (age >= 60 && age <= 120){
        console.log("Vous êtes retraité, profitez de votre temps libre ! ");
    }
}