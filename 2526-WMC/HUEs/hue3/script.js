import personen from "./persons.json" with { type: "json" };

/** Aktuelle Sortierrichtung der Größen-Spalte (true = aufsteigend). */
let sortierungAufsteigend = true;

function erstelleZelle(wert) {
    const zelle = document.createElement("td");
    zelle.textContent = wert;
    return zelle;
}

function tabelleAnzeigen() {
    const tabellenBody = document.querySelector("#tbody");
    tabellenBody.innerHTML = "";

    for (const person of personen) {
        const zeile = document.createElement("tr");
        zeile.appendChild(erstelleZelle(person.id));
        zeile.appendChild(erstelleZelle(person.name));
        zeile.appendChild(erstelleZelle(person.groesse));
        zeile.appendChild(erstelleZelle(person.geburtsdatum));
        zeile.appendChild(erstelleZelle(person.herkunft));
        zeile.appendChild(erstelleZelle(person.gewicht));
        tabellenBody.appendChild(zeile);
    }
}

// Sortierrichtung wechseln und Tabelle neu rendern bei Klick auf "Height"-Header
document.querySelector("#height").addEventListener("click", () => {
    personen.sort((a, b) =>
        sortierungAufsteigend
            ? a.groesse - b.groesse
            : b.groesse - a.groesse
    );
    sortierungAufsteigend = !sortierungAufsteigend;
    tabelleAnzeigen();
});

// Initiales Rendern beim Laden der Seite
tabelleAnzeigen();
