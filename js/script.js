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





