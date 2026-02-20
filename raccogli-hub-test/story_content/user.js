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

    if (!Virtway) {
        console.error("Virtway non disponibile");
        return;
    }

    Virtway.setVisibility(OBJECT_NAME, false);
    Virtway.storage.set("inventory_" + OBJECT_NAME, "true");

    console.log("RACCOLTA OK:", OBJECT_NAME);

})
.catch((err) => console.error("Errore caricamento Virtway:", err));
}

};
