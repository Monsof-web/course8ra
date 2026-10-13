/* ==========================================================
   CONTENU DU SITE — c'est le seul fichier à modifier.

   Chaque leçon a un titre et, si vous le souhaitez, ces liens :
     video : YouTube, Vimeo ou Google Drive (converti en iframe)
     pdf   : "pdf/maths/limites.pdf" ou lien Google Drive
     serie : série d'exercices ou correction (même format)

   Playlist complète pour une leçon : mettez le lien de la playlist YouTube
   (https://www.youtube.com/playlist?list=...) dans « video », ou listez plusieurs
   vidéos dans « videos » :
     { titre: "Nombres complexes",
       videos: [ { titre: "Partie 1 : définition", url: "https://youtu.be/XXXX" },
                 { titre: "Partie 2 : forme exponentielle", url: "https://youtu.be/YYYY" } ] }

   Pour renseigner une leçon, remplacez L([...]) par des objets :
     { titre: "Limites et continuité",
       video: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
       pdf:   "pdf/maths/limites.pdf",
       serie: "pdf/maths/limites-serie.pdf" }

   Sujets du bac : ajoutez dans une matière
     annales: [{ annee: 2025, session: "Principale",
                 sujet: "pdf/bac2025-maths.pdf", corrige: "pdf/bac2025-maths-corrige.pdf" }]
   Sinon, les années 2022 à 2025 s'affichent avec « à venir ».
   ========================================================== */

const SITE = {
  nom: "Bac Tunisie",
  slogan: "Cours en vidéo, PDF et séries d'exercices, classés par section et par matière."
};

/* Crée des leçons vides à partir d'une liste de titres */
const L = titres => titres.map(t => ({ titre: t, video: "", pdf: "", serie: "" }));

/* ---------- Programmes (titres modifiables) ---------- */
const MATHS_M = L([
  "Limites et continuité", "Dérivabilité", "Fonctions réciproques", "Suites réelles",
  "Fonction logarithme népérien", "Fonctions exponentielles", "Primitives et calcul intégral",
  "Équations différentielles", "Nombres complexes", "Géométrie dans l'espace",
  "Isométries du plan", "Similitudes planes", "Arithmétique", "Dénombrement", "Probabilités", "Coniques"
]);
const MATHS_SE = L([
  "Limites et continuité", "Dérivabilité", "Suites réelles", "Fonction logarithme népérien",
  "Fonctions exponentielles", "Calcul intégral", "Nombres complexes", "Dénombrement", "Probabilités",
  "Géométrie dans l'espace"
]);
const MATHS_T = L([
  "Limites et continuité", "Dérivabilité", "Suites réelles", "Fonction logarithme népérien",
  "Fonctions exponentielles", "Calcul intégral", "Équations différentielles", "Nombres complexes",
  "Géométrie dans l'espace", "Probabilités"
]);
const MATHS_ECO = L([
  "Suites numériques", "Limites et continuité", "Dérivation et étude de fonctions",
  "Fonction logarithme", "Fonction exponentielle", "Statistiques à deux variables", "Probabilités"
]);
const MATHS_INFO = L([
  "Limites et continuité", "Dérivabilité", "Suites réelles", "Fonction logarithme népérien",
  "Fonctions exponentielles", "Calcul intégral", "Nombres complexes", "Arithmétique", "Probabilités"
]);

