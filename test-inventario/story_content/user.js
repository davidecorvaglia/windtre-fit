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
  const oggettiInventario = ["protecta_hub"];

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");
    
    const player = GetPlayer();

    const sincronizzaInventario = () => {

        oggettiInventario.forEach(nome => {
            
            // LEGGE DIRETTAMENTE DAL BROWSER
            const stato = localStorage.getItem("inventory_" + nome);

            console.log("INVENTARIO: Lettura memoria per", nome, "-> Valore trovato:", stato);

            // Se trova la stringa "true", allora è stato raccolto
            if (stato === "true") {
                player.SetVar("var_inventory_" + nome, 1);
                console.log("INVENTARIO: Settato a 1 (L'immagine DEVE accendersi)");
            } else {
                player.SetVar("var_inventory_" + nome, 0);
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
