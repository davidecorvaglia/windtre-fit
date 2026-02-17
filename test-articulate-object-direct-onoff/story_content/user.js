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
  const OBJECT_NAME = "cane";

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");

    const toggleVisibility = async () => {

        try {
            console.log("Toggle visibility su:", OBJECT_NAME);

            let isVisible;

            // Prova a leggere lo stato reale dell'oggetto nella scena
            try {
                isVisible = await Virtway.getObjectVisibility(OBJECT_NAME);
            } catch {
                // Se non riesce, assumiamo che sia nascosto
                isVisible = false;
            }

            // Inverte lo stato
            const newState = !isVisible;

            // Applica visibility
            Virtway.setVisibility(OBJECT_NAME, newState);

            console.log("Nuovo stato visibility:", OBJECT_NAME, newState);

        } catch (error) {
            console.error("Errore toggle visibility:", error);
        }
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
