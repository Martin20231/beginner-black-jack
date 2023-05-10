variant = ["❤", "♠", "♦","✖"];
werte = [
    "Zwei",
    "Drei",
    "Vier",
    "Fünf",
    "Sechs",
    "Sieben",
    "Acht",
    "Neun",
    "Zehn",
    "König",
    "Dame",
    "Ass",
    "Bube"
]
chip_wert = [1, 5, 25, 100];

const chip_weiß = 1;
const chip_rot = 5;
const chip_grün = 25;
const chip_schwarz = 100;

anz_weiß = 10;
anz_rot = 8;
anz_grün = 6;
anz_schwarz=3;

anz_weiß1 = 0;
anz_rot1 = 0;
anz_grün1 = 0;
anz_schwarz1=0;

chipGesamtStart_spieler = 500;
einsatz_geld =0;

document.getElementById("geld_spieler").innerHTML = "Geld:</br>" + chipGesamtStart_spieler +"€";


//Klick auf den weißen Chips + Geld spieler + wieviel gesetzt ist
function klick_weiß(){
    anz_weiß = anz_weiß -1;
    if(anz_weiß < 1){
        alert("Du hast noch keine weißen Chips mehr!");
        document.getElementById('chip_weiß_stop').onclick = null;
    }
    chipGesamtStart_spieler = chipGesamtStart_spieler - chip_weiß;
    summeChips = (anz_weiß1 +1) * chip_weiß ;
    einsatz_geld = einsatz_geld + summeChips;
    document.getElementById("anzahl_chip_weiß").innerHTML = anz_weiß;
    document.getElementById("geld_spieler").innerHTML = "Geld:</br>" + chipGesamtStart_spieler +"€";
    document.getElementById("geld_einsatz_spieler").innerHTML = "Geld:</br>" + einsatz_geld +"€";
    if(chipGesamtStart_spieler === 0){
        alert("Du bist pleite & hast verloren");
}}
//Klick auf den roten Chips + Geld spieler + wieviel gesetzt ist
function klick_rot(){
    anz_rot = anz_rot -1;
    if(anz_rot < 1){
        alert("Du hast noch keine roten Chips mehr!");
        document.getElementById('chip_rot_stop').onclick = null;
    }
    chipGesamtStart_spieler = chipGesamtStart_spieler - chip_rot;
    summeChips = (anz_rot1 +1) * chip_rot ;
    einsatz_geld = einsatz_geld + summeChips;
    document.getElementById("anzahl_chip_rot").innerHTML = anz_rot;
    document.getElementById("geld_spieler").innerHTML = "Geld:</br>" + chipGesamtStart_spieler +"€";
    document.getElementById("geld_einsatz_spieler").innerHTML = "Geld:</br>" + einsatz_geld +"€";
    if(chipGesamtStart_spieler === 0){
        alert("Du bist pleite & hast verloren");
}}
//Klick auf den grünen Chips + Geld spieler + wieviel gesetzt ist
function klick_grün(){
    anz_grün = anz_grün -1;
    if(anz_grün < 1){
        alert("Du hast noch keine grünen Chips mehr!");
        document.getElementById('chip_grün_stop').onclick = null;
    }
    chipGesamtStart_spieler = chipGesamtStart_spieler - chip_grün;
    summeChips = (anz_grün1 +1) * chip_grün ;
    einsatz_geld = einsatz_geld + summeChips;
    document.getElementById("anzahl_chip_grün").innerHTML = anz_grün;
    document.getElementById("geld_spieler").innerHTML = "Geld:</br>" + chipGesamtStart_spieler +"€";
    document.getElementById("geld_einsatz_spieler").innerHTML = "Geld:</br>" + einsatz_geld +"€";
    if(chipGesamtStart_spieler === 0){
        alert("Du bist pleite & hast verloren");
}}

//Klick auf den schwarzen Chips + Geld spieler + wieviel gesetzt ist
function klick_schwarz(){
    anz_schwarz = anz_schwarz -1;
    if(anz_schwarz < 1){
        alert("Du hast noch keine schwarzen Chips mehr!");
        document.getElementById('chip_schwarz_stop').onclick = null;
        }  
    chipGesamtStart_spieler = chipGesamtStart_spieler - chip_schwarz;
    summeChips = (anz_schwarz1 +1) * chip_schwarz ; 
    einsatz_geld = einsatz_geld + summeChips;
    document.getElementById("anzahl_chip_schwarz").innerHTML = anz_schwarz;
    document.getElementById("geld_spieler").innerHTML = "Geld:</br>" + chipGesamtStart_spieler +"€";
    document.getElementById("geld_einsatz_spieler").innerHTML = "Geld:</br>" + einsatz_geld +"€";
    if(chipGesamtStart_spieler === 0){
        alert("Du bist pleite & hast verloren");
    }
}

//Button zum hiten
function klicke_hit(){

}

//Wins & loses
let wins_gesamt_spieler = 0;
let wins_gesamt_cpu = 0;
let lose_gesamt_spieler = 0;
let lose_gesamt_cpu = 0;

