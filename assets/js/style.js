//fonction pour faire apparaître lettre par lettre
var chaine = " // Voici mon curriculum vitæ "; 
var nb_car = chaine.length; 
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
var txt = texte[i];
}

actual_texte = 0;
function changeMessage()
{
document.getElementById("bloc").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
}
if(document.getElementById)

setInterval("changeMessage()",150) /* la vitesse de defilement (plus on a une valeur faible plus 
texte s'affiche rapidement) */


// var chaine2 = "laurent"; 

// var nb_car2 = chaine2.length; 
// var tableau2 = chaine2.split("");
// texte2 = new Array;
// var txt2 = '';
// var nb_msg2 = nb_car2 - 1;
// for (i=0; i<nb_car2; i++) {
// texte2[i] = txt2+tableau2[i];
// var txt2 = texte2[i];
// }

// actual_texte2 = 0;
// function changeMessage2()
// {
// document.getElementById("bloc2").innerHTML = texte2[actual_texte2];
// actual_texte2++;
// if(actual_texte2 >= texte2.length)
// actual_texte2 = nb_msg2;
// }
// if(document.getElementById)

// setInterval("changeMessage2()",150) /* la vitesse de defilement (plus on a une valeur faible plus 
// texte s'affiche rapidement) */