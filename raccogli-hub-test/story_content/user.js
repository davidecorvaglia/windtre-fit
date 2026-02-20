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

  console.log("STEP 1: Libreria caricata");

  const test = () => {

    console.log("STEP 2: Virtway pronto");

    // Test se l'oggetto esiste davvero
    try {
      Virtway.setVisibility(OBJECT_NAME, false);
      console.log("STEP 3: Comando visibility inviato a", OBJECT_NAME);
    } catch(e) {
      console.error("ERRORE setVisibility:", e);
    }

  };

  if (Virtway.isReady && Virtway.isReady()) {
    test();
  } else {
    Virtway.onReady(test);
  }

})
.catch((err) => console.error("Errore caricamento Virtway:", err));
}

};