const PHYSIQUE = L([
  "Évolution temporelle d'un système chimique", "Équilibre chimique", "Acides et bases",
  "Dosage acide-base", "Piles électrochimiques", "Estérification et hydrolyse",
  "Dipôle RC", "Dipôle RL", "Oscillations électriques libres (RLC)", "Oscillations électriques forcées",
  "Oscillations mécaniques libres", "Oscillations mécaniques forcées", "Ondes mécaniques progressives",
  "Ondes lumineuses", "Le noyau atomique et la radioactivité"
]);
const SVT = L([
  "Activité nerveuse", "Contraction musculaire", "Immunité", "Régulation hormonale",
  "Reproduction humaine", "Transmission des caractères héréditaires", "Mutations et variations génétiques",
  "Tectonique des plaques", "Chaînes de montagnes", "Ressources naturelles et énergie"
]);
const PHILO = L([
  "Méthode : la dissertation", "Méthode : l'étude de texte", "La conscience", "La liberté",
  "La vérité", "La science", "Le langage", "Le travail", "Le bonheur", "La justice", "L'État", "La morale"
]);
const ARABE = L([
  "الشعر الحديث", "المقالة الأدبية", "القصة", "المسرحية", "النص الحجاجي",
  "النحو : الأساليب", "النحو : التوابع", "الصرف", "التلخيص والمناقشة", "الإنشاء"
]);
const FRANCAIS = L([
  "Le résumé", "La discussion", "Le texte argumentatif", "L'analyse littéraire", "Le roman",
  "Le théâtre", "La poésie", "La production écrite", "Grammaire : la phrase complexe", "Figures de style et registres"
]);
const ANGLAIS = L([
  "Grammar : tenses", "Grammar : the passive voice", "Grammar : reported speech", "Grammar : conditionals",
  "Vocabulary : technology and communication", "Vocabulary : environment and health",
  "Vocabulary : education and work", "Writing : the essay", "Writing : the formal letter", "Reading comprehension"
]);
const INFO_ALGO = L([
  "Modularité : procédures et fonctions", "Tableaux", "Chaînes de caractères", "Enregistrements",
  "Fichiers", "Algorithmes de tri", "Recherche dichotomique", "Récursivité"
]);
const INFO_STI = L([
  "Modèle relationnel", "Le langage SQL", "Conception de pages web", "Les réseaux informatiques",
  "Systèmes d'exploitation", "Sécurité et chiffrement"
]);
const TECHNO = L([
  "Analyse fonctionnelle", "Chaîne d'information", "Logique combinatoire", "Logique séquentielle",
  "Grafcet", "Cotation fonctionnelle", "Transmission de puissance", "Résistance des matériaux"
]);
const ECONOMIE = L([
  "Les agents économiques", "La production", "La consommation", "Marché et formation des prix",
  "La monnaie", "Inflation et chômage", "Le commerce extérieur", "Développement et croissance", "La mondialisation"
]);
const GESTION = L([
  "Écritures comptables", "Amortissements et provisions", "Analyse financière", "Gestion commerciale",
  "Organisation de l'entreprise", "Gestion budgétaire"
]);
const HISTGEO = L([
  "Histoire : la Première Guerre mondiale", "Histoire : l'entre-deux-guerres", "Histoire : la Seconde Guerre mondiale",
  "Histoire : la guerre froide", "Histoire : la décolonisation", "Histoire : le mouvement national tunisien",
  "Géographie : la mondialisation", "Géographie : les espaces productifs", "Géographie : la Tunisie dans le monde",
  "Géographie : le développement durable"
]);
const EPS = L([
  "Physiologie de l'effort", "Biomécanique du mouvement", "Principes de l'entraînement",
  "Hygiène et santé du sportif", "Règlements et organisation sportive"
]);

