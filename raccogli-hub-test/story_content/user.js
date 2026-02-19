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
  // --- MODIFICA QUESTO VALORE ---
const OBJECT_NAME = "protecta_hub";
// ------------------------------

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");

    const raccogliOggetto = () => {

        // 1) Salva nello storage
        Virtway.storage.set("inventory_" + OBJECT_NAME, true);

        // 2) Nasconde oggetto nella scena
        Virtway.setVisibility(OBJECT_NAME, false);

        console.log("Oggetto raccolto:", OBJECT_NAME);
    };

    if (Virtway.isReady && Virtway.isReady()) {
        raccogliOggetto();
    } else {
        Virtway.onReady(raccogliOggetto);
    }

})
.catch((err) => console.error("Errore Virtway:", err));
}

};
