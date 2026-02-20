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
const KEY = "inventory_" + OBJECT_NAME;

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

  const Virtway = VirtwayModule.default;

  const raccogli = () => {

    // Salvataggio memoria Virtway
    Virtway.storage.set(KEY, "true");

    // Salvataggio memoria persistente browser
    localStorage.setItem(KEY, "true");

    // Nasconde oggetto nella scena
    Virtway.setVisibility(OBJECT_NAME, false);

    console.log("RACCOLTA COMPLETATA:", KEY);
  };

  if (Virtway.isReady && Virtway.isReady()) {
    raccogli();
  } else {
    Virtway.onReady(raccogli);
  }

})
.catch((err)
}

};
