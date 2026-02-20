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
  import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    const player = GetPlayer();

    if (!Virtway) {
        console.error("Virtway non disponibile");
        return;
    }

    // Legge lo stato salvato nello storage Virtway
    const stato = Virtway.storage.get("inventory_protecta_hub");

    console.log("STATO LETTO DA STORAGE:", stato);

    // Aggiorna variabile Storyline
    if (stato === true || stato === "true") {
        player.SetVar("var_inventory_protecta_hub", 1);
    } else {
        player.SetVar("var_inventory_protecta_hub", 0);
    }

})
.catch((err) => console.error("Errore caricamento Virtway:", err));
}

};
