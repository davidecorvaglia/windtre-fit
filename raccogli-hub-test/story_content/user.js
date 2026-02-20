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
  const OBJECT_NAME = "protecta_hub";

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");

    const raccogli = () => {
        // 1. Nasconde l'oggetto dalla scena
        Virtway.setVisibility(OBJECT_NAME, false);

        // 2. SALVA NELLA MEMORIA DEL BROWSER (Infallibile)
        localStorage.setItem("inventory_" + OBJECT_NAME, "true");

        console.log("RACCOLTA: Salvato in localStorage ->", OBJECT_NAME);
    };

    if (Virtway.isReady && Virtway.isReady()) {
        raccogli();
    } else {
        Virtway.onReady(raccogli);
    }

})
.catch((err) => console.error("Errore Virtway:", err));
}

};