/* ---------- Sections ---------- */
const SECTIONS = [
  {
    id: "maths", nom: "Mathématiques", ar: "رياضيات", couleur: "#1E4DA1",
    desc: "La section la plus riche en mathématiques et en physique, pour les études d'ingénieur, de sciences et de médecine.",
    matieres: [
      { id: "maths", nom: "Mathématiques", lecons: MATHS_M },
      { id: "physique", nom: "Sciences physiques", lecons: PHYSIQUE },
      { id: "svt", nom: "SVT", lecons: SVT },
      { id: "philo", nom: "Philosophie", lecons: PHILO },
      { id: "arabe", nom: "Arabe", ar: "العربية", lecons: ARABE },
      { id: "francais", nom: "Français", lecons: FRANCAIS },
      { id: "anglais", nom: "Anglais", lecons: ANGLAIS },
      { id: "info", nom: "Informatique", lecons: INFO_ALGO }
    ]
  },
  {
    id: "sciences", nom: "Sciences expérimentales", ar: "علوم تجريبية", couleur: "#2E7D5B",
    desc: "SVT et sciences physiques en tête, pour la médecine, la pharmacie, l'agronomie et les sciences.",
    matieres: [
      { id: "svt", nom: "SVT", lecons: SVT },
      { id: "physique", nom: "Sciences physiques", lecons: PHYSIQUE },
      { id: "maths", nom: "Mathématiques", lecons: MATHS_SE },
      { id: "philo", nom: "Philosophie", lecons: PHILO },
      { id: "arabe", nom: "Arabe", ar: "العربية", lecons: ARABE },
      { id: "francais", nom: "Français", lecons: FRANCAIS },
      { id: "anglais", nom: "Anglais", lecons: ANGLAIS },
      { id: "info", nom: "Informatique", lecons: INFO_ALGO }
    ]
  },
  {
    id: "technique", nom: "Sciences techniques", ar: "علوم تقنية", couleur: "#C25E1B",
    desc: "Technologie, mathématiques et physique, pour les écoles d'ingénieurs et les filières techniques.",
    matieres: [
      { id: "techno", nom: "Technologie", lecons: TECHNO },
      { id: "maths", nom: "Mathématiques", lecons: MATHS_T },
      { id: "physique", nom: "Sciences physiques", lecons: PHYSIQUE },
      { id: "philo", nom: "Philosophie", lecons: PHILO },
      { id: "arabe", nom: "Arabe", ar: "العربية", lecons: ARABE },
      { id: "francais", nom: "Français", lecons: FRANCAIS },
      { id: "anglais", nom: "Anglais", lecons: ANGLAIS }
    ]
  },
  {
    id: "eco", nom: "Économie et gestion", ar: "اقتصاد وتصرف", couleur: "#6B4BA3",
    desc: "Économie, gestion et comptabilité, pour le commerce, la finance et l'administration.",
    matieres: [
      { id: "economie", nom: "Économie", lecons: ECONOMIE },
      { id: "gestion", nom: "Gestion", lecons: GESTION },
      { id: "maths", nom: "Mathématiques", lecons: MATHS_ECO },
      { id: "histgeo", nom: "Histoire-Géographie", lecons: HISTGEO },
      { id: "philo", nom: "Philosophie", lecons: PHILO },
      { id: "arabe", nom: "Arabe", ar: "العربية", lecons: ARABE },
      { id: "francais", nom: "Français", lecons: FRANCAIS },
      { id: "anglais", nom: "Anglais", lecons: ANGLAIS },
      { id: "info", nom: "Informatique", lecons: INFO_ALGO }
    ]
  },
  {
    id: "info", nom: "Informatique", ar: "إعلامية", couleur: "#0F7C8A",
    desc: "Algorithmique, programmation, bases de données et réseaux, pour les études en informatique.",
    matieres: [
      { id: "algo", nom: "Algorithmique et programmation", lecons: INFO_ALGO },
      { id: "sti", nom: "Systèmes et technologies de l'informatique", lecons: INFO_STI },
      { id: "maths", nom: "Mathématiques", lecons: MATHS_INFO },
      { id: "physique", nom: "Sciences physiques", lecons: PHYSIQUE },
      { id: "philo", nom: "Philosophie", lecons: PHILO },
      { id: "arabe", nom: "Arabe", ar: "العربية", lecons: ARABE },
      { id: "francais", nom: "Français", lecons: FRANCAIS },
      { id: "anglais", nom: "Anglais", lecons: ANGLAIS }
    ]
  },
  {
    id: "lettres", nom: "Lettres", ar: "آداب", couleur: "#B02A3C",
    desc: "Langues, philosophie, histoire et géographie, pour le droit, l'enseignement, le journalisme et les langues.",
    matieres: [
      { id: "arabe", nom: "Arabe", ar: "العربية", lecons: ARABE },
      { id: "philo", nom: "Philosophie", lecons: PHILO },
      { id: "histgeo", nom: "Histoire-Géographie", lecons: HISTGEO },
      { id: "francais", nom: "Français", lecons: FRANCAIS },
      { id: "anglais", nom: "Anglais", lecons: ANGLAIS },
      { id: "info", nom: "Informatique", lecons: INFO_ALGO }
    ]
  },
  {
    id: "sport", nom: "Sport", ar: "رياضة", couleur: "#9A7406",
    desc: "Éducation physique et sciences du vivant, pour les études en sport et en santé.",
    matieres: [
      { id: "eps", nom: "Éducation physique", lecons: EPS },
      { id: "svt", nom: "SVT", lecons: SVT },
      { id: "physique", nom: "Sciences physiques", lecons: PHYSIQUE },
      { id: "philo", nom: "Philosophie", lecons: PHILO },
      { id: "arabe", nom: "Arabe", ar: "العربية", lecons: ARABE },
      { id: "francais", nom: "Français", lecons: FRANCAIS },
      { id: "anglais", nom: "Anglais", lecons: ANGLAIS }
    ]
  }
];

