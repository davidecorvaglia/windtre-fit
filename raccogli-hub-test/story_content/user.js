window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // 1. Nasconde l'oggetto nell'ambiente 3D (Feedback visivo per il Learner)
Virtway.setVisibility("protecta_hub", false);

// 2. Inietta il motore Firebase e trasmette l'azione alla Dashboard
if (!window.inviaDati) {
    // Se il motore non è ancora stato caricato in questa sessione, lo inietta
    const script = document.createElement("script");
    
    // 🚨 INSERISCI QUI L'URL REALE DEL TUO FILE SU GITHUB PAGES 🚨
    script.src = "https://davidecorvaglia.github.io/windtre-fit/motore_firebase.js";
    
    script.onload = function () {
        // Appena il motore è scaricato, spara il dato
        window.inviaDati("protecta_hub", true);
    };
    document.head.appendChild(script);
} else {
    // Se il motore era già stato caricato da un trigger precedente, spara subito il dato
    window.inviaDati("protecta_hub", true);
}


}

};
