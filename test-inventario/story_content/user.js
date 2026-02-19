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
  const oggettiInventario = [
  "protecta_hub"
  // aggiungere qui altri oggetti
];

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const Virtway = VirtwayModule.default;
    if (!Virtway) return console.error("Virtway non disponibile");

    const player = GetPlayer();

    const sincronizzaInventario = () => {

        oggettiInventario.forEach(nome => {

            const stato = Virtway.storage.get("inventory_" + nome);

            if (stato) {
                player.SetVar("var_inventory_" + nome, 1);
            } else {
                player.SetVar("var_inventory_" + nome, 0);
            }

        });

        console.log("Inventario sincronizzato");
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
