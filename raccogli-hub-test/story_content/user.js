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

// 1) salvo che è stato raccolto
localStorage.setItem("inventory_" + OBJECT_NAME, "true");

// 2) faccio sparire oggetto dalla scena
import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {
    const Virtway = VirtwayModule.default;
    Virtway.setVisibility(OBJECT_NAME, false);
});

console.log("OGGETTO RACCOLTO:", OBJECT_NAME);
}

};