//starte die Funktion
function start_function(){
         
    //Deck Spieler
    let deck_cpu = [];
    let deck_cpu1 = [];
    let deck_spieler = [];
    let deck_spieler1 = [];
    
   
    //Zufallzahlen
    let random_variant_spieler = Math.floor(Math.random() * variant.length) ;
    let random_wert_spieler = Math.floor(Math.random() * werte.length);
    let random_variant_spieler1 = Math.floor(Math.random() * variant.length);
    let random_wert_spieler1 = Math.floor(Math.random() * werte.length) ;
    let random_variant_cpu = Math.floor(Math.random() * variant.length );
    let random_wert_cpu = Math.floor(Math.random() * werte.length);
    let random_variant_cpu1 = Math.floor(Math.random() * variant.length);
    let random_wert_cpu1 = Math.floor(Math.random() * werte.length);
    
    //Card CPU
    let card_cpu = [
        variant[random_variant_cpu],
        werte[random_wert_cpu]
    ]
    deck_cpu.push(card_cpu);

    //________________________________
    let card_cpu1 = [
        variant[random_variant_cpu1],
        werte[random_wert_cpu1]
    ]
    deck_cpu1.push(card_cpu1);

    //Card Spieler
    let card_spieler = [
        variant[random_variant_spieler],
        werte[random_wert_spieler]
    ]
    deck_spieler.push(card_spieler);

    //________________________________
    let card_spieler1 = [
        variant[random_variant_spieler1],
        werte[random_wert_spieler1]
    ]
        deck_spieler1.push(card_spieler1);
    
    // Spielerkarten anzeigen
    document.querySelector('.karte_spieler').textContent = deck_spieler.map(card => card.join(' ')) + " | " + deck_spieler1.map(card => card.join(' '));
    document.querySelector('.karte_cpu').textContent = deck_cpu.map(card => card.join(' ')) + " | " + deck_cpu1.map(card => card.join(' '));
   
    //Punkte
    let punkte_cpu = 0;
    let punkte_cpu1 = 0;
    let punkte_spieler = 0;
    let punkte_spieler1 = 0;

    
    //Funktion Rechner
    function werte_rechner(x,y){
        
        if (x[0][1] === "Zwei"){
            y += 2;
        }
        else if (x[0][1] === "Drei"){
            y += 3;
        }
        else if (x[0][1] === "Vier"){
            y += 4;
        }
        else if (x[0][1] === "Fünf"){
            y += 5;
        }
        else if (x[0][1] === "Sechs"){
            y += 6;
        }
        else if (x[0][1] === "Sieben"){
            y += 7;
        }
        else if (x[0][1] === "Acht"){
            y += 8;
        }
        else if (x[0][1] === "Neun"){
            y += 9;
        }
        else if (x[0][1] === "Zehn"){
            y += 10;
        }
        else if (x[0][1] === "König"){
            y += 10;
        }
        else if (x[0][1] === "Dame"){
            y += 10;
        }
        else if (x[0][1] === "Ass"){
            y += 11;
        } 
        else if (x[0][1] === "Bube"){
            y += 10;
        } 
        return y;
    }

    //Punkte CPU
    let c1 = werte_rechner(deck_cpu,punkte_cpu);
    let c2 = werte_rechner(deck_cpu1,punkte_cpu1);
    gesamt_cpu = c1 + c2;
    document.getElementById("punkte_cpu").innerHTML = "Punkte<br>" + gesamt_cpu;
    console.log(gesamt_cpu);
    
    //Punkte Spieler
    let p1 = werte_rechner(deck_spieler,punkte_spieler);
    let p2 = werte_rechner(deck_spieler1,punkte_spieler1);
    gesamt_spieler = p1 + p2;
    document.getElementById("punkte_spieler").innerHTML = "Punkte:<br>" + gesamt_spieler;
    console.log(gesamt_spieler);
    
    //Wins anzeigen und ändern
    if (gesamt_spieler > gesamt_cpu){
         wins_gesamt_spieler = wins_gesamt_spieler + 1;
        document.getElementById("wins_spieler").innerHTML = "Wins:<br>" + wins_gesamt_spieler;}
    else if (gesamt_spieler < gesamt_cpu){
        wins_gesamt_cpu = wins_gesamt_cpu + 1;
        document.getElementById("wins_cpu").innerHTML = "Wins:<br>" + wins_gesamt_cpu; }
        
    //Lose anzeigen und ändern
    if (gesamt_spieler < gesamt_cpu){
         lose_gesamt_spieler = lose_gesamt_spieler + 1;
        document.getElementById("lose_spieler").innerHTML = "Lose:<br>" + lose_gesamt_spieler;}
    else if (gesamt_spieler > gesamt_cpu){
        lose_gesamt_cpu = lose_gesamt_cpu + 1;
        document.getElementById("lose_cpu").innerHTML = "Lose:<br>" + lose_gesamt_cpu; }   
    
    //Sieger Alert
    if (wins_gesamt_cpu === 5){
        alert("Der Computer hat gewonnen!");
    }
    else if (wins_gesamt_spieler === 5){
        alert("Hurra, du gewonnen!");
    }
    }
