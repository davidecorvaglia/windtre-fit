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

    const sincronizzaInventario = async () => {

        for (const nome of oggettiInventario) {
            try {

                const obj = await Virtway.getObject(nome);

                let raccolto = false;

                // Caso 1: oggetto non esiste più
                if (!obj) {
                    raccolto = true;
                }

                // Caso 2: oggetto esiste ma non visibile
                else if (obj.visible === false) {
                    raccolto = true;
                }

                // Caso 3: oggetto disattivato
                else if (obj.active === false) {
                    raccolto = true;
                }

                console.log("INVENTARIO:", nome, raccolto);

                player.SetVar("var_inventory_" + nome, raccolto ? 1 : 0);

            } catch (error) {
                console.error("Errore lettura oggetto:", nome, error);
            }
        }
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
