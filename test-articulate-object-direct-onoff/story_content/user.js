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
  ## Toggle visibility oggetto "cane" (versione funzionante Virtway)

```javascript
const OBJECT_NAME = "cane";
const STORAGE_KEY = "toggle_visibility_" + OBJECT_NAME;

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");

    const toggleVisibility = () => {

        try {
            console.log("Toggle visibility su:", OBJECT_NAME);

            // Legge stato salvato
            let currentState = Virtway.storage.get(STORAGE_KEY);

            // Se è la prima volta (nessuno stato salvato)
            if (currentState === undefined) {
                currentState = false; // assumiamo nascosto
            }

            // Inverte stato
            const newState = !currentState;

            // Applica visibility
            Virtway.setVisibility(OBJECT_NAME, newState);

            // Salva nuovo stato
            Virtway.storage.set(STORAGE_KEY, newState);

            console.log("Nuovo stato:", OBJECT_NAME, newState);

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
```
}

};
