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
const POLL_INTERVAL = 1000; // 1 secondo

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

  const Virtway = VirtwayModule.default;
  const player = GetPlayer();

  let lastKnownState = null;

  const checkInventory = () => {

    // 1️⃣ Prova a leggere da Virtway
    let stato = Virtway.storage.get(KEY);

    // 2️⃣ Fallback localStorage
    if (stato === undefined || stato === null) {
      stato = localStorage.getItem(KEY);
    }

    const raccolto = (stato === true || stato === "true");

    // Aggiorna solo se cambia stato
    if (raccolto !== lastKnownState) {

      player.SetVar(
        "var_inventory_" + OBJECT_NAME,
        raccolto ? 1 : 0
      );

      console.log("INVENTARIO AGGIORNATO:", raccolto);
      lastKnownState = raccolto;
    }
  };

  const startPolling = () => {
    checkInventory();
    setInterval(checkInventory, POLL_INTERVAL);
  };

  if (Virtway.isReady && Virtway.isReady()) {
    startPolling();
  } else {
    Virtway.onReady(startPolling);
  }

})
.catch((err) => console.error("Errore Virtway:", err));
}

};
