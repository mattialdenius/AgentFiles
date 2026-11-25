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
    ["Mission complete!", "Mission erfüllt!"]
  ],

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
      }
    }
  ]
};
