(function () {
    // 1. Evita che il motore venga caricato due volte
    if (window.__firebaseMotoreCaricato) return;
    window.__firebaseMotoreCaricato = true;

    // 2. Crea la "sala d'attesa" per le azioni veloci
    window.__codaDati = window.__codaDati || [];

    // 3. Timeout di sicurezza (Osservabilità)
    setTimeout(() => {
        if (!window.__firebasePronto) {
            console.error("🚨 CRITICO: Timeout Firebase (10s). Controllare connessione o eventuali blocchi firewall.");
        }
    }, 10000); 

    // 4. La funzione globale chiamata dai trigger di Storyline
    window.inviaDati = function (nomeOggetto, stato) {
        if (!window.__firebasePronto) {
            // Firebase non è pronto? Mettiamo in coda
            window.__codaDati.push({ nomeOggetto, stato });
            console.warn("⏳ Firebase in caricamento, dato in coda:", nomeOggetto);
            return;
        }
        // Firebase è pronto? Spediamo subito
        eseguiInvio(nomeOggetto, stato);
    };

    // 5. La vera funzione di invio al Cloud
    function eseguiInvio(nomeOggetto, stato) {
        const sessione = localStorage.getItem("session_id");
        if (!sessione) {
            console.error("⚠️ Nessuna sessione trovata nel localStorage.");
            return;
        }
        
        // Payload con metadati (utile per statistiche o log temporali futuri)
        const payload = {
            completato: stato,
            timestamp: Date.now()
        };

        // Scrittura sul database Firebase
        firebase.database().ref("sessioni/" + sessione + "/" + nomeOggetto).set(payload);
        console.log("✅ Inviato al Cloud:", nomeOggetto, payload);
    }

    // 🚨 INCOLLA QUI IL TUO FIREBASE CONFIG DALLO STEP 0 🚨
    const firebaseConfig = {  
    apiKey: "AIzaSyBohW8nElI79Eg9-H0tlBhbMVB8imncTxU",  
    authDomain: "w3-fit.firebaseapp.com",  
    databaseURL: "https://w3-fit-default-rtdb.europe-west1.firebasedatabase.app",  
    projectId: "w3-fit",  
    storageBucket: "w3-fit.firebasestorage.app",  
    messagingSenderId: "889404720272",  
    appId: "1:889404720272:web:0f2691e6c4ecddb47ac415"

  
};

    // 6. Caricamento sequenziale e sicuro delle librerie Firebase (Compat)
    const scriptApp = document.createElement("script");
    scriptApp.src = "https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js";
    document.head.appendChild(scriptApp);

    scriptApp.onload = function () {
        const scriptDb = document.createElement("script");
        scriptDb.src = "https://www.gstatic.com/firebasejs/10.8.1/firebase-database-compat.js";
        document.head.appendChild(scriptDb);

        scriptDb.onload = function () {
            // Inizializza l'app
            firebase.initializeApp(firebaseConfig);
            window.__firebasePronto = true;
            console.log("🔥 Motore Firebase Attivo!");
            
            // Svuota la coda inviando eventuali dati in attesa
            window.__codaDati.forEach(item => eseguiInvio(item.nomeOggetto, item.stato));
            window.__codaDati = []; // Pulisce la coda
        };
    };
})();
