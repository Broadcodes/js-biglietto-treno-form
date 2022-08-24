/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/ 

// Costanti fornite dall'esercizio
const PREZZO_UNITARIO_BIGLIETTO = 0.21;
const ETA_MINIMA = 18;
const ETA_MASSIMA = 65;
const SCONTO_BIGLIETTO_MINORENNE = 20;
const SCONTO_BIGLIETTO_OVER65 = 40;

// Variabili che conterranno i km e gli anni acquisiti in input
let kilometri = prompt("Inserire il numero di chilometri che si vuole percorrere oggi:");
let anni = prompt("Inserire il numero di anni:");

// Condizione per verificare se il dato inserito sia realmente un numero e non una stringa.
// In caso di errore mostra un messaggio all'utente
if(!isNaN(kilometri) && !isNaN(anni)){

    // Calcolo il prezzo del biglietto per i km inseriti dall'utente
    let prezzoBiglietto = PREZZO_UNITARIO_BIGLIETTO * kilometri;

    // Condizione che permette di applicare lo sconto in base all'età dell'utente
    if(anni < ETA_MINIMA){
        prezzoBiglietto -= ((prezzoBiglietto * SCONTO_BIGLIETTO_MINORENNE) / 100);
    } else if(anni > ETA_MASSIMA){
        prezzoBiglietto -= ((prezzoBiglietto * SCONTO_BIGLIETTO_OVER65) / 100);
    }

    // Mostra a schermo il risultato finale in base all'età
    if(anni < ETA_MINIMA){
        document.getElementById("calcoloBiglietto").innerHTML = `Il prezzo del biglietto per un minorenne, con km ${kilometri}, ammonta a € ${prezzoBiglietto.toFixed(2)}`;
    } else if(anni > ETA_MASSIMA){
        document.getElementById("calcoloBiglietto").innerHTML = `Il prezzo del biglietto per un over 65, con km ${kilometri}, ammonta a € ${prezzoBiglietto.toFixed(2)}`;
    } else {
        document.getElementById("calcoloBiglietto").innerHTML = `Il prezzo del biglietto per km ${kilometri}, ammonta a € ${prezzoBiglietto.toFixed(2)}`;
    }

    console.log(prezzoBiglietto.toFixed(2));

} else {
    alert("ATTENZIONE: Il valore inserito non è corretto, aggiornare la pagina");
}


