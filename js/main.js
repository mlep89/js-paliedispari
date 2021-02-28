
//primo esercizio
/* Non sono in grado di capire il ragionamento 
logico necessario ad individuare una parola palindroma.*/

//Secondo esercizio
var SceltaUtente = prompt("Digita: Pari o Dispari");
console.log(SceltaUtente);
var NumUtente = parseInt(prompt("Digita un numero da 1 a 5"));
console.log(NumUtente);

function GeneratoreNumeri() {
    return NumGenerato = Math.floor(Math.random() * 5) + 1;
}

var NumCpu = GeneratoreNumeri();
console.log(NumCpu);

NumFinale = NumUtente + NumCpu;
console.log(NumFinale);

function PariD (x) {
    if (x %2 == 0) {
        return "Pari";
    } 
    return "Dispari";
}
ValoreFinale = PariD(NumFinale);
console.log(ValoreFinale);

if (ValoreFinale == SceltaUtente) {
    alert("Complimenti hai vinto!");
}
else {
    alert("CPU ha vinto");
}