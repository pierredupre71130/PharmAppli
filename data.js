// Contenu pédagogique de l'app IFSI — référentiel 2026 (arrêté du 20 février 2026).
// Fiches rédigées pour l'app (pas de copie de supports de cours) : à confronter
// avec les cours de ton IFSI, qui font toujours référence.
window.IFSI_DATA = {
  semestres: [
    { n: 1, label: "Semestre 1", dispo: true },
    { n: 2, label: "Semestre 2", dispo: false },
    { n: 3, label: "Semestre 3", dispo: false },
    { n: 4, label: "Semestre 4", dispo: false },
    { n: 5, label: "Semestre 5", dispo: false },
    { n: 6, label: "Semestre 6", dispo: false }
  ],

  domaines: {
    A: "Sciences infirmières et raisonnement clinique",
    B: "Pratiques cliniques infirmières, qualité et gestion des risques",
    C: "Prévention et promotion de la santé",
    D: "Communication, travail en équipe et leadership",
    E: "Démarche scientifique, initiation à la recherche et méthodologie"
  },

  ues: [
    { id: "A1", code: "UE A.1", semestre: 1, domaine: "A", icon: "🩺", tone: "t-teal",
      titre: "Fondements des sciences infirmières et raisonnement clinique",
      desc: "Les modèles de soins, la démarche clinique, les transmissions et la surveillance du patient." },
    { id: "B1", code: "UE B.1", semestre: 1, domaine: "B", icon: "🫀", tone: "t-rose",
      titre: "Sciences biomédicales",
      desc: "Anatomie et physiologie par système, hygiène et infectiologie, bases de pharmacologie et calculs de doses." },
    { id: "D1", code: "UE D.1", semestre: 1, domaine: "D", icon: "💬", tone: "t-amber",
      titre: "Savoir-être, communication professionnelle et leadership",
      desc: "Communiquer avec le patient et l’équipe, la relation de soin, la posture professionnelle." },
    { id: "D4", code: "UE D.4", semestre: 1, domaine: "D", icon: "💻", tone: "t-blue",
      titre: "Numérique en santé",
      desc: "Dossier patient informatisé, identitovigilance, protection des données de santé." },
    { id: "E1", code: "UE E.1", semestre: 1, domaine: "E", icon: "🔎", tone: "t-violet",
      titre: "Recherche, méthodes, analyse critique et données probantes",
      desc: "Chercher une information fiable, lire un article, citer ses sources." },
    { id: "E3", code: "UE E.3", semestre: 1, domaine: "E", icon: "🎯", tone: "t-green",
      titre: "Méthodes de travail et aide à la réussite",
      desc: "Apprendre efficacement, s’organiser, réussir ses stages et ses partiels." }
  ],

  // Chaque fiche : resume (1 ligne), simple (l'explication « comme à une amie »),
  // points (à retenir), exemple (en stage), piege, memo (moyen mnémotechnique), mots (lexique).
  fiches: [
    // ───────────── UE A.1 ─────────────
    {
      id: "henderson", ue: "A1",
      titre: "Les 14 besoins fondamentaux de Virginia Henderson",
      resume: "Le modèle le plus utilisé en IFSI pour recueillir les données et repérer ce que le patient ne peut plus faire seul.",
      simple: "Virginia Henderson est une infirmière américaine qui a listé 14 besoins que toute personne cherche à satisfaire pour être en bonne santé. Quand un patient n’arrive plus à satisfaire un besoin seul (à cause de la maladie, de l’âge, d’un manque de connaissances…), on dit qu’il est dépendant pour ce besoin. Le rôle infirmier, c’est d’aider la personne à retrouver son indépendance, ou de suppléer ce qu’elle ne peut pas faire.",
      points: [
        "1 Respirer · 2 Boire et manger · 3 Éliminer · 4 Se mouvoir et maintenir une bonne posture",
        "5 Dormir et se reposer · 6 Se vêtir et se dévêtir · 7 Maintenir sa température",
        "8 Être propre et protéger ses téguments · 9 Éviter les dangers · 10 Communiquer",
        "11 Agir selon ses croyances et ses valeurs · 12 S’occuper en vue de se réaliser",
        "13 Se recréer (se divertir) · 14 Apprendre",
        "Pour chaque besoin : manifestations d’indépendance, de dépendance, et sources de difficulté (physiques, psychologiques, sociales, manque de connaissances)."
      ],
      exemple: "Mme L., 82 ans, opérée de la hanche : besoin « se mouvoir » perturbé (ne se lève pas seule), « éliminer » (sonde urinaire), « éviter les dangers » (risque de chute). Ton recueil de données suit les 14 besoins un par un.",
      piege: "Ne pas confondre un besoin perturbé et un diagnostic médical. « Fracture du col du fémur » est un diagnostic médical ; « difficulté à se mouvoir liée à la douleur » relève du raisonnement infirmier.",
      memo: "Les 4 premiers = le corps qui fonctionne (respirer, manger, éliminer, bouger). Les 4 derniers = la personne qui vit (valeurs, se réaliser, se divertir, apprendre).",
      mots: [
        { mot: "Indépendance", def: "Capacité de satisfaire un besoin seul." },
        { mot: "Suppléance", def: "Faire à la place de la personne ce qu’elle ne peut pas faire." }
      ]
    },
    {
      id: "maslow", ue: "A1",
      titre: "La pyramide des besoins de Maslow",
      resume: "Une hiérarchie des besoins : on s’occupe d’abord des besoins vitaux avant les autres.",
      simple: "Abraham Maslow, psychologue, a classé les besoins humains en 5 étages. Tant que les étages du bas ne sont pas satisfaits (respirer, manger, être en sécurité), la personne a du mal à se préoccuper des étages du haut. En soins, ça aide à prioriser : un patient qui a très mal ou qui étouffe ne peut pas écouter une séance d’éducation.",
      points: [
        "1 (base) Besoins physiologiques : respirer, boire, manger, dormir, éliminer",
        "2 Sécurité : être protégé, ne pas avoir peur, stabilité",
        "3 Appartenance et amour : famille, amis, groupe",
        "4 Estime : se sentir reconnu, utile, respecté",
        "5 (sommet) Accomplissement de soi : se réaliser, donner du sens"
      ],
      exemple: "Un patient anxieux avant son opération : avant d’expliquer les soins post-opératoires, tu soulages la douleur et tu le rassures (sécurité).",
      piege: "Maslow est un outil pour prioriser, pas une règle absolue : chaque personne est différente. En IFSI, le modèle de recueil de données reste souvent Henderson.",
      memo: "De bas en haut : « Pas Sans Amour, Estime, Accomplissement » → Physiologiques, Sécurité, Appartenance, Estime, Accomplissement.",
      mots: []
    },
    {
      id: "demarche", ue: "A1",
      titre: "Le raisonnement clinique et la démarche de soins",
      resume: "La méthode pour passer des informations sur le patient aux bons soins, puis vérifier que ça a marché.",
      simple: "Le raisonnement clinique, c’est réfléchir comme une infirmière : tu observes, tu interroges, tu relies les informations entre elles, tu identifies les problèmes, tu décides quoi faire et tu vérifies le résultat. C’est une boucle qui recommence tant que le patient est pris en charge.",
      points: [
        "1. Recueil de données : observation, entretien, dossier, famille, équipe",
        "2. Analyse : trier, relier les données, repérer les problèmes réels et les risques",
        "3. Diagnostic infirmier / problèmes : formulation type « Problème lié à… (cause) se manifestant par… (signes) »",
        "4. Objectifs : centrés sur le patient, mesurables, avec un délai (SMART)",
        "5. Interventions : ce que tu fais (rôle propre) et ce qui est prescrit",
        "6. Évaluation : l’objectif est-il atteint ? Sinon, on réajuste"
      ],
      exemple: "Données : patient de 70 ans, ne boit que 500 mL/j, langue sèche. Problème : risque de déshydratation lié à une faible prise de boissons. Objectif : boit au moins 1,5 L/24 h d’ici 48 h. Action : proposer à boire régulièrement, feuille de surveillance. Évaluation à 48 h.",
      piege: "L’objectif est formulé pour le PATIENT (« le patient boira… »), pas pour l’infirmière (« faire boire le patient » est une action, pas un objectif).",
      memo: "Objectif SMART : Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini.",
      mots: [
        { mot: "Problème réel", def: "Déjà présent, avec des signes observables." },
        { mot: "Problème potentiel (risque)", def: "Pas encore présent, mais des facteurs de risque existent." },
        { mot: "NANDA-I", def: "Classification internationale des diagnostics infirmiers." }
      ]
    },
    {
      id: "transmissions", ue: "A1",
      titre: "Les transmissions ciblées (méthode DAR)",
      resume: "Écrire dans le dossier de façon courte, claire et utile pour l’équipe.",
      simple: "Les transmissions, c’est ce qui permet la continuité des soins : la collègue qui arrive doit savoir ce qui s’est passé sans te poser de questions. Les transmissions ciblées s’organisent autour d’une « cible » (le sujet qui préoccupe) et de trois parties : Données, Actions, Résultats.",
      points: [
        "Cible : le problème ou l’événement en quelques mots (douleur, chute, anxiété, fièvre…)",
        "D (Données) : ce que tu as observé ou mesuré, ce que dit le patient",
        "A (Actions) : ce que tu as fait",
        "R (Résultats) : l’effet de tes actions, réévalué plus tard",
        "Écrits datés, signés, objectifs, sans jugement",
        "Transmissions orales : au moment des relèves, elles complètent l’écrit sans le remplacer"
      ],
      exemple: "Cible : Douleur. D : EVA 7/10 au niveau de la cicatrice, patient crispé. A : antalgique prescrit administré à 14 h, installation semi-assise. R : EVA 3/10 à 14 h 45, patient détendu.",
      piege: "Évite les jugements (« patient pénible ») et les termes flous (« a bien mangé ») : écris des faits (« a mangé la moitié de son plateau »).",
      memo: "DAR = « Dis, Agis, Réévalue ».",
      mots: [ { mot: "Macrocible", def: "Synthèse de la situation à l’entrée ou à la sortie du patient." } ]
    },
    {
      id: "parametres", ue: "A1",
      titre: "Les paramètres vitaux et leurs valeurs normales",
      resume: "Pouls, tension, respiration, température, saturation, douleur : les repères chez l’adulte.",
      simple: "Les paramètres vitaux sont les mesures qui montrent si les fonctions vitales vont bien. Tu les prends souvent, tu les notes, et surtout tu réagis si une valeur sort de la normale ou change brutalement. Une valeur isolée compte moins que son évolution et l’état général du patient.",
      points: [
        "Fréquence cardiaque (pouls) : 60 à 100 battements/min. < 60 = bradycardie, > 100 = tachycardie",
        "Pression artérielle : normale < 140/90 mmHg (systolique/diastolique). Hypotension si systolique < 90",
        "Fréquence respiratoire : 12 à 20 cycles/min. > 20 = tachypnée (polypnée), < 12 = bradypnée",
        "Température : 36,5 à 37,5 °C. Fièvre ≥ 38 °C, hypothermie < 35 °C",
        "Saturation en oxygène (SpO2) : 95 à 100 % (seuils différents chez certains patients, ex. BPCO)",
        "Douleur : échelle numérique ou EVA de 0 à 10. Toujours réévaluer après un antalgique",
        "Glycémie capillaire à jeun : environ 0,70 à 1,10 g/L",
        "Conscience : score de Glasgow de 3 (coma profond) à 15 (normal)"
      ],
      exemple: "Patient post-opératoire : FC 118, PA 85/50, pâle, en sueur → valeurs anormales et associées : tu alertes immédiatement l’infirmier ou le médecin (risque d’hémorragie).",
      piege: "Ne jamais « corriger » une valeur qui te paraît bizarre sans recontrôler : reprends la mesure (bon brassard, patient au repos), puis transmets.",
      memo: "Les 3 chiffres ronds de l’adulte : pouls < 100, respiration < 20, température < 38.",
      mots: [
        { mot: "Dyspnée", def: "Difficulté à respirer, ressentie par le patient." },
        { mot: "Apyrétique", def: "Sans fièvre." }
      ]
    },
    {
      id: "concepts", ue: "A1",
      titre: "Les grands concepts : santé, soin, personne, environnement",
      resume: "Les 4 notions de base des sciences infirmières.",
      simple: "Les sciences infirmières reposent sur 4 concepts qui reviennent dans tous les modèles : la personne (le patient, avec son histoire), la santé, l’environnement (famille, logement, travail, culture) et le soin. Comprendre ces concepts, c’est comprendre qu’on ne soigne pas une maladie mais une personne dans son environnement.",
      points: [
        "Santé (OMS, 1946) : « état de complet bien-être physique, mental et social, et pas seulement absence de maladie ou d’infirmité »",
        "Personne : être unique, avec ses valeurs, sa culture, ses ressources",
        "Environnement : tout ce qui entoure la personne et l’influence",
        "Soin : « prendre soin » (care : accompagner, relation) et « traiter » (cure : guérir, technique)",
        "Rôle propre : soins que l’infirmier décide et réalise de sa propre initiative ; rôle sur prescription : soins prescrits par un médecin ou autre prescripteur"
      ],
      exemple: "Deux patients avec le même diabète n’auront pas le même projet de soins : l’un vit seul et ne sait pas lire les étiquettes, l’autre est accompagné par sa famille.",
      piege: "La définition de l’OMS est très demandée aux partiels : apprends-la mot pour mot.",
      memo: "Care = prendre soin (c comme Cœur), Cure = guérir (c comme Curatif).",
      mots: [ { mot: "Métaparadigme", def: "Les 4 concepts centraux communs à tous les modèles infirmiers." } ]
    },

    // ───────────── UE B.1 ─────────────
    {
      id: "cellule", ue: "B1",
      titre: "La cellule",
      resume: "La plus petite unité vivante du corps : sa structure et ses fonctions.",
      simple: "Le corps est fait de milliards de cellules. Chacune est comme une petite usine : une enveloppe (la membrane), un « bureau du directeur » qui contient les plans (le noyau avec l’ADN), des centrales électriques (les mitochondries) et des ateliers qui fabriquent les protéines (les ribosomes).",
      points: [
        "Membrane plasmique : délimite la cellule et contrôle les entrées/sorties",
        "Noyau : contient l’ADN (l’information génétique) — 46 chromosomes, soit 23 paires",
        "Mitochondries : produisent l’énergie (ATP) grâce à l’oxygène",
        "Ribosomes et réticulum endoplasmique : fabriquent les protéines",
        "Appareil de Golgi : emballe et expédie les protéines ; lysosomes : digèrent les déchets",
        "Mitose : une cellule donne 2 cellules identiques (croissance, réparation)",
        "Méiose : produit les gamètes (ovules, spermatozoïdes) avec 23 chromosomes"
      ],
      exemple: "La cicatrisation d’une plaie repose sur la multiplication des cellules par mitose.",
      piege: "Mitose ≠ méiose : la méiose ne concerne que les cellules sexuelles et divise par deux le nombre de chromosomes.",
      memo: "MItochondrie = MIne d’énergie. MéiOse = Ovules (et spermatozoïdes).",
      mots: [ { mot: "ATP", def: "Molécule qui stocke l’énergie utilisée par la cellule." } ]
    },
    {
      id: "tissus", ue: "B1",
      titre: "Les 4 types de tissus",
      resume: "Des cellules semblables regroupées forment un tissu ; les tissus forment les organes.",
      simple: "Les cellules qui se ressemblent et travaillent ensemble forment un tissu. Il n’en existe que 4 grandes familles. Plusieurs tissus assemblés forment un organe, et plusieurs organes forment un système (ou appareil).",
      points: [
        "Épithélial : recouvre (peau, muqueuses) et sécrète (glandes)",
        "Conjonctif : soutient et relie (os, cartilage, tendons, graisse, sang)",
        "Musculaire : se contracte — strié squelettique (volontaire), cardiaque (involontaire), lisse (involontaire, organes creux)",
        "Nerveux : transmet les informations (neurones) et les soutient (cellules gliales)",
        "Niveaux d’organisation : cellule → tissu → organe → système → organisme"
      ],
      exemple: "La peau associe un épithélium (épiderme) et du tissu conjonctif (derme) : c’est pour ça qu’une escarre peut aller jusqu’à l’os quand elle s’aggrave.",
      piege: "Le sang est un tissu conjonctif (même s’il est liquide).",
      memo: "« ÉCoMuN » : Épithélial, Conjonctif, Musculaire, Nerveux.",
      mots: []
    },
    {
      id: "cardio", ue: "B1",
      titre: "Le système cardiovasculaire",
      resume: "Le cœur pompe le sang dans deux circulations : vers les poumons et vers tout le corps.",
      simple: "Le cœur est une double pompe. La partie droite reçoit le sang pauvre en oxygène du corps et l’envoie aux poumons pour qu’il se recharge. La partie gauche reçoit le sang riche en oxygène des poumons et l’envoie dans tout le corps. Les valves sont des clapets qui empêchent le sang de revenir en arrière.",
      points: [
        "4 cavités : oreillette droite, ventricule droit, oreillette gauche, ventricule gauche",
        "Trajet : veines caves → OD → valve tricuspide → VD → artère pulmonaire → poumons → veines pulmonaires → OG → valve mitrale → VG → aorte → corps",
        "Petite circulation (pulmonaire) : cœur droit → poumons → cœur gauche",
        "Grande circulation (systémique) : cœur gauche → organes → cœur droit",
        "Artère = part du cœur ; veine = revient au cœur",
        "Rythme : le nœud sinusal donne le tempo → nœud auriculo-ventriculaire → faisceau de His → réseau de Purkinje",
        "Débit cardiaque = fréquence cardiaque × volume d’éjection systolique (≈ 5 L/min au repos)"
      ],
      exemple: "Quand tu prends le pouls radial, tu sens l’onde de pression créée à chaque contraction du ventricule gauche.",
      piege: "Artère ne veut pas dire « sang oxygéné » : l’artère pulmonaire transporte du sang pauvre en oxygène, les veines pulmonaires du sang riche en oxygène.",
      memo: "« TRIcuspide à DROITE, MItrale à GAUCHE » : on apprend à TRIer avant de MIser.",
      mots: [
        { mot: "Systole", def: "Contraction du cœur (éjection du sang)." },
        { mot: "Diastole", def: "Relâchement du cœur (remplissage)." }
      ]
    },
    {
      id: "sang", ue: "B1",
      titre: "Le sang et ses valeurs normales",
      resume: "Composition du sang, rôle de chaque cellule et repères de la prise de sang (NFS).",
      simple: "Le sang, c’est un liquide (le plasma) qui transporte des cellules. Les globules rouges portent l’oxygène, les globules blancs défendent l’organisme et les plaquettes bouchent les brèches quand on saigne. Un adulte a environ 5 litres de sang.",
      points: [
        "Plasma ≈ 55 % (eau, protéines, sels, nutriments, hormones) ; éléments figurés ≈ 45 % (hématocrite)",
        "Globules rouges (hématies) : transport de l’O2 grâce à l’hémoglobine, durée de vie ≈ 120 jours",
        "Hémoglobine : ≈ 13 à 17 g/dL chez l’homme, 12 à 16 g/dL chez la femme (en dessous : anémie)",
        "Globules blancs (leucocytes) : 4 à 10 G/L — défense contre les infections",
        "Plaquettes : 150 à 400 G/L — coagulation (hémostase)",
        "Ionogramme : sodium 135 à 145 mmol/L, potassium 3,5 à 5 mmol/L",
        "Groupes sanguins ABO et Rhésus : O négatif = donneur universel de globules rouges"
      ],
      exemple: "Une patiente fatiguée, pâle, essoufflée à l’effort avec Hb à 8 g/dL : tableau d’anémie, signale-le et surveille la tolérance.",
      piege: "Les normes varient un peu selon les laboratoires : regarde toujours les valeurs de référence imprimées sur le résultat.",
      memo: "Rouges = Respirer (O2), Blancs = Bagarre (défense), Plaquettes = Pansement.",
      mots: [
        { mot: "NFS", def: "Numération formule sanguine : compte les cellules du sang." },
        { mot: "G/L", def: "Giga par litre = milliards de cellules par litre." }
      ]
    },
    {
      id: "respi", ue: "B1",
      titre: "Le système respiratoire",
      resume: "Faire entrer l’oxygène et sortir le CO2 : trajet de l’air et échanges gazeux.",
      simple: "L’air entre par le nez ou la bouche, descend dans la trachée puis les bronches, qui se divisent comme les branches d’un arbre jusqu’aux alvéoles, de minuscules sacs entourés de vaisseaux. C’est là que l’oxygène passe dans le sang et que le CO2 en sort. Le diaphragme, un muscle sous les poumons, fait le travail de pompe.",
      points: [
        "Voies aériennes supérieures : nez, pharynx, larynx ; inférieures : trachée, bronches, bronchioles, alvéoles",
        "Échanges gazeux par diffusion à travers la paroi alvéolo-capillaire",
        "Inspiration : active (le diaphragme se contracte et descend) ; expiration : passive au repos",
        "Poumon droit : 3 lobes ; poumon gauche : 2 lobes (place laissée au cœur)",
        "Les centres de la respiration sont dans le tronc cérébral (bulbe) ; le principal stimulus est l’augmentation du CO2",
        "Signes de détresse : FR élevée, tirage, cyanose, sueurs, SpO2 basse, troubles de la conscience"
      ],
      exemple: "Installer un patient essoufflé en position demi-assise libère le diaphragme et facilite la respiration.",
      piege: "Cyanose = signe tardif. N’attends pas les lèvres bleues pour alerter devant une respiration rapide et difficile.",
      memo: "Droite = 3 lobes, Gauche = 2 : « le cœur prend de la place à gauche ».",
      mots: [
        { mot: "Hypoxie", def: "Manque d’oxygène dans les tissus." },
        { mot: "Hypercapnie", def: "Excès de CO2 dans le sang." }
      ]
    },
    {
      id: "digestif", ue: "B1",
      titre: "Le système digestif",
      resume: "Transformer les aliments en nutriments absorbables et éliminer les déchets.",
      simple: "Le tube digestif est un long tuyau de la bouche à l’anus. Les aliments y sont broyés et découpés chimiquement par des enzymes. Les nutriments passent dans le sang surtout au niveau de l’intestin grêle ; le côlon récupère l’eau et forme les selles. Le foie et le pancréas aident en fabriquant des sucs digestifs.",
      points: [
        "Trajet : bouche → pharynx → œsophage → estomac → intestin grêle (duodénum, jéjunum, iléon) → côlon → rectum → anus",
        "Glandes annexes : glandes salivaires, foie (fabrique la bile, stockée dans la vésicule biliaire), pancréas",
        "Pancréas exocrine : enzymes digestives ; pancréas endocrine : insuline et glucagon",
        "Absorption des nutriments : surtout dans l’intestin grêle",
        "Côlon : réabsorbe l’eau ; un transit trop rapide donne des selles liquides",
        "Le foie a aussi un rôle de stockage (glycogène), de détoxification et de fabrication de protéines"
      ],
      exemple: "En surveillance, tu notes l’aspect et la fréquence des selles (échelle de Bristol) et la présence de nausées ou vomissements.",
      piege: "La bile n’est pas une enzyme : elle émulsionne les graisses (les découpe en petites gouttes) pour faciliter le travail des enzymes.",
      memo: "Grêle = « Gros absorbeur », Côlon = « Collecteur d’eau ».",
      mots: [ { mot: "Péristaltisme", def: "Contractions qui font avancer le contenu du tube digestif." } ]
    },
    {
      id: "urinaire", ue: "B1",
      titre: "Le système urinaire et le rein",
      resume: "Le rein filtre le sang, élimine les déchets et règle l’eau et les sels du corps.",
      simple: "Les deux reins filtrent tout le sang du corps de nombreuses fois par jour. Ils gardent ce qui est utile (eau, sucre, sels) et éliminent les déchets dans l’urine. L’urine descend par les uretères jusqu’à la vessie, puis sort par l’urètre.",
      points: [
        "Trajet : reins → uretères → vessie → urètre",
        "Néphron : unité de base du rein (environ 1 million par rein) — filtration, réabsorption, sécrétion",
        "Rôles : élimination des déchets (urée, créatinine), équilibre de l’eau et des sels, équilibre acide-base, pression artérielle",
        "Rôles hormonaux : EPO (production des globules rouges), rénine, activation de la vitamine D",
        "Diurèse normale ≈ 1 à 1,5 L/24 h. Oligurie < 500 mL/24 h, anurie < 100 mL/24 h, polyurie > 3 L/24 h",
        "La créatinine sanguine sert à estimer la fonction rénale (DFG)"
      ],
      exemple: "Un patient porteur d’une sonde urinaire : tu surveilles la diurèse, la couleur et l’aspect des urines, et tu vides la poche avant qu’elle soit pleine.",
      piege: "Uretère (rein → vessie, il y en a 2) ≠ urètre (vessie → extérieur, il y en a 1).",
      memo: "URETÈRE a plus de lettres que URÈTRE… comme il y en a plus (2 contre 1).",
      mots: [ { mot: "Miction", def: "Action d’uriner." }, { mot: "Dysurie", def: "Difficulté à uriner." } ]
    },
    {
      id: "nerveux", ue: "B1",
      titre: "Le système nerveux",
      resume: "Le centre de commande du corps : cerveau, moelle épinière, nerfs.",
      simple: "Le système nerveux reçoit les informations (ce que tu vois, touches, ressens), les analyse et envoie des ordres aux muscles et aux organes. Les messages voyagent sous forme d’influx électrique dans les neurones, et passent d’un neurone à l’autre grâce à des messagers chimiques (neurotransmetteurs) au niveau des synapses.",
      points: [
        "Système nerveux central : encéphale (cerveau, cervelet, tronc cérébral) + moelle épinière",
        "Système nerveux périphérique : nerfs qui relient le centre au reste du corps",
        "Neurone : corps cellulaire, dendrites (reçoivent), axone (transmet)",
        "Système nerveux autonome (involontaire) : sympathique = « fuite ou combat » (↑ cœur, pupilles dilatées, bronches ouvertes) ; parasympathique = « repos et digestion »",
        "Cervelet : équilibre et coordination ; tronc cérébral : fonctions vitales (respiration, cœur)",
        "Évaluation de la conscience : score de Glasgow (yeux, verbal, moteur), de 3 à 15"
      ],
      exemple: "Un patient stressé avant un examen : pouls rapide, mains moites, bouche sèche → c’est le système sympathique qui s’active.",
      piege: "Les nerfs se croisent : l’hémisphère gauche du cerveau commande le côté droit du corps. Un AVC à gauche donne une paralysie à droite.",
      memo: "Sympathique = Stress, Parasympathique = Pause.",
      mots: [ { mot: "Synapse", def: "Zone de communication entre deux neurones." } ]
    },
    {
      id: "endocrinien", ue: "B1",
      titre: "Le système endocrinien (les hormones)",
      resume: "Des glandes envoient des messagers chimiques dans le sang pour régler le corps.",
      simple: "Une hormone est un message envoyé par une glande dans le sang, qui agit à distance sur des organes cibles. C’est plus lent que le système nerveux mais plus durable. Le cerveau (hypothalamus et hypophyse) joue le rôle de chef d’orchestre, et le système s’autorégule : quand il y a assez d’hormone, la glande freine sa production (rétrocontrôle).",
      points: [
        "Hypothalamus + hypophyse : pilotent les autres glandes",
        "Thyroïde (T3, T4) : règle le métabolisme (énergie, chaleur, rythme cardiaque)",
        "Pancréas : insuline (fait baisser la glycémie) et glucagon (la fait monter)",
        "Surrénales : cortisol (stress, glycémie), aldostérone (sel et eau), adrénaline (urgence)",
        "Gonades : ovaires (œstrogènes, progestérone) et testicules (testostérone)",
        "Rétrocontrôle négatif : l’excès d’une hormone freine sa propre production"
      ],
      exemple: "Une glycémie capillaire à 0,50 g/L chez un patient diabétique sous insuline, avec sueurs et tremblements : hypoglycémie, une urgence à reconnaître et à traiter selon le protocole.",
      piege: "L’insuline est la SEULE hormone qui fait baisser la glycémie. Plusieurs la font monter (glucagon, cortisol, adrénaline…).",
      memo: "INsuline fait rentrer le sucre DANS les cellules → glycémie qui baisse.",
      mots: [ { mot: "Glycémie", def: "Taux de sucre (glucose) dans le sang." } ]
    },
    {
      id: "immunite", ue: "B1",
      titre: "L’immunité et l’inflammation",
      resume: "Comment le corps se défend : défenses immédiates et défenses spécifiques avec mémoire.",
      simple: "Le corps a deux lignes de défense. La première est immédiate et réagit pareil pour tous les microbes : la peau, les muqueuses, l’inflammation, les cellules qui « mangent » les microbes. La seconde est plus lente mais très précise : les lymphocytes reconnaissent un microbe précis et gardent un souvenir de lui. C’est sur cette mémoire que repose la vaccination.",
      points: [
        "Immunité innée (non spécifique) : barrières (peau, muqueuses), inflammation, phagocytose",
        "Immunité adaptative (spécifique) : lymphocytes B (fabriquent les anticorps) et lymphocytes T",
        "Mémoire immunitaire : réponse plus rapide et plus forte au 2e contact → principe du vaccin",
        "Signes de l’inflammation : rougeur, chaleur, douleur, gonflement (œdème), parfois gêne fonctionnelle",
        "La fièvre est une réaction de défense de l’organisme"
      ],
      exemple: "Autour d’un point de perfusion : rougeur, chaleur, douleur, gonflement → signes d’inflammation à signaler (risque de veinite ou d’infection).",
      piege: "Inflammation ≠ infection : une entorse est inflammatoire sans aucun microbe.",
      memo: "Les 4 signes de l’inflammation : « RCDO » — Rougeur, Chaleur, Douleur, Œdème.",
      mots: [ { mot: "Phagocytose", def: "Une cellule englobe et détruit un microbe." }, { mot: "Antigène", def: "Ce que le système immunitaire reconnaît comme étranger." } ]
    },
    {
      id: "precautions", ue: "B1",
      titre: "Hygiène : les précautions standard",
      resume: "Les règles à appliquer pour TOUT patient, à chaque soin, pour éviter de transmettre des microbes.",
      simple: "On ne sait jamais qui porte un microbe. Alors on applique les mêmes règles de base pour tous les patients : c’est ça, les précautions standard. La plus importante est l’hygiène des mains, car les mains des soignants sont le premier moyen de transmission des infections à l’hôpital.",
      points: [
        "Tenue : avant-bras dégagés, zéro bijou (ni bague, ni montre, ni bracelet), ongles courts sans vernis ni faux ongles",
        "Hygiène des mains : friction hydro-alcoolique (FHA) en priorité, sur mains sèches et visiblement propres, jusqu’à ce qu’elles soient sèches (≈ 30 secondes)",
        "Lavage au savon doux si mains visiblement sales ou mouillées",
        "Gants : seulement s’il y a un risque de contact avec du sang, des liquides biologiques, une muqueuse ou une peau lésée — un soin, une paire, puis FHA",
        "Tablier plastique si soin mouillant ou souillant ; masque et lunettes si risque de projection",
        "Patient qui tousse : lui faire porter un masque chirurgical (hygiène respiratoire)",
        "Piquants/tranchants : ne jamais recapuchonner, collecteur à portée de main"
      ],
      exemple: "Avant d’entrer dans une chambre : FHA. Tu prends une tension, tu sors : FHA. Pas besoin de gants pour prendre une tension sur une peau saine.",
      piege: "Les gants ne remplacent pas l’hygiène des mains : FHA avant de les mettre et après les avoir enlevés.",
      memo: "Les 5 moments de l’hygiène des mains (OMS) : avant de toucher le patient, avant un geste aseptique, après un risque d’exposition à un liquide biologique, après avoir touché le patient, après avoir touché son environnement.",
      mots: [ { mot: "FHA", def: "Friction hydro-alcoolique (solution ou gel)." } ]
    },
    {
      id: "infection", ue: "B1",
      titre: "Infections associées aux soins et précautions complémentaires",
      resume: "Comment un microbe se transmet et les mesures en plus des précautions standard.",
      simple: "Pour qu’une infection se transmette, il faut une chaîne : un microbe, un endroit où il vit (réservoir), une porte de sortie, un moyen de transport, une porte d’entrée et une personne fragile. Casser un seul maillon suffit à arrêter la transmission. Pour certains microbes, on ajoute des précautions « complémentaires » selon leur mode de transmission.",
      points: [
        "Infection associée aux soins (IAS) : apparaît pendant ou après une prise en charge, absente à l’admission (repère : plus de 48 h après l’admission)",
        "Infection du site opératoire : jusqu’à 30 jours après l’intervention, 1 an en cas de prothèse",
        "Précautions CONTACT : bactéries multirésistantes (BMR), gale, Clostridioides difficile… → tablier/surblouse pour les contacts rapprochés, matériel dédié",
        "Précautions GOUTTELETTES : grippe, coqueluche, méningocoque… → masque chirurgical pour le soignant",
        "Précautions AIR : tuberculose, rougeole, varicelle → masque FFP2 pour le soignant, porte de la chambre fermée",
        "C. difficile : ses spores résistent à l’alcool → lavage des mains au savon doux puis FHA, et désinfection adaptée (eau de Javel)"
      ],
      exemple: "Patient en isolement « air » pour tuberculose : tu mets ton FFP2 AVANT d’entrer, tu vérifies son ajustement, tu fermes la porte.",
      piege: "Masque chirurgical = protège les autres de celui qui le porte. FFP2 = protège celui qui le porte (contre les fines particules).",
      memo: "Air = Ajusté (FFP2) ; Gouttelettes = masque chirurGical.",
      mots: [ { mot: "BMR / BHRe", def: "Bactéries multirésistantes / hautement résistantes émergentes aux antibiotiques." } ]
    },
    {
      id: "aes", ue: "B1",
      titre: "Accident d’exposition au sang (AES)",
      resume: "Que faire si tu te piques ou reçois une projection de sang.",
      simple: "Un AES, c’est un contact avec du sang (ou un liquide biologique contenant du sang) par piqûre, coupure ou projection sur une muqueuse ou une peau abîmée. Il y a un risque de transmission de virus (VIH, hépatites B et C). La bonne nouvelle : la conduite à tenir est simple et un traitement préventif existe s’il est débuté très vite.",
      points: [
        "Piqûre/coupure : ne pas faire saigner, nettoyer à l’eau et au savon, rincer, puis tremper ou appliquer un antiseptique (ex. Dakin) au moins 5 minutes",
        "Projection sur les yeux ou une muqueuse : rincer abondamment (eau ou sérum physiologique) au moins 5 minutes",
        "Prévenir tout de suite le cadre / l’infirmier référent et consulter le médecin référent AES ou les urgences dans l’heure",
        "Un traitement post-exposition peut être proposé : le plus tôt possible, idéalement dans les 4 heures",
        "Déclarer l’accident (accident du travail / de stage) dans les délais, selon la procédure de l’établissement et de l’IFSI",
        "Prévention : ne jamais recapuchonner, collecteur à proximité, matériel sécurisé, vaccination hépatite B obligatoire"
      ],
      exemple: "En stage, tu te piques après une glycémie capillaire : nettoyage + antiseptique, puis tu préviens immédiatement ta tutrice — on ne « finit pas le tour » avant.",
      piege: "Ne jamais presser la plaie pour faire saigner : ça abîme les tissus et peut favoriser le passage du virus.",
      memo: "AES = « Antiseptique, Explique (préviens), Soigne-toi vite (consulte) ».",
      mots: []
    },
    {
      id: "pharmabases", ue: "B1",
      titre: "Pharmacologie : les bases et la règle des 5 B",
      resume: "Ce qu’est un médicament, les voies d’administration et comment éviter les erreurs.",
      simple: "Un médicament a un nom scientifique (la DCI) et souvent un nom commercial. Il existe sous différentes formes (comprimé, sirop, injectable…) et peut être donné par différentes voies. Avant chaque administration, l’infirmier vérifie 5 points pour éviter l’erreur : c’est la règle des 5 B.",
      points: [
        "DCI (dénomination commune internationale) = nom de la molécule, ex. paracétamol. Nom commercial = marque",
        "Voies : orale (per os), sublinguale, cutanée, inhalée, rectale, injectables (intraveineuse IV, intramusculaire IM, sous-cutanée SC, intradermique ID)",
        "Règle des 5 B : Bon patient, Bon médicament, Bonne dose, Bonne voie, Bon moment",
        "Puis tracer l’administration (qui, quoi, quand) — et surveiller l’efficacité et les effets indésirables",
        "Effet indésirable : réaction nocive et non voulue d’un médicament",
        "Médicaments à risque (ex. insuline, anticoagulants, potassium injectable) : double vigilance"
      ],
      exemple: "Avant de donner un comprimé, tu demandes au patient de décliner son identité, tu compares avec la prescription et le bracelet, tu vérifies la dose et l’heure.",
      piege: "Ne jamais écraser un comprimé ou ouvrir une gélule sans vérifier que c’est autorisé (certaines formes à libération prolongée deviennent dangereuses).",
      memo: "5 B = « Qui ? Quoi ? Combien ? Comment ? Quand ? »",
      mots: [ { mot: "Per os", def: "Par la bouche." }, { mot: "Galénique", def: "La forme du médicament (comprimé, sirop…)." } ]
    },
    {
      id: "adme", ue: "B1",
      titre: "Le trajet du médicament dans le corps (ADME)",
      resume: "Absorption, Distribution, Métabolisme, Élimination : ce que le corps fait du médicament.",
      simple: "Une fois pris, un médicament doit entrer dans le sang (absorption), aller jusqu’à son lieu d’action (distribution), être transformé, surtout par le foie (métabolisme), puis sortir du corps, surtout par les reins (élimination). Si le foie ou les reins fonctionnent mal, le médicament reste plus longtemps et peut devenir toxique.",
      points: [
        "Absorption : passage dans le sang (immédiat en IV, plus lent par voie orale)",
        "Effet de premier passage hépatique : par voie orale, une partie est détruite par le foie avant d’atteindre la circulation",
        "Distribution : le médicament circule et diffuse dans les tissus",
        "Métabolisme : transformation, surtout par le foie",
        "Élimination : surtout par les reins (urine), aussi par la bile et les selles",
        "Demi-vie : temps nécessaire pour que la concentration diminue de moitié"
      ],
      exemple: "Chez une personne âgée dont les reins fonctionnent moins bien, le médecin adapte les doses : surveille les signes de surdosage.",
      piege: "La voie IV n’a pas d’étape d’absorption : l’effet est rapide, l’erreur aussi. D’où une vigilance maximale.",
      memo: "ADME = « Arrive, Diffuse, se Modifie, s’Échappe ».",
      mots: [ { mot: "Biodisponibilité", def: "Part du médicament qui atteint vraiment la circulation sanguine." } ]
    },
    {
      id: "calculdoses", ue: "B1",
      titre: "Calculs de doses : la méthode",
      resume: "Produit en croix, conversions, débits : la méthode pas à pas (à utiliser avec l’onglet Calculs).",
      simple: "Presque tous les calculs de doses se résolvent avec un produit en croix. Le secret : toujours écrire les unités, convertir d’abord dans la même unité, et vérifier si le résultat est logique (on ne donne pas 40 comprimés !). L’onglet Calculs de l’app te permet de vérifier tes réponses.",
      points: [
        "Conversions : 1 g = 1 000 mg ; 1 mg = 1 000 µg ; 1 L = 1 000 mL",
        "Pourcentage : une solution à 1 % contient 1 g dans 100 mL (ex. glucose 5 % = 5 g pour 100 mL)",
        "Volume à prélever = dose prescrite × volume du flacon ÷ dose contenue dans le flacon",
        "Débit en mL/h = volume (mL) ÷ durée (h)",
        "Débit en gouttes/min = volume (mL) × 20 ÷ durée (min) — perfuseur standard : 1 mL = 20 gouttes",
        "Toujours : unités écrites, résultat vérifié, double contrôle si doute"
      ],
      exemple: "Prescription : 500 mL de NaCl 0,9 % en 4 h. Débit = 500 ÷ 4 = 125 mL/h. En gouttes : 500 × 20 ÷ 240 ≈ 42 gouttes/min.",
      piege: "Mélanger les heures et les minutes : la formule des gouttes se calcule en MINUTES (4 h = 240 min).",
      memo: "« Ce que je veux × ce que j’ai en volume ÷ ce que j’ai en dose ».",
      mots: []
    },

    // ───────────── UE D.1 ─────────────
    {
      id: "communication", ue: "D1",
      titre: "Les bases de la communication",
      resume: "Verbal, non verbal, paraverbal : comment un message passe… ou ne passe pas.",
      simple: "Communiquer, ce n’est pas seulement parler. Quand tu t’adresses à un patient, il entend tes mots, mais il perçoit aussi ton ton de voix, ta posture, ton regard, ta distance. Si les mots disent « prenez votre temps » mais que tu regardes ta montre, c’est le non verbal qui l’emporte.",
      points: [
        "Schéma : émetteur → message → récepteur, avec un retour (feedback) qui permet de vérifier la compréhension",
        "Verbal : les mots ; paraverbal : ton, débit, volume de la voix ; non verbal : regard, gestes, posture, distance, toucher",
        "Des « bruits » perturbent le message : douleur, bruit, fatigue, langue, surdité, émotions",
        "Se mettre à hauteur du patient, le regarder, parler clairement, utiliser des mots simples",
        "Vérifier la compréhension : « Pouvez-vous me redire avec vos mots ce que je vous ai expliqué ? »"
      ],
      exemple: "Avec un patient malentendant : tu te places face à lui, en pleine lumière, tu parles lentement sans crier et tu peux écrire.",
      piege: "Éviter le jargon médical avec le patient (« vous êtes en hyperthermie ») : dis plutôt « vous avez de la fièvre ».",
      memo: "Les 3 V : Verbal, Vocal (paraverbal), Visuel (non verbal).",
      mots: []
    },
    {
      id: "ecoute", ue: "D1",
      titre: "L’écoute active et la relation d’aide",
      resume: "Les outils pour vraiment écouter un patient : questions ouvertes, reformulation, silence, empathie.",
      simple: "Écouter activement, c’est montrer au patient qu’on s’intéresse à ce qu’il vit, sans le juger et sans lui donner tout de suite des solutions. Le psychologue Carl Rogers a décrit trois attitudes clés : l’empathie, l’authenticité (congruence) et le regard positif inconditionnel (accepter la personne telle qu’elle est).",
      points: [
        "Questions ouvertes : « Comment vous sentez-vous ? » (plutôt que « Ça va ? »)",
        "Reformulation : redire avec d’autres mots ce que la personne a dit pour vérifier et montrer qu’on a compris",
        "Silence : laisser à la personne le temps de penser et de parler",
        "Empathie : comprendre ce que ressent l’autre, sans le ressentir à sa place",
        "Attitudes de Porter : évaluation, interprétation, soutien, enquête, solution, compréhension — l’attitude de compréhension favorise la relation d’aide"
      ],
      exemple: "Patient : « J’en ai marre d’être ici. » Toi : « Vous avez l’impression que l’hospitalisation dure longtemps ? » → reformulation qui l’invite à continuer.",
      piege: "Empathie ≠ sympathie : la sympathie, c’est partager l’émotion (« moi aussi je suis triste »), ce qui épuise et fait perdre la distance professionnelle.",
      memo: "Rogers = « ECR » : Empathie, Congruence, Regard positif.",
      mots: [ { mot: "Congruence", def: "Être authentique : ce que tu dis correspond à ce que tu ressens." } ]
    },
    {
      id: "posture", ue: "D1",
      titre: "Posture professionnelle et secret professionnel",
      resume: "Distance professionnelle, travail en équipe, secret et discrétion : les règles dès le premier stage.",
      simple: "Dès ton premier stage, tu fais partie de l’équipe et tu es tenue au secret professionnel comme les soignants diplômés. La posture professionnelle, c’est trouver la bonne distance avec le patient : ni trop froide, ni trop proche, et toujours respectueuse.",
      points: [
        "Secret professionnel : tout ce que tu as vu, entendu, compris ou lu sur un patient. Sa violation est punie par le Code pénal (art. 226-13 : 1 an d’emprisonnement et 15 000 € d’amende)",
        "Les étudiants en soins infirmiers sont soumis au secret professionnel",
        "Ne jamais parler d’un patient dans un lieu public (ascenseur, cafétéria, transports) ni sur les réseaux sociaux",
        "Vouvoiement, présentation (« Je suis X, étudiante infirmière »), respect de la pudeur, frapper avant d’entrer",
        "Travail en équipe : chacun son rôle (aide-soignant, infirmier, médecin, kiné…) ; connaître tes limites et demander de l’aide",
        "Signaler toute erreur ou incident : c’est une démarche de sécurité, pas une faute"
      ],
      exemple: "Une amie te demande si sa voisine est hospitalisée dans ton service : tu ne peux ni confirmer ni démentir.",
      piege: "Les photos dans le service (même sans patient visible) peuvent révéler des informations : on n’en publie pas.",
      memo: "Ce qui se passe dans le service reste dans le service.",
      mots: [ { mot: "Distance professionnelle", def: "Juste équilibre entre proximité humaine et rôle de soignant." } ]
    },

    // ───────────── UE D.4 ─────────────
    {
      id: "identito", ue: "D4",
      titre: "Identitovigilance : le bon soin au bon patient",
      resume: "Vérifier l’identité du patient à chaque étape pour éviter les erreurs.",
      simple: "Se tromper de patient peut être grave : mauvais médicament, mauvais examen, mauvaise transfusion. L’identitovigilance, c’est l’ensemble des règles pour être sûr de l’identité du patient, à l’entrée et à chaque soin. On utilise aujourd’hui l’Identité nationale de santé (INS), commune à tous les professionnels.",
      points: [
        "Traits stricts de l’identité : nom de naissance, premier prénom de naissance, date de naissance, sexe, lieu de naissance",
        "Demander au patient de décliner lui-même son identité (question ouverte : « Pouvez-vous me dire votre nom et votre date de naissance ? »)",
        "Ne pas dire « Vous êtes bien Monsieur Martin ? » : un patient confus ou malentendant peut répondre oui",
        "Bracelet d’identification : vérifié avant chaque soin, surtout si le patient ne peut pas répondre",
        "Étiquettes, prélèvements, documents : toujours vérifier la concordance avec le patient",
        "Signaler toute erreur ou doublon d’identité"
      ],
      exemple: "Avant une prise de sang : le patient décline son identité, tu compares avec la prescription et les étiquettes, puis tu étiquettes les tubes au lit du patient.",
      piege: "Ne jamais pré-étiqueter des tubes à l’avance pour plusieurs patients : risque d’inversion.",
      memo: "Identité vérifiée = patient qui la DIT + bracelet qui la CONFIRME.",
      mots: [ { mot: "INS", def: "Identité nationale de santé, identifiant unique du patient." } ]
    },
    {
      id: "dpi", ue: "D4",
      titre: "Dossier patient, données de santé et bons usages numériques",
      resume: "Le dossier patient informatisé, la protection des données et les règles de sécurité.",
      simple: "Aujourd’hui, presque tout le dossier du patient est numérique : prescriptions, transmissions, résultats. Ces données de santé sont des données sensibles, très protégées par la loi. Tu n’y accèdes que pour les patients que tu prends en charge, avec tes propres identifiants, et tu ne les partages jamais.",
      points: [
        "DPI (dossier patient informatisé) : outil commun à l’équipe, chaque action est tracée (qui, quand)",
        "Données de santé = données sensibles (RGPD) : accès limité aux professionnels qui prennent en charge le patient",
        "Mon espace santé : espace numérique personnel du patient (documents, messagerie sécurisée)",
        "Ne jamais prêter ses identifiants, verrouiller sa session en quittant le poste",
        "Envoyer des données de santé uniquement par messagerie sécurisée de santé, jamais par mail personnel ou messagerie grand public",
        "Vérifier la fiabilité des sources en ligne (auteur, date, organisme officiel : HAS, ministère, Santé publique France…)"
      ],
      exemple: "Tu quittes l’ordinateur du chariot pour aller dans une chambre : tu verrouilles la session, même pour une minute.",
      piege: "Consulter le dossier d’un proche ou d’une personne connue hospitalisée sans le prendre en charge est interdit, même « juste pour voir » : les accès sont tracés.",
      memo: "Mes codes = ma signature.",
      mots: [ { mot: "Traçabilité", def: "Possibilité de retrouver qui a fait quoi et quand." } ]
    },

    // ───────────── UE E.1 ─────────────
    {
      id: "recherche", ue: "E1",
      titre: "Chercher une information fiable",
      resume: "Formuler une question, choisir les bonnes bases de données et juger la qualité d’une source.",
      simple: "En soins, on cherche à faire ce qui marche le mieux, d’après les meilleures preuves disponibles : c’est la pratique fondée sur les données probantes. Pour ça, il faut savoir poser une question précise, chercher au bon endroit et vérifier que la source est sérieuse.",
      points: [
        "Poser la question avec PICO : Population, Intervention, Comparaison, Outcome (résultat)",
        "Sources fiables : HAS, Santé publique France, sociétés savantes, revues scientifiques",
        "Bases de données : PubMed (international), LiSSa (articles en français), CAIRN (sciences humaines), Cochrane (synthèses)",
        "Analyse critique : qui est l’auteur ? quand ? quel organisme ? quelle méthode ? qui finance ?",
        "Niveaux de preuve (du plus fort au plus faible) : méta-analyses et revues systématiques > essais contrôlés randomisés > études de cohorte > cas-témoins > séries de cas > avis d’experts",
        "Citer ses sources (normes APA ou Vancouver selon ton IFSI) ; copier sans citer = plagiat"
      ],
      exemple: "Question : « Chez les patients âgés hospitalisés (P), la mobilisation précoce (I) par rapport au repos (C) réduit-elle les chutes (O) ? »",
      piege: "Un site joli et bien référencé sur Google n’est pas forcément fiable : vérifie l’auteur et la date.",
      memo: "PICO = « Patient, Intervention, Comparaison, Objectif atteint ? »",
      mots: [ { mot: "Données probantes", def: "Résultats de recherche solides sur lesquels on fonde sa pratique (evidence-based)." } ]
    },

    // ───────────── UE E.3 ─────────────
    {
      id: "apprendre", ue: "E3",
      titre: "Apprendre efficacement",
      resume: "Les méthodes qui marchent vraiment pour retenir : rappel actif et répétition espacée.",
      simple: "Relire son cours en boucle donne l’impression de savoir, mais on retient peu. Ce qui marche le mieux : se tester (essayer de se rappeler sans regarder) et revoir les notions à intervalles de plus en plus longs. C’est exactement à ça que servent les QCM et le bouton « Je maîtrise » de cette app.",
      points: [
        "Rappel actif : fermer le cours et réciter, faire des QCM, s’expliquer la notion à voix haute",
        "Répétition espacée : revoir à J+1, J+3, J+7, J+21… plutôt que tout la veille",
        "Fiches courtes : une notion par fiche, mots-clés, schémas, couleurs",
        "Méthode Pomodoro : 25 minutes de travail concentré, 5 minutes de pause",
        "Travailler à plusieurs : s’interroger mutuellement",
        "Le sommeil fixe les apprentissages : les nuits blanches avant un partiel sont contre-productives"
      ],
      exemple: "Planning de la semaine : 20 minutes par jour de QCM sur les UE de la semaine précédente, en plus des nouveaux cours.",
      piege: "Surligner tout le cours n’est pas apprendre. Si tout est surligné, rien ne ressort.",
      memo: "« Se tester, c’est apprendre. »",
      mots: []
    },
    {
      id: "stage", ue: "E3",
      titre: "Réussir son premier stage",
      resume: "Objectifs de stage, portfolio, analyse de situation : comment se préparer.",
      simple: "Le stage est un moment clé : c’est là que tu deviens soignante. Arrive avec des objectifs clairs, pose des questions, observe, et note ce que tu apprends. Ton portfolio sert à suivre ta progression dans les compétences ; ton tuteur et ton référent de stage sont là pour t’accompagner.",
      points: [
        "Avant : se renseigner sur le service, réviser les pathologies et soins fréquents, préparer ses objectifs",
        "Objectifs de stage : précis et réalisables (ex. « réaliser le recueil de données de 2 patients selon Henderson »)",
        "Portfolio : outil de suivi des compétences et des actes, rempli avec le tuteur",
        "Analyse de situation : décrire une situation vécue, ce que tu as ressenti, ce que tu en as appris, ce que tu ferais autrement",
        "Bilan de mi-stage : moment pour réajuster ses objectifs",
        "Ne jamais faire un soin que tu ne maîtrises pas sans encadrement"
      ],
      exemple: "Tu ne sais pas faire un soin demandé : « Je ne l’ai encore jamais fait, pouvez-vous me montrer d’abord ? » — c’est une attitude professionnelle.",
      piege: "Attendre la fin du stage pour faire remplir son portfolio : fais-le au fil de l’eau.",
      memo: "Observe → Fais avec → Fais seule sous regard → Fais seule.",
      mots: []
    }
  ],

  questions: [
    // A.1
    { ue: "A1", q: "Combien de besoins fondamentaux Virginia Henderson a-t-elle décrits ?", choices: ["5", "10", "14", "21"], a: 2, exp: "Henderson décrit 14 besoins fondamentaux, de « respirer » à « apprendre »." },
    { ue: "A1", q: "Lequel de ces éléments est un besoin de Virginia Henderson ?", choices: ["Être en sécurité financière", "Éviter les dangers", "Avoir un travail", "Être aimé"], a: 1, exp: "« Éviter les dangers » est le 9e besoin. Les autres renvoient plutôt à Maslow ou à la vie sociale." },
    { ue: "A1", q: "Quel est le premier étage (la base) de la pyramide de Maslow ?", choices: ["Sécurité", "Estime", "Besoins physiologiques", "Appartenance"], a: 2, exp: "La base de la pyramide, ce sont les besoins physiologiques (respirer, boire, manger…)." },
    { ue: "A1", q: "Quelle formulation est un objectif de soins correct ?", choices: ["Faire boire le patient", "Le patient boira au moins 1,5 L par 24 h d’ici 48 h", "Surveiller la diurèse", "Hydrater le patient"], a: 1, exp: "Un objectif est centré sur le patient, mesurable et limité dans le temps (SMART)." },
    { ue: "A1", q: "Dans les transmissions ciblées, que signifie DAR ?", choices: ["Diagnostic, Analyse, Recueil", "Données, Actions, Résultats", "Dossier, Alerte, Rapport", "Douleur, Anxiété, Risque"], a: 1, exp: "DAR = Données, Actions, Résultats, organisés autour d’une cible." },
    { ue: "A1", q: "Quelle est la fréquence cardiaque normale d’un adulte au repos ?", choices: ["40 à 60 /min", "60 à 100 /min", "100 à 140 /min", "12 à 20 /min"], a: 1, exp: "60 à 100 battements/min. 12 à 20/min correspond à la fréquence respiratoire." },
    { ue: "A1", q: "À partir de quelle température parle-t-on de fièvre ?", choices: ["37 °C", "37,5 °C", "38 °C", "39 °C"], a: 2, exp: "On parle de fièvre à partir de 38 °C." },
    { ue: "A1", q: "Quelle est la fréquence respiratoire normale d’un adulte ?", choices: ["6 à 10 /min", "12 à 20 /min", "25 à 35 /min", "60 à 100 /min"], a: 1, exp: "12 à 20 cycles par minute chez l’adulte au repos." },
    { ue: "A1", q: "Le score de Glasgow normal est de :", choices: ["3", "10", "15", "20"], a: 2, exp: "Le score va de 3 (coma profond) à 15 (conscience normale)." },
    { ue: "A1", q: "Selon l’OMS (1946), la santé est :", choices: ["L’absence de maladie", "Un état de complet bien-être physique, mental et social", "Le fait de ne pas prendre de médicaments", "Un bon fonctionnement des organes"], a: 1, exp: "« … et ne consiste pas seulement en une absence de maladie ou d’infirmité. »" },

    // B.1
    { ue: "B1", q: "Quel organite produit l’énergie (ATP) de la cellule ?", choices: ["Le noyau", "La mitochondrie", "Le ribosome", "Le lysosome"], a: 1, exp: "La mitochondrie produit l’ATP grâce à l’oxygène." },
    { ue: "B1", q: "Combien de chromosomes contient une cellule humaine (hors gamètes) ?", choices: ["23", "44", "46", "48"], a: 2, exp: "46 chromosomes, soit 23 paires. Les gamètes en ont 23." },
    { ue: "B1", q: "Le sang appartient à quel type de tissu ?", choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"], a: 1, exp: "Le sang est un tissu conjonctif, même s’il est liquide." },
    { ue: "B1", q: "Quelle valve sépare l’oreillette gauche du ventricule gauche ?", choices: ["Tricuspide", "Mitrale", "Aortique", "Pulmonaire"], a: 1, exp: "Mitrale à gauche, tricuspide à droite." },
    { ue: "B1", q: "L’artère pulmonaire transporte :", choices: ["Du sang riche en oxygène vers le corps", "Du sang pauvre en oxygène vers les poumons", "Du sang riche en oxygène vers le cœur", "De la lymphe"], a: 1, exp: "Piège classique : c’est une artère (elle part du cœur) mais elle transporte du sang pauvre en O2." },
    { ue: "B1", q: "Quel est le « chef d’orchestre » du rythme cardiaque normal ?", choices: ["Le faisceau de His", "Le nœud sinusal", "Le réseau de Purkinje", "La valve aortique"], a: 1, exp: "Le nœud sinusal, dans l’oreillette droite, donne le rythme." },
    { ue: "B1", q: "Quel est le rôle principal des globules rouges ?", choices: ["Défendre l’organisme", "Coaguler le sang", "Transporter l’oxygène", "Produire des anticorps"], a: 2, exp: "Grâce à l’hémoglobine, ils transportent l’oxygène." },
    { ue: "B1", q: "Taux normal de plaquettes :", choices: ["4 à 10 G/L", "150 à 400 G/L", "135 à 145 mmol/L", "12 à 16 g/dL"], a: 1, exp: "150 à 400 G/L. 4–10 G/L = globules blancs ; 135–145 = sodium ; 12–16 g/dL = Hb chez la femme." },
    { ue: "B1", q: "Combien de lobes a le poumon gauche ?", choices: ["1", "2", "3", "4"], a: 1, exp: "2 lobes à gauche (place du cœur), 3 à droite." },
    { ue: "B1", q: "Où se fait l’essentiel de l’absorption des nutriments ?", choices: ["Estomac", "Intestin grêle", "Côlon", "Œsophage"], a: 1, exp: "L’intestin grêle absorbe la majorité des nutriments ; le côlon réabsorbe surtout l’eau." },
    { ue: "B1", q: "Quel conduit relie le rein à la vessie ?", choices: ["L’urètre", "L’uretère", "Le néphron", "Le méat"], a: 1, exp: "L’uretère (2) relie rein et vessie ; l’urètre (1) conduit l’urine vers l’extérieur." },
    { ue: "B1", q: "On parle d’oligurie quand la diurèse est :", choices: ["< 500 mL/24 h", "< 1,5 L/24 h", "> 3 L/24 h", "Nulle"], a: 0, exp: "Oligurie < 500 mL/24 h ; anurie < 100 mL/24 h ; polyurie > 3 L/24 h." },
    { ue: "B1", q: "Le système sympathique provoque :", choices: ["Un ralentissement du cœur", "Une accélération du cœur", "Une augmentation de la digestion", "Un rétrécissement des bronches"], a: 1, exp: "Sympathique = fuite ou combat : cœur accéléré, bronches ouvertes, digestion freinée." },
    { ue: "B1", q: "Un AVC de l’hémisphère gauche peut entraîner une paralysie :", choices: ["Du côté gauche", "Du côté droit", "Des deux jambes", "Aucune"], a: 1, exp: "Les voies nerveuses se croisent : le cerveau gauche commande le côté droit." },
    { ue: "B1", q: "Quelle hormone fait baisser la glycémie ?", choices: ["Glucagon", "Cortisol", "Insuline", "Adrénaline"], a: 2, exp: "L’insuline est la seule hormone hypoglycémiante." },
    { ue: "B1", q: "Le principe de la vaccination repose sur :", choices: ["L’immunité innée", "La mémoire immunitaire", "L’inflammation", "La fièvre"], a: 1, exp: "Le vaccin entraîne l’immunité adaptative à reconnaître un microbe et à s’en souvenir." },
    { ue: "B1", q: "Quelle est la méthode d’hygiène des mains à privilégier sur des mains propres et sèches ?", choices: ["Lavage au savon doux", "Friction hydro-alcoolique", "Port de gants", "Lavage antiseptique"], a: 1, exp: "La FHA est la méthode de référence, sauf mains visiblement sales ou mouillées." },
    { ue: "B1", q: "Pour prendre la tension d’un patient à la peau saine, il faut :", choices: ["Des gants stériles", "Des gants non stériles", "Pas de gants, FHA avant et après", "Un masque FFP2"], a: 2, exp: "Pas de risque de contact avec des liquides biologiques : pas de gants, mais hygiène des mains." },
    { ue: "B1", q: "Patient atteint de tuberculose pulmonaire : quel masque pour le soignant ?", choices: ["Masque chirurgical", "Masque FFP2", "Pas de masque", "Visière seule"], a: 1, exp: "Précautions « air » : FFP2 ajusté, porte fermée." },
    { ue: "B1", q: "Pourquoi se laver les mains au savon en plus de la FHA avec Clostridioides difficile ?", choices: ["Le savon tue mieux les virus", "Les spores résistent à l’alcool", "La FHA est interdite", "C’est une question de confort"], a: 1, exp: "Les spores ne sont pas détruites par l’alcool : le lavage les élimine mécaniquement." },
    { ue: "B1", q: "Après une piqûre avec une aiguille souillée, il faut d’abord :", choices: ["Faire saigner la plaie", "Nettoyer à l’eau et au savon puis antiseptique ≥ 5 min", "Attendre la fin du service", "Mettre un pansement et continuer"], a: 1, exp: "Ne pas faire saigner ; nettoyer, rincer, antiseptique, puis prévenir et consulter rapidement." },
    { ue: "B1", q: "Que signifie « per os » ?", choices: ["Par voie intraveineuse", "Par la bouche", "Sous la langue", "Par voie rectale"], a: 1, exp: "Per os = par la bouche (voie orale)." },
    { ue: "B1", q: "Laquelle de ces vérifications ne fait PAS partie des 5 B ?", choices: ["Bon patient", "Bonne dose", "Bon prix", "Bon moment"], a: 2, exp: "Les 5 B : bon patient, bon médicament, bonne dose, bonne voie, bon moment." },
    { ue: "B1", q: "Quel organe métabolise principalement les médicaments ?", choices: ["Le rein", "Le foie", "Le cœur", "La rate"], a: 1, exp: "Le foie métabolise ; le rein élimine surtout." },
    { ue: "B1", q: "1 g correspond à :", choices: ["100 mg", "1 000 mg", "10 000 mg", "1 000 µg"], a: 1, exp: "1 g = 1 000 mg ; 1 mg = 1 000 µg." },
    { ue: "B1", q: "Combien de grammes de glucose dans 500 mL de glucose 5 % ?", choices: ["5 g", "25 g", "50 g", "250 g"], a: 1, exp: "5 % = 5 g pour 100 mL, donc 25 g pour 500 mL." },
    { ue: "B1", q: "1 000 mL à passer en 8 h : quel débit ?", choices: ["80 mL/h", "100 mL/h", "125 mL/h", "250 mL/h"], a: 2, exp: "1 000 ÷ 8 = 125 mL/h." },
    { ue: "B1", q: "Avec un perfuseur standard, 1 mL correspond à :", choices: ["10 gouttes", "20 gouttes", "60 gouttes", "100 gouttes"], a: 1, exp: "1 mL = 20 gouttes (perfuseur standard)." },

    // D.1
    { ue: "D1", q: "Le ton et le débit de la voix relèvent de la communication :", choices: ["Verbale", "Paraverbale", "Non verbale", "Écrite"], a: 1, exp: "Paraverbal = la façon dont on dit les mots (ton, volume, débit)." },
    { ue: "D1", q: "Quelle question est une question ouverte ?", choices: ["Avez-vous mal ?", "Vous avez bien dormi ?", "Comment s’est passée votre nuit ?", "Voulez-vous de l’eau ?"], a: 2, exp: "Une question ouverte ne se répond pas par oui ou non." },
    { ue: "D1", q: "L’empathie, c’est :", choices: ["Ressentir la même émotion que le patient", "Comprendre ce que ressent le patient sans le ressentir à sa place", "Donner des conseils", "Rassurer en disant que tout va bien"], a: 1, exp: "Empathie = comprendre l’autre en gardant sa place de soignant." },
    { ue: "D1", q: "Quelle attitude de Porter favorise le plus la relation d’aide ?", choices: ["Évaluation", "Solution", "Compréhension", "Interprétation"], a: 2, exp: "L’attitude de compréhension (reformuler, accueillir) favorise l’expression du patient." },
    { ue: "D1", q: "Un étudiant infirmier est-il tenu au secret professionnel ?", choices: ["Non, seulement les diplômés", "Oui", "Seulement en 3e année", "Seulement s’il a signé un document"], a: 1, exp: "Les étudiants sont soumis au secret professionnel dès le premier stage." },

    // D.4
    { ue: "D4", q: "Quelle est la bonne façon de vérifier l’identité d’un patient ?", choices: ["« Vous êtes bien M. Martin ? »", "« Pouvez-vous me dire votre nom et votre date de naissance ? »", "Regarder le nom sur la porte", "Demander à la famille"], a: 1, exp: "On fait décliner l’identité par le patient (question ouverte), puis on vérifie avec le bracelet." },
    { ue: "D4", q: "Lequel n’est PAS un trait strict de l’identité ?", choices: ["Nom de naissance", "Date de naissance", "Numéro de chambre", "Sexe"], a: 2, exp: "Traits stricts : nom et premier prénom de naissance, date et lieu de naissance, sexe." },
    { ue: "D4", q: "Tu quittes quelques instants l’ordinateur du service :", choices: ["Tu laisses la session ouverte", "Tu verrouilles la session", "Tu demandes à une collègue de surveiller l’écran", "Tu éteins l’écran seulement"], a: 1, exp: "On verrouille toujours sa session : les actions faites sous ton identifiant te sont attribuées." },

    // E.1
    { ue: "E1", q: "Dans PICO, que signifie le « C » ?", choices: ["Conclusion", "Comparaison", "Cause", "Critère"], a: 1, exp: "PICO : Population, Intervention, Comparaison, Outcome (résultat)." },
    { ue: "E1", q: "Quel type d’étude apporte le plus haut niveau de preuve ?", choices: ["Avis d’expert", "Série de cas", "Méta-analyse d’essais randomisés", "Étude cas-témoins"], a: 2, exp: "Revues systématiques et méta-analyses sont au sommet de la pyramide des preuves." },
    { ue: "E1", q: "Quelle base de données recense des articles de santé en français ?", choices: ["LiSSa", "Wikipédia", "Doctissimo", "Instagram"], a: 0, exp: "LiSSa recense la littérature scientifique en santé en langue française." },

    // E.3
    { ue: "E3", q: "Quelle méthode est la plus efficace pour mémoriser ?", choices: ["Relire son cours plusieurs fois", "Surligner tout le cours", "Se tester régulièrement (rappel actif)", "Tout réviser la veille"], a: 2, exp: "Le rappel actif et la répétition espacée sont les méthodes les plus efficaces." },
    { ue: "E3", q: "La méthode Pomodoro consiste à :", choices: ["Travailler 2 h sans pause", "Alterner 25 min de travail et 5 min de pause", "Réviser uniquement le matin", "Ne faire que des QCM"], a: 1, exp: "25 minutes concentrées, 5 minutes de pause, et une pause plus longue toutes les 4 séries." }
  ],

  // Lexique : préfixes et suffixes pour décoder le vocabulaire médical.
  lexique: [
    { part: "-ite", sens: "inflammation", ex: "appendicite" },
    { part: "-algie", sens: "douleur", ex: "lombalgie" },
    { part: "-ectomie", sens: "ablation (retrait)", ex: "appendicectomie" },
    { part: "-tomie", sens: "incision (ouverture)", ex: "laparotomie" },
    { part: "-stomie", sens: "abouchement à la peau", ex: "colostomie" },
    { part: "-scopie", sens: "examen visuel", ex: "coloscopie" },
    { part: "-émie", sens: "dans le sang", ex: "glycémie" },
    { part: "-urie", sens: "dans l’urine", ex: "hématurie" },
    { part: "-pnée", sens: "respiration", ex: "dyspnée" },
    { part: "-pathie", sens: "maladie", ex: "cardiopathie" },
    { part: "-plégie", sens: "paralysie", ex: "hémiplégie" },
    { part: "-rragie", sens: "écoulement de sang", ex: "hémorragie" },
    { part: "hyper-", sens: "excès, au-dessus", ex: "hypertension" },
    { part: "hypo-", sens: "insuffisance, en dessous", ex: "hypoglycémie" },
    { part: "tachy-", sens: "rapide", ex: "tachycardie" },
    { part: "brady-", sens: "lent", ex: "bradycardie" },
    { part: "dys-", sens: "difficulté, anomalie", ex: "dysphagie" },
    { part: "a- / an-", sens: "absence", ex: "anurie" },
    { part: "poly-", sens: "nombreux, beaucoup", ex: "polyurie" },
    { part: "hémi-", sens: "moitié", ex: "hémiplégie" },
    { part: "hémo- / hémato-", sens: "sang", ex: "hématome" },
    { part: "cardio-", sens: "cœur", ex: "cardiologie" },
    { part: "gastro-", sens: "estomac", ex: "gastrite" },
    { part: "hépato-", sens: "foie", ex: "hépatite" },
    { part: "néphro- / réno-", sens: "rein", ex: "néphrologie" },
    { part: "pneumo- / pulmo-", sens: "poumon", ex: "pneumopathie" },
    { part: "neuro-", sens: "nerf, système nerveux", ex: "neurologie" },
    { part: "derm(at)o-", sens: "peau", ex: "dermatologie" }
  ]
};
