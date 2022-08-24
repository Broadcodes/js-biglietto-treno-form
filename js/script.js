// Costanti fornite dall'esercizio
const PREZZO_UNITARIO_BIGLIETTO = 0.21;
const ETA_MINIMA = 18;
const ETA_MASSIMA = 65;
const SCONTO_BIGLIETTO_MINORENNE = 20;
const SCONTO_BIGLIETTO_OVER65 = 40;

// Variabili che conterranno i km e gli anni acquisiti in input
let kilometri = document.getElementById("kilometri");
let anni = document.getElementById("anni");

let button = document.getElementById("acquistaBiglietto");

button.addEventListener("click", function(){
    console.log(`kilometri: ${kilometri.value} e anni: ${anni.value}`);

    let valoreKilometri = kilometri.value;
    let valoreAnni = anni.value;

    // Condizione per verificare se il dato inserito sia realmente un numero e non una stringa.
    // In caso di errore mostra un messaggio all'utente
    if(!isNaN(valoreKilometri) && !isNaN(valoreAnni)){

        // Calcolo il prezzo del biglietto per i km inseriti dall'utente
        let prezzoBiglietto = PREZZO_UNITARIO_BIGLIETTO * valoreKilometri;

        // Condizione che permette di applicare lo sconto in base all'età dell'utente
        if(valoreAnni < ETA_MINIMA){
            prezzoBiglietto -= ((prezzoBiglietto * SCONTO_BIGLIETTO_MINORENNE) / 100);
        } else if(valoreAnni > ETA_MASSIMA){
            prezzoBiglietto -= ((prezzoBiglietto * SCONTO_BIGLIETTO_OVER65) / 100);
        }

        // Mostra a schermo il risultato finale in base all'età
        if(valoreAnni < ETA_MINIMA){
            document.getElementById("calcoloBiglietto").innerHTML = `Il prezzo del biglietto per un minorenne, con km ${valoreKilometri}, ammonta a € ${prezzoBiglietto.toFixed(2)}`;
        } else if(valoreAnni > ETA_MASSIMA){
            document.getElementById("calcoloBiglietto").innerHTML = `Il prezzo del biglietto per un over 65, con km ${valoreKilometri}, ammonta a € ${prezzoBiglietto.toFixed(2)}`;
        } else {
            document.getElementById("calcoloBiglietto").innerHTML = `Il prezzo del biglietto per km ${valoreKilometri}, ammonta a € ${prezzoBiglietto.toFixed(2)}`;
        }

        console.log(prezzoBiglietto.toFixed(2));

    } else {
        document.getElementById("calcoloBiglietto").innerHTML =`Il valore inserito non è corretto, aggiornare la pagina`;
    }
});


