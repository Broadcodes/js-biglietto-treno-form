// Costanti fornite dall'esercizio
const PREZZO_UNITARIO_BIGLIETTO = 0.21;
const ETA_MINIMA = 18;
const ETA_MASSIMA = 65;
const SCONTO_BIGLIETTO_MINORENNE = 20;
const SCONTO_BIGLIETTO_OVER65 = 40;

// Variabili che conterranno i km e gli anni acquisiti in input
const kilometri = document.getElementById("kilometri");
const anni = document.getElementById("anni");
const utente = document.getElementById("utente");

// Variabili globali
let button = document.getElementById("acquistaBiglietto");
let mostraSecondaScheda = document.getElementById("secondaSchermata");

// Controllo hamburger menu
const menu = document.querySelector("header");
const menuLista = document.querySelector("header ul");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const openIcon  = document.querySelector(".openIcon");

hamburger.addEventListener("click", function(){
    if (menuLista.classList.contains("showMenu")) {
        menu.style.height = "80px";
        menuLista.classList.remove("showMenu");
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
      } else {
        menu.style.height = "auto";
        menuLista.classList.add("showMenu");
        closeIcon.style.display = "block";
        openIcon.style.display = "none";
      }
});

  
 


button.addEventListener("click", function () {
    // Controllo dei campi vuoti
    if (utente.value === '') {
        utente.style.backgroundColor = "red";
    } else {
        utente.style.backgroundColor = "white";
    }

    if (kilometri.value === '') {
        kilometri.style.backgroundColor = "red";
    } else {
        kilometri.style.backgroundColor = "white";
    }

    if (anni.value === '') {
        anni.style.backgroundColor = "red";
    } else {
        anni.style.backgroundColor = "white";
    }

    // Controllo dei campi vuoti generale
    if (!(kilometri.value === '' || anni.value === '' || utente.value === '')) {
        mostraSecondaScheda.className = " visualizzaScheda";
    } else {
        mostraSecondaScheda.className = " disabilitaScheda";
    }

    console.log(`kilometri ${kilometri.value}, anni ${anni.value}, utente ${utente.value}`);

    let valoreKilometri = kilometri.value;
    let valoreAnni = anni.value;

    // Condizione per verificare se il dato inserito sia realmente un numero e non una stringa.
    // In caso di errore mostra un messaggio all'utente
    if (!isNaN(valoreKilometri) && !isNaN(valoreAnni)) {

        // Calcolo il prezzo del biglietto per i km inseriti dall'utente
        let prezzoBiglietto = PREZZO_UNITARIO_BIGLIETTO * valoreKilometri;

        // Condizione che permette di applicare lo sconto in base all'età dell'utente
        if (valoreAnni < ETA_MINIMA) {
            prezzoBiglietto -= ((prezzoBiglietto * SCONTO_BIGLIETTO_MINORENNE) / 100);
        } else if (valoreAnni > ETA_MASSIMA) {
            prezzoBiglietto -= ((prezzoBiglietto * SCONTO_BIGLIETTO_OVER65) / 100);
        }

        // Mostra a schermo il risultato finale in base all'età
        document.getElementById("nomePasseggero").innerHTML = `${utente.value}`;

        if (valoreAnni < ETA_MINIMA) {
            document.getElementById("offerta").innerHTML = `Sconto 20%`;
            document.getElementById("carrozza").innerHTML = Math.ceil(Math.random() * 15);
            document.getElementById("codiceCP").innerHTML = Math.ceil(Math.random() * 90000);
            document.getElementById("costoBiglietto").innerHTML = `${prezzoBiglietto.toFixed(2)}`;
        } else if (valoreAnni > ETA_MASSIMA) {
            document.getElementById("offerta").innerHTML = `Sconto 40%`;
            document.getElementById("carrozza").innerHTML = Math.ceil(Math.random() * 15);
            document.getElementById("codiceCP").innerHTML = Math.ceil(Math.random() * 90000);
            document.getElementById("costoBiglietto").innerHTML = `${prezzoBiglietto.toFixed(2)}`;
        } else {
            document.getElementById("offerta").innerHTML = `Biglietto Standard`;
            document.getElementById("carrozza").innerHTML = Math.ceil(Math.random() * 15);
            document.getElementById("codiceCP").innerHTML = Math.ceil(Math.random() * 90000);
            document.getElementById("costoBiglietto").innerHTML = `${prezzoBiglietto.toFixed(2)}`;
        }

        console.log(prezzoBiglietto.toFixed(2));
    }
});


