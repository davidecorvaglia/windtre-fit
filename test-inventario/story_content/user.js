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
  // --- INSERISCI QUI IL NOME DELL'OGGETTO ---
const oggettiInventario = ["protecta_hub"];
// ------------------------------------------

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");

    const player = GetPlayer();

    const sincronizzaInventario = () => {

        oggettiInventario.forEach(nome => {
            // Legge il dato salvato durante la raccolta
            const stato = Virtway.storage.get("inventory_" + nome);
            
            // DEBUG: Stampa nella console F12 cosa ha trovato nello storage
            console.log("INVENTARIO: Lettura storage per", nome, "-> Valore trovato:", stato);

            // Controllo sicuro (accetta sia il booleano true che la stringa "true")
            if (stato === true || stato === "true") {
                player.SetVar("var_inventory_" + nome, 1);
                console.log("INVENTARIO: Variabile Storyline settata a 1 (Raccolto)");
            } else {
                player.SetVar("var_inventory_" + nome, 0);
                console.log("INVENTARIO: Variabile Storyline settata a 0 (Non raccolto)");
            }
        });
    };

    if (Virtway.isReady && Virtway.isReady()) {
        sincronizzaInventario();
    } else {
        Virtway.onReady(sincronizzaInventario);
    }

})
.catch((err) => console.error("Errore Virtway:", err));
}

};
