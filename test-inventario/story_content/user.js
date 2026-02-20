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

    // Usiamo async perché dobbiamo "aspettare" la risposta dalla scena 3D
    const sincronizzaInventario = async () => {

        for (const nome of oggettiInventario) {
            try {
                // CHIEDIAMO ALLA SCENA: dammi le info su questo oggetto
                const obj = await Virtway.getObject(nome);

                // LOGICA: Se l'oggetto NON c'è, o è nascosto -> L'ABBIAMO RACCOLTO!
                let raccolto = false;
                if (!obj || obj.visible === false || obj.active === false) {
                    raccolto = true;
                }

                console.log("INVENTARIO check scena per:", nome, "-> Raccolto:", raccolto);

                // Aggiorniamo Storyline di conseguenza
                player.SetVar("var_inventory_" + nome, raccolto ? 1 : 0);

            } catch (error) {
                console.error("INVENTARIO: Errore lettura oggetto", nome, error);
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
