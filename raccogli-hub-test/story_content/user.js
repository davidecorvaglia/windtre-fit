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
  // Usiamo una funzione asincrona per caricare Virtway prima di agire
(async () => {
    try {
        // 1. Carica la libreria Virtway
        const VirtwayModule = await import("https://static.virtway.com/webgl/libs/virtway-latest.min.js");
        const Virtway = VirtwayModule.default;

        // 2. Ora sa cos'è e nasconde l'oggetto in 3D
        Virtway.setVisibility("protecta_hub", false);

        // 3. Inietta il motore Firebase e spara il dato
        if (!window.inviaDati) {
            const script = document.createElement("script");
            script.src = "https://davidecorvaglia.github.io/windtre-fit/motore_firebase.js";
            
            script.onload = function () {
                window.inviaDati("protecta_hub", true);
            };
            document.head.appendChild(script);
        } else {
            window.inviaDati("protecta_hub", true);
        }

    } catch (error) {
        console.error("Errore di esecuzione nel trigger:", error);
    }
})();
}

};
