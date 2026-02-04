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
  const button1 = object('6LvmGzLwmMt');
(function () {
  try {
    const V = window.parent && window.parent.Virtway;
    if (!V) {
      console.warn("[Storyline] Virtway non disponibile (parent.Virtway mancante).");
      return;
    }

    // Esegui quando il player Virtway è pronto (PDF §5.9: onReady)
    if (typeof V.onReady === "function") {
      V.onReady(() => {
        // PDF §3.2: setVisibility(nomeOggetto, visibilityState)
        V.setVisibility("cane", false); // nasconde l'oggetto 'cane'
        console.log("[Storyline] setVisibility('cane', false) eseguito.");
      });
    } else {
      // Fallback rarissimo
      V.setVisibility("cane", false);
      console.log("[Storyline] setVisibility('cane', false) eseguito (senza onReady).");
    }
  } catch (e) {
    console.error("[Storyline] Errore nel trigger Virtway:", e);
  }
})();
}

};
