const schueler = [
    { name: "Anna",  age: 17, grade: 2 },
    { name: "Ben",   age: 16, grade: 4 },
    { name: "Clara", age: 18, grade: 1 },
    { name: "David", age: 17, grade: 5 },
    { name: "Elena", age: 16, grade: 3 },
    { name: "Felix", age: 19, grade: 2 },
    { name: "Gina",  age: 17, grade: 1 },
    { name: "Hugo",  age: 18, grade: 4 },
];

// Alle Schüler mit Note <= 4 haben bestanden
const bestandeneSchueler = schueler.filter(schueler => schueler.grade <= 4);
console.log("Bestanden:", bestandeneSchueler);

// Jeden Schüler als lesbaren Text formatieren: "Name (Alter)"
const schuelerTexte = schueler.map(schueler => `${schueler.name} (${schueler.age})`);
console.log("Texte:", schuelerTexte);

// Nur die Namen der bestandenen Schüler
const bestandeneNamen = schueler
    .filter(schueler => schueler.grade <= 4)
    .map(schueler => schueler.name);
console.log("Namen der Bestandenen:", bestandeneNamen);

// Klassendurchschnitt der Noten berechnen
const notendurchschnitt = schueler.reduce((summe, schueler) => summe + schueler.grade, 0) / schueler.length;
console.log("Notendurchschnitt:", notendurchschnitt);

// Bonus: Schüler ab 17 Jahren, die bestanden haben – als kommaseparierte Liste
const bonusListe = schueler
    .filter(schueler => schueler.age >= 17 && schueler.grade <= 4)
    .map(schueler => schueler.name)
    .join(", ");
console.log("Bonus (ab 17 & bestanden):", bonusListe);
