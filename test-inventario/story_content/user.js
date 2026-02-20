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
  // --- OGGETTI DA MONITORARE ---
const oggettiInventario = ["protecta_hub"];

// Memoria interna stati
let statiPrecedenti = {};

import("https://static.virtway.com/webgl/libs/virtway-latest.min.js")
.then((VirtwayModule) => {

    const player = GetPlayer();

    const sincronizzaInventario = () => {

        oggettiInventario.forEach(nome => {
            
            const stato = localStorage.getItem("inventory_" + nome);
            const isRaccolto = (stato === "true");

            if (statiPrecedenti[nome] !== isRaccolto) {

                player.SetVar(
                    "var_inventory_" + nome,
                    isRaccolto ? 1 : 0
                );

                console.log("DASHBOARD:", nome, isRaccolto);

                statiPrecedenti[nome] = isRaccolto;
            }
        });
    };

    // Primo check immediato
    sincronizzaInventario();

    // Monitor continuo
    const monitor = setInterval(sincronizzaInventario, 3000);

    // Protezione: quando la slide cambia o viene chiusa, ferma il ciclo
    window.addEventListener("beforeunload", () => clearInterval(monitor));

})
.catch((err) => console.error("Errore Virtway:", err));
}

};
