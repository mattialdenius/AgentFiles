/* =====================================================================
   AGENT FILES – GEMEINSAME TECHNIK (Kern)
   ---------------------------------------------------------------------
   Wird von index.html (Spiel) und lehrer.html (Lehrer-Seite) geladen.
   Enthält: Rätsel-Erzeugung aus der Missionsnummer und alle Zeichnungen.
   Keine Inhalte – die stehen in daten/klasseX.js.
   ===================================================================== */
"use strict";
const STERNE = ["★", "★★", "★★★"];
const ZAHLWORT = ["zero","one","two","three","four","five","six","seven","eight","nine"];

/* =====================================================================
   2) ZUFALL MIT STARTZAHL
   Gleiche Missionsnummer = auf beiden iPads exakt gleiche Rätsel.
   ===================================================================== */
// ==== GENERATOREN START ====
function hashZahl(text){ let h = 2166136261; for (let i=0;i<text.length;i++){ h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function zufallsquelle(startzahl){
  let a = startzahl >>> 0;
  const r = function(){ a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  r.zahl = (min, max) => min + Math.floor(r() * (max - min + 1));
  r.eins = (liste) => liste[Math.floor(r() * liste.length)];
  r.mischen = (liste) => { const l = liste.slice(); for (let i=l.length-1;i>0;i--){ const j = Math.floor(r()*(i+1)); [l[i],l[j]]=[l[j],l[i]]; } return l; };
  r.ziffern = (n) => Array.from({length:n}, () => r.zahl(0,9));
  return r;
}


/* ---------- Zahlen und Uhrzeiten als englische Wörter ---------- */
const EINER = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const ZEHNER = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function zahlWort(n){ if (n < 20) return EINER[n]; const z = Math.floor(n / 10), e = n % 10; return ZEHNER[z] + (e ? "-" + EINER[e] : ""); }
const ZEIT_ARTEN = ["o'clock", "quarter past", "half past", "quarter to"];
function zeitBenannt(h, m){                       // → { stunde (1–12, wie man sie sagt), art (0–3) }
  const art = m / 15, h12 = ((h % 12) + 11) % 12 + 1;
  return { stunde: art === 3 ? (h12 % 12) + 1 : h12, art };
}
function zeitWort(h, m){
  const b = zeitBenannt(h, m), w = EINER[b.stunde];
  return b.art === 0 ? w + " o'clock" : ZEIT_ARTEN[b.art] + " " + w;
}
function uhrSVG(h, m, groesse){
  const g = groesse || 64, wm = m * 6, wh = (h % 12) * 30 + m * 0.5;
  const zeiger = (w, l, b) => `<line x1="50" y1="50" x2="${50 + l * Math.sin(w * Math.PI / 180)}" y2="${50 - l * Math.cos(w * Math.PI / 180)}" stroke="#0b1a33" stroke-width="${b}" stroke-linecap="round"/>`;
  let striche = ""; for (let i = 0; i < 12; i++){ const w = i * 30 * Math.PI / 180; striche += `<line x1="${50 + 38 * Math.sin(w)}" y1="${50 - 38 * Math.cos(w)}" x2="${50 + 44 * Math.sin(w)}" y2="${50 - 44 * Math.cos(w)}" stroke="#0b1a33" stroke-width="${i % 3 ? 2 : 4}"/>`; }
  return `<svg viewBox="0 0 100 100" width="${g}" height="${g}"><circle cx="50" cy="50" r="47" fill="#fff" stroke="#0b1a33" stroke-width="5"/>${striche}${zeiger(wh, 24, 6)}${zeiger(wm, 36, 4)}<circle cx="50" cy="50" r="4" fill="#e85d3a"/></svg>`;
}

/* ---------- Produkte im Laden (Verpackung als einfache Form) ---------- */
function produktSVG(p){
  const f = p.farbe || "#f4c430", rand = 'stroke="#0b1a33" stroke-width="3" stroke-linejoin="round"';
  const emo = `<text x="30" y="44" text-anchor="middle" font-size="22">${p.emoji || ""}</text>`;
  switch (p.form){
    case "bottle": return `<svg viewBox="0 0 60 70" width="60" height="70"><path d="M24 4 L36 4 L36 16 Q46 22 46 32 L46 64 L14 64 L14 32 Q14 22 24 16 Z" fill="${f}" ${rand}/><rect x="18" y="34" width="24" height="16" fill="#fff" ${rand}/></svg>`;
    case "can": return `<svg viewBox="0 0 60 70" width="60" height="70"><rect x="16" y="22" width="28" height="42" rx="4" fill="${f}" ${rand}/><ellipse cx="30" cy="22" rx="14" ry="4" fill="#c7ced6" ${rand}/><rect x="16" y="36" width="28" height="12" fill="#fff" ${rand}/></svg>`;
    case "packet": return `<svg viewBox="0 0 60 70" width="60" height="70"><path d="M12 10 L48 10 L44 64 L16 64 Z" fill="${f}" ${rand}/><path d="M12 10 L16 16 L20 10 L24 16 L28 10 L32 16 L36 10 L40 16 L44 10 L48 16" fill="none" ${rand}/>${emo}</svg>`;
    case "box": return `<svg viewBox="0 0 60 70" width="60" height="70"><rect x="8" y="18" width="44" height="44" fill="${f}" ${rand}/><path d="M8 18 L14 10 L46 10 L52 18" fill="#fff" ${rand}/>${emo}</svg>`;
    case "bar": return `<svg viewBox="0 0 60 70" width="60" height="70"><rect x="6" y="24" width="48" height="26" rx="3" fill="${f}" ${rand}/><path d="M22 24 L22 50 M38 24 L38 50" stroke="#fff" stroke-width="2"/></svg>`;
  }
  return `<svg viewBox="0 0 60 70" width="60" height="70"><text x="30" y="50" text-anchor="middle" font-size="40">${p.emoji}</text></svg>`;
}

/* Missionsnummer: verschlüsselt Mission und Ampel.
   nummer % (3*K) = stufe*K + missionIndex   (K = Anzahl Missionen der Klasse) */
function nummerErzeugen(K, missionIndex, stufe){
  const m = 3 * K, rest = stufe * K + missionIndex;
  let n = 100 + Math.floor(Math.random() * 900);
  n = n - (n % m) + rest;
  if (n < 100) n += m;
  if (n > 999) n -= m;
  return n;
}
function nummerLesen(K, n){ const m = n % (3*K); return { stufe: Math.floor(m / K), missionIndex: m % K }; }

/* ---------- Bausteine: Rätsel erzeugen (für beide iPads gleich) ---------- */
const ERZEUGEN = {

  buchstabieren(r, stufe, st){
    return { wort: r.eins(st.woerter[stufe]) };
  },

  tuer(r, stufe, st){
    const L = st.listenLaenge[stufe];
    let namen;
    if (stufe === 2){
      const paar = r.eins(st.aehnlich);
      const rest = r.mischen(st.namen.filter(n => !paar.includes(n))).slice(0, L - 2);
      namen = r.mischen(paar.concat(rest));
    } else {
      namen = r.mischen(st.namen).slice(0, L);
    }
    const tuerName = (stufe === 2) ? r.eins(namen.filter(n => st.aehnlich.some(p => p.includes(n) && p.every(x => namen.includes(x))))) : r.eins(namen);
    const zielPw = r.eins(st.passwoerter[stufe]);
    const alle = [...new Set(st.passwoerter.flat())].filter(p => p !== zielPw);
    const andere = r.mischen(alle);
    const liste = namen.map(n => ({ name: n, pw: n === tuerName ? zielPw : andere.pop() }));
    return { tuerName, liste, passwort: zielPw };
  },

  zimmer(r, stufe, st){
    const N = st.anzahlDinge[stufe], D = st.anzahlUnterschiede[stufe];
    const dinge = r.mischen(st.dinge).slice(0, N);
    const plaetze = r.mischen(st.plaetze.map(p => p.id));
    const vorher = dinge.map((d, i) => ({ id: d.id, platz: plaetze[i], anzahl: d.anzahl ? r.eins(d.anzahl) : 1 }));
    const frei = plaetze.slice(N);
    const bewegt = r.mischen(vorher.map(v => v.id)).slice(0, D);
    const nachher = vorher.map(v => ({ ...v }));
    bewegt.forEach((id, i) => { nachher.find(v => v.id === id).platz = frei[i]; });
    return { vorher, nachher, bewegt, codeTeil: r.ziffern(2) };
  },

  kinder(r, stufe, st){
    const n = st.anzahlKinder[stufe];
    const andereAls = (liste, wert) => r.eins(liste.filter(x => x !== wert));
    const ziel = {
      g: r.eins(["boy","girl"]), haar: r.eins(st.haarfarben), shirt: r.eins(st.farben),
      kopf: r.eins(st.kopf), kopfFarbe: r.eins(st.farben), tasche: r.eins(st.farben), ziel: true
    };
    const aendern = {
      g: k => { k.g = k.g === "boy" ? "girl" : "boy"; },
      haar: k => { k.haar = andereAls(st.haarfarben, k.haar); },
      shirt: k => { k.shirt = andereAls(st.farben, k.shirt); },
      kopf: k => { k.kopf = k.kopf === "cap" ? "hat" : "cap"; },
      kopfFarbe: k => { k.kopfFarbe = andereAls(st.farben, k.kopfFarbe); }
    };
    const merkmale = Object.keys(aendern);
    const kinder = [ziel];
    let verneint = null;
    if (stufe === 2){
      verneint = andereAls(st.farben, ziel.tasche);
      kinder.push({ ...ziel, tasche: verneint, ziel: false });
    }
    let reihe = r.mischen(merkmale), i = 0;
    while (kinder.length < n){
      const k = { ...ziel, ziel: false, tasche: r.eins(st.farben) };
      if (stufe === 0){ r.mischen(merkmale).slice(0, 2).forEach(m => aendern[m](k)); }
      else { aendern[reihe[i % reihe.length]](k); i++; }
      kinder.push(k);
    }
    // Namen und Hautfarbe
    const jungen = r.mischen(st.jungen), maedchen = r.mischen(st.maedchen);
    kinder.forEach(k => { k.name = (k.g === "boy" ? jungen : maedchen).pop(); k.haut = r.zahl(0, 3); });
    // Beschreibung (Notiz des Hausmeisters)
    const sein = ziel.g === "boy" ? "His" : "Her";
    const notiz = [
      st.notizAnfang,
      ziel.g === "boy" ? "It's a boy." : "It's a girl.",
      "The " + ziel.g + "'s T-shirt is " + ziel.shirt + ".",
      sein + " hair is " + ziel.haar + ".",
      sein + " " + ziel.kopf + " is " + ziel.kopfFarbe + "."
    ];
    if (verneint) notiz.push(sein + " bag isn't " + verneint + ".");
    return { kinder: r.mischen(kinder), zielName: ziel.name, notiz, codeTeil: r.ziffern(2) };
  },

  finale(){ return {}; },

  /* ---------- Mission 2, Station 1: Kalender (Datum) ---------- */
  kalender(r, stufe, st){
    const monat = r.zahl(1, 11), tag = r.zahl(2, 13);          // Monat-Index 1–11 (für „month after …“), Tag 2–13
    const datumText = (m, t) => "the " + st.ordnungszahlen[t - 1] + " of " + st.monate[m];
    let hq;
    if (stufe === 0) hq = { art: "notiz", zeilen: [st.hauptperson + "'s birthday is on " + datumText(monat, tag) + "."] };
    else if (stufe === 1){
      const benutzt = new Set([monat + "-" + tag]);
      const zeilen = [[st.hauptperson, datumText(monat, tag)]];
      st.personen.forEach(p => { let m, t; do { m = r.zahl(0, 11); t = r.zahl(1, 13); } while (benutzt.has(m + "-" + t)); benutzt.add(m + "-" + t); zeilen.push([p, datumText(m, t)]); });
      hq = { art: "liste", zeilen: r.mischen(zeilen) };
    } else {
      hq = { art: "raetsel", zeilen: [st.hauptperson + " says:", "\"My birthday is in the month after " + st.monate[monat - 1] + ".", "The day is the number after " + st.zahlen[tag - 2] + ".\""] };
    }
    return { monat, tag, hq, codeTeil: r.ziffern(2) };
  },

  /* ---------- Mission 2, Station 2: Uhrzeit aus dem Tagesablauf ---------- */
  uhr(r, stufe, st){
    const zeiten = st.taetigkeiten.map(t => {
      const von = t.von[0] * 60 + t.von[1], bis = t.bis[0] * 60 + t.bis[1];
      const schritte = (bis - von) / 15, min = von + 15 * r.zahl(0, schritte);
      return { id: t.id, en: t.en, icon: t.icon, h: Math.floor(min / 60), m: min % 60 };
    });
    const ziel = zeiten.find(z => z.id === st.zielId);
    let falle = null;
    if (stufe === 2){
      let min; do { min = 17 * 60 + 15 * r.zahl(-4, 7); } while (min === ziel.h * 60 + ziel.m);
      falle = { h: Math.floor(min / 60), m: min % 60, tag: st.falleTag };
    }
    return { zeiten, ziel: { h: ziel.h, m: ziel.m }, falle };
  },

  /* ---------- Mission 2, Station 3: Einkaufen ---------- */
  laden(r, stufe, st){
    const N = st.anzahlListe[stufe], R = st.regalGroesse[stufe];
    const nachId = id => st.produkte.find(p => p.id === id);
    let liste, gesamt, versuch = 0;
    do {
      let ids;
      if (stufe === 0) ids = r.mischen(st.einfach).slice(0, N);
      else {
        const mitForm = r.mischen(st.produkte.filter(p => p.form).map(p => p.id));
        const zwilling = stufe === 2 ? r.eins(st.zwillinge)[r.zahl(0, 1)] : null;
        ids = [];
        if (zwilling) ids.push(zwilling);
        mitForm.forEach(id => { if (ids.length < 2 + (stufe === 2 ? 1 : 0) && !ids.includes(id) && !st.zwillinge.some(z => z.includes(id) && z.some(x => ids.includes(x)))) ids.push(id); });
        r.mischen(st.produkte.map(p => p.id)).forEach(id => { if (ids.length < N && !ids.includes(id) && !st.zwillinge.some(z => z.includes(id) && z.some(x => ids.includes(x)))) ids.push(id); });
      }
      liste = ids.map(id => { const p = nachId(id); return { id, anzahl: r.eins(p.menge), preis: r.zahl(p.preis[0], p.preis[1]) }; });
      gesamt = liste.reduce((a, x) => a + x.anzahl * x.preis, 0);
      versuch++;
    } while ((gesamt < 21 || gesamt > 99) && versuch < 200);
    // Regal: Liste + Ablenker (bei Rot immer der „Zwilling“ dabei)
    const regal = liste.map(x => ({ id: x.id, preis: x.preis }));
    if (stufe === 2) st.zwillinge.forEach(z => z.forEach(id => {
      if (z.some(x => liste.some(l => l.id === x)) && !regal.some(g => g.id === id)) regal.push({ id, preis: r.zahl(nachId(id).preis[0], nachId(id).preis[1]) });
    }));
    r.mischen(st.produkte.map(p => p.id)).forEach(id => { if (regal.length < R && !regal.some(g => g.id === id)) regal.push({ id, preis: r.zahl(nachId(id).preis[0], nachId(id).preis[1]) }); });
    return { liste: r.mischen(liste), regal: r.mischen(regal), gesamt, codeTeil: r.ziffern(2) };
  },

  /* ---------- Mission 2, Station 4: Gäste finden ---------- */
  gaeste(r, stufe, st){
    const n = st.anzahlProfile[stufe];
    const andere = (liste, wert) => r.eins(liste.filter(x => x !== wert));
    const ids = l => l.map(x => x.id);
    const ziel = { g: r.eins(["boy","girl"]), hobby: r.eins(ids(st.hobbys)), tier: r.eins(ids(st.tiere)), pet: r.eins(ids(st.haustiere)), ziel: true };
    const aendern = {
      g: k => { k.g = k.g === "boy" ? "girl" : "boy"; },
      hobby: k => { k.hobby = andere(ids(st.hobbys), k.hobby); },
      tier: k => { k.tier = andere(ids(st.tiere), k.tier); },
      pet: k => { k.pet = andere(ids(st.haustiere), k.pet); }
    };
    const profile = [ziel];
    let verneint = null, merkmale = Object.keys(aendern);
    if (stufe === 2){
      verneint = andere(ids(st.hobbys), ziel.hobby);
      profile.push({ ...ziel, hobby: verneint, ziel: false });
      merkmale = ["g", "tier", "pet"];                       // Hobby wird nur verneint beschrieben
    }
    const reihe = r.mischen(merkmale); let i = 0;
    while (profile.length < n){
      const k = { ...ziel, ziel: false };
      if (stufe === 0) r.mischen(merkmale).slice(0, 2).forEach(m => aendern[m](k));
      else { aendern[reihe[i % reihe.length]](k); i++; }
      profile.push(k);
    }
    const jungen = r.mischen(st.jungen), maedchen = r.mischen(st.maedchen);
    profile.forEach(k => { k.name = (k.g === "boy" ? jungen : maedchen).pop(); });
    const er = ziel.g === "boy" ? "He" : "She", sein = ziel.g === "boy" ? "His" : "Her";
    const finde = (l, id) => l.find(x => x.id === id);
    const notiz = [st.notizAnfang, "It's a " + ziel.g + "."];
    if (stufe === 2) notiz.push(er + " " + finde(st.hobbys, verneint).neg + ".");
    else notiz.push(er + " " + finde(st.hobbys, ziel.hobby).en + ".");
    notiz.push(er + " likes " + finde(st.tiere, ziel.tier).en + ".", sein + " pet is " + finde(st.haustiere, ziel.pet).en + ".");
    return { profile: r.mischen(profile), zielName: ziel.name, notiz };
  }
};

/* Ganze Mission erzeugen: alle Stationen + Funkcodes + Finale-Code */
function missionErzeugen(klasse, nummer){
  const daten = AGENT_FILES.klassen[klasse];
  const K = daten.missionen.length;
  const { stufe, missionIndex } = nummerLesen(K, nummer);
  const mission = daten.missionen[missionIndex];
  const stationen = mission.stationen.map((st, i) => {
    const r = zufallsquelle(hashZahl("AF|" + klasse + "|" + nummer + "|" + i));
    const raetsel = ERZEUGEN[st.baustein](r, stufe, st);
    raetsel.funkcode = r.ziffern(2);
    return { def: st, raetsel };
  });
  const codeField = [], codeHQ = [];
  stationen.forEach(s => { if (s.raetsel.codeTeil){ (s.def.loeser === "field" ? codeField : codeHQ).push(...s.raetsel.codeTeil); } });
  return { klasse, nummer, stufe, missionIndex, mission, stationen, codeField, codeHQ };
}
// ==== GENERATOREN ENDE ====

/* =====================================================================
   3) ZEICHNUNGEN (alles als SVG im Code, keine Bilddateien)
   ===================================================================== */
const FARBE = { red:"#e0453a", green:"#3fa34d", blue:"#2f6fd6", yellow:"#f4c430", black:"#262626", white:"#fafafa",
  orange:"#f28c28", purple:"#8e44ad", pink:"#f49ac2", grey:"#9aa3ad", brown:"#7a4a24" };
const HAAR = { brown:"#6b3e1f", black:"#1d1d1d", red:"#d0521c" };
const HAUT = ["#f2c9a0", "#d9a06b", "#a86b3c", "#f6dcc2"];
const U = 'stroke="#0b1a33" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';

function hamsterSVG(gross){
  return `<svg viewBox="0 0 200 220" ${gross ? 'style="width:100%;max-width:220px"' : ''}>
  <ellipse cx="100" cy="208" rx="62" ry="8" fill="rgba(0,0,0,.25)"/>
  <path d="M48 200 Q40 130 70 110 L130 110 Q160 130 152 200 Z" fill="#b8864b" ${U}/>
  <path d="M100 112 L86 200 M100 112 L114 200" ${U} fill="none"/>
  <circle cx="100" cy="160" r="4" fill="#0b1a33"/><circle cx="100" cy="180" r="4" fill="#0b1a33"/>
  <circle cx="58" cy="58" r="16" fill="#e8a25a" ${U}/><circle cx="142" cy="58" r="16" fill="#e8a25a" ${U}/>
  <circle cx="58" cy="58" r="7" fill="#f4b6a0"/><circle cx="142" cy="58" r="7" fill="#f4b6a0"/>
  <ellipse cx="100" cy="82" rx="52" ry="44" fill="#e8a25a" ${U}/>
  <ellipse cx="100" cy="96" rx="34" ry="26" fill="#fbe3c4"/>
  <circle cx="82" cy="78" r="6" fill="#0b1a33"/><circle cx="118" cy="78" r="6" fill="#0b1a33"/>
  <circle cx="84" cy="76" r="2" fill="#fff"/><circle cx="120" cy="76" r="2" fill="#fff"/>
  <ellipse cx="100" cy="92" rx="7" ry="5" fill="#e0607a" ${U}/>
  <path d="M90 102 Q100 110 110 102" fill="none" ${U}/>
  <path d="M44 48 Q100 36 156 48 L160 56 Q100 46 40 56 Z" fill="#7a4a24" ${U}/>
  <path d="M66 46 Q70 14 100 14 Q130 14 134 46 Z" fill="#8a5a2e" ${U}/>
  <rect x="68" y="34" width="64" height="8" fill="#0b2d5b"/>
  </svg>`;
}
function funkSVG(){
  return `<svg viewBox="0 0 48 48"><path d="M16 14 Q10 24 16 34 M32 14 Q38 24 32 34 M10 9 Q1 24 10 39 M38 9 Q47 24 38 39" fill="none" stroke="#0b1a33" stroke-width="3.5" stroke-linecap="round"/><circle cx="24" cy="22" r="5" fill="#0b1a33"/><path d="M24 26 L20 42 M24 26 L28 42" stroke="#0b1a33" stroke-width="3.5" stroke-linecap="round"/></svg>`;
}
function rolleFieldSVG(){
  return `<svg viewBox="0 0 120 90"><rect x="14" y="26" width="32" height="56" rx="6" fill="#3a4c66" ${U}/><rect x="20" y="10" width="7" height="18" fill="#22324a" ${U}/>
  <rect x="20" y="34" width="20" height="14" rx="2" fill="#2fb7b3" ${U}/><circle cx="24" cy="60" r="3" fill="#f4c430"/><circle cx="36" cy="60" r="3" fill="#e85d3a"/>
  <circle cx="78" cy="40" r="20" fill="#cfeef0" ${U}/><path d="M92 54 L110 78" stroke="#0b1a33" stroke-width="9" stroke-linecap="round"/><path d="M92 54 L110 78" stroke="#8a5a2e" stroke-width="4" stroke-linecap="round"/></svg>`;
}
function rolleHQSVG(){
  return `<svg viewBox="0 0 120 90"><rect x="10" y="52" width="100" height="10" fill="#8a5a2e" ${U}/><rect x="16" y="62" width="10" height="24" fill="#8a5a2e" ${U}/><rect x="94" y="62" width="10" height="24" fill="#8a5a2e" ${U}/>
  <path d="M22 52 L26 30 L46 30 L50 34 L70 34 L66 52 Z" fill="#e9cf96" ${U}/><path d="M42 40 l3 6 6 1 -5 4 1 6 -5 -3 -5 3 1 -6 -5 -4 6 -1z" fill="#f4c430"/>
  <path d="M84 52 L84 30 L100 18" fill="none" ${U}/><path d="M92 12 L110 22 L102 30 Z" fill="#f4c430" ${U}/></svg>`;
}

/* ---------- Gegenstände im Zimmer (Größe ca. 46 x 46, Fußpunkt unten Mitte) ---------- */
function dingSVG(id, anzahl){
  switch(id){
    case "lamp": return `<ellipse cx="23" cy="44" rx="12" ry="3" fill="#0b2d5b" ${U}/><path d="M23 44 L23 20" ${U}/><path d="M10 22 L16 4 L30 4 L36 22 Z" fill="#f4c430" ${U}/>`;
    case "book": { let s = ""; const f = ["#2fb7b3","#e85d3a","#f4c430"]; for (let i=0;i<anzahl;i++){ const y = 44 - (i+1)*11; s += `<rect x="${6+i*2}" y="${y}" width="34" height="10" rx="2" fill="${f[i%3]}" ${U}/><line x1="${10+i*2}" y1="${y+5}" x2="${36+i*2}" y2="${y+5}" stroke="#fff" stroke-width="2"/>`; } return s; }
    case "clock": return `<circle cx="10" cy="12" r="6" fill="#e85d3a" ${U}/><circle cx="36" cy="12" r="6" fill="#e85d3a" ${U}/><circle cx="23" cy="26" r="16" fill="#e85d3a" ${U}/><circle cx="23" cy="26" r="11" fill="#fff" ${U}/><path d="M23 26 L23 19 M23 26 L28 28" ${U}/><path d="M12 42 L9 46 M34 42 L37 46" ${U}/>`;
    case "mobile": return `<rect x="13" y="8" width="20" height="36" rx="4" fill="#0b2d5b" ${U}/><rect x="16" y="13" width="14" height="22" fill="#2fb7b3"/><circle cx="23" cy="39" r="2" fill="#fff"/>`;
    case "cap": return `<path d="M6 40 Q6 18 24 18 Q40 18 40 40 Z" fill="#2f6fd6" ${U}/><path d="M38 40 L46 40 Q46 44 38 44 L6 44 L6 40" fill="#2f6fd6" ${U}/><circle cx="24" cy="18" r="3" fill="#2f6fd6" ${U}/>`;
    case "scarf": return `<path d="M4 20 Q14 12 24 20 Q34 28 42 20 L42 30 Q34 38 24 30 Q14 22 4 30 Z" fill="#e85d3a" ${U}/><path d="M30 30 L28 46 L36 46 L38 30" fill="#f4c430" ${U}/>`;
    case "shoe": return `<path d="M2 44 L2 32 L12 30 L18 36 L22 38 L22 44 Z" fill="#e85d3a" ${U}/><path d="M24 44 L24 32 L34 30 L40 36 L44 38 L44 44 Z" fill="#e85d3a" ${U}/>`;
    case "bag": return `<path d="M15 20 Q15 6 23 6 Q31 6 31 20" fill="none" ${U}/><rect x="6" y="18" width="34" height="26" rx="6" fill="#8e44ad" ${U}/><rect x="16" y="26" width="14" height="8" fill="#f4c430" ${U}/>`;
    case "box": return `<rect x="5" y="14" width="36" height="30" fill="#c89a5b" ${U}/><path d="M5 14 L11 6 L35 6 L41 14" fill="#d9b27c" ${U}/><line x1="23" y1="14" x2="23" y2="44" stroke="#f7f1e3" stroke-width="5"/>`;
    case "computer": return `<rect x="8" y="10" width="30" height="22" rx="2" fill="#9aa3ad" ${U}/><rect x="11" y="13" width="24" height="16" fill="#2fb7b3"/><path d="M2 40 L8 32 L38 32 L44 40 Z" fill="#c7ced6" ${U}/>`;
  }
  return "";
}
const PLATZ_POS = {
  onBed:[135,288], underBed:[135,414], onShelf:[140,186], onChair:[305,330], underChair:[305,416],
  onTable:[450,288], underTable:[450,414], onWardrobe:[705,138], nextToWardrobe:[588,420], onCarpet:[450,474]
};
function zimmerSVG(liste, stDef, beschriftet, gefunden){
  const s = [];
  s.push(`<svg class="szene" viewBox="0 0 800 500">`);
  s.push(`<rect x="0" y="0" width="800" height="420" fill="#cfe7ea"/>`);
  for (let x=0;x<800;x+=40) s.push(`<line x1="${x}" y1="0" x2="${x}" y2="420" stroke="#bcdadf" stroke-width="2"/>`);
  s.push(`<rect x="0" y="420" width="800" height="80" fill="#d9b27c"/><line x1="0" y1="420" x2="800" y2="420" stroke="#0b1a33" stroke-width="3"/>`);
  s.push(`<ellipse cx="450" cy="470" rx="130" ry="24" fill="#e85d3a" ${U}/><ellipse cx="450" cy="470" rx="100" ry="15" fill="none" stroke="#f4c430" stroke-width="4"/>`);
  // Fenster + Poster
  s.push(`<rect x="370" y="40" width="160" height="120" fill="#8fd3f4" ${U}/><line x1="450" y1="40" x2="450" y2="160" ${U}/><line x1="370" y1="100" x2="530" y2="100" ${U}/>`);
  s.push(`<rect x="560" y="50" width="56" height="80" fill="#f4c430" ${U}/><circle cx="588" cy="80" r="14" fill="#e85d3a" ${U}/><rect x="572" y="102" width="32" height="6" fill="#0b2d5b"/>`);
  // Regal
  s.push(`<rect x="50" y="186" width="190" height="12" fill="#8a5a2e" ${U}/><path d="M70 198 L70 214 L90 198 M220 198 L220 214 L200 198" fill="none" ${U}/>`);
  // Bett
  s.push(`<rect x="20" y="230" width="22" height="190" fill="#8a5a2e" ${U}/><rect x="22" y="300" width="230" height="50" fill="#8a5a2e" ${U}/>`);
  s.push(`<rect x="30" y="286" width="220" height="18" rx="8" fill="#fff" ${U}/><rect x="110" y="282" width="140" height="24" rx="8" fill="#2fb7b3" ${U}/>`);
  s.push(`<rect x="232" y="350" width="14" height="70" fill="#8a5a2e" ${U}/>`);
  // Stuhl
  s.push(`<rect x="330" y="246" width="12" height="174" fill="#c0392b" ${U}/><rect x="268" y="330" width="74" height="12" fill="#c0392b" ${U}/><rect x="270" y="342" width="10" height="78" fill="#c0392b" ${U}/>`);
  // Tisch
  s.push(`<rect x="360" y="288" width="180" height="16" fill="#8a5a2e" ${U}/><rect x="370" y="304" width="12" height="116" fill="#8a5a2e" ${U}/><rect x="518" y="304" width="12" height="116" fill="#8a5a2e" ${U}/>`);
  // Schrank
  s.push(`<rect x="630" y="138" width="150" height="282" fill="#b87a40" ${U}/><line x1="705" y1="138" x2="705" y2="420" ${U}/><circle cx="694" cy="280" r="5" fill="#f4c430" ${U}/><circle cx="716" cy="280" r="5" fill="#f4c430" ${U}/>`);
  // Dinge
  liste.forEach(d => {
    const [x, y] = PLATZ_POS[d.platz];
    const ding = stDef.dinge.find(t => t.id === d.id);
    const ok = gefunden && gefunden.includes(d.id);
    s.push(`<g class="ding" data-id="${d.id}" transform="translate(${x-23},${y-46})">`);
    s.push(`<rect x="-6" y="-4" width="58" height="54" fill="transparent"/>`);
    if (ok) s.push(`<circle cx="23" cy="24" r="30" fill="rgba(244,196,48,.55)" stroke="#0b1a33" stroke-width="3"/>`);
    s.push(dingSVG(d.id, d.anzahl));
    if (beschriftet){
      const wort = d.anzahl > 1 ? (ding.plural) : ding.en;
      s.push(`<text x="23" y="62" text-anchor="middle" font-family="Avenir Next, Arial" font-weight="700" font-size="15" fill="#0b1a33" stroke="#fff" stroke-width="4" paint-order="stroke">${wort}</text>`);
    }
    if (ok) s.push(`<text x="44" y="0" font-size="26" font-weight="900" fill="#3fa34d" stroke="#0b1a33" stroke-width="1.5">✓</text>`);
    s.push(`</g>`);
  });
  s.push(`</svg>`);
  return s.join("");
}

/* ---------- Kinder auf dem Schulhof ---------- */
function kindSVG(k, cx, zeigeName){
  const b = 360, haut = HAUT[k.haut], haar = HAAR[k.haar], sh = FARBE[k.shirt], kf = FARBE[k.kopfFarbe], ta = FARBE[k.tasche];
  const s = [];
  s.push(`<g class="kind" data-name="${k.name}">`);
  s.push(`<rect x="${cx-58}" y="90" width="116" height="280" fill="transparent"/>`);
  s.push(`<ellipse cx="${cx}" cy="${b+4}" rx="40" ry="7" fill="rgba(0,0,0,.2)"/>`);
  if (k.g === "girl") s.push(`<path d="M${cx-34} 150 Q${cx-40} 220 ${cx-26} 232 L${cx+26} 232 Q${cx+40} 220 ${cx+34} 150 Z" fill="${haar}" ${U}/>`);
  // Beine + Schuhe
  s.push(`<rect x="${cx-22}" y="270" width="18" height="78" fill="#2a3f6b" ${U}/><rect x="${cx+4}" y="270" width="18" height="78" fill="#2a3f6b" ${U}/>`);
  s.push(`<path d="M${cx-26} ${b} L${cx-26} 346 L${cx-4} 346 L${cx-2} ${b} Z" fill="#fff" ${U}/><path d="M${cx+2} ${b} L${cx+4} 346 L${cx+26} 346 L${cx+26} ${b} Z" fill="#fff" ${U}/>`);
  // Tasche (Gurt + Tasche)
  s.push(`<path d="M${cx-20} 192 L${cx+40} 262" stroke="${ta}" stroke-width="6" stroke-linecap="round"/>`);
  // Körper (T-Shirt) + Arme
  s.push(`<path d="M${cx-30} 192 L${cx+30} 192 L${cx+44} 230 L${cx+30} 236 L${cx+28} 276 L${cx-28} 276 L${cx-30} 236 L${cx-44} 230 Z" fill="${sh}" ${U}/>`);
  s.push(`<circle cx="${cx-38}" cy="240" r="7" fill="${haut}" ${U}/><circle cx="${cx+38}" cy="240" r="7" fill="${haut}" ${U}/>`);
  s.push(`<rect x="${cx+24}" y="248" width="34" height="30" rx="6" fill="${ta}" ${U}/>`);
  if (zeigeName) s.push(`<rect x="${cx+14}" y="252" width="54" height="22" rx="4" fill="#fff" ${U}/><text x="${cx+41}" y="268" text-anchor="middle" font-family="Avenir Next Condensed, Arial Narrow, sans-serif" font-weight="900" font-size="15" fill="#0b1a33">${k.name}</text>`);
  // Kopf
  s.push(`<rect x="${cx-8}" y="180" width="16" height="14" fill="${haut}" ${U}/>`);
  s.push(`<circle cx="${cx}" cy="150" r="32" fill="${haut}" ${U}/>`);
  s.push(`<circle cx="${cx-11}" cy="150" r="4" fill="#0b1a33"/><circle cx="${cx+11}" cy="150" r="4" fill="#0b1a33"/><path d="M${cx-10} 164 Q${cx} 172 ${cx+10} 164" fill="none" ${U}/>`);
  // Haare oben
  s.push(`<path d="M${cx-32} 146 Q${cx-30} 112 ${cx} 112 Q${cx+30} 112 ${cx+32} 146 Q${cx+12} 130 ${cx-32} 146 Z" fill="${haar}" ${U}/>`);
  // Kopfbedeckung
  if (k.kopf === "cap"){
    s.push(`<path d="M${cx-32} 134 Q${cx-30} 100 ${cx} 100 Q${cx+30} 100 ${cx+32} 134 Z" fill="${kf}" ${U}/><path d="M${cx+18} 134 L${cx+56} 134 Q${cx+56} 142 ${cx+30} 142 L${cx-32} 142 L${cx-32} 134 Z" fill="${kf}" ${U}/>`);
  } else {
    s.push(`<ellipse cx="${cx}" cy="128" rx="52" ry="10" fill="${kf}" ${U}/><path d="M${cx-26} 128 L${cx-22} 92 Q${cx} 84 ${cx+22} 92 L${cx+26} 128 Z" fill="${kf}" ${U}/><rect x="${cx-24}" y="114" width="48" height="8" fill="#0b1a33"/>`);
  }
  s.push(`</g>`);
  return s.join("");
}
function schulhofSVG(kinder, gezeigt){
  const breite = Math.max(800, kinder.length * 130 + 40);
  const s = [`<svg class="szene" viewBox="0 0 ${breite} 400">`];
  s.push(`<rect width="${breite}" height="230" fill="#9fdcf2"/><rect y="230" width="${breite}" height="170" fill="#7cc46b"/><line x1="0" y1="230" x2="${breite}" y2="230" stroke="#0b1a33" stroke-width="3"/>`);
  s.push(`<rect x="${breite-120}" y="120" width="26" height="120" fill="#8a5a2e" ${U}/><circle cx="${breite-107}" cy="100" r="55" fill="#3fa34d" ${U}/>`);
  s.push(`<rect x="40" y="70" width="150" height="160" fill="#e9cf96" ${U}/><rect x="60" y="90" width="40" height="36" fill="#8fd3f4" ${U}/><rect x="130" y="90" width="40" height="36" fill="#8fd3f4" ${U}/><rect x="95" y="170" width="40" height="60" fill="#8a5a2e" ${U}/>`);
  const abstand = (breite - 40) / kinder.length;
  kinder.forEach((k, i) => s.push(kindSVG(k, 20 + abstand * (i + 0.5), gezeigt === k.name)));
  s.push(`</svg>`);
  return s.join("");
}

