/* =====================================================================
   AGENT FILES – INHALTE KLASSE 5 („Junior Agents“)
   ---------------------------------------------------------------------
   In dieser Datei stehen NUR Inhalte (Texte, Wörter, Lösungsbausteine).
   Die Technik steht in index.html.

   Grundlage Wortschatz: Klasse 5, Unit 1–2 (siehe Projekt-Wortliste
   „AgentFiles_Wortliste_Kl5_Mission1.md“, von der Lehrkraft freigegeben
   am 25.11.2026).
   Grammatik Unit 1–2: ’s-Genitiv, to be, Plural, Fragen mit to be,
   a/an/the, Imperativ, Verneinung von to be.
   Wichtig: Zahlen nur bis twelve, kein have got, kein simple past.

   Ampel (Stufe): 0 = grün (leicht), 1 = gelb (mittel), 2 = rot (schwer)
   ===================================================================== */

window.AGENT_FILES = window.AGENT_FILES || { klassen: {} };

AGENT_FILES.klassen[5] = {
  titel: "Junior Agents",

  /* ---------- Sätze, die immer im Funkgerät stehen ---------- */
  notfallSaetze: [
    "I don't understand.",
    "How do you spell it?",
    "Again, please.",
    "Are you ready?",
    "Yes, that's right!",
    "No, that's wrong."
  ],

  /* ---------- Wörterhilfe (englisch – deutsch) ---------- */
  woerter: [
    ["agent", "Agent/Agentin"],
    ["field agents", "Agenten im Einsatz"],
    ["HQ (headquarters)", "Zentrale"],
    ["mission", "Mission, Auftrag"],
    ["code", "Code"],
    ["station", "Station"],
    ["hamster", "Hamster"],
    ["professor", "Professor"],
    ["password", "Passwort"],
    ["desk", "Schreibtisch"],
    ["again", "noch einmal"],
    ["Let's go!", "Los geht's!"],
    ["caretaker", "Hausmeister/in"],
    ["playground", "Schulhof"],
    ["in / on / under / next to", "in / auf / unter / neben"],
    ["there is / there are", "es gibt / da ist / da sind"],
    ["his / her", "sein(e) / ihr(e)"],
    ["isn't (= is not)", "ist nicht"],
    ["note", "Notiz, Zettel"],
    ["Mission complete!", "Mission erfüllt!"],
    ["pound(s)", "Pfund (Geld in Großbritannien)"],
    ["calendar", "Kalender"],
    ["Two or three?", "Zwei oder drei?"],
    ["doesn't (= does not)", "nicht (bei he/she/it)"]
  ],

  /* ---------- Debriefing am Missionsende (Selbsteinschätzung, wird nicht gespeichert) ---------- */
  debriefing: {
    titel: "Mission report",
    fragen: [
      { en: "We talked in English.",   de: "Wir haben Englisch gesprochen.",          tipp: "Nächstes Mal: Lest die „Useful phrases“ laut vor – auch ganze Sätze!" },
      { en: "We asked questions.",     de: "Wir haben nachgefragt, wenn etwas unklar war.", tipp: "Nächstes Mal: Fragt nach! „How do you spell it?“ – „Again, please.“" },
      { en: "We were a good team.",    de: "Wir waren ein gutes Team.",                tipp: "Nächstes Mal: Wechselt euch beim Sprechen ab (Speaker: Agent 1 / Agent 2)." }
    ],
    abzeichen: ["Junior Agent", "Silver Agent", "Gold Agent"]
  },

  missionen: [

    /* =================================================================
       TRAININGSMISSION
       ================================================================= */
    {
      id: "training",
      titel: "Agent Training",
      briefing: {
        en: [
          "Hello, agents! Welcome to the S.P.Y. Academy.",
          "Please spell your agent names.",
          "HQ, you are at the desk. Field agents, you are in the school.",
          "Talk in English. Are you ready? Let's go!"
        ],
        de: "Trainingsmission: Ihr buchstabiert euch gegenseitig eure Agentennamen. So lernt ihr die Regeln kennen."
      },
      stationen: [
        {
          baustein: "buchstabieren",
          loeser: "field",          // Field Agents tippen ein
          titel: "Agent names (1)",
          aufgabe: {
            field: "HQ buchstabiert euch einen Agentennamen. Tippt ihn ein.",
            hq: "Buchstabiert den Field Agents diesen Agentennamen."
          },
          // Wortvorrat nach Ampel: grün kurz, gelb mittel, rot lang
          woerter: [
            ["RED CAT", "PINK BAT", "BLUE DOG", "GREY CAT"],
            ["GREEN DOG", "BLACK CAT", "BROWN BAT", "WHITE DOG"],
            ["ORANGE BAT", "PURPLE DOG", "YELLOW CAT", "PURPLE BAT"]
          ],
          saetze: [
            ["My agent name is red cat.", "R – E – D, C – A – T.", "How do you spell it?"],
            ["My agent name is …", "How do you …?"],
            ["name – spell"]
          ]
        },
        {
          baustein: "buchstabieren",
          loeser: "hq",             // HQ tippt ein
          titel: "Agent names (2)",
          aufgabe: {
            field: "Buchstabiert HQ diesen Agentennamen.",
            hq: "Die Field Agents buchstabieren euch einen Agentennamen. Tippt ihn ein."
          },
          woerter: [
            ["RED DOG", "PINK CAT", "BLUE BAT", "GREY DOG"],
            ["GREEN CAT", "BLACK BAT", "BROWN DOG", "WHITE CAT"],
            ["ORANGE DOG", "PURPLE CAT", "YELLOW BAT", "YELLOW DOG"]
          ],
          saetze: [
            ["My agent name is blue dog.", "B – L – U – E, D – O – G.", "How do you spell it?"],
            ["My agent name is …", "How do you …?"],
            ["name – spell"]
          ]
        }
      ],
      ende: {
        en: "Well done! You are agents now!",
        de: "Training geschafft. Jetzt seid ihr bereit für eine echte Mission."
      },
      lehrer: {
        dauer: "ca. 8 Minuten",
        ziel: "Regeln kennenlernen: Rollen, Missionsnummer, Funkcodes. Buchstabieren in beide Richtungen.",
        sprache: "Alphabet, Farben, Tiere aus Unit 1 (cat, dog, bat)",
        vorher: ["Alphabet wiederholen, besonders E/I, G/J, A/R/Y", "Redemittel „How do you spell it?“ und „Again, please.“ einführen"],
        stolper: ["Leerzeichen werden nicht eingetippt – nur die Buchstaben", "Teams sagen den Funkcode auf Deutsch → auf „zero, one, two …“ bestehen"]
      }
    },

    /* =================================================================
       MISSION 1: THE LOST HAMSTER (Unit 1–2)
       ================================================================= */
    {
      id: "hamster",
      titel: "The Lost Hamster",
      briefing: {
        en: [
          "Hello, agents! I'm Professor Plum.",
          "Oh no – my hamster Biscuit is not here! Where is he?",
          "Can you find him? HQ, you are at the desk. Field agents, you are in the school.",
          "Talk in English. Are you ready? Let's go!"
        ],
        de: "Der Hamster Biscuit ist verschwunden. HQ hat die Akten, die Field Agents sind in der Schule. Ihr findet ihn nur, wenn ihr auf Englisch miteinander sprecht."
      },
      stationen: [

        /* ---------- Station 1: Tür mit Passwort ---------- */
        {
          baustein: "tuer",
          loeser: "field",
          titel: "The door",
          aufgabe: {
            field: "Lest HQ den Namen an der Tür vor und buchstabiert ihn. HQ sagt euch das Passwort. Tippt es ein.",
            hq: "Die Field Agents buchstabieren einen Namen. Sucht ihn in der Liste und buchstabiert das Passwort."
          },
          // Namen an den Türen (Paare mit ähnlichen Namen machen Rot schwerer)
          namen: ["MR BLACK", "MRS GREEN", "MS WHITE", "MR BROWN", "MRS PINK", "MR GREY", "MS PURPLE", "MR GREEN", "MRS BROWN", "MS BLACK"],
          aehnlich: [["MRS GREEN", "MR GREEN"], ["MR BROWN", "MRS BROWN"], ["MR BLACK", "MS BLACK"]],
          // Passwörter = Schulsachen aus Unit 2, nach Ampel
          passwoerter: [
            ["PEN", "BAG", "GLUE", "BOOK", "PENCIL"],
            ["RULER", "PENCIL", "ERASER", "FELT-TIP", "PENCIL CASE"],
            ["PENCIL CASE", "CALCULATOR", "EXERCISE BOOK", "PENCIL SHARPENER", "FELT-TIP"]
          ],
          listenLaenge: [4, 6, 7],
          saetze: [
            ["The name is Mrs Green.", "M – R – S, G – R – E – E – N.", "What's the password?", "The password is ruler."],
            ["The name is …", "What's the …?", "The password is …"],
            ["name – password – spell"]
          ]
        },

        /* ---------- Station 2: Zimmer – was ist anders? ---------- */
        {
          baustein: "zimmer",
          loeser: "field",
          titel: "Professor Plum's room",
          aufgabe: {
            field: "So sieht das Zimmer JETZT aus. HQ hat ein Foto von VORHER. Findet heraus, was jetzt an einem anderen Platz ist, und tippt es an.",
            hq: "Das ist ein Foto vom Zimmer VORHER. Die Field Agents sehen das Zimmer JETZT. Beschreibt euch gegenseitig, was wo ist."
          },
          // Gegenstände (en = Einzahl, plural = Mehrzahl, de = Hilfe)
          dinge: [
            { id: "lamp",   en: "lamp",        de: "Lampe" },
            { id: "book",   en: "book",        plural: "books", de: "Buch", anzahl: [1, 2, 3] },
            { id: "clock",  en: "alarm clock", de: "Wecker" },
            { id: "mobile", en: "mobile",      de: "Handy" },
            { id: "cap",    en: "cap",         de: "Kappe" },
            { id: "scarf",  en: "scarf",       de: "Schal" },
            { id: "shoe",   en: "shoe",        plural: "shoes", de: "Schuh", anzahl: [2] },
            { id: "bag",    en: "bag",         de: "Tasche" },
            { id: "box",    en: "box",         de: "Kiste" },
            { id: "computer", en: "computer",  de: "Computer" }
          ],
          // Plätze im Zimmer (Position wird in index.html gezeichnet)
          plaetze: [
            { id: "onBed",          en: "on the bed" },
            { id: "underBed",       en: "under the bed" },
            { id: "onShelf",        en: "on the shelf" },
            { id: "onChair",        en: "on the chair" },
            { id: "underChair",     en: "under the chair" },
            { id: "onTable",        en: "on the table" },
            { id: "underTable",     en: "under the table" },
            { id: "onWardrobe",     en: "on the wardrobe" },
            { id: "nextToWardrobe", en: "next to the wardrobe" },
            { id: "onCarpet",       en: "on the carpet" }
          ],
          // Feste Reihenfolge zum Vergleichen (Checkliste bei HQ, seit v0.1.3)
          moebel: [["bed", "Bett"], ["shelf", "Regal"], ["chair", "Stuhl"], ["table", "Tisch"], ["wardrobe", "Schrank"], ["carpet", "Teppich"]],
          vorgehen: {
            field: ["HQ nennt euch Möbel für Möbel, was dort liegt.", "Vergleicht mit eurem Zimmer.", "Ist etwas an einem anderen Platz? Antippen!"],
            hq: ["Geht die Liste von oben nach unten durch.", "Sagt bei jedem Möbelstück, was darauf, darunter oder daneben ist.", "Fertig mit einem Möbelstück? Abhaken!"]
          },
          anzahlDinge: [5, 6, 7],
          anzahlUnterschiede: [1, 2, 3],
          beschriftet: [true, false, false],
          saetze: [
            ["There is a lamp on the table.", "There are two books on the shelf.", "Is the cap on the bed?", "Yes, it is. / No, it isn't."],
            ["There is a … on …", "There are …", "Is the … on/in/under …?", "Where is the …?"],
            ["lamp – table – on", "books – shelf – two"]
          ],
          hinweisDanach: {
            en: "There's a note: \"Biscuit is not here. Go to the playground!\"",
            de: "Ihr habt einen Zettel gefunden. Merkt euch eure zwei Zahlen für das Finale!"
          }
        },

        /* ---------- Station 3: Welches Kind hat Biscuit? ---------- */
        {
          baustein: "kinder",
          loeser: "hq",
          titel: "Who is with Biscuit?",
          aufgabe: {
            field: "Ihr seid auf dem Schulhof. HQ hat eine Notiz vom Hausmeister. Fragt nach und tippt das richtige Kind an. Buchstabiert HQ dann den Namen auf der Tasche.",
            hq: "Lest den Field Agents die Notiz vor und beantwortet ihre Fragen. Wenn sie euch den Namen buchstabieren, tippt ihn ein."
          },
          jungen: ["TOM", "BEN", "SAM", "JACK", "LEO", "MAX"],
          maedchen: ["AMY", "LILY", "MIA", "EMMA", "ZOE", "ANNA"],
          haarfarben: ["brown", "black", "red"],
          farben: ["red", "green", "blue", "yellow", "black", "white", "orange", "purple", "pink", "grey"],
          kopf: ["cap", "hat"],
          anzahlKinder: [4, 6, 6],
          notizTitel: "Note from the caretaker",
          notizAnfang: "I can see Biscuit! He's in a bag.",
          saetze: [
            ["Is it a boy or a girl?", "What colour is her hair?", "Her T-shirt is red.", "His cap is blue."],
            ["Is it a …?", "What colour is …?", "His … / Her … is …", "The name is …"],
            ["boy – girl – hair – T-shirt – cap – hat – bag"]
          ]
        },

        /* ---------- Finale: Biscuits Box ---------- */
        {
          baustein: "finale",
          loeser: "beide",
          titel: "Biscuit's box",
          aufgabe: {
            field: "Sagt HQ eure zwei Zahlen. HQ sagt euch seine. Gebt den Code ein: zuerst die Zahlen der Field Agents, dann die von HQ.",
            hq: "Sagt den Field Agents eure zwei Zahlen. Sie sagen euch ihre. Gebt den Code ein: zuerst die Zahlen der Field Agents, dann eure."
          },
          saetze: [
            ["Our numbers are four and seven.", "What are your numbers?", "Again, please."],
            ["Our numbers are …", "What are …?"],
            ["numbers"]
          ]
        }
      ],
      ende: {
        en: "Mission complete! Biscuit is here. Well done, agents!",
        de: "Ihr habt Biscuit gefunden. Super Teamarbeit!"
      },
      lehrer: {
        dauer: "ca. 15–20 Minuten (im Test unter 20 Minuten – zwei Missionen pro Stunde sind möglich)",
        ziel: "Informationen austauschen: buchstabieren, Gegenstände und Orte beschreiben, Personen beschreiben, nachfragen.",
        sprache: "to be, Fragen mit to be, Verneinung (isn't), there is/are, Plural, in/on/under/next to, his/her, ’s-Genitiv; Schulsachen, Möbel, Kleidung, Farben, Zahlen 0–9",
        vorher: ["Präpositionen in/on/under/next to mit Gegenständen im Klassenzimmer zeigen", "Möbelwörter wiederholen: bed, shelf, chair, table, wardrobe, carpet", "his/her und „It's a boy / girl.“ kurz wiederholen"],
        stolper: [
          "Station 1: Mr, Mrs und Ms sind verschiedene Namen (bei drei Sternen gibt es z. B. Mr Green und Mrs Green)",
          "Station 2: HQ soll die Möbel-Checkliste der Reihe nach abarbeiten – sonst wird wild geraten (nach 2 Fehlversuchen 30 Sekunden Alarm)",
          "Station 3: Bei drei Sternen enthält die Notiz eine Verneinung („Her bag isn't purple.“) – genau lesen!",
          "Finale: Zuerst die Zahlen der Field Agents, dann die von HQ"
        ]
      }
    },

    /* =================================================================
       MISSION 2: THE BIRTHDAY SURPRISE (Unit 3–4)
       simple present (he/she -s, does, doesn't), Uhrzeiten, Monate,
       Ordnungszahlen bis thirteenth, Zahlen bis 100, Einkaufen
       ================================================================= */
    {
      id: "birthday",
      titel: "The Birthday Surprise",
      briefing: {
        en: [
          "Hello, agents! It's me, Biscuit.",
          "On Saturday it's Professor Plum's birthday! Let's plan a surprise party for him.",
          "Find the date and the time, do the shopping and find his friend. But don't tell the professor!",
          "Are you ready? Let's go!"
        ],
        de: "Biscuit plant eine Überraschungsparty für Professor Plum. Findet Datum und Uhrzeit heraus, kauft ein und ladet seinen Freund oder seine Freundin ein."
      },
      stationen: [

        /* ---------- Station 1: Datum im Kalender ---------- */
        {
          baustein: "kalender",
          loeser: "field",
          titel: "The date",
          aufgabe: {
            field: "HQ weiß, wann Professor Plum Geburtstag hat. Fragt nach und tippt im Kalender Monat und Tag an.",
            hq: "Findet in eurer Akte heraus, wann Professor Plum Geburtstag hat, und sagt es den Field Agents."
          },
          monate: ["January","February","March","April","May","June","July","August","September","October","November","December"],
          ordnungszahlen: ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth"],
          zahlen: ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"],
          hauptperson: "Professor Plum",
          personen: ["Biscuit", "Mrs Green", "Tom"],
          saetze: [
            ["When is his birthday?", "It's on the ninth of October.", "What month is it?"],
            ["When is …?", "It's on the …", "How do you spell it?"],
            ["birthday – month – day"]
          ]
        },

        /* ---------- Station 2: Uhrzeit aus dem Tagesablauf ---------- */
        {
          baustein: "uhr",
          loeser: "hq",
          titel: "The time",
          aufgabe: {
            field: "Ihr habt Professor Plums Tagesablauf. HQ fragt euch nach einer Uhrzeit – sagt sie auf Englisch.",
            hq: "Lest den Auftrag. Fragt die Field Agents nach der Uhrzeit und stellt sie auf der Uhr ein."
          },
          ueberschrift: "Professor Plum's Saturday",
          auftrag: "The party is on Saturday. It is when Professor Plum comes home.",
          // Zeitfenster (24 Std.), in Viertelstunden-Schritten; Reihenfolge = Tagesablauf
          taetigkeiten: [
            { id: "up",        en: "He gets up",                     icon: "⏰", von: [6, 0],  bis: [7, 0] },
            { id: "breakfast", en: "He has breakfast",               icon: "🥣", von: [7, 15], bis: [8, 0] },
            { id: "zoo",       en: "He goes to the zoo",             icon: "🦓", von: [8, 15], bis: [9, 0] },
            { id: "penguins",  en: "He feeds the penguins",          icon: "🐧", von: [9, 30], bis: [11, 0] },
            { id: "lunch",     en: "He has lunch",                   icon: "🍽️", von: [12, 0], bis: [13, 0] },
            { id: "cage",      en: "He cleans the elephant cage",    icon: "🐘", von: [14, 0], bis: [15, 30] },
            { id: "tea",       en: "He has tea at the café",         icon: "☕", von: [16, 0], bis: [16, 45] },
            { id: "home",      en: "He comes home",                  icon: "🏠", von: [17, 0], bis: [18, 45] }
          ],
          zielId: "home",
          falleTag: "On Mondays he comes home",   // nur bei Rot: Ablenker
          saetze: [
            ["When does he come home?", "He comes home at half past five.", "Is it quarter past or quarter to?"],
            ["When does he …?", "He … at …", "What time is it?"],
            ["come home – time – Saturday"]
          ]
        },

        /* ---------- Station 3: Einkaufen im corner shop ---------- */
        {
          baustein: "laden",
          loeser: "hq",
          titel: "The corner shop",
          aufgabe: {
            field: "Ihr seid im Laden. HQ liest euch die Einkaufsliste vor. Tippt die Sachen an, bis alles in der Tasche ist. Dann sagt HQ den Preis.",
            hq: "Lest den Field Agents die Einkaufsliste vor. Wenn sie euch den Preis sagen, tippt ihn ein."
          },
          // Produkte: art = a/an, menge = mögliche Anzahlen, preis = Pfund pro Stück (von–bis)
          produkte: [
            { id: "cake",           art: "a",  en: "cake",               plural: "cakes",               de: "Kuchen",           emoji: "🎂", menge: [1, 2],         preis: [6, 12] },
            { id: "candle",         art: "a",  en: "candle",             plural: "candles",             de: "Kerze",            emoji: "🕯️", menge: [6, 8, 10, 12], preis: [1, 1] },
            { id: "balloon",        art: "a",  en: "balloon",            plural: "balloons",            de: "Luftballon",       emoji: "🎈", menge: [5, 6, 8, 10],  preis: [1, 2] },
            { id: "pizza",          art: "a",  en: "pizza",              plural: "pizzas",              de: "Pizza",            emoji: "🍕", menge: [1, 2, 3],      preis: [5, 9] },
            { id: "orange",         art: "an", en: "orange",             plural: "oranges",             de: "Orange",           emoji: "🍊", menge: [4, 5, 6],      preis: [1, 1] },
            { id: "sandwich",       art: "a",  en: "sandwich",           plural: "sandwiches",          de: "Sandwich",         emoji: "🥪", menge: [2, 3, 4],      preis: [2, 4] },
            { id: "icecream",       art: "an", en: "ice cream",          plural: "ice creams",          de: "Eis",              emoji: "🍦", menge: [2, 3, 4],      preis: [2, 3] },
            { id: "lemonadeBottle", art: "a",  en: "bottle of lemonade", plural: "bottles of lemonade", de: "Flasche Limonade", form: "bottle", farbe: "#f7e463", menge: [1, 2, 3], preis: [2, 4] },
            { id: "lemonadeCan",    art: "a",  en: "can of lemonade",    plural: "cans of lemonade",    de: "Dose Limonade",    form: "can",    farbe: "#f7e463", menge: [2, 4, 6], preis: [1, 2] },
            { id: "crisps",         art: "a",  en: "packet of crisps",   plural: "packets of crisps",   de: "Tüte Chips",       form: "packet", farbe: "#e85d3a", emoji: "🥔", menge: [1, 2, 3], preis: [1, 3] },
            { id: "chocolate",      art: "a",  en: "bar of chocolate",   plural: "bars of chocolate",   de: "Tafel Schokolade", form: "bar",    farbe: "#7a4a24", menge: [1, 2, 3], preis: [1, 3] },
            { id: "biscuitsPacket", art: "a",  en: "packet of biscuits", plural: "packets of biscuits", de: "Packung Kekse",    form: "packet", farbe: "#2fb7b3", emoji: "🍪", menge: [1, 2], preis: [2, 4] },
            { id: "biscuitsBox",    art: "a",  en: "box of biscuits",    plural: "boxes of biscuits",   de: "Schachtel Kekse",  form: "box",    farbe: "#8e44ad", emoji: "🍪", menge: [1, 2], preis: [4, 7] }
          ],
          einfach: ["cake", "candle", "balloon", "pizza", "orange", "sandwich", "icecream"],
          zwillinge: [["lemonadeBottle", "lemonadeCan"], ["biscuitsPacket", "biscuitsBox"]],
          anzahlListe: [3, 4, 5],
          regalGroesse: [6, 8, 10],
          listenTitel: "Shopping list",
          saetze: [
            ["We need two cakes.", "Two or three?", "How much is it?", "It's forty-seven pounds."],
            ["We need …", "A bottle or a can?", "How much is it?"],
            ["bottle – can – packet – box – bar – pounds"]
          ]
        },

        /* ---------- Station 4: Gäste – Professor Plums Freund/in finden ---------- */
        {
          baustein: "gaeste",
          loeser: "field",
          titel: "The guest",
          aufgabe: {
            field: "Ihr seht mehrere Kinder. HQ hat eine Notiz von Biscuit. Fragt nach und tippt Professor Plums Freund oder Freundin an.",
            hq: "Lest den Field Agents die Notiz vor und beantwortet ihre Fragen."
          },
          hobbys: [
            { id: "football",   en: "plays football",       neg: "doesn't play football",       emoji: "⚽", de: "Fußball" },
            { id: "tennis",     en: "plays tennis",         neg: "doesn't play tennis",         emoji: "🎾", de: "Tennis" },
            { id: "basketball", en: "plays basketball",     neg: "doesn't play basketball",     emoji: "🏀", de: "Basketball" },
            { id: "volleyball", en: "plays volleyball",     neg: "doesn't play volleyball",     emoji: "🏐", de: "Volleyball" },
            { id: "chess",      en: "plays chess",          neg: "doesn't play chess",          emoji: "♟️", de: "Schach" },
            { id: "games",      en: "plays computer games", neg: "doesn't play computer games", emoji: "🎮", de: "Computerspiele" }
          ],
          tiere: [
            { id: "penguin",  en: "penguins",  emoji: "🐧", de: "Pinguine" },
            { id: "lion",     en: "lions",     emoji: "🦁", de: "Löwen" },
            { id: "elephant", en: "elephants", emoji: "🐘", de: "Elefanten" },
            { id: "giraffe",  en: "giraffes",  emoji: "🦒", de: "Giraffen" },
            { id: "snake",    en: "snakes",    emoji: "🐍", de: "Schlangen" },
            { id: "parrot",   en: "parrots",   emoji: "🦜", de: "Papageien" },
            { id: "monkey",   en: "monkeys",   emoji: "🐒", de: "Affen" }
          ],
          haustiere: [
            { id: "dog",   en: "a dog",   emoji: "🐶", de: "Hund" },
            { id: "cat",   en: "a cat",   emoji: "🐱", de: "Katze" },
            { id: "fish",  en: "a fish",  emoji: "🐟", de: "Fisch" },
            { id: "bird",  en: "a bird",  emoji: "🐦", de: "Vogel" },
            { id: "mouse", en: "a mouse", emoji: "🐭", de: "Maus" }
          ],
          jungen: ["TOM", "BEN", "SAM", "JACK", "LEO", "MAX"],
          maedchen: ["AMY", "LILY", "MIA", "EMMA", "ZOE", "ANNA"],
          anzahlProfile: [4, 6, 6],
          notizTitel: "Biscuit's note",
          notizAnfang: "Please invite Professor Plum's friend to the party!",
          saetze: [
            ["Is it a boy or a girl?", "Does she play tennis?", "What's her pet?", "Her pet is a cat."],
            ["Is it a …?", "Does he/she …?", "What's his/her …?"],
            ["boy – girl – plays – likes – pet – doesn't"]
          ]
        },

        /* ---------- Finale ---------- */
        {
          baustein: "finale",
          loeser: "beide",
          titel: "The party box",
          aufgabe: {
            field: "Sagt HQ eure zwei Zahlen. HQ sagt euch seine. Gebt den Code ein: zuerst die Zahlen der Field Agents, dann die von HQ.",
            hq: "Sagt den Field Agents eure zwei Zahlen. Sie sagen euch ihre. Gebt den Code ein: zuerst die Zahlen der Field Agents, dann eure."
          },
          saetze: [
            ["Our numbers are four and seven.", "What are your numbers?", "Again, please."],
            ["Our numbers are …", "What are …?"],
            ["numbers"]
          ]
        }
      ],
      ende: {
        en: "Mission complete! The party is ready. Well done, agents!",
        de: "Die Überraschungsparty kann beginnen. Super Teamarbeit!"
      },
      lehrer: {
        dauer: "ca. 20–25 Minuten (4 Stationen + Finale)",
        ziel: "Informationen austauschen: Datum, Uhrzeit, Einkaufsliste und Preise, Personen anhand von Hobbys und Vorlieben beschreiben.",
        sprache: "simple present mit -s (he gets up, he goes, he has), Fragen mit does, Verneinung mit doesn't, he/she, his/her; Monate, Ordnungszahlen first–thirteenth, Uhrzeiten (o'clock, quarter past, half past, quarter to), Zahlen bis 100, Einkaufen (bottle, can, packet, box, bar)",
        vorher: [
          "Ordnungszahlen und Monate wiederholen (When is your birthday? – It's on the …)",
          "Uhrzeiten an einer Uhr üben, besonders quarter to (= Viertel vor) und half past (= halb – half past five ist 5:30!)",
          "Zehnerzahlen sicher sprechen (forty-seven, seventy-four)",
          "Verpackungen: bottle, can, packet, box, bar"
        ],
        stolper: [
          "Station 1: Ordnungszahlen mit Sonderform (first, second, third, fifth, eighth, ninth, twelfth)",
          "Station 2: half past five = halb sechs! Bei drei Sternen steht auch, wann er montags nach Hause kommt – gefragt ist Samstag",
          "Station 3: Bei drei Sternen stehen ähnliche Sachen im Regal (bottle/can of lemonade, packet/box of biscuits). Der Preis ist ein Zehnerwert bis 99",
          "Station 4: Bei drei Sternen enthält die Notiz eine Verneinung (He doesn't play chess.)",
          "Finale: zuerst die Zahlen der Field Agents (aus Station 1), dann die von HQ (aus Station 3)"
        ]
      }
    }
  ]
};
