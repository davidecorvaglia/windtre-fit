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
const OBJECT_NAME = "cane";
// ------------------------------

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");

    const toggleVisibility = () => {

        let currentState = Virtway.storage.get("visibility_" + OBJECT_NAME);

        if (currentState === undefined) {
            currentState = true;
        }

        const newState = !currentState;

        Virtway.setVisibility(OBJECT_NAME, newState);
        Virtway.storage.set("visibility_" + OBJECT_NAME, newState);

        console.log("Toggle visibility:", OBJECT_NAME, newState);
    };

    if (Virtway.isReady && Virtway.isReady()) {
        toggleVisibility();
    } else {
        Virtway.onReady(toggleVisibility);
    }

})
.catch((err) => console.error("Errore Virtway:", err));
}

};
