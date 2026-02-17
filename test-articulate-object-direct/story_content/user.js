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
  // --- MODIFICA QUESTI VALORI ---
const OBJECT_NAME = "cane"; 
const VISIBILITY_STATE = true; // true = mostra, false = nascondi
// ------------------------------

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
  .then((VirtwayModule) => {
    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");
    
    const eseguiAzione = () => {
        Virtway.setVisibility(OBJECT_NAME, VISIBILITY_STATE);
        console.log("Visibilità modificata:", OBJECT_NAME, VISIBILITY_STATE);
    };

    if (Virtway.isReady && Virtway.isReady()) {
        eseguiAzione();
    } else {
        Virtway.onReady(eseguiAzione);
    }
  })
  .catch((err) => console.error("Errore Virtway:", err));
}

};