/* Copie indépendante des leçons pour chaque matière + sujets du bac par défaut */
SECTIONS.forEach(s => s.matieres.forEach(m => {
  m.lecons = m.lecons.map(l => ({ ...l }));
  if (!m.annales) m.annales = [2025, 2024, 2023, 2022].map(a => ({ annee: a, session: "Principale", sujet: "", corrige: "" }));
}));

/* ---------- Dates du bac (à confirmer avec le calendrier officiel) ---------- */
const DATES = {
  ecrit: "2027-06-02T08:00:00+01:00",
  resultats: "2027-06-22T09:00:00+01:00",
  note: "Dates indicatives : vérifiez le calendrier officiel publié par le ministère de l'Éducation. Modifiez-les dans data.js."
};

/* ---------- Archives de sujets corrigés (site externe) ---------- */
const ARCHIVES = {
  maths: "https://www.reviserbac.tn/section/mathematiques",
  sciences: "https://www.reviserbac.tn/section/sciences-experimentales",
  technique: "https://www.reviserbac.tn/section/technique",
  eco: "https://www.reviserbac.tn/section/economie-gestion",
  info: "https://www.reviserbac.tn/section/informatique",
  lettres: "https://www.reviserbac.tn/section/lettre",
  sport: "https://www.reviserbac.tn/section/sport"
};
SECTIONS.forEach(s => { s.archive = ARCHIVES[s.id] || ""; });

/* ---------- Chaînes YouTube partenaires ----------
   channel : identifiant de chaîne (commence par UC). Le site en tire la liste
             de lecture « toutes les vidéos » de la chaîne pour l'iframe.
   matieres: identifiants de matières pour lesquelles la chaîne est proposée. */
const CHAINES = [
  { id: "math-universe", nom: "Math Universe", channel: "UCNOC-kBYTm9I3G4sfo9pPIg",
    desc: "Plateforme tunisienne de soutien en mathématiques et en physique. Sa chaîne YouTube publie des extraits de cours et de séances.",
    site: "https://math-universe.com", matieres: ["maths", "physique"] },
  { id: "tuto-academy", nom: "TuTo Academy", channel: "UC6qjW9Tjk5JLEFyEuYQ1-Yw",
    desc: "Centre de soutien scolaire d'Ezzahra, spécialisé en informatique (scolaire et professionnelle) avec aussi des stages de préparation au bac.",
    site: "https://www.facebook.com/tutoacademy", matieres: ["info", "algo", "sti", "maths"] },
  { id: "ikode", nom: "IKODE", channel: "",
    desc: "Plateforme gratuite pour le bac Informatique : leçons, QCM, jeu SQL, fiches de révision, sujets du bac et listes de vidéos choisies.",
    site: "https://ikode.tn/", requete: "IKODE bac informatique", matieres: ["info", "algo", "sti"] }
];
