// Contenu pédagogique de l'app IFSI — référentiel de formation 2026
// (arrêté du 20 février 2026, annexe III). Le référentiel national définit les 15 UE
// et leur contenu sur les 3 ans ; la répartition par semestre est fixée par chaque IFSI.
// Fiches rédigées pour l'app (pas de copie de supports de cours) : à confronter
// avec les cours de ton IFSI, qui font toujours référence.
window.IFSI_DATA = {
  annees: [
    { n: 1, label: "1re année", dispo: true },
    { n: 2, label: "2e année", dispo: false },
    { n: 3, label: "3e année", dispo: false }
  ],

  domaines: {
    A: "Sciences infirmières et raisonnement clinique",
    B: "Pratiques cliniques infirmières, qualité et gestion des risques",
    C: "Prévention et promotion de la santé",
    D: "Communication, travail en équipe et leadership",
    E: "Démarche scientifique, initiation à la recherche et méthodologie"
  },

  // ects = total sur les 3 ans (référentiel, tableau 2).
  // an1 = ce que le référentiel attend en 1re année (compétences associées, reformulé).
  // programme = éléments de contenu officiels, regroupés par thème ; les fiches s'y rattachent via `theme`.
  ues: [
    { id: "A1", code: "UE A.1", domaine: "A", ects: 9, icon: "🩺", tone: "t-teal",
      titre: "Fondements des sciences infirmières et raisonnement clinique",
      an1: "Mettre en œuvre un jugement clinique et identifier les interventions à mener, dans des situations de soins simples ou stabilisées, pour une personne ou un groupe à tout âge de la vie.",
      programme: [
        { id: "a1-histoire", t: "Histoire, identité et missions de la profession", items: "Histoire des professions de santé et de la profession infirmière · identité et sociologie · place à l’international · rôle et missions de l’infirmier · périmètre des différentes professions" },
        { id: "a1-concepts", t: "Concepts, modèles et théories en sciences infirmières", items: "Concept, paradigme, modèle, courant de pensée · épistémologie · modèles conceptuels et théories · concepts fondamentaux" },
        { id: "a1-raisonnement", t: "Raisonnement et jugement clinique", items: "Questionnement, observation, induction, déduction · pensée critique · biais socio-cognitifs · génération d’hypothèses · pratique fondée sur les données probantes · terminologie clinique" },
        { id: "a1-recueil", t: "Recueil de données et évaluation de la personne", items: "Outils de recueil de données et de mesures · évaluation de l’autonomie et des fragilités · évaluation des risques de violences" },
        { id: "a1-diagnostic", t: "Diagnostic infirmier, projet de soins, évaluation", items: "Problèmes prioritaires et risques · diagnostic infirmier et classifications · projet de soins · critères d’évaluation des interventions" }
      ] },
    { id: "A2", code: "UE A.2", domaine: "A", ects: 6, icon: "⚖️", tone: "t-blue",
      titre: "Législation, déontologie, éthique",
      an1: "Exercer conformément à la loi, aux règles déontologiques et en tenant compte de l’éthique, dans des situations de soins simples ou stabilisées.",
      programme: [
        { id: "a2-droit", t: "Notions de droit", items: "Droit, morale et éthique · hiérarchie des normes · droit public / droit privé · organisation des juridictions" },
        { id: "a2-responsabilite", t: "Exercice professionnel, déontologie et responsabilités", items: "Organisation de la profession · normes et déontologie · responsabilités civile, pénale et disciplinaire · protocoles de coopération · exercice coordonné" },
        { id: "a2-droits", t: "Droits des patients, bientraitance", items: "Information et consentement, refus de soins · vie privée et secret professionnel · personnes vulnérables · personne de confiance · proches et aidants · dignité · bientraitance et prévention de la maltraitance" },
        { id: "a2-ethique", t: "Réflexion éthique", items: "Courants philosophiques · autonomie, bienfaisance, non-malfaisance, justice · dilemmes éthiques · éthique du care et de la discussion · bioéthique · enjeux éthiques du numérique" },
        { id: "a2-findevie", t: "Fin de vie et soins sans consentement", items: "Directives anticipées · obstination déraisonnable · soins palliatifs · soins sans consentement, isolement et contention · situations spécifiques (travail, école, prison, psychiatrie)" },
        { id: "a2-violences", t: "Violences envers les soignants, VSS", items: "Violences envers les professionnels de santé · violences sexistes et sexuelles" }
      ] },
    { id: "B1", code: "UE B.1", domaine: "B", ects: 18, icon: "🫀", tone: "t-rose",
      titre: "Sciences biomédicales",
      an1: "Mobiliser l’anatomie, la physiologie et les pathologies fréquentes pour réaliser des soins dans des situations simples ou stabilisées. Pour chaque système : bases anatomiques et physiologiques, pathologies, examens, traitements, risques, prévention, urgences.",
      programme: [
        { id: "b1-fondamentaux", t: "Fonctionnement du corps humain", items: "Biochimie, biologie cellulaire et moléculaire, hématologie · anatomie et physiologie des systèmes · étapes de la vie, de la naissance au vieillissement" },
        { id: "b1-douleur", t: "Douleur aiguë et chronique", items: "Bases anatomo-physiologiques, physiopathologiques et psychologiques · aspects cliniques" },
        { id: "b1-cardio", t: "Système cardio-pulmonaire", items: "Insuffisance cardiaque, infarctus, HTA, troubles du rythme, artères, phlébite et embolie pulmonaire, valves, asthme, BPCO, anémie · anticoagulants, antiagrégants, statines, diurétiques, antihypertenseurs, bronchodilatateurs" },
        { id: "b1-nerveux", t: "Système nerveux", items: "AVC, épilepsie, Parkinson, neuropathies, lésions médullaires, déficits sensoriels · antiépileptiques, psychotropes" },
        { id: "b1-locomoteur", t: "Système locomoteur", items: "Traumatismes, fractures, amputations, lombalgies, arthrose, douleurs chroniques, ostéoporose · antalgiques" },
        { id: "b1-urinaire", t: "Système urinaire", items: "Insuffisance rénale aiguë et chronique (dialyse, greffe), pathologies glomérulaires, lithiases, troubles de la miction · adaptation des traitements" },
        { id: "b1-digestif", t: "Système digestif", items: "Bucco-dentaire, reflux, ulcères, hémorragies, troubles du transit, foie et voies biliaires, intestin, MICI · laxatifs, antiulcéreux" },
        { id: "b1-endocrinien", t: "Système endocrinien", items: "Pathologies des glandes endocrines, diabète · insulines, antidiabétiques oraux, thyroxine" },
        { id: "b1-repro", t: "Systèmes uro-génital et reproducteur", items: "Puberté, santé sexuelle, grossesse, contraception, ménopause · gynécologie-obstétrique · incontinence · IST" },
        { id: "b1-peau", t: "Système tégumentaire", items: "Atteintes de l’intégrité cutanée · plaies, cicatrisation, brûlures, escarres · maladies inflammatoires de la peau · traitements topiques" },
        { id: "b1-immuno", t: "Immunité, infections, inflammation", items: "Pneumopathies, infections urinaires, érysipèle, septicémies · grippe, covid, VIH, hépatites, zona · paludisme · infections nosocomiales · maladies auto-immunes · antibiotiques, antiviraux, corticoïdes, anti-inflammatoires" },
        { id: "b1-orl", t: "ORL et ophtalmologie", items: "Vertiges, acouphènes, otites, surdité · glaucome, rétine, cristallin" },
        { id: "b1-cancer", t: "Cancers et hémopathies", items: "Cancers fréquents · soins de support · aidants · prévention et dépistages organisés" },
        { id: "b1-enfant", t: "Développement de l’enfant et de l’adolescent", items: "Croissance, neurodéveloppement · allaitement, nutrition, vaccins · troubles du neurodéveloppement · maladies génétiques · maltraitance" },
        { id: "b1-psy", t: "Psychiatrie de l’adulte, de l’enfant et de l’adolescent", items: "Organisation de la psychiatrie · troubles psychotiques, de l’humeur, anxieux, du sommeil, de la personnalité, alimentaires · addictions · risque suicidaire · psychotropes" },
        { id: "b1-urgences", t: "Situations critiques et urgences", items: "État de choc, arrêt cardio-respiratoire · polytraumatisme, brûlures, hémorragie, sepsis · urgences psychiatriques et pédiatriques · situations sanitaires exceptionnelles · violences" },
        { id: "b1-age", t: "Vieillissement", items: "Approche gériatrique · syndromes gériatriques (confusion, dénutrition, déshydratation, chutes, escarres, incontinence) · dépendance iatrogène · troubles neurocognitifs" },
        { id: "b1-palliatif", t: "Soins palliatifs et fin de vie", items: "Étapes de la fin de vie et du deuil · démarche palliative précoce · traitements en fin de vie" },
        { id: "b1-social", t: "Médecine sociale", items: "Précarité et inégalités sociales de santé · approche interculturelle · repérage des violences · santé scolaire, au travail, en prison" }
      ] },
    { id: "B2", code: "UE B.2", domaine: "B", ects: 6, icon: "🧠", tone: "t-violet",
      titre: "Sciences humaines et sociales",
      an1: "Mobiliser la psychologie, la sociologie et l’anthropologie pour comprendre la personne soignée, son entourage et ses comportements de santé.",
      programme: [
        { id: "b2-psycho", t: "Psychologie", items: "Développement de l’enfance à l’âge adulte · psychologie de la santé (stress, coping) · psychologie sociale · psychopathologie : du normal au pathologique · étapes du deuil" },
        { id: "b2-socio", t: "Sociologie", items: "Famille et entourage dans le parcours de soin · inégalités sociales de santé · sociologie des professions · handicap, inclusion, aidants" },
        { id: "b2-anthropo", t: "Ethnologie et anthropologie", items: "Groupes humains, migrations · religions, croyances, rites · place du corps · perceptions culturelles de la maladie · approche interculturelle du soin" },
        { id: "b2-vss", t: "Violences sexistes et sexuelles", items: "Consentement · données sur les VSS · psychotraumatisme · VSS en milieu étudiant" },
        { id: "b2-addictions", t: "Conduites addictives", items: "Addictions avec ou sans substance · enjeux sociaux · conduites à risque et milieu festif" }
      ] },
    { id: "B3", code: "UE B.3", domaine: "B", ects: 18, icon: "💉", tone: "t-teal",
      titre: "Pratiques et interventions infirmières",
      an1: "Réaliser des soins dans des situations simples ou stabilisées, dont les soins courants de la vie quotidienne. En 1re année : formation aux gestes et soins d’urgence (AFGSU niveau 2) et formation en santé mentale.",
      programme: [
        { id: "b3-afgsu", t: "Gestes et soins d’urgence (AFGSU niveau 2, 21 h)", items: "Alerte, protection, urgences vitales et potentielles · formation positionnée en 1re année" },
        { id: "b3-santementale", t: "Santé mentale (1re année)", items: "Bien-être psychologique · gestion du stress et de l’anxiété · offre de soins en santé mentale · signes précoces de détresse, premières interventions, orientation" },
        { id: "b3-hygiene", t: "Prévention des infections associées aux soins", items: "Hygiène des mains, tenue, EPI · circuits propre/sale, déchets (DASRI) · précautions standard et complémentaires · pré-désinfection, désinfection, stérilisation · asepsie · antibiorésistance" },
        { id: "b3-douleur", t: "Prise en charge de la douleur", items: "Prévention · évaluation et suivi · douleurs induites par les soins · moyens médicamenteux et non médicamenteux" },
        { id: "b3-raisonnement", t: "Projet de soins, planification, transmissions", items: "Analyse selon un modèle conceptuel · jugement clinique · planification · transmissions · évaluation des résultats" },
        { id: "b3-consultation", t: "Consultation infirmière et examen clinique", items: "Anamnèse · entretien · inspection, palpation, percussion, auscultation · conseils · prescriptions · orientation" },
        { id: "b3-soinsbase", t: "Soins d’hygiène, de confort et de la vie quotidienne", items: "Hygiène et confort · hygiène bucco-dentaire · équilibre alimentaire · prévention des plaies · lever et aide à la mobilisation" },
        { id: "b3-medicaments", t: "Produits de santé", items: "Circuit du médicament · réglementation · pharmacovigilance · prescriptions · conciliation médicamenteuse · préparation, administration, calculs de doses · transfusion · cathéters et chambres implantables" },
        { id: "b3-examens", t: "Examens complémentaires", items: "Biologie, imagerie, endoscopie, explorations · règles de prescription · préparation, réalisation et suivi" },
        { id: "b3-plaies", t: "Plaies et pansements", items: "Typologies et évaluation des plaies · types de pansements · techniques spécifiques (brûlures, ulcères, escarres, stomies…) · suivi de la cicatrisation" },
        { id: "b3-vaccins", t: "Vaccinations", items: "Maladies à prévention vaccinale · calendrier · politique vaccinale · prescription, administration, surveillance, traçabilité" },
        { id: "b3-specifiques", t: "Soins spécifiques", items: "Pédiatrie · psychiatrie (entretien, isolement et contention, crise, risque suicidaire) · soins critiques et situations sanitaires exceptionnelles · gériatrie · addictions et arrêt du tabac · soins palliatifs" }
      ] },
    { id: "B4", code: "UE B.4", domaine: "B", ects: 3, icon: "🛡️", tone: "t-amber",
      titre: "Démarche qualité et gestion des risques",
      an1: "Utiliser les outils d’évaluation adaptés et appliquer les règles de vigilance dans toute activité de soins.",
      programme: [
        { id: "b4-qualite", t: "Démarche et outils qualité", items: "Principes et cadre réglementaire · PDCA / roue de Deming · indicateurs · expérience des usagers · traçabilité, protocoles · audits, évaluation des pratiques" },
        { id: "b4-risques", t: "Gestion des risques et vigilances", items: "Types de risques · cartographie, arbre des causes, 5 pourquoi · identito-, matério-, infectio-, hémovigilance · déclaration et gestion des événements indésirables" },
        { id: "b4-culture", t: "Culture de sécurité", items: "Facteur humain · place de l’erreur, culture juste · patient acteur de sa sécurité · briefings, simulation en équipe" }
      ] },
    { id: "C1", code: "UE C.1", domaine: "C", ects: 15, icon: "📣", tone: "t-green",
      titre: "Santé publique, promotion de la santé et prévention, éducation thérapeutique",
      an1: "Identifier les priorités de santé publique et les étapes d’une démarche de promotion de la santé, d’éducation à la santé et d’éducation thérapeutique.",
      programme: [
        { id: "c1-promotion", t: "Promotion et éducation à la santé, service sanitaire", items: "Déterminants de santé, prévention, promotion · comportements de santé · thématiques (alimentation, activité physique, sommeil, écrans, sexualité, addictions…) · démarche projet · action du SSES · lutte contre les fausses informations" },
        { id: "c1-systeme", t: "Système de santé et santé publique", items: "Acteurs nationaux et internationaux · indicateurs et état de santé · inégalités · organisation et financement · parcours de soins · plans nationaux · crises sanitaires" },
        { id: "c1-etp", t: "Prévention, dépistage, éducation thérapeutique", items: "Prévention individuelle et dépistage organisé · ETP (bilan éducatif partagé, séances, évaluation) · repérage précoce et intervention brève · entretien motivationnel" },
        { id: "c1-soignant", t: "Risques du métier de soignant", items: "Troubles musculosquelettiques · risques psychosociaux · souffrance au travail · impact émotionnel" }
      ] },
    { id: "C2", code: "UE C.2", domaine: "C", ects: 6, icon: "🌱", tone: "t-green",
      titre: "Santé environnementale et transition écologique",
      an1: "Analyser les recommandations sur les risques environnementaux et les gestes de soins durables et écoresponsables.",
      programme: [
        { id: "c2-env", t: "Environnement et santé", items: "Expositions chimiques, physiques, biologiques · inégalités environnementales · climat et santé · zoonoses, antibiorésistance · éco-anxiété · « Une seule santé »" },
        { id: "c2-ecosoins", t: "Soins écoresponsables", items: "Éco-conception des soins · vulnérabilités · transition écologique du système de santé" },
        { id: "c2-crises", t: "Crises environnementales et politiques publiques", items: "Plans d’urgence face aux catastrophes · plan santé-environnement · perturbateurs endocriniens, pesticides" }
      ] },
    { id: "D1", code: "UE D.1", domaine: "D", ects: 6, icon: "💬", tone: "t-amber",
      titre: "Savoir-être, communication professionnelle et leadership",
      an1: "Communiquer de manière adaptée avec la personne, son entourage et les différents professionnels, dans des situations de soins simples ou stabilisées.",
      programme: [
        { id: "d1-savoiretre", t: "Savoir-être et posture professionnelle", items: "Respect, écoute, empathie, congruence · ponctualité, tenue, langage, comportements adaptés" },
        { id: "d1-communication", t: "Communication", items: "Verbale, non verbale, écrite, numérique · écoute active · reformulation, clarification · respect des diversités" },
        { id: "d1-entretien", t: "Entretiens et situations difficiles", items: "Entretien d’accueil, d’évaluation, éducatif · fin de vie, refus de soins · consultation d’annonce" },
        { id: "d1-equipe", t: "Travail en équipe et coordination", items: "Rôles des professionnels · supervision des soins délégués · transmissions orales et écrites · continuité des soins" },
        { id: "d1-cps", t: "Compétences psychosociales", items: "Conscience de soi, gestion des émotions, empathie · gestion du stress · médiation" },
        { id: "d1-leadership", t: "Leadership", items: "Styles de leadership · impact sur la qualité des soins · dynamique de groupe, gestion des conflits" },
        { id: "d1-violences", t: "Violences en santé", items: "Comprendre l’agressivité · réagir · prévenir · techniques pour apaiser les tensions" }
      ] },
    { id: "D2", code: "UE D.2", domaine: "D", ects: 2, icon: "🗂️", tone: "t-blue",
      titre: "Coordination des activités et des soins et gestion d’une structure",
      an1: "Organiser son activité en tenant compte du travail en équipe et du champ d’intervention de chaque professionnel.",
      programme: [
        { id: "d2-coord", t: "Organiser son activité, coordonner les soins", items: "Travail en équipe et champ d’intervention · continuité des soins, transmission et archivage · partenariats" },
        { id: "d2-structure", t: "Gérer une structure", items: "Organisation administrative et financière · plannings · stocks, équipements, déchets" }
      ] },
    { id: "D3", code: "UE D.3", domaine: "D", ects: 2, icon: "🧑‍🏫", tone: "t-violet",
      titre: "Formation, développement des compétences et analyse des pratiques professionnelles",
      an1: "Identifier les étapes, techniques et méthodes qui permettent de développer et d’évaluer des compétences.",
      programme: [
        { id: "d3-pedagogie", t: "Apprendre, accompagner, évaluer", items: "Théories de l’apprentissage · approche par compétences · tutorat et mentorat · évaluation et auto-évaluation" },
        { id: "d3-app", t: "Analyse des pratiques professionnelles", items: "Outils et étapes de l’analyse · écarts entre théorie et pratique · organisation des soins · besoins de formation" }
      ] },
    { id: "D4", code: "UE D.4", domaine: "D", ects: 2, icon: "💻", tone: "t-blue",
      titre: "Numérique en santé",
      an1: "Saisir les données d’une personne dans le système informatisé en respectant les règles de sécurité informatique. Le numérique en santé est positionné en 1re année.",
      programme: [
        { id: "d4-donnees", t: "Données de santé et identitovigilance", items: "Impact du numérique · identitovigilance · RGPD et cycle de vie de la donnée · accès aux données, carte professionnelle · IA et algorithmes" },
        { id: "d4-cyber", t: "Cybersécurité", items: "Mots de passe, authentification, chiffrement · sécuriser son poste · cyberattaques et conduite à tenir" },
        { id: "d4-outils", t: "Outils numériques en santé", items: "e-santé · e-prescription · dossier patient informatisé · dossier médical partagé · objets connectés · fiabilité des sources · intelligence artificielle" },
        { id: "d4-telesante", t: "Télésanté et communication numérique", items: "Téléconsultation, téléexpertise, télésurveillance, télésoin · cadre juridique · identité numérique" }
      ] },
    { id: "E1", code: "UE E.1", domaine: "E", ects: 12, icon: "🔎", tone: "t-violet",
      titre: "Recherche, méthodes, analyse critique et données probantes",
      an1: "Rechercher et sélectionner des publications scientifiques et professionnelles avec les ressources documentaires nationales et internationales.",
      programme: [
        { id: "e1-recherche", t: "Recherche et démarche scientifique", items: "Organisation de la recherche · éthique et réglementation · intégrité · étapes de la démarche scientifique · diffusion des connaissances" },
        { id: "e1-biblio", t: "Recherche bibliographique", items: "Bases documentaires · équation de recherche · sélection des articles" },
        { id: "e1-lecture", t: "Lecture critique", items: "Types d’études et niveaux de preuve · structure d’un article · grilles de lecture · limites méthodologiques · méthodes qualitatives" },
        { id: "e1-stats", t: "Statistiques et épidémiologie", items: "Variables quantitatives et qualitatives · moyenne, médiane, écart-type · incidence, prévalence · risque relatif · tests statistiques" },
        { id: "e1-synthese", t: "Rédiger et présenter une synthèse", items: "Plan, figures, références bibliographiques · présentation orale · usage de l’IA : éthique et précautions" }
      ] },
    { id: "E2", code: "UE E.2", domaine: "E", ects: 6, icon: "🇬🇧", tone: "t-rose",
      titre: "Langue vivante étrangère",
      an1: "Acquérir le vocabulaire de base des soins et communiquer simplement avec une personne non francophone.",
      programme: [
        { id: "e2-vocab", t: "Vocabulaire des soins", items: "Termes médicaux courants · anatomie, pathologies, médicaments, matériel · accueil, symptômes, traitements · lecture de documents" },
        { id: "e2-communication", t: "Communiquer en anglais", items: "Questionner, écouter, rassurer · urgences · transmissions · dimensions culturelles" }
      ] },
    { id: "E3", code: "UE E.3", domaine: "E", ects: 3, icon: "🎯", tone: "t-green",
      titre: "Méthodes de travail et aide à la réussite",
      an1: "Acquérir une méthode de travail adaptée à la formation, construire son projet professionnel et s’engager comme futur professionnel de santé.",
      programme: [
        { id: "e3-methodes", t: "Méthodes de travail", items: "Ressources documentaires · compétences numériques · plan personnel d’apprentissage · compétences psychosociales (estime de soi, émotions)" },
        { id: "e3-projet", t: "Stage, projet professionnel et engagement", items: "Approche par compétences et alternance · représentations de la profession · analyse de situations · projet professionnel · engagement étudiant" }
      ] }
  ],

  // Chaque fiche : resume (1 ligne), simple (l'explication « comme à une amie »),
  // points (à retenir), exemple (en stage), piege, memo (moyen mnémotechnique), mots (lexique).
  fiches: [
    // ───────────── UE A.1 ─────────────
    {
      id: "henderson", ue: "A1", theme: "a1-concepts",
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
      id: "maslow", ue: "A1", theme: "a1-concepts",
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
      id: "demarche", ue: "A1", theme: "a1-diagnostic",
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
      id: "transmissions", ue: "B3", theme: "b3-raisonnement",
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
      id: "parametres", ue: "A1", theme: "a1-recueil",
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
      id: "concepts", ue: "A1", theme: "a1-concepts",
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

    // ───────────── UE B.1 (anatomie-physiologie) ─────────────
    {
      id: "cellule", ue: "B1", theme: "b1-fondamentaux",
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
      id: "tissus", ue: "B1", theme: "b1-fondamentaux",
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
      id: "cardio", ue: "B1", theme: "b1-cardio",
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
      id: "sang", ue: "B1", theme: "b1-fondamentaux",
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
      id: "respi", ue: "B1", theme: "b1-cardio",
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
      id: "digestif", ue: "B1", theme: "b1-digestif",
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
      id: "urinaire", ue: "B1", theme: "b1-urinaire",
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
      id: "nerveux", ue: "B1", theme: "b1-nerveux",
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
      id: "endocrinien", ue: "B1", theme: "b1-endocrinien",
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
      id: "immunite", ue: "B1", theme: "b1-immuno",
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
      id: "precautions", ue: "B3", theme: "b3-hygiene",
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
      id: "infection", ue: "B3", theme: "b3-hygiene",
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
      id: "aes", ue: "B3", theme: "b3-hygiene",
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
      id: "pharmabases", ue: "B3", theme: "b3-medicaments",
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
      id: "adme", ue: "B3", theme: "b3-medicaments",
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
      id: "calculdoses", ue: "B3", theme: "b3-medicaments",
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
      id: "communication", ue: "D1", theme: "d1-communication",
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
      id: "ecoute", ue: "D1", theme: "d1-communication",
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
      id: "posture", ue: "D1", theme: "d1-savoiretre",
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
      id: "identito", ue: "D4", theme: "d4-donnees",
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
      id: "dpi", ue: "D4", theme: "d4-outils",
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
      id: "recherche", ue: "E1", theme: "e1-biblio",
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
      id: "apprendre", ue: "E3", theme: "e3-methodes",
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
      id: "stage", ue: "E3", theme: "e3-projet",
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
    },

    // ───────────── UE A.1 (nouvelles) ─────────────
    {
      id: "histoire", ue: "A1", theme: "a1-histoire",
      titre: "Histoire et identité de la profession infirmière",
      resume: "Des soins charitables à une profession de santé reconnue, avec ses propres sciences.",
      simple: "Pendant des siècles, soigner était surtout une affaire de religieuses et de charité. Au XIXe siècle, Florence Nightingale montre qu’une infirmière formée, qui observe et note, sauve des vies. Peu à peu, la profession obtient un diplôme, un rôle propre défini par la loi, une formation universitaire, puis des compétences élargies (consultation, prescription).",
      points: [
        "Florence Nightingale (1820–1910) : soins aux soldats pendant la guerre de Crimée, importance de l’hygiène et de l’observation — considérée comme la fondatrice des soins infirmiers modernes",
        "France, 1922 : premier brevet de capacité professionnelle d’infirmière ; 1938 : diplôme d’État",
        "1978 : la loi reconnaît un rôle propre à l’infirmier (soins décidés de sa propre initiative)",
        "2006 : création de l’Ordre national des infirmiers ; 2016 : code de déontologie des infirmiers",
        "2009 : formation intégrée au système universitaire (grade licence)",
        "2025 : loi sur la profession d’infirmier (consultation et diagnostic infirmiers, prescription) ; 2026 : nouveau référentiel de formation",
        "Identité professionnelle : valeurs (respect, dignité, bientraitance), autonomie, travail en équipe"
      ],
      exemple: "En stage, quand tu décides seule de proposer à boire régulièrement à un patient déshydraté et de tenir une feuille de surveillance, tu exerces ton rôle propre.",
      piege: "Ne confonds pas rôle propre (initiative de l’infirmier) et soins sur prescription (décidés par un prescripteur). Les deux engagent ta responsabilité.",
      memo: "1922 brevet → 1938 DE → 1978 rôle propre → 2009 licence → 2025 nouvelle loi.",
      mots: [ { mot: "Ordre national des infirmiers", def: "Instance qui veille au respect de la déontologie et représente la profession." } ]
    },
    {
      id: "jugement", ue: "A1", theme: "a1-raisonnement",
      titre: "Raisonnement clinique, pensée critique et biais",
      resume: "Comment on réfléchit pour décider en soins… et les pièges de notre cerveau.",
      simple: "Raisonner en clinique, c’est formuler des hypothèses à partir de ce qu’on observe, puis chercher des éléments pour les confirmer ou les éliminer. Notre cerveau va vite, ce qui est utile, mais il se laisse aussi piéger : il retient la première idée, ou ne voit que ce qui confirme ce qu’il pense déjà. La pensée critique sert à prendre du recul.",
      points: [
        "Induction : partir des observations pour aboutir à une hypothèse (« il est pâle, en sueur, pouls rapide → hypoglycémie ? hémorragie ? »)",
        "Déduction : partir d’une connaissance pour prévoir ce qu’on devrait observer et le vérifier",
        "Générer plusieurs hypothèses avant d’en retenir une ; les hiérarchiser selon la gravité",
        "Pensée critique : questionner ses sources, ses certitudes, chercher les données manquantes",
        "Biais d’ancrage : rester accroché à la première impression",
        "Biais de confirmation : ne retenir que ce qui confirme son idée",
        "Biais de disponibilité : penser d’abord à ce qu’on a vu récemment",
        "Pratique fondée sur les données probantes : preuves scientifiques + expertise du soignant + préférences du patient"
      ],
      exemple: "On te dit en relève que M. B. « est toujours confus ». Ce soir il est plus agité et a de la fièvre : au lieu de mettre ça sur le compte de sa confusion habituelle (ancrage), tu évoques une infection et tu alertes.",
      piege: "« Il est comme d’habitude » est une phrase dangereuse : toujours comparer avec des données objectives (paramètres, comportement observé).",
      memo: "Hypothèses → Hiérarchiser → Vérifier → Décider → Réévaluer.",
      mots: [ { mot: "Jugement clinique", def: "Conclusion argumentée sur l’état de santé et les besoins de la personne." } ]
    },
    {
      id: "diagnostic-inf", ue: "A1", theme: "a1-diagnostic",
      titre: "Le diagnostic infirmier",
      resume: "Nommer précisément le problème de santé que l’infirmier peut prendre en charge.",
      simple: "Le médecin pose un diagnostic sur la maladie. L’infirmier, lui, pose un diagnostic sur la façon dont la personne réagit à sa maladie ou à sa situation : sa douleur, son anxiété, son risque de chute… C’est ce qui permet de choisir les bonnes interventions infirmières. La classification internationale la plus utilisée est celle de NANDA-I.",
      points: [
        "Diagnostic infirmier : jugement clinique sur la réaction d’une personne à un problème de santé ou à une étape de vie",
        "Formulation PES : Problème + Étiologie (« lié à ») + Signes (« se manifestant par »)",
        "Diagnostic réel : déjà présent, avec des signes",
        "Diagnostic de risque : facteurs de risque présents, pas encore de signes (formulé « risque de… lié à… »)",
        "Diagnostic de promotion de la santé : la personne souhaite améliorer sa santé",
        "Problème traité en collaboration : complication médicale que l’infirmier surveille avec le médecin (ex. risque d’hémorragie après une opération)"
      ],
      exemple: "« Anxiété liée à l’intervention chirurgicale de demain, se manifestant par des pleurs, une insomnie et des questions répétées. »",
      piege: "Un diagnostic médical (« pneumopathie ») ne s’écrit pas dans le « lié à » d’un diagnostic infirmier : on vise ce sur quoi l’infirmier peut agir (ex. « liée à l’encombrement bronchique »).",
      memo: "PES = Problème, Étiologie, Signes.",
      mots: [ { mot: "Étiologie", def: "Cause ou facteur favorisant." } ]
    },
    {
      id: "autonomie", ue: "A1", theme: "a1-recueil",
      titre: "Évaluer l’autonomie, les fragilités et les risques",
      resume: "Les grilles d’évaluation les plus courantes en stage.",
      simple: "Pour adapter les soins, il faut mesurer ce que la personne peut faire seule et repérer ses fragilités. On utilise des grilles validées, pour que tout le monde évalue de la même façon et pour suivre l’évolution. Une grille ne remplace pas l’observation, mais elle la structure.",
      points: [
        "Autonomie : capacité à décider pour soi ; indépendance : capacité à faire seul",
        "Grille AGGIR : classe la perte d’autonomie en 6 groupes (GIR 1 = très dépendant, GIR 6 = autonome)",
        "Échelles d’activités de la vie quotidienne (ADL, IADL) : toilette, habillage, repas, téléphone, courses…",
        "Risque d’escarre : échelle de Braden (plus le score est bas, plus le risque est élevé ; à risque si ≤ 18) ou de Norton",
        "Risque de chute : antécédents de chute, troubles de l’équilibre, médicaments, environnement",
        "Fragilité : état de vulnérabilité (souvent chez la personne âgée) qui expose à la perte d’autonomie au moindre problème",
        "Repérage des violences : signes physiques inexpliqués, peur, isolement, discours incohérent avec les lésions"
      ],
      exemple: "À l’entrée de Mme D., 86 ans, tu remplis l’échelle de Braden (score 14 : risque) : tu mets en place des changements de position et un matelas adapté.",
      piege: "Braden à l’envers : un score bas = risque élevé (contrairement à l’intuition).",
      memo: "GIR 1 = « 1 aide pour tout », GIR 6 = « 6 sur 6, autonome ».",
      mots: [ { mot: "APA", def: "Allocation personnalisée d’autonomie, attribuée pour les GIR 1 à 4." } ]
    },

    // ───────────── UE A.2 ─────────────
    {
      id: "droit-bases", ue: "A2", theme: "a2-droit",
      titre: "Droit, morale, éthique, déontologie : les bases",
      resume: "Quatre notions à ne pas confondre et la hiérarchie des textes.",
      simple: "Le droit, ce sont les règles imposées à tous, avec des sanctions. La morale, c’est ce qu’une société ou une personne considère comme bien ou mal. L’éthique, c’est la réflexion pour choisir la meilleure action dans une situation précise. La déontologie, ce sont les devoirs propres à une profession. Les textes de loi sont rangés du plus important au moins important : c’est la hiérarchie des normes.",
      points: [
        "Droit : règles obligatoires, sanctionnées par l’État",
        "Morale : valeurs du bien et du mal (personnelles ou collectives)",
        "Éthique : réflexion sur « comment bien agir » face à une situation, souvent quand plusieurs valeurs s’opposent",
        "Déontologie : devoirs d’une profession (code de déontologie des infirmiers, intégré au code de la santé publique)",
        "Hiérarchie des normes : Constitution > traités internationaux > lois > décrets > arrêtés",
        "Droit public : relations avec l’État et les administrations (ex. hôpital public) ; droit privé : relations entre personnes (ex. clinique privée)",
        "Juridictions : judiciaires (civiles et pénales) et administratives"
      ],
      exemple: "Ton référentiel de formation est un arrêté : il applique un décret et une loi, qui doivent eux-mêmes respecter la Constitution.",
      piege: "Ce qui est légal n’est pas toujours éthique, et inversement : l’éthique commence là où la règle ne suffit plus à décider.",
      memo: "Constitution, Traités, Lois, Décrets, Arrêtés : « C’est Trop Long De tout Apprendre ».",
      mots: []
    },
    {
      id: "responsabilites", ue: "A2", theme: "a2-responsabilite",
      titre: "Les responsabilités de l’infirmier",
      resume: "Civile, pénale, disciplinaire : qui juge, pourquoi et quelles sanctions.",
      simple: "Quand un soin se passe mal, trois types de responsabilité peuvent être engagés, et ils peuvent se cumuler. La responsabilité civile (ou administrative à l’hôpital public) sert à réparer le dommage de la victime, en général par de l’argent. La responsabilité pénale punit une infraction. La responsabilité disciplinaire sanctionne un manquement aux règles de la profession.",
      points: [
        "Responsabilité civile / administrative : réparer un dommage (indemnisation) ; à l’hôpital public, c’est en général l’établissement qui indemnise si la faute n’est pas détachable du service",
        "Responsabilité pénale : sanctionner une infraction (amende, prison) ; elle est toujours personnelle — personne ne peut être condamné à ta place",
        "Responsabilité disciplinaire : manquement à la déontologie, jugé par l’Ordre des infirmiers (avertissement, blâme, interdiction d’exercer…) ; l’employeur peut aussi prendre des sanctions",
        "Exemples d’infractions : violation du secret professionnel, non-assistance à personne en danger, homicide ou blessures involontaires, exercice illégal",
        "L’étudiant agit sous la responsabilité de l’infirmier qui l’encadre, mais reste responsable de ses propres fautes"
      ],
      exemple: "Une erreur de dose cause un dommage : le patient peut être indemnisé (civil/administratif), une enquête pénale peut être ouverte, et l’Ordre peut être saisi — trois procédures distinctes.",
      piege: "L’assurance couvre la réparation civile, jamais la sanction pénale.",
      memo: "Civile = Compenser · Pénale = Punir · Disciplinaire = Déontologie.",
      mots: []
    },
    {
      id: "droits-patients", ue: "A2", theme: "a2-droits",
      titre: "Les droits des patients",
      resume: "Information, consentement, secret, personne de confiance : la loi du 4 mars 2002 et ses suites.",
      simple: "Le patient n’est pas un objet de soins : c’est une personne qui décide pour elle-même. La loi du 4 mars 2002 (dite loi Kouchner) a posé ses grands droits : être informé, consentir ou refuser un soin, accéder à son dossier, que sa vie privée soit respectée. Le soignant doit tout faire pour que le patient puisse décider en connaissance de cause.",
      points: [
        "Droit à l’information : claire, loyale, adaptée, sur son état et les soins proposés",
        "Consentement libre et éclairé, qui peut être retiré à tout moment ; le refus de soins doit être respecté après information sur les conséquences (et tracé)",
        "Accès direct à son dossier médical",
        "Respect de la vie privée, de l’intimité et du secret professionnel",
        "Personne de confiance : désignée par écrit par le patient, elle l’accompagne et est consultée s’il ne peut plus s’exprimer",
        "Personne à prévenir ≠ personne de confiance",
        "Personnes vulnérables : mineurs, majeurs protégés (tutelle, curatelle) — on recherche toujours leur avis",
        "Plaintes et réclamations : commission des usagers dans chaque établissement"
      ],
      exemple: "Un patient refuse sa prise de sang : tu ne la fais pas, tu cherches à comprendre (peur ? douleur ?), tu réexpliques, tu préviens le médecin et tu notes le refus dans le dossier.",
      piege: "La personne de confiance n’a pas accès au dossier médical de son simple fait et ne décide pas à la place du patient : elle témoigne de sa volonté.",
      memo: "Les 3 piliers : Informer → Consentir → Respecter (secret, intimité).",
      mots: [ { mot: "Consentement éclairé", def: "Accord donné après une information compréhensible." } ]
    },
    {
      id: "ethique", ue: "A2", theme: "a2-ethique",
      titre: "Les principes de l’éthique en soins",
      resume: "Autonomie, bienfaisance, non-malfaisance, justice : une grille pour réfléchir aux situations difficiles.",
      simple: "Quand on ne sait pas quoi faire parce que deux choses importantes s’opposent (respecter le choix du patient ou le protéger, par exemple), on parle de dilemme éthique. Pour réfléchir, on s’appuie souvent sur 4 grands principes. Il n’y a pas toujours de bonne réponse : l’important est de réfléchir à plusieurs et d’argumenter.",
      points: [
        "Autonomie : respecter les choix de la personne",
        "Bienfaisance : agir pour le bien de la personne",
        "Non-malfaisance : ne pas nuire (« d’abord ne pas nuire »)",
        "Justice : équité dans l’accès aux soins et la répartition des moyens",
        "Éthique du care : attention à la vulnérabilité, à la relation, au « prendre soin »",
        "Éthique de la discussion : chercher ensemble une décision par l’échange argumenté",
        "Démarche : décrire la situation → repérer les valeurs en conflit → envisager les options → décider collectivement → évaluer"
      ],
      exemple: "Une patiente âgée refuse de manger. Respecter son autonomie ou la stimuler pour son bien ? On en discute en équipe, avec elle et ses proches.",
      piege: "Éthique ≠ avis personnel : on argumente avec des principes et des faits, on ne juge pas le patient.",
      memo: "Les 4 principes : « ABNJ » — Autonomie, Bienfaisance, Non-malfaisance, Justice.",
      mots: [ { mot: "Dilemme éthique", def: "Situation où deux valeurs importantes s’opposent." } ]
    },
    {
      id: "fin-de-vie", ue: "A2", theme: "a2-findevie",
      titre: "Fin de vie : ce que dit la loi",
      resume: "Directives anticipées, obstination déraisonnable, soins palliatifs, sédation.",
      simple: "La loi protège la personne en fin de vie contre deux excès : l’abandon et l’acharnement. Elle donne le droit de refuser des traitements, de rédiger à l’avance ses volontés et de bénéficier de soins palliatifs pour soulager la souffrance. Ces règles viennent surtout des lois Leonetti (2005) et Claeys-Leonetti (2016).",
      points: [
        "Soins palliatifs : soins actifs qui soulagent la douleur et les symptômes, accompagnent la personne et ses proches",
        "Obstination déraisonnable (acharnement) interdite : on peut arrêter ou ne pas commencer des traitements inutiles ou disproportionnés, par une décision collégiale",
        "Directives anticipées : volontés écrites de la personne sur sa fin de vie ; elles s’imposent au médecin (sauf exceptions prévues par la loi)",
        "Personne de confiance : consultée en priorité si le patient ne peut plus s’exprimer",
        "Sédation profonde et continue jusqu’au décès : possible dans certaines situations prévues par la loi de 2016",
        "Le débat sur l’« aide à mourir » est en cours au Parlement : vérifie avec ton cours où en est la loi"
      ],
      exemple: "En stage en soins palliatifs, ton rôle : évaluer et soulager la douleur, les soins de bouche, l’installation, la présence et l’écoute du patient et de sa famille.",
      piege: "Soins palliatifs ≠ arrêt des soins : on arrête les traitements inutiles, jamais le soin ni le confort.",
      memo: "Leonetti 2005 = pas d’acharnement · Claeys-Leonetti 2016 = directives contraignantes + sédation.",
      mots: [ { mot: "Décision collégiale", def: "Décision prise après concertation de l’équipe et d’un médecin extérieur." } ]
    },
    {
      id: "bientraitance", ue: "A2", theme: "a2-droits",
      titre: "Bientraitance et maltraitance ordinaire",
      resume: "Reconnaître les petites maltraitances du quotidien et adopter une posture bientraitante.",
      simple: "La maltraitance, ce ne sont pas seulement les coups. La « maltraitance ordinaire », ce sont tous les petits gestes du quotidien qui manquent de respect : entrer sans frapper, tutoyer sans demander, parler du patient devant lui comme s’il n’était pas là, le laisser attendre la sonnette. La bientraitance, c’est une démarche active pour respecter la personne, ses choix et son rythme.",
      points: [
        "Formes de maltraitance : physique, psychologique, financière, sexuelle, négligences, médicale (ex. douleur non soulagée)",
        "Maltraitance ordinaire : souvent involontaire, liée à l’habitude, la fatigue ou l’organisation",
        "Bientraitance : frapper avant d’entrer, se présenter, demander l’avis, respecter la pudeur et le rythme, laisser la sonnette à portée de main",
        "Signalement : tout soignant doit signaler une maltraitance (cadre, médecin, direction ; numéro national 3977 pour les personnes âgées et adultes en situation de handicap ; 119 pour l’enfance en danger)",
        "Prévention : formation, réflexion en équipe, analyse des pratiques"
      ],
      exemple: "Faire la toilette porte ouverte « parce que ça va plus vite » : c’est de la maltraitance ordinaire. On ferme la porte et on protège la pudeur.",
      piege: "Ne pas dire « mamie » ou « mon petit » : on appelle la personne par son nom (Madame X), sauf si elle demande autre chose.",
      memo: "3977 adultes vulnérables · 119 enfants.",
      mots: []
    },

    // ───────────── UE B.1 (nouvelles) ─────────────
    {
      id: "locomoteur", ue: "B1", theme: "b1-locomoteur",
      titre: "Le système locomoteur",
      resume: "Os, articulations et muscles : bouger, protéger, se tenir debout.",
      simple: "Le squelette est la charpente du corps ; les muscles, attachés aux os par les tendons, le font bouger au niveau des articulations. Les os sont vivants : ils se renouvellent en permanence, stockent le calcium et fabriquent les cellules du sang dans leur moelle.",
      points: [
        "Squelette adulte : environ 206 os",
        "Rôles de l’os : soutien, protection (crâne, côtes), mouvement, réserve de calcium, fabrication des cellules sanguines (moelle rouge)",
        "Articulations : fixes (crâne), semi-mobiles (vertèbres), mobiles (genou, épaule)",
        "Muscles squelettiques reliés aux os par des tendons ; les ligaments relient les os entre eux",
        "Pathologies fréquentes : fractures (dont col du fémur chez la personne âgée), entorses, arthrose, ostéoporose, lombalgies",
        "Surveillance d’un membre plâtré : douleur, couleur, chaleur, mobilité et sensibilité des extrémités (risque de compression)"
      ],
      exemple: "Une patiente avec un plâtre se plaint de fourmillements et de doigts froids et bleutés : signes de compression, tu alertes immédiatement.",
      piege: "Tendon (muscle → os) ≠ ligament (os → os).",
      memo: "Tendon = Tire l’os ; Ligament = Lie les os.",
      mots: [ { mot: "Ostéoporose", def: "Fragilisation des os qui augmente le risque de fracture." } ]
    },
    {
      id: "peau", ue: "B1", theme: "b1-peau",
      titre: "La peau, la cicatrisation et les escarres",
      resume: "Le plus grand organe du corps, sa réparation et comment prévenir les escarres.",
      simple: "La peau est une barrière qui protège contre les microbes, la déshydratation et les chocs. Elle a 3 couches : l’épiderme en surface, le derme en dessous (vaisseaux, nerfs) et l’hypoderme (graisse). Quand elle est abîmée, elle se répare par étapes. Une escarre, c’est une plaie due à une pression prolongée qui écrase les tissus et coupe la circulation.",
      points: [
        "3 couches : épiderme, derme, hypoderme",
        "Rôles : protection, thermorégulation (sueur), sensibilité, synthèse de vitamine D",
        "Cicatrisation : phase inflammatoire et de nettoyage (détersion) → bourgeonnement (tissu rouge) → épidermisation (fermeture), puis maturation",
        "Escarre : due à la pression + le cisaillement + le temps ; zones à risque : sacrum, talons, ischions, hanches",
        "Stade 1 : rougeur qui ne disparaît pas quand on appuie ; stades suivants : jusqu’à la perte de tissu profonde (stade 4)",
        "Prévention : changer de position régulièrement, supports adaptés, peau propre et sèche, alimentation et hydratation, surveillance quotidienne"
      ],
      exemple: "En aidant à la toilette, tu observes une rougeur au talon qui ne blanchit pas sous le doigt : c’est un début d’escarre, tu mets le talon en décharge et tu le signales.",
      piege: "Masser une rougeur pour « activer la circulation » est déconseillé : ça abîme davantage les tissus.",
      memo: "Escarre = Pression × Temps.",
      mots: [ { mot: "Effleurement / cisaillement", def: "Glissement de la peau sur les tissus profonds, quand le patient glisse dans le lit." } ]
    },
    {
      id: "douleur-physio", ue: "B1", theme: "b1-douleur",
      titre: "La douleur : comprendre ses mécanismes",
      resume: "Douleur aiguë ou chronique, nociceptive ou neuropathique : savoir les distinguer.",
      simple: "La douleur est un signal d’alarme : des capteurs repèrent une agression (les nocicepteurs) et envoient un message jusqu’au cerveau, qui le ressent comme une douleur. Mais la douleur n’est pas qu’un message nerveux : les émotions, l’histoire et l’environnement de la personne la modifient. C’est toujours le patient qui sait combien il a mal.",
      points: [
        "Douleur aiguë : signal d’alarme, récente, liée à une cause (opération, fracture)",
        "Douleur chronique : dure plus de 3 mois ; elle devient une maladie en soi, avec un retentissement sur la vie",
        "Douleur nociceptive : due à une lésion des tissus (plaie, inflammation)",
        "Douleur neuropathique : due à une lésion du système nerveux ; décrite en brûlures, décharges électriques, fourmillements",
        "4 composantes : sensorielle (où, combien), émotionnelle (anxiété), cognitive (ce qu’on en pense), comportementale (ce qu’on montre)",
        "Facteurs qui influencent : peur, fatigue, culture, expériences passées, isolement"
      ],
      exemple: "Un patient diabétique décrit des brûlures et des picotements dans les pieds : douleur de type neuropathique, souvent peu soulagée par les antalgiques classiques.",
      piege: "Un patient qui sourit ou dort peut avoir mal : on évalue avec une échelle, on ne devine pas.",
      memo: "Neuropathique = « Nerfs qui grillent » (brûlures, décharges).",
      mots: [ { mot: "Nociception", def: "Détection d’une agression par le système nerveux." } ]
    },
    {
      id: "diabete", ue: "B1", theme: "b1-endocrinien",
      titre: "Le diabète",
      resume: "Type 1, type 2, hypo et hyperglycémie : les bases indispensables dès la 1re année.",
      simple: "Le diabète, c’est trop de sucre dans le sang de façon durable. Dans le type 1, le pancréas ne fabrique plus d’insuline : il faut en injecter. Dans le type 2, le plus fréquent, l’insuline existe mais marche mal (on parle d’insulinorésistance) ; il est lié à l’âge, au surpoids, à la sédentarité et à l’hérédité. Le risque, ce sont les complications sur les vaisseaux, les nerfs, les yeux, les reins et les pieds.",
      points: [
        "Diagnostic : glycémie à jeun ≥ 1,26 g/L à deux reprises",
        "Type 1 : maladie auto-immune, souvent jeune, traitement par insuline",
        "Type 2 : environ 9 diabétiques sur 10 ; mesures hygiéno-diététiques, antidiabétiques oraux, parfois insuline",
        "Hypoglycémie (< 0,70 g/L) : sueurs, tremblements, faim, pâleur, confusion, voire coma → resucrage selon le protocole",
        "Hyperglycémie : soif, urines abondantes, fatigue, amaigrissement",
        "Suivi : HbA1c (reflet de la glycémie des 3 derniers mois), surveillance des pieds, des yeux, des reins",
        "Pied diabétique : examen quotidien, chaussures adaptées, pas de bouillotte (sensibilité diminuée)"
      ],
      exemple: "Avant le repas, glycémie capillaire à 0,55 g/L avec sueurs : tu appliques le protocole de resucrage, tu recontrôles 15 minutes après et tu transmets.",
      piege: "Un patient diabétique confus ou agité : pense d’abord à l’hypoglycémie et fais une glycémie capillaire.",
      memo: "Hypo = « Hum, je tremble et j’ai faim » · Hyper = « Je bois, je fais pipi ».",
      mots: [ { mot: "HbA1c", def: "Hémoglobine glyquée : moyenne de la glycémie sur environ 3 mois." } ]
    },
    {
      id: "vieillissement", ue: "B1", theme: "b1-age",
      titre: "Le vieillissement et les syndromes gériatriques",
      resume: "Vieillir n’est pas être malade, mais les réserves diminuent : repérer les signaux d’alerte.",
      simple: "Avec l’âge, les organes fonctionnent moins vite et les réserves diminuent. Une personne âgée peut aller bien, mais un petit problème (une infection, un nouveau médicament, une déshydratation) peut la faire basculer. Les « syndromes gériatriques » sont des problèmes fréquents chez la personne âgée, qui ont souvent plusieurs causes.",
      points: [
        "Modèle « 1 + 2 + 3 » : vieillissement normal (1) + maladies chroniques (2) + facteur déclenchant (3) → décompensation",
        "Syndromes gériatriques : chutes, confusion, dénutrition, déshydratation, escarres, incontinence, perte d’autonomie",
        "Confusion : apparition brutale, attention et vigilance fluctuantes — c’est une urgence à signaler (cause à rechercher)",
        "Dénutrition : perte de poids, appétit diminué ; pesée régulière",
        "Déshydratation : sensation de soif diminuée → proposer à boire régulièrement",
        "Dépendance iatrogène : perte d’autonomie causée par les soins (alitement inutile, couches « par précaution », faire à la place)",
        "Troubles neurocognitifs (ex. maladie d’Alzheimer) : évolution lente, contrairement à la confusion"
      ],
      exemple: "Mme R., 88 ans, habituellement orientée, devient soudainement confuse : on cherche une cause (infection urinaire, déshydratation, médicament, rétention urinaire…).",
      piege: "Mettre une protection à une personne âgée continente « pour gagner du temps » crée une incontinence : c’est de la dépendance iatrogène.",
      memo: "Confusion = brutale et fluctuante ; démence = lente et progressive.",
      mots: [ { mot: "Iatrogène", def: "Provoqué par les soins ou les traitements." } ]
    },

    // ───────────── UE B.2 ─────────────
    {
      id: "developpement-psy", ue: "B2", theme: "b2-psycho",
      titre: "Le développement de l’enfant (Piaget)",
      resume: "Les grandes étapes du développement de l’intelligence, utiles pour adapter les soins à l’âge.",
      simple: "Un enfant ne pense pas comme un adulte en miniature. Le psychologue Jean Piaget a décrit 4 grands stades dans le développement de la pensée. Les connaître aide à expliquer un soin à un enfant avec des mots et des moyens adaptés à son âge.",
      points: [
        "Stade sensori-moteur (0–2 ans) : découverte par les sens et le mouvement",
        "Stade préopératoire (2–7 ans) : langage, imagination, pensée centrée sur soi",
        "Stade des opérations concrètes (7–11 ans) : raisonnement logique sur du concret",
        "Stade des opérations formelles (à partir de 11–12 ans) : raisonnement abstrait",
        "Adolescence : construction de l’identité, besoin d’autonomie, importance des pairs"
      ],
      exemple: "Pour un enfant de 5 ans, on explique une prise de sang avec une poupée ou un dessin ; pour un adolescent, on lui parle directement et on respecte sa pudeur.",
      piege: "Les âges sont des repères, pas des règles : chaque enfant avance à son rythme.",
      memo: "« Sens → Symboles → Concret → Formel ».",
      mots: []
    },
    {
      id: "stress-coping", ue: "B2", theme: "b2-psycho",
      titre: "Le stress et le coping",
      resume: "Comment une personne fait face à la maladie : les stratégies d’adaptation.",
      simple: "Face à une situation difficile (une maladie, une hospitalisation), chacun évalue la menace et ses ressources, puis met en place des stratégies pour faire face : c’est le coping. Certains cherchent des informations et agissent, d’autres gèrent d’abord leurs émotions. Comprendre la stratégie du patient aide à l’accompagner.",
      points: [
        "Stress : réaction de l’organisme face à une situation perçue comme menaçante",
        "Modèle de Lazarus et Folkman : évaluation de la menace + évaluation de ses ressources → stratégie",
        "Coping centré sur le problème : chercher des informations, agir, planifier",
        "Coping centré sur l’émotion : se distraire, relativiser, exprimer, parfois éviter",
        "Recherche de soutien social : famille, amis, soignants, associations",
        "Stress prolongé : fatigue, troubles du sommeil, irritabilité, baisse de l’immunité"
      ],
      exemple: "Un patient qui pose beaucoup de questions sur son traitement utilise un coping centré sur le problème : tu lui donnes des informations claires.",
      piege: "Ne juge pas une stratégie d’évitement (« il ne veut pas en parler ») : c’est parfois une protection temporaire.",
      memo: "Coping = « faire face » (to cope).",
      mots: []
    },
    {
      id: "deuil", ue: "B2", theme: "b2-psycho",
      titre: "Le deuil et l’accompagnement",
      resume: "Les étapes décrites par Elisabeth Kübler-Ross et la posture du soignant.",
      simple: "Le deuil n’est pas seulement la perte d’un proche : on peut faire le deuil de sa santé, d’une partie de son corps, de son autonomie. Elisabeth Kübler-Ross a décrit des étapes que traversent souvent les personnes face à une perte ou une maladie grave. Elles ne se suivent pas forcément dans l’ordre et on peut revenir en arrière.",
      points: [
        "Déni : « Ce n’est pas possible »",
        "Colère : « Pourquoi moi ? » (parfois dirigée contre les soignants)",
        "Marchandage : « Si je fais tout bien, peut-être que… »",
        "Dépression : tristesse, repli",
        "Acceptation : apaisement, réorganisation",
        "Posture du soignant : écouter, accepter les émotions, ne pas forcer, être présent, orienter si deuil compliqué"
      ],
      exemple: "Un patient qui vient d’apprendre un diagnostic grave s’énerve contre toi : c’est sans doute la phase de colère. Tu restes calme, tu l’écoutes, tu ne le prends pas personnellement.",
      piege: "Ces étapes ne sont pas un parcours obligatoire : ne dis jamais à quelqu’un « vous êtes en phase de déni ».",
      memo: "« DCMDA » : Déni, Colère, Marchandage, Dépression, Acceptation.",
      mots: []
    },
    {
      id: "inegalites", ue: "B2", theme: "b2-socio",
      titre: "Les déterminants de santé et les inégalités sociales",
      resume: "Pourquoi tout le monde n’a pas les mêmes chances d’être en bonne santé.",
      simple: "Notre santé ne dépend pas seulement de notre corps et du système de soins. Elle dépend aussi de nos conditions de vie : revenus, logement, travail, éducation, entourage, environnement. Plus on descend dans l’échelle sociale, plus l’espérance de vie en bonne santé diminue : c’est le gradient social de santé.",
      points: [
        "Déterminants individuels : âge, sexe, hérédité, comportements (alimentation, tabac, activité physique)",
        "Déterminants sociaux et économiques : revenus, éducation, emploi, logement, réseau social",
        "Déterminants environnementaux et politiques : qualité de l’air, accès aux services, système de santé",
        "Modèle de Dahlgren et Whitehead : les déterminants en couches, de l’individu à la société",
        "Inégalités sociales de santé : écarts de santé évitables entre groupes sociaux",
        "Renoncement aux soins : coût, distance, délais, complexité administrative",
        "Littératie en santé : capacité à trouver, comprendre et utiliser une information de santé"
      ],
      exemple: "Un patient sans domicile ne pourra pas garder son pansement propre ni conserver son insuline au frais : le projet de soins doit tenir compte de sa situation.",
      piege: "Les comportements « à risque » ne sont pas qu’une question de volonté : ils dépendent beaucoup des conditions de vie.",
      memo: "La santé se joue d’abord hors de l’hôpital.",
      mots: [ { mot: "PASS", def: "Permanence d’accès aux soins de santé, pour les personnes en précarité." } ]
    },
    {
      id: "culture", ue: "B2", theme: "b2-anthropo",
      titre: "Culture, croyances et soins",
      resume: "Adapter ses soins à la diversité culturelle sans préjugés.",
      simple: "Chaque personne a sa façon de voir la maladie, la douleur, le corps, la mort, selon sa culture, sa religion et son histoire. L’anthropologie de la santé nous apprend que ces représentations influencent les comportements face aux soins. L’approche interculturelle, c’est s’intéresser à ce que la personne pense et croit, plutôt que de supposer.",
      points: [
        "Représentations de la maladie : causes perçues, sens donné, façon de l’exprimer",
        "Rapport au corps et à la pudeur : préférence pour un soignant du même sexe, par exemple",
        "Religions et pratiques : jeûne, alimentation, rites autour de la naissance et de la mort",
        "Expression de la douleur : très variable selon les cultures et les personnes",
        "Approche interculturelle : questionner sans juger, négocier les soins, recourir à un interprète professionnel si besoin",
        "Laïcité à l’hôpital : neutralité des soignants, liberté de croyance des patients dans le respect de l’organisation des soins"
      ],
      exemple: "Un patient jeûne pour une raison religieuse et doit prendre un traitement : tu en parles avec lui et le médecin pour adapter les horaires si c’est possible.",
      piege: "Éviter les généralisations (« dans sa culture, ils… ») : on demande à la personne ce qui compte pour elle.",
      memo: "Demander plutôt que supposer.",
      mots: [ { mot: "Ethnocentrisme", def: "Juger les autres cultures à partir de la sienne." } ]
    },

    // ───────────── UE B.3 (nouvelles) ─────────────
    {
      id: "afgsu", ue: "B3", theme: "b3-afgsu",
      titre: "Gestes d’urgence : alerter, protéger, réanimer",
      resume: "Les bases de l’AFGSU : la chaîne de survie et l’arrêt cardiaque chez l’adulte.",
      simple: "Face à une urgence, les premières minutes comptent. L’AFGSU t’apprend à protéger, alerter et faire les premiers gestes en attendant les secours ou l’équipe médicale. Le geste le plus important à connaître : reconnaître un arrêt cardiaque et commencer le massage cardiaque tout de suite.",
      points: [
        "Protéger : écarter le danger pour soi, la victime et les autres",
        "Alerter : 15 (SAMU), 18 (pompiers), 112 (numéro d’urgence européen), 114 (par SMS pour les personnes sourdes ou malentendantes) ; à l’hôpital : numéro d’urgence interne",
        "Victime inconsciente qui respire : position latérale de sécurité (PLS) et surveillance",
        "Victime inconsciente qui ne respire pas (ou respiration anormale, « gasps ») : arrêt cardiaque → alerte + massage cardiaque + défibrillateur (DAE) dès qu’il est disponible",
        "Adulte : 30 compressions / 2 insufflations, fréquence 100 à 120 par minute, enfoncement de 5 à 6 cm, au centre de la poitrine",
        "Hémorragie : compression directe de la plaie",
        "Obstruction des voies aériennes : claques dans le dos puis compressions abdominales (Heimlich)"
      ],
      exemple: "Dans un couloir, une personne s’effondre et ne répond pas : tu vérifies la respiration (10 secondes), tu cries à l’aide, tu fais appeler l’urgence et chercher le DAE, et tu commences le massage.",
      piege: "Ne pas perdre de temps à chercher le pouls si tu n’es pas sûre : absence de réponse + respiration anormale = on masse.",
      memo: "« Alerter, Masser, Défibriller ».",
      mots: [ { mot: "DAE", def: "Défibrillateur automatisé externe : il analyse le rythme et guide à la voix." } ]
    },
    {
      id: "detresse", ue: "B3", theme: "b3-santementale",
      titre: "Repérer la détresse psychologique",
      resume: "Les signes d’alerte, comment en parler et vers qui orienter.",
      simple: "La santé mentale fait partie de la santé. Une personne en souffrance psychique ne le dit pas toujours. Le soignant doit savoir repérer les signes, oser en parler sans juger et orienter vers les bonnes ressources. Parler du suicide avec quelqu’un ne lui « donne pas l’idée » : au contraire, ça peut le soulager.",
      points: [
        "Signes d’alerte : tristesse persistante, repli, troubles du sommeil et de l’appétit, irritabilité, perte d’intérêt, consommation d’alcool ou de drogues en hausse",
        "Signes d’alerte suicidaire : idées de mort exprimées, mise en ordre de ses affaires, dons d’objets, calme soudain après une période de crise",
        "Oser poser la question directement : « Est-ce que vous pensez au suicide ? »",
        "Écouter sans juger, ne pas minimiser, ne pas laisser seule une personne en danger immédiat",
        "Orienter : médecin, équipe de psychiatrie, urgences ; 3114 = numéro national de prévention du suicide (24 h/24, gratuit)",
        "Prendre soin de sa propre santé mentale : stress des études et des stages, en parler, demander de l’aide"
      ],
      exemple: "Un patient te dit « de toute façon, bientôt je ne serai plus un problème » : tu lui demandes ce qu’il veut dire, tu restes avec lui et tu alertes l’équipe.",
      piege: "Ne jamais promettre de garder le secret sur des idées suicidaires : la sécurité du patient passe avant, et l’information est partagée avec l’équipe.",
      memo: "Repérer · Demander · Écouter · Orienter (3114).",
      mots: []
    },
    {
      id: "douleur-eval", ue: "B3", theme: "b3-douleur",
      titre: "Évaluer et soulager la douleur",
      resume: "Les échelles d’évaluation et les moyens de soulager, avec ou sans médicaments.",
      simple: "Soulager la douleur est un droit du patient et un devoir du soignant. On l’évalue avec une échelle adaptée à la personne, on la soulage, puis on réévalue pour vérifier que ça marche. Quand le patient ne peut pas s’exprimer, on observe son comportement avec des grilles spécifiques.",
      points: [
        "Auto-évaluation (le patient s’évalue) : échelle numérique 0–10, EVA (réglette), échelle verbale simple (pas de douleur → douleur extrême)",
        "Hétéro-évaluation (le soignant observe) : Algoplus (douleur aiguë de la personne âgée qui ne communique pas), Doloplus (douleur chronique), EDIN / FLACC chez le nouveau-né et l’enfant",
        "Évaluer : intensité, localisation, type, durée, facteurs qui aggravent ou soulagent, retentissement",
        "Réévaluer après un antalgique (environ 30 à 60 minutes selon la voie) et tracer",
        "Prévenir les douleurs induites par les soins : anticiper un antalgique avant un pansement douloureux, gestes doux, installation",
        "Moyens non médicamenteux : installation, froid ou chaud selon prescription, distraction, relaxation, présence"
      ],
      exemple: "Patient opéré : EN à 6/10. Antalgique prescrit donné à 10 h, réévaluation à 10 h 45 : EN à 2/10. Les deux valeurs sont tracées.",
      piege: "Ne pas faire l’auto-évaluation à la place du patient : c’est lui qui donne son chiffre, même s’il te paraît exagéré.",
      memo: "Évaluer → Soulager → Réévaluer → Tracer.",
      mots: []
    },
    {
      id: "soins-confort", ue: "B3", theme: "b3-soinsbase",
      titre: "Soins d’hygiène, de confort et mobilisation",
      resume: "La toilette, l’installation, l’aide au repas et le lever : des soins essentiels en 1re année.",
      simple: "Les soins de la vie quotidienne (toilette, repas, installation, lever) sont des moments clés : ils apportent du confort, permettent d’observer la personne (peau, moral, autonomie) et de créer la relation. On les réalise en stimulant l’autonomie de la personne, sans faire à sa place ce qu’elle peut faire seule.",
      points: [
        "Avant : se présenter, expliquer, demander l’accord, préparer le matériel, fermer porte et rideaux",
        "Toilette : du plus propre au plus sale, du haut vers le bas ; bien sécher les plis ; observer la peau",
        "Hygiène bucco-dentaire : prévient infections et dénutrition ; soins de bouche si la personne ne peut pas les faire",
        "Installation : position confortable, sonnette et objets personnels à portée de main, prévention des escarres",
        "Aide au repas : position assise, rythme de la personne, vigilance aux troubles de la déglutition (fausses routes)",
        "Lever et mobilisation : évaluer les capacités, utiliser les aides techniques, respecter les règles de manutention pour protéger son dos"
      ],
      exemple: "Pendant la toilette, tu laisses Mme P. se laver le visage et les bras seule et tu l’aides pour le dos et les jambes : tu maintiens son autonomie.",
      piege: "Ne jamais laisser une personne à risque de chute seule debout ou au lavabo, même « juste une seconde ».",
      memo: "Toilette : « du propre vers le sale, du haut vers le bas ».",
      mots: [ { mot: "Fausse route", def: "Passage d’aliments ou de liquide dans les voies respiratoires." } ]
    },
    {
      id: "circuit-med", ue: "B3", theme: "b3-medicaments",
      titre: "Le circuit du médicament et la pharmacovigilance",
      resume: "De la prescription à la surveillance : chaque étape et les risques d’erreur.",
      simple: "Un médicament passe par plusieurs mains avant d’arriver au patient : le prescripteur, le pharmacien, l’infirmier. À chaque étape, une erreur est possible, d’où des règles strictes de vérification et de traçabilité. Et quand un médicament provoque un effet indésirable, on le déclare : c’est la pharmacovigilance.",
      points: [
        "Prescription : écrite, datée, signée, avec le nom du patient, le médicament, la dose, la voie, la fréquence et la durée",
        "Dispensation (pharmacien) : analyse de l’ordonnance, préparation, délivrance",
        "Administration (infirmier) : vérification de la prescription, des 5 B, préparation extemporanée si besoin, traçabilité immédiate",
        "Surveillance : efficacité, effets indésirables, observance",
        "Stockage : à l’abri de la lumière ou au frais selon le médicament ; stupéfiants dans une armoire sécurisée avec registre",
        "Pharmacovigilance : tout professionnel déclare les effets indésirables (portail de signalement des événements sanitaires indésirables)",
        "Conciliation médicamenteuse : comparer les traitements d’avant l’hospitalisation et ceux prescrits pour éviter les oublis ou doublons"
      ],
      exemple: "Une prescription illisible ou incomplète : tu ne l’interprètes pas, tu demandes au prescripteur de la préciser avant d’administrer.",
      piege: "Tracer l’administration AVANT d’avoir donné le médicament (ou à la fin du tour pour tout le monde) est une source d’erreur : on trace juste après.",
      memo: "Prescrire → Dispenser → Administrer → Surveiller.",
      mots: [ { mot: "Extemporané", def: "Préparé juste avant l’administration." } ]
    },
    {
      id: "dasri", ue: "B3", theme: "b3-hygiene",
      titre: "Les déchets de soins et les circuits propre / sale",
      resume: "Trier les déchets et respecter les circuits pour protéger patients, soignants et agents.",
      simple: "À l’hôpital, certains déchets peuvent transmettre des infections ou blesser : ce sont les DASRI (déchets d’activités de soins à risques infectieux). Ils suivent une filière spéciale. Le tri commence au moment du soin, par toi. Et on ne mélange jamais ce qui est propre avec ce qui est sale.",
      points: [
        "DASRI : emballages jaunes (sacs, cartons, boîtes) — matériel souillé de sang ou de liquides biologiques, déchets de patients infectés selon les protocoles",
        "Piquants/coupants : collecteur rigide jaune, à portée de main, jamais rempli au-delà du trait, fermé définitivement quand il est plein",
        "Déchets assimilés aux ordures ménagères (DAOM) : sacs noirs (emballages, papiers non souillés…)",
        "Le tri se fait selon la procédure de l’établissement (elle peut varier)",
        "Circuits propre/sale : le matériel propre ne croise pas le matériel sale ; le linge sale part directement dans le bon sac",
        "Après le soin : élimination des déchets, nettoyage-désinfection du matériel et du plan de travail, hygiène des mains"
      ],
      exemple: "Après une prise de sang, l’aiguille va directement dans le collecteur au lit du patient, les compresses souillées dans le sac jaune, l’emballage du tube dans le sac noir.",
      piege: "Ne jamais enfoncer la main ou tasser le contenu d’un collecteur ou d’un sac DASRI : risque de piqûre.",
      memo: "Jaune = danger infectieux · Noir = ordinaire.",
      mots: []
    },

    // ───────────── UE B.4 ─────────────
    {
      id: "qualite", ue: "B4", theme: "b4-qualite",
      titre: "La démarche qualité (roue de Deming)",
      resume: "Améliorer les soins en continu : planifier, faire, vérifier, ajuster.",
      simple: "La qualité des soins, ce n’est pas « faire de son mieux » au hasard : c’est une démarche organisée pour s’améliorer en permanence. L’outil de base est la roue de Deming (PDCA) : on planifie une amélioration, on la met en place, on vérifie le résultat, puis on ajuste et on recommence. Les hôpitaux sont évalués régulièrement par la HAS (certification).",
      points: [
        "P (Plan) : planifier — repérer un problème, fixer un objectif, prévoir les actions",
        "D (Do) : réaliser les actions",
        "C (Check) : vérifier avec des indicateurs",
        "A (Act) : ajuster, généraliser ce qui marche, puis recommencer le cycle",
        "Indicateurs qualité : ex. consommation de solution hydro-alcoolique, traçabilité de la douleur",
        "Outils : protocoles, procédures, audits, évaluation des pratiques professionnelles, questionnaires de satisfaction des patients",
        "Certification des établissements de santé par la HAS"
      ],
      exemple: "Le service constate que la douleur n’est pas toujours réévaluée (Check). Action : rappel en équipe et ajout d’un rappel dans le dossier (Act), puis nouvel audit dans 3 mois.",
      piege: "Un protocole n’a de valeur que s’il est connu, appliqué et mis à jour.",
      memo: "PDCA = « Prévoir, Dérouler, Contrôler, Ajuster ».",
      mots: [ { mot: "HAS", def: "Haute Autorité de santé : recommandations de bonnes pratiques et certification." } ]
    },
    {
      id: "evenements", ue: "B4", theme: "b4-risques",
      titre: "Événements indésirables et culture de sécurité",
      resume: "Déclarer, analyser, apprendre de ses erreurs, sans chercher un coupable.",
      simple: "Un événement indésirable associé aux soins, c’est un incident qui aurait pu ou a causé un dommage au patient (erreur de médicament, chute, erreur d’identité…). Le déclarer ne sert pas à punir mais à comprendre pourquoi c’est arrivé pour que ça ne se reproduise pas. La plupart des erreurs viennent d’une accumulation de failles dans l’organisation, pas d’une seule personne.",
      points: [
        "Événement indésirable (EI) : incident lié aux soins ; grave (EIG) s’il entraîne un décès, une mise en danger vitale ou un déficit durable — déclaration obligatoire à l’ARS",
        "Presque-accident : erreur rattrapée avant d’atteindre le patient — à déclarer aussi",
        "Déclarer via la fiche de signalement de l’établissement",
        "Analyse : arbre des causes, méthode des « 5 pourquoi », méthode ALARM, retours d’expérience en équipe (CREX, RMM)",
        "Vigilances : identitovigilance, pharmacovigilance, matériovigilance, hémovigilance, infectiovigilance",
        "Culture juste : on analyse le système plutôt que de blâmer ; le patient est acteur de sa sécurité",
        "Modèle de Reason (« fromage suisse ») : l’accident survient quand les trous de plusieurs barrières s’alignent"
      ],
      exemple: "Tu te rends compte que tu allais donner un traitement au mauvais patient et tu t’arrêtes à temps : c’est un presque-accident, on le déclare pour analyser ce qui a favorisé l’erreur.",
      piege: "Cacher une erreur est bien plus grave que de la déclarer : le patient peut en subir les conséquences sans qu’on puisse réagir.",
      memo: "Déclarer pour apprendre, pas pour punir.",
      mots: [ { mot: "RMM", def: "Revue de morbidité-mortalité : analyse collective de cas ayant posé problème." } ]
    },

    // ───────────── UE C.1 ─────────────
    {
      id: "prevention", ue: "C1", theme: "c1-promotion",
      titre: "Prévention, promotion de la santé et service sanitaire",
      resume: "Les niveaux de prévention, la promotion de la santé et le SSES.",
      simple: "Prévenir, c’est agir avant que la maladie arrive ou pour qu’elle ne s’aggrave pas. La promotion de la santé va plus loin : elle donne aux personnes les moyens d’agir sur leur propre santé et leurs conditions de vie. Pendant tes études, tu participeras au service sanitaire : des actions de prévention menées par des étudiants en santé auprès du public (écoles, entreprises, quartiers…).",
      points: [
        "Prévention primaire : éviter l’apparition de la maladie (vaccination, hygiène des mains, alimentation)",
        "Prévention secondaire : dépister tôt pour soigner tôt (dépistage du cancer du sein, du col de l’utérus, colorectal)",
        "Prévention tertiaire : limiter les complications et les récidives (rééducation, éducation thérapeutique)",
        "Promotion de la santé (Charte d’Ottawa, OMS, 1986) : permettre aux personnes de mieux maîtriser leur santé",
        "Éducation à la santé : informer et aider à changer un comportement, sans culpabiliser",
        "Service sanitaire des étudiants en santé (SSES, depuis 2018) : préparer, réaliser et évaluer une action de prévention auprès d’un public",
        "Démarche projet : diagnostic des besoins → objectifs → actions → évaluation"
      ],
      exemple: "Une action SSES dans un collège sur le sommeil et les écrans : on part des représentations des élèves, on utilise des outils ludiques et on évalue ce qu’ils ont retenu.",
      piege: "Faire peur (« si vous fumez, vous allez mourir ») est peu efficace pour changer durablement un comportement.",
      memo: "Primaire = Avant · Secondaire = Tôt · Tertiaire = Après.",
      mots: []
    },
    {
      id: "systeme-sante", ue: "C1", theme: "c1-systeme",
      titre: "L’organisation du système de santé en France",
      resume: "Qui décide, qui finance, qui soigne : les grands acteurs.",
      simple: "Le système de santé français repose sur l’État, qui fixe les règles, et sur l’Assurance maladie, qui rembourse une grande partie des soins grâce aux cotisations. En région, les Agences régionales de santé (ARS) organisent l’offre de soins. Les soins sont assurés par l’hôpital public, les cliniques privées, les professionnels libéraux et le secteur médico-social.",
      points: [
        "Ministère de la Santé : politique de santé, lois, plans nationaux",
        "Sécurité sociale (créée en 1945) dont l’Assurance maladie : financement et remboursement des soins",
        "ARS (agences régionales de santé, créées en 2010) : organisent et contrôlent l’offre de soins en région",
        "Agences nationales : HAS (qualité, recommandations), Santé publique France (surveillance, prévention), ANSM (sécurité des médicaments)",
        "Offre de soins : hôpitaux publics, établissements privés, libéraux (ville), médico-social (EHPAD, structures pour personnes handicapées)",
        "Parcours de soins coordonné : le médecin traitant oriente le patient",
        "Exercice coordonné : maisons de santé pluriprofessionnelles, centres de santé, CPTS"
      ],
      exemple: "Un patient sort de l’hôpital : l’infirmière libérale, le médecin traitant et le pharmacien prennent le relais — c’est le parcours de soins.",
      piege: "L’ARS ne soigne pas : elle organise, autorise et contrôle.",
      memo: "État décide · Assurance maladie finance · ARS organise · Soignants soignent.",
      mots: [ { mot: "CPTS", def: "Communauté professionnelle territoriale de santé : professionnels d’un territoire qui s’organisent ensemble." } ]
    },
    {
      id: "etp", ue: "C1", theme: "c1-etp",
      titre: "L’éducation thérapeutique du patient (ETP)",
      resume: "Aider le patient atteint d’une maladie chronique à vivre au mieux avec elle.",
      simple: "Quand on a une maladie chronique (diabète, asthme, insuffisance cardiaque…), c’est le patient qui gère sa maladie au quotidien, pas le soignant. L’éducation thérapeutique l’aide à acquérir les compétences pour le faire : comprendre sa maladie, son traitement, repérer les signes d’alerte, adapter son mode de vie. C’est une démarche construite avec lui, pas un cours magistral.",
      points: [
        "Inscrite dans la loi depuis 2009 (loi HPST) ; programmes autorisés par l’ARS",
        "Étape 1 : bilan éducatif partagé (diagnostic éducatif) — ce que sait, vit et souhaite le patient",
        "Étape 2 : définir avec lui un programme personnalisé et des objectifs",
        "Étape 3 : séances individuelles ou collectives",
        "Étape 4 : évaluation des compétences acquises et réajustement",
        "Compétences d’autosoins (ex. adapter sa dose d’insuline) et d’adaptation (vivre avec la maladie)",
        "Entretien motivationnel : faire émerger la motivation du patient lui-même, sans le forcer"
      ],
      exemple: "Avec un patient asthmatique, tu vérifies comment il utilise son inhalateur, tu lui fais faire, puis tu corriges le geste avec lui.",
      piege: "Donner une brochure n’est pas de l’éducation thérapeutique : il faut vérifier ce que le patient a compris et peut faire.",
      memo: "Bilan → Programme → Séances → Évaluation.",
      mots: []
    },

    // ───────────── UE C.2 ─────────────
    {
      id: "sante-env", ue: "C2", theme: "c2-env",
      titre: "Santé environnementale et soins écoresponsables",
      resume: "L’environnement agit sur la santé, et les soins agissent sur l’environnement.",
      simple: "L’air qu’on respire, l’eau, les produits chimiques, la chaleur, le bruit influencent la santé. Le changement climatique augmente les canicules, les allergies et certaines maladies infectieuses. Mais le système de santé pollue aussi : déchets, transports, produits, énergie. Le soignant peut agir à son niveau en adoptant des gestes écoresponsables, sans jamais compromettre la sécurité des soins.",
      points: [
        "« Une seule santé » (One Health) : santé humaine, animale et environnementale sont liées",
        "Expositions : pollution de l’air extérieur et intérieur, perturbateurs endocriniens, pesticides, bruit, chaleur",
        "Changement climatique : canicules (personnes âgées, nourrissons), allergies, maladies vectorielles",
        "Antibiorésistance : liée en partie à l’usage excessif des antibiotiques chez l’homme et l’animal",
        "Éco-anxiété : inquiétude face aux crises environnementales",
        "Gestes de soins écoresponsables : bon tri des déchets, juste usage des gants et du matériel à usage unique, limiter les impressions, éteindre les appareils",
        "Inégalités environnementales : les personnes défavorisées sont souvent plus exposées"
      ],
      exemple: "Prendre une tension sur une peau saine sans gants : c’est à la fois la bonne pratique d’hygiène et un geste écoresponsable.",
      piege: "L’écoresponsabilité ne doit jamais passer avant l’hygiène et la sécurité du patient.",
      memo: "Le meilleur déchet est celui qu’on ne produit pas (quand c’est sans risque).",
      mots: [ { mot: "Perturbateur endocrinien", def: "Substance qui dérègle le fonctionnement des hormones." } ]
    },

    // ───────────── UE D.1 (nouvelles) ─────────────
    {
      id: "violence", ue: "D1", theme: "d1-violences",
      titre: "Prévenir et désamorcer l’agressivité",
      resume: "Reconnaître une montée de tension et adopter les bons réflexes.",
      simple: "L’agressivité d’un patient ou d’un proche vient souvent de la peur, de la douleur, de l’attente, d’une incompréhension ou d’une maladie (confusion, troubles psychiques, alcool). Le but est d’apaiser la situation avant qu’elle ne dégénère, en restant calme et en assurant sa propre sécurité.",
      points: [
        "Signes de montée de tension : voix qui monte, gestes brusques, visage tendu, regard fixe, refus d’écouter",
        "Rester calme : voix posée et lente, phrases courtes, ne pas hausser le ton",
        "Garder une distance de sécurité, ne pas bloquer la sortie (ni la sienne ni celle de la personne), ne pas toucher",
        "Écouter, reformuler l’émotion (« Je vois que vous êtes en colère parce que l’attente est longue »), proposer une solution concrète",
        "Ne pas rester seule : demander de l’aide à l’équipe",
        "Après : en parler, se faire soutenir, déclarer l’incident (fiche de signalement de l’établissement)"
      ],
      exemple: "Un proche crie car il attend des nouvelles depuis 2 heures : tu te présentes, tu l’invites à s’asseoir, tu reconnais son inquiétude et tu vas chercher l’information ou la personne qui peut répondre.",
      piege: "Répondre à l’agressivité par l’agressivité, ou se justifier longuement, fait monter la tension.",
      memo: "Calme · Distance · Écoute · Aide.",
      mots: []
    },
    {
      id: "equipe", ue: "D1", theme: "d1-equipe",
      titre: "Le travail en équipe pluriprofessionnelle",
      resume: "Qui fait quoi autour du patient et comment bien collaborer.",
      simple: "Autour d’un patient, beaucoup de professionnels interviennent. Chacun a son rôle et ses limites, fixés par la loi. Bien connaître le rôle des autres permet de mieux travailler ensemble, de savoir à qui s’adresser et d’éviter de faire ce qui n’est pas de sa compétence.",
      points: [
        "Infirmier : soins sur son rôle propre et sur prescription, coordination des soins, encadrement",
        "Aide-soignant : soins de la vie quotidienne, en collaboration avec l’infirmier ; l’infirmier peut lui déléguer certains soins et en garde la supervision",
        "Médecin : diagnostic médical et prescriptions ; kinésithérapeute, ergothérapeute, diététicien, psychologue, assistant social, pharmacien…",
        "Cadre de santé : organisation du service et gestion de l’équipe",
        "Transmissions orales (relève) et écrites (dossier) pour la continuité des soins",
        "Glissement de tâches : faire un acte qui n’est pas de sa compétence — à refuser, c’est un risque pour le patient et pour soi"
      ],
      exemple: "Un patient a des difficultés à avaler : tu le signales à l’infirmier et au médecin, qui peuvent solliciter l’orthophoniste et le diététicien.",
      piege: "Déléguer un soin à un aide-soignant ne retire pas la responsabilité de l’infirmier : il doit superviser et évaluer.",
      memo: "Chacun son rôle, tous pour le patient.",
      mots: []
    },

    // ───────────── UE D.3 ─────────────
    {
      id: "app", ue: "D3", theme: "d3-app",
      titre: "L’analyse des pratiques professionnelles",
      resume: "Apprendre de ses situations de stage grâce à une démarche réflexive.",
      simple: "Analyser sa pratique, c’est prendre le temps de revenir sur une situation vécue pour la comprendre : qu’est-ce qui s’est passé, qu’est-ce que j’ai ressenti, qu’est-ce que j’ai fait et pourquoi, qu’est-ce que j’en retiens ? C’est une façon très efficace de progresser. En IFSI, on le fait à l’écrit (analyse de situation) et en groupe (séances d’APP).",
      points: [
        "Décrire la situation de façon factuelle (qui, quoi, où, quand)",
        "Exprimer ce que l’on a ressenti",
        "Analyser : liens avec les connaissances, les valeurs, les règles ; écart entre la théorie et la pratique",
        "Dégager des apprentissages et ce que l’on ferait autrement",
        "En groupe : bienveillance, confidentialité, pas de jugement",
        "Le tuteur et le référent de stage accompagnent cette réflexion"
      ],
      exemple: "Tu as été mal à l’aise face à un patient qui refusait sa toilette : en APP, tu analyses la situation, tu découvres la notion de respect du refus et des pistes pour négocier le soin.",
      piege: "Une analyse de pratique n’est pas un récit chronologique : la partie « analyse » et « ce que j’en retire » est la plus importante.",
      memo: "Décrire → Ressentir → Analyser → Apprendre.",
      mots: [ { mot: "Réflexivité", def: "Capacité à réfléchir sur sa propre pratique pour l’améliorer." } ]
    },

    // ───────────── UE D.4 (nouvelle) ─────────────
    {
      id: "cyber", ue: "D4", theme: "d4-cyber",
      titre: "Cybersécurité et intelligence artificielle en santé",
      resume: "Protéger les données des patients et utiliser les outils numériques avec prudence.",
      simple: "Les hôpitaux sont régulièrement visés par des cyberattaques qui peuvent bloquer les soins. Beaucoup commencent par un simple mail piégé ou un mot de passe trop faible. L’intelligence artificielle peut aider les soignants, mais elle peut se tromper et ne doit jamais recevoir de données de patients sur des outils grand public.",
      points: [
        "Mots de passe : longs, uniques, jamais partagés ; double authentification quand elle existe",
        "Hameçonnage (phishing) : ne pas cliquer sur un lien ou une pièce jointe douteux, vérifier l’expéditeur",
        "Ne pas brancher de clé USB inconnue sur un poste de l’hôpital",
        "Verrouiller sa session dès qu’on quitte le poste",
        "Incident (écran bloqué, demande de rançon, mail suspect ouvert) : prévenir immédiatement le service informatique selon la procédure",
        "IA en santé : outil d’aide à la décision, jamais un remplaçant du jugement clinique ; vérifier les informations",
        "Ne jamais saisir de données permettant d’identifier un patient dans une IA ou une messagerie grand public"
      ],
      exemple: "Tu reçois un mail « urgent » te demandant de confirmer ton mot de passe de l’hôpital : c’est probablement du hameçonnage, tu ne réponds pas et tu le signales.",
      piege: "Une réponse d’IA peut sembler sûre d’elle et être fausse : vérifie toujours avec une source fiable.",
      memo: "Je verrouille, je vérifie, je signale.",
      mots: [ { mot: "Hameçonnage", def: "Message frauduleux qui cherche à voler des identifiants ou installer un virus." } ]
    },

    // ───────────── UE E.1 (nouvelle) ─────────────
    {
      id: "article", ue: "E1", theme: "e1-lecture",
      titre: "Lire un article scientifique et les statistiques de base",
      resume: "La structure IMRaD et les chiffres à connaître : moyenne, médiane, incidence, prévalence.",
      simple: "Un article scientifique suit presque toujours le même plan, ce qui aide à s’y retrouver. Commence par le résumé, puis les résultats et la discussion. Il faut aussi comprendre quelques notions de statistiques pour savoir ce que veulent dire les chiffres.",
      points: [
        "Structure IMRaD : Introduction (pourquoi), Méthode (comment), Résultats (quoi), Discussion (ce que ça veut dire, limites)",
        "Variables quantitatives (âge, poids) et qualitatives (sexe, groupe sanguin)",
        "Moyenne : somme ÷ nombre ; médiane : valeur qui partage le groupe en deux moitiés (moins sensible aux valeurs extrêmes)",
        "Incidence : nombre de NOUVEAUX cas sur une période ; prévalence : nombre TOTAL de cas à un moment donné",
        "Étude quantitative : mesure et compte ; étude qualitative : explore le vécu (entretiens)",
        "Limites à repérer : petit échantillon, biais de sélection, conflits d’intérêts, résultats non généralisables"
      ],
      exemple: "« 500 nouveaux cas de grippe cette semaine dans la ville » = incidence. « 3 millions de diabétiques en France » = prévalence.",
      piege: "Corrélation ≠ causalité : deux choses qui évoluent ensemble ne sont pas forcément liées par une cause.",
      memo: "Incidence = Inédits (nouveaux) ; Prévalence = Présents (tous).",
      mots: []
    },

    // ───────────── UE E.2 ─────────────
    {
      id: "anglais", ue: "E2", theme: "e2-vocab",
      titre: "L’anglais des soins : phrases utiles",
      resume: "Accueillir, évaluer la douleur et expliquer un soin en anglais.",
      simple: "Tu rencontreras des patients qui ne parlent pas français, et beaucoup d’articles scientifiques sont en anglais. Avec quelques phrases simples, tu peux déjà accueillir, rassurer et évaluer. Pour les informations importantes (consentement, annonce), on fait appel à un interprète professionnel.",
      points: [
        "« Hello, my name is…, I’m a student nurse. » — Bonjour, je m’appelle…, je suis étudiante infirmière",
        "« What is your name and date of birth? » — Quels sont votre nom et votre date de naissance ?",
        "« Are you in pain? Where does it hurt? » — Avez-vous mal ? Où avez-vous mal ?",
        "« On a scale from 0 to 10, how bad is your pain? » — De 0 à 10, combien avez-vous mal ?",
        "« I’m going to take your blood pressure. » — Je vais prendre votre tension",
        "« Do you have any allergies? » — Avez-vous des allergies ?",
        "Vocabulaire : nurse (infirmier), ward (service), bed pan (bassin), drip (perfusion), wound (plaie), dressing (pansement), shortness of breath (essoufflement)"
      ],
      exemple: "Une patiente anglaise arrive dans le service : tu te présentes, tu vérifies son identité et tu évalues sa douleur avec ces phrases, puis l’équipe organise un interprète pour l’entretien d’accueil.",
      piege: "Faux amis : « drug » = médicament (pas seulement drogue), « injury » = blessure (pas injure).",
      memo: "Name, Pain, Allergies : les 3 questions de base.",
      mots: []
    },

    // ───────────── UE B.1 — pathologies et pharmacologie (lot 2) ─────────────
    {
      id: "biochimie", ue: "B1", theme: "b1-fondamentaux",
      titre: "Biochimie : les molécules du vivant",
      resume: "Eau, glucides, lipides, protéines, vitamines : de quoi le corps est fait et ce qu’il utilise.",
      simple: "Le corps est surtout fait d’eau. Il utilise trois grandes familles de nutriments : les glucides (le carburant rapide), les lipides (la réserve d’énergie) et les protéines (les briques de construction). Les vitamines et les minéraux, en petites quantités, sont indispensables au bon fonctionnement des cellules.",
      points: [
        "Eau : environ 60 % du poids d’un adulte (davantage chez le nourrisson, moins chez la personne âgée)",
        "Glucides : énergie rapide ; le glucose est le carburant principal du cerveau ; 1 g = 4 kcal ; stockés sous forme de glycogène (foie, muscles)",
        "Lipides : réserve d’énergie, membranes des cellules, hormones ; 1 g = 9 kcal",
        "Protéines : construction (muscles), enzymes, anticorps, transport ; formées d’acides aminés ; 1 g = 4 kcal",
        "Enzymes : protéines qui accélèrent les réactions chimiques",
        "Vitamines et minéraux (calcium, fer, potassium, sodium…) : indispensables en petite quantité",
        "pH du sang : très stable, entre 7,38 et 7,42"
      ],
      exemple: "Une personne âgée qui boit peu se déshydrate vite : elle a moins d’eau dans son corps et ressent moins la soif.",
      piege: "Les lipides apportent plus de deux fois plus d’énergie que les glucides pour le même poids (9 contre 4 kcal/g).",
      memo: "Glucides = carburant · Lipides = réserve · Protéines = briques.",
      mots: [ { mot: "Métabolisme", def: "Ensemble des réactions chimiques de l’organisme." } ]
    },
    {
      id: "antalgiques", ue: "B1", theme: "b1-douleur",
      titre: "Les antalgiques et les paliers de l’OMS",
      resume: "Paracétamol, AINS, opioïdes : comment ils sont classés et ce qu’il faut surveiller.",
      simple: "Les médicaments contre la douleur sont classés en 3 paliers selon leur puissance. On choisit le palier selon l’intensité de la douleur. Les opioïdes (morphine et apparentés) sont très efficaces mais demandent une surveillance attentive, surtout de la vigilance et de la respiration.",
      points: [
        "Palier 1 (douleur légère) : paracétamol, anti-inflammatoires non stéroïdiens (AINS : ibuprofène…)",
        "Palier 2 (douleur modérée) : opioïdes faibles (tramadol, codéine), souvent associés au paracétamol",
        "Palier 3 (douleur intense) : opioïdes forts (morphine, oxycodone…)",
        "Paracétamol : attention au surdosage (toxique pour le foie) ; vérifier qu’il n’est pas déjà présent dans un autre médicament",
        "AINS : risques pour l’estomac et les reins, à éviter chez certains patients (insuffisance rénale, ulcère, grossesse avancée)",
        "Opioïdes : surveiller la sédation (somnolence), la fréquence respiratoire, la constipation (laxatif souvent associé), les nausées",
        "Antidote des opioïdes : naloxone"
      ],
      exemple: "Sous morphine, un patient est difficile à réveiller et respire 8 fois par minute : signes de surdosage, tu le stimules et tu alertes immédiatement.",
      piege: "La somnolence apparaît avant la dépression respiratoire : un patient très endormi sous opioïdes est un signal d’alerte, pas un « patient bien soulagé ».",
      memo: "Paliers 1-2-3 = Paracétamol-Tramadol-Morphine.",
      mots: [ { mot: "Opioïde", def: "Médicament agissant comme la morphine sur les récepteurs de la douleur." } ]
    },
    {
      id: "hta", ue: "B1", theme: "b1-cardio",
      titre: "L’hypertension artérielle (HTA)",
      resume: "Une maladie silencieuse très fréquente : mesure, risques et principaux traitements.",
      simple: "L’hypertension, c’est une pression trop élevée du sang dans les artères, de façon durable. Elle ne fait souvent aucun symptôme, mais elle abîme peu à peu le cœur, le cerveau, les reins et les yeux. C’est un facteur de risque majeur d’AVC et d’infarctus. Bien la mesurer est essentiel.",
      points: [
        "HTA : pression ≥ 140/90 mmHg au cabinet (≥ 135/85 en automesure à domicile), confirmée sur plusieurs mesures",
        "Bonne mesure : patient au repos depuis quelques minutes, assis ou allongé, brassard adapté à la taille du bras, bras à hauteur du cœur",
        "Complications : AVC, infarctus, insuffisance cardiaque, insuffisance rénale, atteinte des yeux",
        "Mesures hygiéno-diététiques : moins de sel, activité physique, perte de poids, limiter l’alcool, arrêter le tabac",
        "Médicaments : IEC (nom en -pril), ARA II (-sartan), inhibiteurs calciques (-dipine), diurétiques, bêtabloquants (-olol)",
        "Surveillance : pression artérielle, hypotension orthostatique (malaise au lever), fonction rénale et potassium selon le traitement"
      ],
      exemple: "Un patient sous antihypertenseurs se sent mal en se levant : tu mesures la tension couché puis debout (hypotension orthostatique) et tu le fais se lever progressivement.",
      piege: "Un brassard trop petit surestime la tension ; un brassard trop grand la sous-estime.",
      memo: "Suffixes : -pril (IEC), -sartan (ARA II), -dipine (calcique), -olol (bêtabloquant).",
      mots: [ { mot: "Hypotension orthostatique", def: "Baisse de la tension au passage en position debout." } ]
    },
    {
      id: "coeur-patho", ue: "B1", theme: "b1-cardio",
      titre: "Infarctus et insuffisance cardiaque",
      resume: "Reconnaître une douleur thoracique urgente et surveiller un patient insuffisant cardiaque.",
      simple: "L’infarctus, c’est une artère du cœur (coronaire) qui se bouche : une partie du muscle cardiaque manque d’oxygène et meurt si on ne débouche pas vite. L’insuffisance cardiaque, c’est un cœur qui pompe mal : le sang stagne, l’eau s’accumule dans les poumons et les jambes.",
      points: [
        "Infarctus : douleur dans la poitrine, en barre ou en serrement, qui peut irradier vers le bras gauche, la mâchoire ou le dos, durable, avec sueurs ou nausées",
        "Chez la femme, la personne âgée ou diabétique, les signes peuvent être atypiques (fatigue, essoufflement, douleur au ventre)",
        "Conduite : repos, alerte immédiate (15 / équipe médicale), ECG le plus vite possible ; « le temps, c’est du muscle »",
        "Insuffisance cardiaque : essoufflement à l’effort puis au repos, œdèmes des jambes, prise de poids rapide, fatigue",
        "Surveillance : poids tous les jours (une prise rapide de poids = rétention d’eau), œdèmes, essoufflement, diurèse",
        "Traitements : diurétiques (surveiller potassium et déshydratation), régime pauvre en sel",
        "Œdème aigu du poumon : essoufflement brutal, besoin de s’asseoir, crachats mousseux → urgence"
      ],
      exemple: "Un patient insuffisant cardiaque a pris 2 kg en 3 jours et dort avec 3 oreillers car il étouffe allongé : tu le signales, c’est une décompensation possible.",
      piege: "Une douleur thoracique, même chez un jeune ou si elle « passe », doit toujours être signalée et faire l’objet d’un ECG.",
      memo: "Insuffisant cardiaque : la balance est ton meilleur outil de surveillance.",
      mots: [ { mot: "ECG", def: "Électrocardiogramme : enregistrement de l’activité électrique du cœur." } ]
    },
    {
      id: "thrombose", ue: "B1", theme: "b1-cardio",
      titre: "Phlébite, embolie pulmonaire et anticoagulants",
      resume: "Prévenir les caillots, reconnaître les signes d’alerte et surveiller un traitement anticoagulant.",
      simple: "Quand on reste immobile, le sang circule lentement dans les veines des jambes et un caillot peut se former : c’est la phlébite (thrombose veineuse). Le danger, c’est que le caillot se détache et aille boucher une artère du poumon : c’est l’embolie pulmonaire, une urgence. Les anticoagulants préviennent et traitent les caillots, mais exposent au risque de saignement.",
      points: [
        "Facteurs de risque : alitement, chirurgie (surtout orthopédique), plâtre, cancer, grossesse, contraception œstrogénique, antécédent de phlébite",
        "Phlébite : mollet douloureux, gonflé, chaud, parfois rouge",
        "Embolie pulmonaire : essoufflement brutal, douleur thoracique, pouls rapide → urgence",
        "Prévention : lever précoce, mobilisation, bas de contention, anticoagulant préventif sur prescription",
        "Anticoagulants : héparines (dont HBPM en sous-cutané), antivitamines K (surveillance par l’INR), anticoagulants oraux directs",
        "Antiagrégants plaquettaires (aspirine, clopidogrel) : préviennent les caillots dans les artères",
        "Surveillance : signes de saignement (gencives, urines, selles noires, hématomes), plaquettes sous héparine"
      ],
      exemple: "Un patient sous anticoagulant a des urines rosées et des bleus inhabituels : tu le signales tout de suite (risque hémorragique).",
      piege: "Ne jamais masser un mollet douloureux et gonflé : on ne mobilise pas le membre et on alerte (risque de migration du caillot).",
      memo: "Phlébite = mollet « rouge, chaud, gonflé, douloureux ».",
      mots: [ { mot: "INR", def: "Examen sanguin qui surveille l’efficacité des antivitamines K." } ]
    },
    {
      id: "asthme-bpco", ue: "B1", theme: "b1-cardio",
      titre: "Asthme et BPCO",
      resume: "Deux maladies respiratoires chroniques fréquentes et leurs traitements inhalés.",
      simple: "L’asthme est une inflammation des bronches qui provoque des crises : les bronches se resserrent, la respiration siffle, puis ça revient à la normale. La BPCO (bronchopneumopathie chronique obstructive) est surtout due au tabac : les bronches sont abîmées de façon durable et l’essoufflement s’aggrave avec les années.",
      points: [
        "Asthme : crises de gêne respiratoire avec sifflements, souvent la nuit ou à l’effort, déclenchées par allergènes, infections, froid, effort",
        "Traitement de crise : bronchodilatateur d’action rapide (ex. salbutamol) ; traitement de fond : corticoïdes inhalés",
        "BPCO : toux, crachats, essoufflement progressif ; cause principale : le tabac ; l’arrêt du tabac est le traitement essentiel",
        "Oxygène chez un patient BPCO : sur prescription, avec un objectif de saturation souvent plus bas (environ 88 à 92 %)",
        "Bien utiliser son inhalateur : expirer, inspirer en déclenchant, retenir sa respiration ; se rincer la bouche après un corticoïde inhalé",
        "Signes de gravité : difficulté à parler, tirage, cyanose, épuisement, saturation basse"
      ],
      exemple: "Un patient asthmatique ne parle plus que par mots isolés et tire sur les muscles du cou : crise grave, tu l’installes assis et tu alertes immédiatement.",
      piege: "Un patient asthmatique qui ne siffle plus pendant une crise n’est pas forcément mieux : il peut être épuisé (« silence auscultatoire »).",
      memo: "Crise = bronchodilatateur rapide · Fond = corticoïde inhalé.",
      mots: [ { mot: "Tirage", def: "Creusement entre les côtes ou au-dessus du sternum quand la respiration est difficile." } ]
    },
    {
      id: "avc", ue: "B1", theme: "b1-nerveux",
      titre: "L’accident vasculaire cérébral (AVC)",
      resume: "Reconnaître un AVC en quelques secondes et appeler immédiatement.",
      simple: "Un AVC, c’est une partie du cerveau qui n’est plus irriguée, soit parce qu’une artère est bouchée (AVC ischémique, le plus fréquent), soit parce qu’elle saigne (AVC hémorragique). Chaque minute compte : des traitements existent pour déboucher l’artère, mais seulement dans les premières heures.",
      points: [
        "Signes brutaux : visage paralysé d’un côté, faiblesse d’un bras ou d’une jambe, trouble de la parole, trouble de la vision, déséquilibre",
        "Test « VITE » : Visage paralysé, Inertie d’un membre, Trouble de la parole, En urgence appeler le 15",
        "AVC ischémique : environ 8 AVC sur 10 ; AVC hémorragique : environ 2 sur 10",
        "Noter l’heure exacte du début des signes (décisive pour le traitement)",
        "Prise en charge en unité neurovasculaire",
        "Après un AVC : risque de fausses routes (tester la déglutition avant de faire manger), escarres, chutes, troubles de l’humeur ; rééducation précoce",
        "Facteurs de risque : HTA, tabac, diabète, cholestérol, fibrillation atriale"
      ],
      exemple: "Au petit-déjeuner, un patient n’arrive plus à tenir sa tasse et parle difficilement : tu notes l’heure, tu ne lui donnes rien à boire ni à manger et tu alertes en urgence.",
      piege: "Ne jamais faire boire ou manger un patient qui vient de faire un AVC avant qu’on ait vérifié sa déglutition.",
      memo: "VITE : Visage, Inertie, Trouble de la parole, En urgence 15.",
      mots: [ { mot: "Aphasie", def: "Trouble du langage (comprendre ou s’exprimer)." }, { mot: "Hémiplégie", def: "Paralysie d’une moitié du corps." } ]
    },
    {
      id: "epilepsie-parkinson", ue: "B1", theme: "b1-nerveux",
      titre: "Épilepsie et maladie de Parkinson",
      resume: "Que faire pendant une crise d’épilepsie, et les points clés de la maladie de Parkinson.",
      simple: "L’épilepsie, c’est une activité électrique anormale du cerveau qui provoque des crises, parfois avec perte de connaissance et convulsions. La maladie de Parkinson est une maladie qui détruit lentement les neurones produisant la dopamine : les mouvements deviennent lents, raides et tremblants.",
      points: [
        "Crise convulsive : protéger la tête, écarter les objets dangereux, ne rien mettre dans la bouche, ne pas maintenir de force",
        "Regarder l’heure : une crise qui dure plus de 5 minutes ou des crises qui se répètent = urgence",
        "Après la crise : position latérale de sécurité, surveillance de la respiration et de la conscience",
        "Antiépileptiques : prise régulière, ne jamais arrêter brutalement",
        "Parkinson : tremblement au repos, raideur, lenteur des mouvements, petits pas, risque de chute et de fausses routes",
        "Médicaments antiparkinsoniens : à donner à l’heure exacte prescrite (un retard aggrave les symptômes)"
      ],
      exemple: "Un patient parkinsonien hospitalisé reçoit son traitement 2 heures en retard : il devient bloqué et ne peut plus marcher. D’où l’importance des horaires.",
      piege: "Mettre quelque chose entre les dents pendant une crise est dangereux (dents cassées, morsures du soignant) et inutile.",
      memo: "Crise : Protéger, Chronométrer, PLS.",
      mots: [ { mot: "Dopamine", def: "Neurotransmetteur impliqué dans le contrôle des mouvements." } ]
    },
    {
      id: "fractures-arthrose", ue: "B1", theme: "b1-locomoteur",
      titre: "Fractures, ostéoporose et arthrose",
      resume: "Les problèmes fréquents des os et des articulations, surtout chez la personne âgée.",
      simple: "Avec l’âge, les os deviennent plus fragiles (ostéoporose) et une simple chute peut provoquer une fracture, notamment du col du fémur. L’arthrose, c’est l’usure du cartilage des articulations : elle fait mal quand on bouge. Après une fracture, l’enjeu est de soulager, de faire bouger rapidement le patient et de prévenir les complications de l’alitement.",
      points: [
        "Fracture : douleur, déformation, impossibilité de bouger, gonflement",
        "Fracture du col du fémur : jambe raccourcie et tournée vers l’extérieur après une chute",
        "Complications de l’immobilité : escarres, phlébite, infection pulmonaire, constipation, perte d’autonomie, confusion",
        "Ostéoporose : os fragiles ; prévention par l’activité physique, le calcium, la vitamine D et la prévention des chutes",
        "Arthrose : douleur mécanique (pire à l’effort, calmée au repos)",
        "Arthrite : inflammation de l’articulation (douleur aussi la nuit, raideur le matin, articulation chaude)",
        "Lombalgie : douleur du bas du dos, très fréquente ; rester actif est recommandé"
      ],
      exemple: "Mme T., 84 ans, tombe dans sa chambre et ne peut plus se relever : jambe droite raccourcie et en rotation externe. Tu ne la relèves pas, tu l’installes confortablement et tu alertes.",
      piege: "Arthrose ≠ arthrite : « -ose » = usure, « -ite » = inflammation.",
      memo: "Arthr-OSE = usure ; arthr-ITE = inflammation.",
      mots: []
    },
    {
      id: "insuffisance-renale", ue: "B1", theme: "b1-urinaire",
      titre: "L’insuffisance rénale et la dialyse",
      resume: "Quand les reins filtrent mal : surveillance, médicaments à risque et dialyse.",
      simple: "Quand les reins ne filtrent plus assez, les déchets, l’eau et le potassium s’accumulent dans le sang. L’insuffisance rénale peut être aiguë (brutale, souvent réversible) ou chronique (lente, définitive). Au stade le plus avancé, il faut remplacer les reins par la dialyse ou une greffe.",
      points: [
        "Insuffisance rénale aiguë : causes possibles avant le rein (déshydratation), dans le rein (médicaments toxiques), après le rein (obstacle : globe vésical, calcul)",
        "Insuffisance rénale chronique : débit de filtration glomérulaire (DFG) diminué depuis plus de 3 mois",
        "Signes à surveiller : diurèse, œdèmes, prise de poids, fatigue ; potassium sanguin (risque cardiaque s’il est trop élevé)",
        "Médicaments à risque pour les reins : AINS, certains antibiotiques, produits de contraste iodés → adaptation des doses",
        "Hémodialyse : le sang est filtré par une machine, souvent via une fistule artério-veineuse au bras",
        "Bras de la fistule : ni prise de tension, ni prise de sang, ni perfusion, ni bijou serré",
        "Dialyse péritonéale : filtration à travers le péritoine, à domicile ; greffe rénale"
      ],
      exemple: "Une patiente dialysée a une fistule au bras gauche : tu prends la tension au bras droit et tu vérifies chaque jour que la fistule « vibre » (thrill).",
      piege: "Un patient qui n’urine plus peut simplement avoir une vessie pleine (globe vésical) : palpe le bas-ventre ou utilise l’appareil d’échographie vésicale.",
      memo: "Bras de fistule = bras sacré : on n’y touche pas.",
      mots: [ { mot: "Globe vésical", def: "Vessie pleine qui n’arrive pas à se vider." } ]
    },
    {
      id: "infection-urinaire", ue: "B1", theme: "b1-immuno",
      titre: "Les infections urinaires",
      resume: "Cystite, pyélonéphrite : reconnaître, prélever correctement et prévenir.",
      simple: "Une infection urinaire, c’est une bactérie (souvent E. coli, venant du tube digestif) qui remonte par l’urètre. Si elle reste dans la vessie, c’est une cystite. Si elle monte jusqu’au rein, c’est une pyélonéphrite, plus grave, avec de la fièvre. Les femmes et les patients porteurs de sonde urinaire sont plus exposés.",
      points: [
        "Cystite : brûlures en urinant, envies fréquentes et urgentes, urines troubles, pas de fièvre",
        "Pyélonéphrite : fièvre, frissons, douleur dans le bas du dos d’un côté, parfois nausées",
        "Personne âgée : signes souvent atypiques (confusion, chute, incontinence nouvelle)",
        "Bandelette urinaire (BU) : dépistage rapide (leucocytes, nitrites)",
        "ECBU : toilette intime, éliminer le premier jet, recueillir le milieu du jet dans un flacon stérile, acheminer rapidement au laboratoire",
        "Sur sonde : prélèvement au site dédié de la sonde, jamais dans la poche",
        "Prévention : boire suffisamment, ne pas se retenir, hygiène d’avant en arrière, système de drainage clos pour les sondes"
      ],
      exemple: "Une patiente sondée a de la fièvre et des urines troubles : tu fais l’ECBU par le site de prélèvement de la sonde, après désinfection, sur prescription.",
      piege: "Ne jamais prélever l’urine dans la poche collectrice : les bactéries y prolifèrent, le résultat serait faux.",
      memo: "Cystite = vessie, sans fièvre · Pyélonéphrite = rein, avec fièvre.",
      mots: [ { mot: "ECBU", def: "Examen cytobactériologique des urines." } ]
    },
    {
      id: "digestif-patho", ue: "B1", theme: "b1-digestif",
      titre: "Reflux, ulcère et hémorragies digestives",
      resume: "Les maladies digestives hautes fréquentes et les signes de saignement à reconnaître.",
      simple: "Le reflux, c’est l’acide de l’estomac qui remonte dans l’œsophage et brûle. L’ulcère, c’est une plaie dans l’estomac ou le duodénum, souvent due à une bactérie (Helicobacter pylori) ou aux anti-inflammatoires. Un ulcère peut saigner : il faut savoir reconnaître le sang dans les vomissements ou les selles.",
      points: [
        "Reflux gastro-œsophagien : brûlures qui remontent derrière le sternum, aggravées couché ou penché",
        "Conseils : surélever la tête du lit, éviter les repas copieux le soir",
        "Ulcère : douleur au creux de l’estomac ; causes : Helicobacter pylori, AINS, aspirine",
        "Traitement : inhibiteurs de la pompe à protons (IPP, nom en -prazole), antibiotiques contre H. pylori",
        "Hématémèse : vomissement de sang",
        "Méléna : selles noires, goudronneuses, malodorantes (sang digéré)",
        "Rectorragie : sang rouge par l’anus",
        "Hémorragie digestive : urgence, surveiller pouls, tension, pâleur, conscience"
      ],
      exemple: "Un patient sous anti-inflammatoires a des selles noires et se sent faible : tu prends ses paramètres et tu alertes (suspicion de saignement digestif).",
      piege: "Des selles noires peuvent aussi être dues à un traitement par fer : on le signale quand même, c’est au médecin de trancher.",
      memo: "Hémat-émèse = sang vomi · Méléna = selles noires.",
      mots: []
    },
    {
      id: "transit", ue: "B1", theme: "b1-digestif",
      titre: "Constipation et diarrhée",
      resume: "Troubles du transit très fréquents à l’hôpital : causes, surveillance, prévention.",
      simple: "Le transit, c’est le rythme d’évacuation des selles. À l’hôpital, l’alitement, les médicaments (surtout la morphine), le manque de boissons ou d’intimité favorisent la constipation. La diarrhée, elle, expose à la déshydratation et peut être contagieuse.",
      points: [
        "Constipation : moins de 3 selles par semaine ou selles dures et difficiles",
        "Causes : immobilité, faible apport d’eau et de fibres, opioïdes, manque d’intimité, changement d’habitudes",
        "Prévention : boire, fibres, mobilisation, respect de l’intimité et des horaires habituels",
        "Fécalome : bouchon de selles dures, surtout chez la personne âgée ; il peut donner une fausse diarrhée",
        "Diarrhée : risque de déshydratation (surveiller la soif, la diurèse, le poids, la peau)",
        "Diarrhée infectieuse (ex. C. difficile) : précautions complémentaires contact",
        "Échelle de Bristol : décrit les selles de 1 (dures) à 7 (liquides)"
      ],
      exemple: "Une patiente âgée sous morphine n’a pas eu de selles depuis 4 jours puis présente un suintement liquide : penser au fécalome et le signaler.",
      piege: "Une « diarrhée » chez une personne âgée constipée peut être une fausse diarrhée autour d’un fécalome.",
      memo: "Bristol 1–2 = constipation · 3–4 = idéal · 6–7 = diarrhée.",
      mots: []
    },
    {
      id: "thyroide", ue: "B1", theme: "b1-endocrinien",
      titre: "Les maladies de la thyroïde",
      resume: "Hypo ou hyperthyroïdie : des signes opposés, faciles à retenir.",
      simple: "La thyroïde règle la vitesse de fonctionnement du corps. Si elle ne produit pas assez d’hormones (hypothyroïdie), tout ralentit. Si elle en produit trop (hyperthyroïdie), tout s’accélère. On surveille son fonctionnement par une prise de sang (la TSH).",
      points: [
        "Hypothyroïdie : fatigue, frilosité, prise de poids, constipation, pouls lent, peau sèche, ralentissement",
        "Traitement : lévothyroxine, à prendre le matin à jeun, tous les jours",
        "Hyperthyroïdie : amaigrissement, pouls rapide, palpitations, nervosité, tremblements, chaleur mal supportée, diarrhée",
        "TSH : hormone de l’hypophyse qui commande la thyroïde ; elle est ÉLEVÉE dans l’hypothyroïdie (l’hypophyse « pousse » une thyroïde paresseuse)",
        "Goitre : augmentation du volume de la thyroïde"
      ],
      exemple: "Une patiente prend sa lévothyroxine avec son café et ses autres médicaments au petit-déjeuner : tu lui expliques de la prendre à jeun, à distance.",
      piege: "TSH haute = hypothyroïdie (et non hyperthyroïdie) : c’est le rétrocontrôle.",
      memo: "Hypo = tout ralentit · Hyper = tout s’accélère.",
      mots: []
    },
    {
      id: "grossesse-contraception", ue: "B1", theme: "b1-repro",
      titre: "Grossesse, contraception et santé sexuelle",
      resume: "Les repères essentiels : durée de la grossesse, méthodes de contraception, IVG.",
      simple: "La grossesse se compte en semaines d’aménorrhée (SA), c’est-à-dire depuis le premier jour des dernières règles. Il existe de nombreuses méthodes de contraception, adaptées à chaque personne. Le préservatif est la seule qui protège aussi des infections sexuellement transmissibles.",
      points: [
        "Grossesse : environ 41 SA ; 3 trimestres ; suivi par une sage-femme ou un médecin",
        "Contraception : pilule, stérilet (DIU au cuivre ou hormonal), implant, patch, anneau, préservatifs, méthodes définitives",
        "Contraception d’urgence : à prendre le plus tôt possible après un rapport à risque, disponible en pharmacie sans ordonnance",
        "IVG : légale en France jusqu’à 14 semaines de grossesse (16 SA) ; liberté de recourir à l’IVG inscrite dans la Constitution en 2024",
        "Ménopause : arrêt des règles vers 50 ans (bouffées de chaleur, risque d’ostéoporose)",
        "Incontinence urinaire : fréquente, souvent taboue ; rééducation du périnée"
      ],
      exemple: "Avant une radiographie chez une femme en âge de procréer, on vérifie l’absence de grossesse.",
      piege: "Semaines de grossesse et semaines d’aménorrhée ne sont pas la même chose : SA = SG + 2.",
      memo: "SA = depuis les dernières règles ; SG = depuis la conception (≈ 2 semaines plus tard).",
      mots: [ { mot: "Aménorrhée", def: "Absence de règles." } ]
    },
    {
      id: "ist", ue: "B1", theme: "b1-repro",
      titre: "Les infections sexuellement transmissibles (IST)",
      resume: "Les IST fréquentes, souvent silencieuses : prévention et dépistage.",
      simple: "Les IST se transmettent lors de rapports sexuels non protégés. Beaucoup ne donnent aucun symptôme pendant longtemps, d’où l’importance du dépistage. Le préservatif protège de la plupart d’entre elles, et des vaccins existent contre certaines (hépatite B, papillomavirus).",
      points: [
        "Chlamydia : très fréquente chez les jeunes, souvent sans symptômes, peut rendre stérile",
        "Gonococcie (gonorrhée), syphilis : en augmentation",
        "VIH et hépatite B : transmission sexuelle et sanguine",
        "Papillomavirus (HPV) : peut provoquer des cancers (col de l’utérus, gorge, anus) ; vaccin recommandé pour les filles et les garçons",
        "Prévention : préservatif, vaccination, dépistage régulier, PrEP (traitement préventif du VIH)",
        "Dépistage gratuit dans les centres de dépistage (CeGIDD) ; partenaires à informer et à traiter"
      ],
      exemple: "Lors d’une action de prévention au lycée (service sanitaire), on rappelle que la plupart des IST sont silencieuses et que le dépistage est simple et gratuit.",
      piege: "« Pas de symptômes » ne veut pas dire « pas d’infection ».",
      memo: "IST : Préserver (préservatif), Piquer (vaccins), Prélever (dépister).",
      mots: [ { mot: "PrEP", def: "Prophylaxie pré-exposition : médicament pris pour éviter d’attraper le VIH." } ]
    },
    {
      id: "brulures", ue: "B1", theme: "b1-peau",
      titre: "Les brûlures",
      resume: "Évaluer la gravité d’une brûlure et les premiers gestes.",
      simple: "La gravité d’une brûlure dépend de sa profondeur, de sa surface et de sa localisation. Le premier geste, c’est refroidir rapidement à l’eau tempérée. Une brûlure profonde peut paradoxalement faire moins mal, car les terminaisons nerveuses sont détruites.",
      points: [
        "1er degré : rougeur douloureuse, sans cloque (type coup de soleil)",
        "2e degré : cloques (phlyctènes), très douloureux ; superficiel ou profond",
        "3e degré : peau blanche, brune ou noire, cartonnée, peu ou pas douloureuse",
        "Premier geste : refroidir à l’eau tempérée (environ 15 °C) pendant une quinzaine de minutes, le plus tôt possible",
        "Signes de gravité : grande surface, visage, mains, pieds, articulations, organes génitaux, voies respiratoires, enfant ou personne âgée",
        "Surface chez l’adulte : règle des 9 de Wallace (ex. un bras = 9 %) ; la paume de la main du patient ≈ 1 %",
        "Ne pas percer les cloques, ne pas appliquer de corps gras, retirer bijoux et vêtements non collés"
      ],
      exemple: "Un enfant renverse un bol d’eau bouillante sur son bras : on refroidit immédiatement sous l’eau tempérée et on consulte (brûlure étendue de l’enfant).",
      piege: "Ne pas utiliser de glace ni d’eau glacée : risque d’aggraver la lésion et d’hypothermie.",
      memo: "Règle des 15 : eau à environ 15 °C, pendant environ 15 minutes.",
      mots: [ { mot: "Phlyctène", def: "Cloque remplie de liquide." } ]
    },
    {
      id: "infections-courantes", ue: "B1", theme: "b1-immuno",
      titre: "Les infections courantes",
      resume: "Pneumopathie, érysipèle, grippe, covid, zona : les reconnaître.",
      simple: "Certaines infections sont très fréquentes en stage. Les connaître permet de repérer les signes tôt, d’alerter et d’appliquer les bonnes mesures d’hygiène. Chez la personne âgée, une infection peut se manifester seulement par une confusion ou une chute.",
      points: [
        "Pneumopathie : fièvre, toux, crachats, essoufflement, douleur thoracique ; risque chez la personne âgée et en cas de fausses routes",
        "Érysipèle : plaque rouge, chaude, douloureuse, gonflée, souvent sur la jambe, avec fièvre ; porte d’entrée fréquente : plaie ou lésion entre les orteils",
        "Grippe : fièvre brutale, courbatures, toux ; vaccin chaque année, recommandé aux soignants",
        "Covid-19 : signes respiratoires, fièvre, perte du goût ou de l’odorat",
        "Zona : réactivation du virus de la varicelle ; éruption douloureuse en bande d’un seul côté du corps",
        "Sepsis : infection qui entraîne une défaillance d’organe → urgence"
      ],
      exemple: "M. L. a la jambe rouge, chaude et gonflée avec 39 °C : tu délimites la rougeur au feutre (avec son accord) pour suivre son évolution et tu alertes.",
      piege: "Personne âgée + confusion nouvelle = chercher une infection, même sans fièvre.",
      memo: "Érysipèle = « jambe rouge chaude + fièvre ».",
      mots: []
    },
    {
      id: "vih-hepatites", ue: "B1", theme: "b1-immuno",
      titre: "VIH et hépatites virales",
      resume: "Modes de transmission, prévention et idées reçues à corriger.",
      simple: "Le VIH attaque le système immunitaire. Sans traitement, il évolue vers le sida. Aujourd’hui, les traitements permettent de vivre normalement, et une personne dont le virus est indétectable ne le transmet pas. Les hépatites sont des inflammations du foie ; les virus B et C se transmettent surtout par le sang (et le B aussi sexuellement).",
      points: [
        "VIH : transmission par le sang, les rapports sexuels non protégés, de la mère à l’enfant",
        "Pas de transmission par la salive, la sueur, les larmes, les poignées de main, les couverts ou les toilettes",
        "Traitement antirétroviral à vie ; charge virale indétectable = virus intransmissible",
        "Hépatite A : transmission par l’eau et les aliments souillés (voie oro-fécale)",
        "Hépatite B : sang et rapports sexuels ; vaccin obligatoire pour les soignants et les étudiants en santé",
        "Hépatite C : surtout par le sang ; un traitement permet aujourd’hui de guérir",
        "Pour les soignants : précautions standard pour tous et conduite à tenir en cas d’AES"
      ],
      exemple: "Une patiente refuse de partager la salle de bains avec un patient séropositif : tu la rassures, il n’y a aucun risque de transmission par ce biais.",
      piege: "Mettre des gants « parce que le patient a le VIH » mais pas pour les autres : les précautions sont les mêmes pour tous.",
      memo: "VIH : Sang, Sexe, Mère-enfant.",
      mots: [ { mot: "Charge virale", def: "Quantité de virus dans le sang." } ]
    },
    {
      id: "antibiotiques", ue: "B1", theme: "b1-immuno",
      titre: "Les antibiotiques et l’antibiorésistance",
      resume: "Bien les administrer, surveiller leurs effets et lutter contre les résistances.",
      simple: "Les antibiotiques tuent les bactéries ou bloquent leur multiplication. Ils sont inutiles contre les virus (rhume, grippe, covid). Plus on les utilise, plus les bactéries apprennent à leur résister : c’est l’antibiorésistance, un problème mondial. Le soignant y contribue en respectant les horaires, les doses et les durées.",
      points: [
        "Grandes familles : bêtalactamines (pénicillines comme l’amoxicilline, céphalosporines), macrolides, aminosides, fluoroquinolones…",
        "Avant le premier antibiotique : faire les prélèvements prescrits (hémocultures, ECBU…)",
        "Respecter les horaires (taux sanguin stable), la dose et la durée prescrite",
        "Allergie : toujours la rechercher avant l’administration ; surveiller éruption, gonflement, gêne respiratoire",
        "Effets indésirables fréquents : troubles digestifs, diarrhée (dont C. difficile), mycoses",
        "Antibiorésistance : bactéries multirésistantes (BMR) ; prévention par le bon usage et l’hygiène des mains"
      ],
      exemple: "Une antibiothérapie IV est prescrite toutes les 8 heures : tu respectes l’horaire et tu préviens si une dose n’a pas pu être donnée.",
      piege: "« Antibiotique = fièvre qui baisse » : la fièvre peut persister 48 à 72 h au début du traitement ; on réévalue sans arrêter de soi-même.",
      memo: "Les antibiotiques, c’est pas automatique (et pas contre les virus).",
      mots: [ { mot: "Hémoculture", def: "Prélèvement de sang pour rechercher des bactéries." } ]
    },
    {
      id: "orl-ophtalmo", ue: "B1", theme: "b1-orl",
      titre: "ORL et ophtalmologie : l’essentiel",
      resume: "Surdité, otite, vertiges, cataracte, glaucome : les situations courantes.",
      simple: "L’ouïe et la vue sont essentielles à la communication et à l’autonomie. Avec l’âge, on entend et on voit moins bien, ce qui peut isoler la personne et augmenter le risque de chute. En stage, pense toujours à vérifier que le patient a ses lunettes et ses appareils auditifs.",
      points: [
        "Presbyacousie : baisse de l’audition liée à l’âge ; appareils auditifs à entretenir et à mettre",
        "Otite : infection de l’oreille, très fréquente chez l’enfant (douleur, fièvre)",
        "Vertiges : sensation de rotation ; risque de chute",
        "Cataracte : opacification du cristallin, vision floue ; traitée par chirurgie",
        "Glaucome : pression trop élevée dans l’œil qui abîme le nerf optique ; traitement par collyres à vie",
        "DMLA : atteinte du centre de la rétine chez la personne âgée",
        "Collyre : tirer la paupière inférieure, instiller dans le cul-de-sac sans toucher l’œil, attendre quelques minutes entre deux collyres"
      ],
      exemple: "Un patient âgé semble confus et ne répond pas aux questions : avant de conclure, tu vérifies qu’il porte ses appareils auditifs et ses lunettes.",
      piege: "Ne pas crier avec une personne malentendante : parler face à elle, lentement et distinctement.",
      memo: "Lunettes + appareils auditifs = moins de confusion et de chutes.",
      mots: []
    },
    {
      id: "cancer", ue: "B1", theme: "b1-cancer",
      titre: "Le cancer : bases et soins",
      resume: "Comprendre la maladie, les traitements, leurs effets et les dépistages organisés.",
      simple: "Un cancer, c’est un groupe de cellules qui se multiplient de façon anarchique et forment une tumeur maligne. Elles peuvent envahir les tissus voisins et migrer à distance (métastases). Les traitements sont souvent combinés. Les soins de support (douleur, nutrition, soutien psychologique) sont aussi importants que les traitements eux-mêmes.",
      points: [
        "Tumeur bénigne : reste localisée ; tumeur maligne (cancer) : envahit et peut donner des métastases",
        "Traitements : chirurgie, chimiothérapie, radiothérapie, immunothérapie, hormonothérapie, thérapies ciblées",
        "Effets de la chimiothérapie : nausées, fatigue, perte des cheveux, aphtes, baisse des globules blancs (risque infectieux)",
        "Fièvre sous chimiothérapie = urgence (risque d’infection grave)",
        "Dispositif d’annonce : temps médical, temps d’accompagnement soignant, soins de support",
        "Dépistages organisés : sein (mammographie tous les 2 ans de 50 à 74 ans), côlon (test tous les 2 ans de 50 à 74 ans), col de l’utérus (de 25 à 65 ans)",
        "Prévention : tabac, alcool, alimentation, activité physique, protection solaire, vaccin HPV"
      ],
      exemple: "Un patient sous chimiothérapie appelle pour 38,5 °C de fièvre : ce n’est pas « juste un rhume », il doit être vu en urgence.",
      piege: "Cancer ne veut pas dire fin de vie : beaucoup de cancers se guérissent ou se soignent longtemps.",
      memo: "Chimio + fièvre = urgence.",
      mots: [ { mot: "Aplasie", def: "Chute importante des cellules du sang produites par la moelle." } ]
    },

    {
      id: "enfant", ue: "B1", theme: "b1-enfant",
      titre: "L’enfant : développement et situations fréquentes",
      resume: "Croissance, vaccins, constantes, fièvre et déshydratation chez l’enfant.",
      simple: "Un enfant n’est pas un adulte en petit : ses constantes sont différentes, il se déshydrate beaucoup plus vite et il ne sait pas toujours dire ce qu’il ressent. Son développement se suit grâce au carnet de santé (courbes de poids et de taille, vaccins, examens obligatoires). Les parents sont des partenaires essentiels des soins.",
      points: [
        "Carnet de santé : courbes de croissance, vaccinations, examens de suivi",
        "Constantes : plus le bébé est petit, plus le cœur et la respiration sont rapides (ex. nouveau-né : pouls autour de 120 à 160 par minute)",
        "Déshydratation (gastro-entérite) : perte de poids, enfant abattu, bouche sèche, moins de couches mouillées ; solutés de réhydratation orale",
        "Fièvre : surveiller le comportement de l’enfant plus que le chiffre ; convulsions fébriles possibles chez le jeune enfant",
        "Bronchiolite du nourrisson : virus, gêne respiratoire, difficulté à boire ; lavages de nez",
        "Prévention de la mort inattendue du nourrisson : couchage sur le dos, dans un lit vide, sans tabac",
        "Bébé secoué et maltraitance : repérer et signaler (119)",
        "Troubles du neurodéveloppement : autisme (TSA), TDAH, troubles des apprentissages"
      ],
      exemple: "Un nourrisson de 6 mois avec une gastro boit mal et n’a mouillé qu’une couche depuis le matin : signes de déshydratation à signaler rapidement.",
      piege: "Les doses de médicaments chez l’enfant se calculent selon le poids : toujours peser l’enfant et vérifier deux fois.",
      memo: "Bébé : sur le dos, dans un lit vide, sans tabac.",
      mots: []
    },
    {
      id: "psy-troubles", ue: "B1", theme: "b1-psy",
      titre: "Les principaux troubles psychiques",
      resume: "Dépression, anxiété, trouble bipolaire, schizophrénie : les signes clés.",
      simple: "Les troubles psychiques sont fréquents : environ une personne sur cinq en souffre au cours de sa vie. Ce sont des maladies qui se soignent. Mieux les connaître aide à repérer, à orienter et à changer son regard pour lutter contre la stigmatisation.",
      points: [
        "Dépression : tristesse et/ou perte de plaisir presque tous les jours pendant au moins 2 semaines, fatigue, troubles du sommeil et de l’appétit, culpabilité, idées de mort",
        "Troubles anxieux : anxiété généralisée, attaques de panique, phobies, TOC",
        "Trouble bipolaire : alternance de phases dépressives et de phases d’excitation (manie)",
        "Schizophrénie : idées délirantes, hallucinations, discours désorganisé, repli",
        "Troubles des conduites alimentaires : anorexie, boulimie",
        "Modes d’hospitalisation : soins libres, soins sans consentement à la demande d’un tiers ou sur décision du représentant de l’État",
        "Organisation : secteurs de psychiatrie, centres médico-psychologiques (CMP) en ville"
      ],
      exemple: "Une patiente hospitalisée pour une fracture ne mange plus, ne parle plus et dit « ça ne sert à rien » depuis des jours : tu le transmets, une dépression doit être recherchée.",
      piege: "Ne pas dire « secouez-vous » à une personne déprimée : la dépression n’est pas un manque de volonté.",
      memo: "Dépression : 2 semaines de tristesse ou de perte de plaisir.",
      mots: [ { mot: "Hallucination", def: "Perception sans objet réel (entendre des voix…)." } ]
    },
    {
      id: "psychotropes", ue: "B1", theme: "b1-psy",
      titre: "Les psychotropes",
      resume: "Antidépresseurs, anxiolytiques, antipsychotiques, thymorégulateurs : effets et surveillance.",
      simple: "Les psychotropes sont des médicaments qui agissent sur le fonctionnement du cerveau. Chaque famille a ses effets attendus, ses délais d’action et ses risques. Le rôle infirmier est de surveiller l’efficacité, les effets indésirables et la bonne prise du traitement.",
      points: [
        "Antidépresseurs : efficacité après 2 à 4 semaines ; au début, la motivation peut revenir avant l’humeur → vigilance sur le risque suicidaire",
        "Anxiolytiques (benzodiazépines) : somnolence, risque de chute, dépendance ; traitement court, arrêt progressif",
        "Hypnotiques : pour dormir, mêmes précautions",
        "Antipsychotiques (neuroleptiques) : prise de poids, somnolence, raideur, tremblements ; surveillance cardiaque et métabolique",
        "Thymorégulateurs (ex. lithium) : marge thérapeutique étroite, dosages sanguins réguliers, signes de surdosage (tremblements, troubles digestifs, confusion)",
        "Ne jamais arrêter brutalement un psychotrope sans avis médical"
      ],
      exemple: "Une patiente âgée sous benzodiazépine se lève la nuit pour aller aux toilettes : risque de chute majoré, lumière, sonnette et chaussures adaptées.",
      piege: "Les benzodiazépines chez la personne âgée augmentent fortement le risque de chute et de confusion.",
      memo: "Antidépresseur : patience (2–4 semaines) et vigilance (risque suicidaire au début).",
      mots: []
    },
    {
      id: "choc", ue: "B1", theme: "b1-urgences",
      titre: "États de choc et sepsis",
      resume: "Reconnaître une défaillance circulatoire et donner l’alerte sans attendre.",
      simple: "Un état de choc, c’est quand le sang n’apporte plus assez d’oxygène aux organes. Le corps compense d’abord (le cœur s’accélère), puis la tension chute. C’est une urgence vitale. Plusieurs causes existent : perte de sang ou d’eau, infection grave (sepsis), allergie grave, défaillance du cœur.",
      points: [
        "Signes : pouls rapide, tension basse (souvent tardive), pâleur, sueurs, marbrures (genoux), extrémités froides, peu d’urines, agitation ou confusion",
        "Temps de recoloration cutanée : appuyer sur l’ongle ; anormal s’il dépasse 3 secondes",
        "Choc hypovolémique : hémorragie, déshydratation",
        "Choc septique : infection grave avec défaillance d’organe",
        "Choc anaphylactique : allergie grave (urticaire, gonflement, gêne respiratoire, chute de tension) → l’adrénaline en intramusculaire est le traitement",
        "Choc cardiogénique : le cœur ne pompe plus (ex. infarctus)",
        "Signes d’alerte du sepsis : respiration rapide, tension basse, confusion chez un patient infecté",
        "Conduite : alerter immédiatement, allonger le patient (jambes surélevées si pas de détresse respiratoire), surveiller"
      ],
      exemple: "Pendant une perfusion d’antibiotique, une patiente a des plaques rouges, la voix rauque et se sent mal : tu arrêtes la perfusion, tu alertes (anaphylaxie possible) et tu restes avec elle.",
      piege: "Une tension « encore normale » n’exclut pas un choc : le pouls rapide et les marbrures apparaissent souvent avant.",
      memo: "Choc : Cœur qui s’emballe, Peau qui marbre, Rein qui s’arrête, Tête qui s’embrouille.",
      mots: [ { mot: "Marbrures", def: "Taches violacées en réseau sur la peau, signe de mauvaise circulation." } ]
    },
    {
      id: "palliatif", ue: "B1", theme: "b1-palliatif",
      titre: "Les soins palliatifs au quotidien",
      resume: "Soulager les symptômes, accompagner la personne et ses proches.",
      simple: "Les soins palliatifs s’adressent aux personnes atteintes d’une maladie grave, évolutive, qu’on ne peut plus guérir. Ils ne sont pas réservés aux derniers jours : ils peuvent commencer tôt. Leur but est le confort et la qualité de vie : soulager la douleur et les autres symptômes, respecter les choix, accompagner les proches.",
      points: [
        "Symptômes fréquents : douleur, essoufflement, nausées, constipation, bouche sèche, anxiété, encombrement respiratoire",
        "Soins de bouche réguliers : confort essentiel quand la personne ne boit plus",
        "Installation, prévention des escarres adaptée (on privilégie le confort sur les retournements fréquents si ceux-ci sont douloureux)",
        "Présence, écoute, respect du rythme et des souhaits de la personne",
        "Accompagnement des proches : information, soutien, possibilité de rester",
        "Démarche palliative en équipe pluriprofessionnelle, équipes mobiles de soins palliatifs",
        "Après le décès : soins au corps dans le respect des rites, accompagnement de la famille"
      ],
      exemple: "Une patiente en fin de vie ne boit plus : tu réalises des soins de bouche réguliers et tu proposes à sa fille de les faire avec toi si elle le souhaite.",
      piege: "Ne pas confondre soins palliatifs et « on ne fait plus rien » : on fait beaucoup, autrement.",
      memo: "Palliatif = confort, symptômes, proches.",
      mots: []
    },
    {
      id: "precarite", ue: "B1", theme: "b1-social",
      titre: "Précarité et accès aux soins",
      resume: "Repérer les difficultés sociales et connaître les dispositifs d’aide.",
      simple: "La précarité, c’est une situation d’insécurité (logement, revenus, emploi, papiers) qui rend difficile l’accès aux soins et le suivi des traitements. Repérer ces difficultés permet d’adapter le projet de soins et d’orienter vers l’assistante sociale et les bons dispositifs.",
      points: [
        "Signes : renoncement aux soins, retards de consultation, difficultés à acheter les traitements, absence de domicile, isolement",
        "Assistant(e) de service social : interlocuteur clé à l’hôpital",
        "Complémentaire santé solidaire (C2S) : prise en charge des frais pour les personnes à faibles revenus",
        "Aide médicale de l’État (AME) : pour les personnes étrangères en situation irrégulière",
        "PASS (permanences d’accès aux soins de santé) à l’hôpital",
        "115 : numéro d’urgence pour l’hébergement (Samu social)",
        "Adapter les soins : conservation des médicaments, possibilité de suivre les rendez-vous, alimentation, hygiène"
      ],
      exemple: "Un patient sans domicile sort avec un traitement à garder au frais : l’équipe et l’assistante sociale cherchent une solution avant la sortie.",
      piege: "Ne pas présumer : poser la question des conditions de vie avec tact, à tous les patients.",
      memo: "C2S = revenus faibles · AME = sans titre de séjour · 115 = hébergement.",
      mots: []
    },
    {
      id: "alzheimer", ue: "B1", theme: "b1-age",
      titre: "Maladie d’Alzheimer et troubles neurocognitifs",
      resume: "Comprendre la maladie et adapter sa communication et ses soins.",
      simple: "La maladie d’Alzheimer est la plus fréquente des maladies qui altèrent progressivement la mémoire, le langage, l’orientation et l’autonomie. Les troubles du comportement (agitation, opposition, déambulation) sont souvent une façon d’exprimer un inconfort, une peur ou une douleur. L’approche relationnelle est au cœur des soins.",
      points: [
        "Signes : oublis des faits récents, désorientation dans le temps et l’espace, difficulté à trouver ses mots, perte d’autonomie progressive",
        "Communication : se présenter à chaque fois, phrases courtes, une consigne à la fois, regard et sourire, ton calme",
        "Ne pas contredire ni mettre en échec ; rassurer, détourner l’attention si besoin",
        "Garder des repères : routines, objets personnels, calendrier, lumière du jour",
        "Agitation : chercher une cause (douleur, faim, besoin d’uriner, peur, bruit)",
        "Soutenir les aidants : risque d’épuisement ; accueil de jour, plateformes de répit, associations"
      ],
      exemple: "Une résidente veut absolument « rentrer chez elle pour faire à manger aux enfants » : plutôt que de la contredire, tu l’écoutes, tu lui parles de ses enfants et tu l’accompagnes vers une activité.",
      piege: "Un patient « agressif » à la toilette peut avoir mal ou avoir peur : on change d’approche plutôt que de forcer.",
      memo: "Une phrase, une consigne, un sourire.",
      mots: []
    },

    // ───────────── UE B.3 — soins (lot 2) ─────────────
    {
      id: "examen-clinique", ue: "B3", theme: "b3-consultation",
      titre: "L’entretien et l’examen clinique infirmier",
      resume: "Anamnèse, inspection, palpation, percussion, auscultation : la méthode.",
      simple: "L’examen clinique commence par écouter : l’anamnèse, c’est l’histoire racontée par le patient. Puis on observe, on touche, on écoute avec méthode. Avec la nouvelle loi, la consultation infirmière se développe : savoir recueillir et organiser ces informations est une compétence centrale.",
      points: [
        "Anamnèse : motif de consultation, histoire du problème, antécédents, traitements, allergies, mode de vie",
        "Pour une douleur ou un symptôme : quand ça a commencé, où, comment, combien (0–10), ce qui aggrave ou soulage, depuis quand",
        "Inspection : regarder (couleur de la peau, respiration, posture, plaies)",
        "Palpation : toucher (température, douleur, gonflement, pouls)",
        "Percussion : tapoter pour apprécier un son (plein ou creux)",
        "Auscultation : écouter au stéthoscope (cœur, poumons, ventre)",
        "Synthèse : relier les données, identifier les problèmes, décider des actions, orienter si besoin, tracer"
      ],
      exemple: "Une patiente se plaint d’avoir mal au ventre : tu lui demandes depuis quand, où exactement, l’intensité, ce qui la soulage, si elle a des nausées, quand elle a eu des selles, puis tu prends ses paramètres.",
      piege: "Ne pas sauter l’entretien : beaucoup d’informations décisives viennent de ce que le patient raconte.",
      memo: "Écouter → Regarder → Toucher → Tapoter → Écouter (stéthoscope).",
      mots: [ { mot: "Anamnèse", def: "Histoire de la maladie racontée par le patient." } ]
    },
    {
      id: "prelevements", ue: "B3", theme: "b3-examens",
      titre: "Prélèvements et préparation aux examens",
      resume: "Prise de sang, ECBU, glycémie capillaire, imagerie : les règles clés.",
      simple: "Un bon résultat d’examen dépend d’un bon prélèvement : bon patient, bon moment, bonne technique, bon étiquetage, bon acheminement. Pour les examens d’imagerie ou les endoscopies, il faut préparer le patient (jeûne, allergies, objets métalliques…) et l’informer.",
      points: [
        "Vérifier la prescription, l’identité, les conditions (à jeun ?), les allergies (antiseptique, latex)",
        "Prise de sang : garrot peu serré et laissé peu de temps, respecter l’ordre des tubes du laboratoire (hémocultures en premier), étiqueter au lit du patient",
        "Après : compression du point de ponction, élimination immédiate de l’aiguille, acheminement rapide",
        "ECBU : toilette, milieu de jet, flacon stérile, envoi rapide (ou conservation au froid selon protocole)",
        "Glycémie capillaire : mains propres et sèches, piquer sur le côté du doigt, changer de doigt",
        "Imagerie avec produit de contraste iodé : rechercher allergie, fonction rénale, certains traitements (ex. metformine)",
        "IRM : retirer tout objet métallique ; vérifier l’absence de pacemaker ou d’implant incompatible",
        "Endoscopie : jeûne, consentement, parfois préparation colique"
      ],
      exemple: "Avant un scanner injecté, tu vérifies que la créatinine a été dosée, tu demandes au patient s’il a déjà fait une allergie à l’iode et tu poses une voie veineuse si prescrit.",
      piege: "Un tube non étiqueté ou mal étiqueté sera refusé par le laboratoire (et c’est un risque d’erreur d’identité).",
      memo: "Prélever : Bon patient, Bon moment, Bon tube, Bonne étiquette, Bon transport.",
      mots: []
    },
    {
      id: "pansements", ue: "B3", theme: "b3-plaies",
      titre: "Les plaies et les pansements",
      resume: "Évaluer une plaie, choisir un pansement et respecter l’asepsie.",
      simple: "Une plaie cicatrise mieux en milieu humide et propre. Avant de choisir un pansement, on évalue la plaie : son type, sa taille, sa couleur, la quantité d’écoulement, l’état de la peau autour, la douleur. Les plaies chroniques (escarres, ulcères de jambe) demandent une prise en charge de leur cause, pas seulement un pansement.",
      points: [
        "Plaie aiguë (chirurgicale, traumatique) ou chronique (escarre, ulcère, plaie du pied diabétique)",
        "Couleurs : noir = nécrose, jaune = fibrine, rouge = bourgeonnement, rose = épidermisation",
        "Nettoyage : souvent au sérum physiologique ou à l’eau et au savon selon la plaie ; l’antiseptique n’est pas systématique sur une plaie chronique",
        "Asepsie : du plus propre vers le plus sale, matériel stérile, hygiène des mains",
        "Pansements : hydrocolloïdes (peu d’écoulement), alginates (plaies qui coulent beaucoup ou saignent), hydrocellulaires (écoulement modéré), hydrogels (plaies sèches ou nécrotiques), interfaces, pansements au charbon (odeurs) ou à l’argent (infection)",
        "Signes d’infection : rougeur qui s’étend, chaleur, douleur, pus, odeur, fièvre",
        "Évaluer et tracer : mesures, photo selon protocole, douleur, aspect"
      ],
      exemple: "Une escarre du talon couverte d’une plaque noire : on ne la décolle pas sans avis, le choix du traitement revient à l’équipe selon le protocole.",
      piege: "Anticiper la douleur avant un pansement douloureux (antalgique prescrit, gestes doux, pause si besoin).",
      memo: "Noir, Jaune, Rouge, Rose : de la nécrose à la cicatrisation.",
      mots: [ { mot: "Exsudat", def: "Liquide qui s’écoule d’une plaie." } ]
    },
    {
      id: "vaccination", ue: "B3", theme: "b3-vaccins",
      titre: "La vaccination",
      resume: "Principes, obligations, conservation, administration et surveillance.",
      simple: "Un vaccin apprend au système immunitaire à reconnaître un microbe sans tomber malade, grâce à la mémoire immunitaire. Il protège la personne vaccinée, mais aussi les autres, en limitant la circulation du microbe : c’est la protection collective. Les infirmiers peuvent prescrire et administrer de nombreux vaccins.",
      points: [
        "Vaccins vivants atténués (ROR, BCG, fièvre jaune…) : contre-indiqués en cas de grossesse ou d’immunodépression",
        "Vaccins inactivés : ne contiennent pas de microbe vivant",
        "Enfants : 11 vaccins obligatoires pour les enfants nés depuis 2018, avec des ajouts récents (méningocoques) — vérifie le calendrier vaccinal de l’année",
        "Soignants : hépatite B obligatoire ; grippe et covid recommandés",
        "Conservation : au réfrigérateur entre +2 et +8 °C (chaîne du froid), jamais congelé",
        "Administration : souvent en intramusculaire (deltoïde chez l’adulte) ; vérifier la date de péremption",
        "Surveillance : rester environ 15 minutes après l’injection (risque allergique rare) ; effets fréquents : douleur au point d’injection, fièvre légère",
        "Traçabilité : nom du vaccin, numéro de lot, date, site d’injection"
      ],
      exemple: "Avant de vacciner un patient contre la grippe, tu vérifies l’absence de contre-indication, le produit et sa péremption, puis tu traces le numéro de lot dans le dossier et le carnet de vaccination.",
      piege: "Un vaccin oublié hors du réfrigérateur ou congelé n’est plus fiable : on le signale au lieu de l’utiliser.",
      memo: "Vacciner = se protéger + protéger les autres.",
      mots: [ { mot: "Calendrier vaccinal", def: "Document officiel mis à jour chaque année qui fixe les vaccinations recommandées et obligatoires." } ]
    },
    {
      id: "injections", ue: "B3", theme: "b3-medicaments",
      titre: "Les injections : SC, IM, ID",
      resume: "Les voies injectables les plus fréquentes et leurs règles.",
      simple: "Une injection fait passer un médicament à travers la peau. Selon la profondeur, on parle d’intradermique (dans la peau), de sous-cutanée (sous la peau, dans la graisse) ou d’intramusculaire (dans le muscle). Chaque voie a ses sites, son angle et ses précautions.",
      points: [
        "Intradermique (ID) : très superficielle, angle faible ; ex. test tuberculinique",
        "Sous-cutanée (SC) : abdomen, cuisse, bras ; ex. insuline, héparines de bas poids moléculaire ; alterner les sites",
        "Intramusculaire (IM) : deltoïde, cuisse (vaste externe), fesse (quadrant supéro-externe) ; ex. vaccins",
        "Avant : prescription, 5 B, allergies, hygiène des mains, antisepsie de la peau selon protocole",
        "HBPM en seringue préremplie : ne pas purger la bulle d’air, ne pas masser après",
        "Insuline : vérifier la glycémie et le type d’insuline (rapide, lente), changer de site à chaque fois",
        "Après : collecteur immédiat, surveillance, traçabilité"
      ],
      exemple: "Pour une injection d’HBPM, tu fais un pli cutané sur l’abdomen, à distance du nombril, tu injectes sans purger la bulle, puis tu relâches le pli et tu ne masses pas.",
      piege: "Ne jamais recapuchonner l’aiguille après une injection.",
      memo: "ID = Dans la peau · SC = Sous la peau · IM = Dans le muscle.",
      mots: [ { mot: "Lipodystrophie", def: "Bosse ou creux sous la peau dû à des injections toujours au même endroit." } ]
    },
    {
      id: "perfusion", ue: "B3", theme: "b3-medicaments",
      titre: "Perfusion et cathéter veineux périphérique",
      resume: "Surveiller une perfusion et un point de ponction pour éviter les complications.",
      simple: "Une perfusion permet d’administrer des liquides ou des médicaments directement dans une veine, grâce à un petit tube souple : le cathéter. C’est pratique, mais c’est aussi une porte d’entrée pour les microbes. La surveillance du point de ponction et du débit fait partie des soins quotidiens.",
      points: [
        "Vérifier : prescription (produit, volume, durée), débit, étiquetage de la poche, date et heure de pose du cathéter",
        "Point de ponction : rougeur, douleur, chaleur, cordon induré (veinite) ou gonflement froid (diffusion hors de la veine)",
        "Pansement transparent propre et bien collé ; manipulations aseptiques des lignes",
        "Retirer tout cathéter inutile : moins de cathéters, moins d’infections",
        "Changement du cathéter et des tubulures selon le protocole de l’établissement",
        "Débit : par régulateur ou pompe ; vérifier régulièrement que le volume passé correspond au temps écoulé"
      ],
      exemple: "En tour de 14 h, le bras de M. A. est gonflé et froid autour du cathéter et la perfusion n’avance plus : tu arrêtes la perfusion et tu préviens (diffusion).",
      piege: "Un cathéter « au cas où » sans perfusion ni injection prévue est un risque infectieux : on signale qu’il n’est plus utile.",
      memo: "Point de ponction : Rouge, Douloureux, Gonflé ? → j’arrête et je préviens.",
      mots: [ { mot: "Veinite", def: "Inflammation de la veine au niveau du cathéter." } ]
    },
    {
      id: "transfusion", ue: "B3", theme: "b3-medicaments",
      titre: "La transfusion sanguine",
      resume: "Les étapes de sécurité et la surveillance d’une transfusion.",
      simple: "Transfuser, c’est administrer des produits sanguins (concentrés de globules rouges, plaquettes, plasma). C’est un acte à haut risque : une erreur de compatibilité peut être mortelle. Toute la sécurité repose sur des vérifications d’identité et de compatibilité très strictes, jusqu’au lit du patient. En 1re année, tu observes et tu participes à la surveillance.",
      points: [
        "Prescription médicale, information et consentement du patient",
        "Documents : carte de groupe sanguin valide (deux déterminations), recherche d’anticorps irréguliers récente",
        "Contrôle ultime au lit du patient : identité, concordance patient / produit / documents, test de compatibilité pour les globules rouges",
        "Débuter lentement et rester près du patient les premières minutes",
        "Surveiller : pouls, tension, température, état général, avant, pendant et après",
        "Signes d’alerte : frissons, fièvre, douleurs lombaires, malaise, urticaire, gêne respiratoire, chute de tension → arrêter la transfusion et alerter",
        "Traçabilité obligatoire (hémovigilance)"
      ],
      exemple: "Dix minutes après le début d’une transfusion, la patiente frissonne et a mal au dos : la transfusion est arrêtée immédiatement et le médecin prévenu.",
      piege: "Le contrôle ultime se fait au lit du patient, par la personne qui pose la transfusion, sans jamais être délégué ni fait à l’avance.",
      memo: "Bon patient + bon produit + bonne compatibilité = au lit du patient.",
      mots: [ { mot: "Hémovigilance", def: "Surveillance des incidents liés à la transfusion." } ]
    },
    {
      id: "alimentation", ue: "B3", theme: "b3-soinsbase",
      titre: "Alimentation, hydratation et dénutrition",
      resume: "Repérer la dénutrition, aider au repas et prévenir les fausses routes.",
      simple: "Bien manger et bien boire sont indispensables pour guérir : la dénutrition retarde la cicatrisation, augmente les infections et les chutes. Elle est très fréquente chez les personnes âgées et hospitalisées. Le soignant la repère en pesant, en observant les plateaux et en aidant aux repas.",
      points: [
        "Besoins en eau : environ 1,5 L de boissons par jour chez l’adulte (plus en cas de fièvre ou de chaleur)",
        "IMC = poids (kg) ÷ taille² (m)",
        "Dénutrition : perte de poids (≥ 5 % en 1 mois ou ≥ 10 % en 6 mois), IMC bas, apports insuffisants",
        "Surveillance : pesée régulière, fiches alimentaires, aspect du plateau",
        "Aide au repas : position assise, présentation agréable, rythme de la personne, prothèses dentaires en place",
        "Fausses routes : toux pendant le repas, voix mouillée ; textures adaptées, eau gélifiée, tête légèrement penchée en avant",
        "Compléments nutritionnels oraux sur prescription"
      ],
      exemple: "M. F. tousse à chaque gorgée d’eau : tu arrêtes, tu le redresses et tu le signales pour une évaluation de la déglutition et des textures adaptées.",
      piege: "Ne jamais faire manger un patient allongé ou somnolent.",
      memo: "Peser, Observer, Aider : les 3 réflexes contre la dénutrition.",
      mots: [ { mot: "IMC", def: "Indice de masse corporelle." } ]
    },
    {
      id: "specifiques-pedia", ue: "B3", theme: "b3-specifiques",
      titre: "Soigner un enfant et sa famille",
      resume: "Adapter ses soins à l’âge, intégrer les parents, évaluer la douleur de l’enfant.",
      simple: "Soigner un enfant, c’est aussi accompagner ses parents. L’enfant a besoin d’explications adaptées à son âge, de sécurité et de ses repères (doudou, parent présent). La douleur doit être anticipée, car les soins peuvent laisser des souvenirs durables.",
      points: [
        "Expliquer avec des mots simples, montrer le matériel, jouer, ne jamais mentir (« ça ne fera pas mal »)",
        "Présence des parents pendant les soins, s’ils le souhaitent",
        "Douleur : échelles adaptées à l’âge (visages dès environ 4 ans, échelle numérique plus tard, grilles d’observation chez le tout-petit)",
        "Anticiper : crème anesthésiante, distraction, solution sucrée chez le nourrisson selon protocole",
        "Sécurité : barrières de lit, ne jamais laisser un bébé seul sur une table à langer",
        "Médicaments : doses selon le poids, double vérification"
      ],
      exemple: "Avant une prise de sang chez un enfant de 6 ans, tu poses la crème anesthésiante prescrite à l’avance et tu proposes au parent de le distraire avec un livre.",
      piege: "Dire « ça ne fera pas mal » quand c’est faux détruit la confiance de l’enfant pour les soins suivants.",
      memo: "Expliquer, Distraire, Soulager, Rassurer.",
      mots: []
    },
    {
      id: "specifiques-psy", ue: "B3", theme: "b3-specifiques",
      titre: "Soins en psychiatrie : relation, cadre, crise",
      resume: "L’entretien infirmier, l’apaisement et les règles strictes de l’isolement et de la contention.",
      simple: "En psychiatrie, la relation est le premier outil de soin. L’infirmier mène des entretiens, observe, aide à apaiser les moments de crise et participe aux activités thérapeutiques. L’isolement et la contention sont des mesures de dernier recours, très encadrées par la loi.",
      points: [
        "Entretien infirmier : écoute, observation de l’humeur, du discours, du comportement, du sommeil, de l’appétit",
        "Évaluer régulièrement le risque suicidaire",
        "Désescalade : calme, espace, proposer des choix, éviter l’affrontement",
        "Isolement et contention : uniquement sur décision d’un psychiatre, pour prévenir un danger immédiat, pour une durée limitée, avec surveillance rapprochée et traçabilité dans un registre",
        "Respect des droits du patient, y compris en soins sans consentement",
        "Activités thérapeutiques, médiations, réhabilitation psychosociale"
      ],
      exemple: "Un patient très angoissé tourne dans le couloir : tu lui proposes de s’asseoir dans un endroit calme et de parler, plutôt que de lui demander de retourner dans sa chambre.",
      piege: "La contention n’est jamais une mesure de commodité ni une sanction.",
      memo: "La relation d’abord, la contrainte en tout dernier recours.",
      mots: []
    },
    {
      id: "tabac", ue: "B3", theme: "b3-specifiques",
      titre: "Accompagner l’arrêt du tabac",
      resume: "Le conseil minimal, les substituts nicotiniques et les ressources.",
      simple: "Le tabac est la première cause de mortalité évitable en France. Chaque soignant peut aider à l’arrêt, même en quelques minutes. Les substituts nicotiniques (patchs, gommes, pastilles…) doublent les chances de réussite et peuvent être prescrits par les infirmiers.",
      points: [
        "Conseil minimal : « Fumez-vous ? » puis « Souhaitez-vous arrêter ? » — et proposer de l’aide",
        "Évaluer la dépendance (ex. cigarette dans la demi-heure qui suit le réveil = dépendance forte)",
        "Substituts nicotiniques : patch associé à une forme orale pour les envies, à dose suffisante",
        "Entretien motivationnel : faire émerger les raisons du patient sans le culpabiliser",
        "Ressources : Tabac info service (39 89 et application), consultations de tabacologie",
        "Hospitalisation : bon moment pour proposer un substitut (on ne peut pas fumer dans l’établissement)"
      ],
      exemple: "Un patient hospitalisé est irritable et réclame de sortir fumer : tu lui proposes un substitut nicotinique sur prescription et tu en profites pour parler de l’arrêt.",
      piege: "La nicotine n’est pas la substance la plus dangereuse de la cigarette : ce sont surtout la combustion et le goudron. Les substituts sont sûrs.",
      memo: "Demander, Conseiller, Accompagner.",
      mots: []
    },

    // ───────────── Lot 3 : B.2, B.4, C, D, E, A.2 ─────────────
    {
      id: "violences-soignants", ue: "A2", theme: "a2-violences",
      titre: "Violences envers les soignants et violences sexistes et sexuelles",
      resume: "Ce que dit la loi, comment réagir et à qui s’adresser, y compris en tant qu’étudiante.",
      simple: "Les soignants peuvent être victimes de violences verbales ou physiques de la part de patients ou de proches, et parfois de violences sexistes ou sexuelles, y compris de la part de collègues. Ce n’est jamais « normal » ni « faisant partie du métier ». La loi protège les professionnels de santé et l’établissement doit les soutenir.",
      points: [
        "Les violences contre un professionnel de santé sont plus sévèrement punies par la loi",
        "Après une agression : se mettre en sécurité, en parler, consulter (certificat médical), déclarer l’événement à l’établissement",
        "Possibilité de porter plainte ; l’employeur public doit accorder sa protection à son agent (protection fonctionnelle)",
        "Violences sexistes et sexuelles : outrage sexiste, harcèlement, agression sexuelle, viol — toutes interdites et punies",
        "Étudiante en stage : prévenir tout de suite son formateur référent ou la direction de l’IFSI ; cellules d’écoute des établissements et universités",
        "3919 : numéro national d’écoute pour les violences faites aux femmes"
      ],
      exemple: "En stage, un professionnel fait des remarques à connotation sexuelle répétées : ce n’est pas de « l’humour », tu peux en parler à ton référent IFSI, qui doit agir.",
      piege: "Se taire « pour ne pas compromettre son stage » : l’IFSI est là pour protéger l’étudiante et a l’obligation d’agir.",
      memo: "Se protéger · En parler · Déclarer.",
      mots: [ { mot: "Protection fonctionnelle", def: "Soutien juridique et financier que l’employeur public doit à son agent agressé." } ]
    },
    {
      id: "vss", ue: "B2", theme: "b2-vss",
      titre: "Violences sexistes et sexuelles : comprendre et repérer",
      resume: "Le consentement, les conséquences sur la santé et le rôle des soignants.",
      simple: "Les violences sexistes et sexuelles (VSS) sont fréquentes et ont des conséquences graves et durables sur la santé physique et psychique (psychotraumatisme). Les soignants sont souvent les premiers à qui les victimes peuvent se confier. Il faut savoir poser la question, écouter, croire et orienter.",
      points: [
        "Consentement : libre, éclairé, spécifique, et réversible à tout moment ; le silence ou l’absence de refus ne valent pas consentement",
        "Formes : propos sexistes, harcèlement, exhibition, agressions sexuelles, viol, violences au sein du couple",
        "Conséquences : psychotraumatisme, anxiété, dépression, addictions, douleurs chroniques, troubles du sommeil",
        "Repérage systématique : poser la question avec tact, dans un lieu confidentiel, sans l’entourage",
        "Écouter sans juger, croire la personne, ne pas la presser",
        "Orienter : médecin, unités médico-judiciaires, associations, 3919, 119 pour les mineurs",
        "VSS en milieu étudiant : dispositifs d’écoute et de signalement dans les universités et IFSI"
      ],
      exemple: "Une patiente revient souvent aux urgences pour des « chutes » : tu lui demandes, seule à seule, si quelqu’un lui fait du mal à la maison.",
      piege: "Demander « Pourquoi vous n’êtes pas partie ? » culpabilise la victime : on évite toute question qui juge.",
      memo: "Demander, Écouter, Croire, Orienter.",
      mots: [ { mot: "Psychotraumatisme", def: "Conséquences psychiques durables d’un événement traumatique." } ]
    },
    {
      id: "addictions", ue: "B2", theme: "b2-addictions",
      titre: "Les conduites addictives",
      resume: "Dépendance, alcool, drogues, écrans : comprendre et réduire les risques.",
      simple: "L’addiction, c’est une perte de contrôle : la personne continue un comportement (consommer un produit, jouer…) malgré ses conséquences négatives. Ce n’est pas un manque de volonté, mais une maladie qui modifie le cerveau. L’approche soignante repose sur l’écoute sans jugement et la réduction des risques.",
      points: [
        "Signes de dépendance : envie irrépressible (craving), perte de contrôle, tolérance (besoin d’augmenter les doses), signes de manque à l’arrêt",
        "Addictions avec produit (tabac, alcool, cannabis, médicaments, autres drogues) ou sans produit (jeux d’argent, écrans)",
        "Repères alcool : maximum 10 verres standard par semaine, pas plus de 2 par jour, et des jours sans alcool",
        "Sevrage alcoolique à l’hôpital : surveiller tremblements, sueurs, agitation, hallucinations (risque de crise convulsive et de delirium tremens)",
        "Réduction des risques : matériel stérile, information, traitements de substitution aux opioïdes",
        "Ressources : CSAPA (centres de soins en addictologie), Alcool info service, Drogues info service, Joueurs info service"
      ],
      exemple: "Un patient hospitalisé depuis 2 jours devient tremblant, en sueur et agité : penser à un sevrage alcoolique et le signaler rapidement.",
      piege: "Les jugements (« il n’a qu’à arrêter ») éloignent les personnes des soins.",
      memo: "Addiction = perte de contrôle malgré les conséquences.",
      mots: [ { mot: "Craving", def: "Envie impérieuse de consommer." } ]
    },
    {
      id: "facteur-humain", ue: "B4", theme: "b4-culture",
      titre: "Facteur humain et communication sécurisée (SAED)",
      resume: "Fatigue, interruptions, communication : ce qui favorise les erreurs et comment s’en protéger.",
      simple: "Tout le monde peut se tromper, surtout quand on est fatigué, interrompu ou pressé. Le facteur humain, c’est tout ce qui, dans notre fonctionnement et notre environnement, favorise ou évite les erreurs. Des outils simples améliorent la sécurité : check-lists, double contrôle, et une façon structurée de transmettre une information urgente, la méthode SAED.",
      points: [
        "Facteurs d’erreur : fatigue, stress, interruptions de tâche, charge de travail, habitudes, communication floue",
        "Interruptions pendant la préparation des médicaments : à limiter (zone ou signe « ne pas déranger »)",
        "SAED : Situation (ce qui se passe), Antécédents (contexte), Évaluation (ce que j’en pense), Demande (ce que j’attends)",
        "Répéter une consigne orale pour la vérifier (« je relis : … »)",
        "Check-lists (ex. au bloc opératoire), double contrôle pour les médicaments à risque",
        "Oser parler (« je ne suis pas sûre, je préfère vérifier ») quel que soit son statut",
        "Patient acteur : l’inviter à poser des questions et à signaler ce qui lui semble anormal"
      ],
      exemple: "Tu appelles le médecin : « Mme X, chambre 12 (S), opérée hier du genou (A), FC 120, PA 85/50, pâle (E). Pouvez-vous venir la voir maintenant ? (D) »",
      piege: "Une étudiante qui voit une erreur et n’ose pas le dire : signaler est un devoir, l’équipe doit l’accueillir sans reproche.",
      memo: "SAED = Situation, Antécédents, Évaluation, Demande.",
      mots: []
    },
    {
      id: "risques-soignant", ue: "C1", theme: "c1-soignant",
      titre: "Prendre soin de soi : risques du métier de soignant",
      resume: "Dos, stress, fatigue, émotions : prévenir pour durer dans le métier.",
      simple: "Soigner les autres expose à des risques pour sa propre santé : le dos (porter, mobiliser), les horaires décalés, le stress, les émotions face à la souffrance ou à la mort. Les connaître et les prévenir dès la formation, c’est protéger sa santé et la qualité des soins.",
      points: [
        "Troubles musculosquelettiques (TMS) : utiliser les aides techniques (lève-personne, draps de glisse), ne pas porter seule, plier les jambes, garder le dos droit, rapprocher la charge",
        "Risques psychosociaux : stress, surcharge, conflits, violences, épuisement professionnel (burn-out)",
        "Charge émotionnelle : décès, souffrance, situations difficiles → en parler (débriefing, groupes de parole, analyse des pratiques)",
        "Horaires décalés : sommeil, alimentation, récupération",
        "Risque infectieux : précautions standard, vaccination, conduite à tenir AES",
        "Ressources : médecine du travail ou service de santé étudiante, cadre, formateurs, psychologue"
      ],
      exemple: "Pour remonter un patient lourd dans son lit, tu demandes l’aide d’une collègue et tu utilises le drap de glisse plutôt que de tirer seule.",
      piege: "« Je me débrouille seule pour ne pas déranger » : c’est comme ça qu’on se blesse le dos.",
      memo: "Mon dos, ma santé : jamais seule, toujours avec l’aide technique.",
      mots: [ { mot: "Burn-out", def: "Épuisement physique et émotionnel lié au travail." } ]
    },
    {
      id: "ecosoins", ue: "C2", theme: "c2-ecosoins",
      titre: "Soins écoresponsables au quotidien",
      resume: "Les gestes concrets pour réduire l’impact environnemental des soins, sans risque pour le patient.",
      simple: "Le secteur de la santé produit beaucoup de déchets et de gaz à effet de serre. L’éco-conception des soins consiste à se demander, pour chaque soin : est-ce utile ? peut-on faire aussi bien avec moins ? La règle d’or : jamais au détriment de la sécurité et de l’hygiène.",
      points: [
        "Juste soin : éviter les soins, examens et matériels inutiles (ex. gants seulement quand ils sont indiqués)",
        "Passer de la voie IV à la voie orale dès que c’est possible (sur prescription) : moins de matériel, moins d’infections",
        "Bien trier : un déchet ordinaire mis en DASRI coûte et pollue beaucoup plus",
        "Médicaments non utilisés : à rapporter en pharmacie, jamais à l’évier ni à la poubelle",
        "Limiter les impressions, éteindre les écrans et lumières inutiles",
        "Mobilités douces et alimentation durable : co-bénéfices pour la santé et l’environnement"
      ],
      exemple: "Pour une toilette sans contact avec des liquides biologiques, tu te passes de gants : bonne pratique d’hygiène et geste écoresponsable.",
      piege: "Réutiliser un matériel à usage unique pour « faire des économies » est interdit et dangereux.",
      memo: "Utile ? Moins ? Mieux trié ?",
      mots: [ { mot: "Éco-conception des soins", def: "Concevoir les soins pour réduire leur impact environnemental à qualité égale." } ]
    },
    {
      id: "crises-env", ue: "C2", theme: "c2-crises",
      titre: "Canicule et crises environnementales",
      resume: "Protéger les personnes vulnérables pendant une vague de chaleur et en cas de catastrophe.",
      simple: "Les vagues de chaleur sont de plus en plus fréquentes et dangereuses, surtout pour les personnes âgées, les nourrissons, les malades chroniques et les personnes isolées ou sans abri. Les soignants ont un rôle de prévention et de repérage. En cas de catastrophe (inondation, accident industriel), des plans d’urgence organisent la réponse.",
      points: [
        "Personnes à risque : âgées, nourrissons, malades chroniques, personnes prenant certains médicaments (diurétiques, psychotropes), isolées, sans domicile",
        "Prévention : faire boire régulièrement, rafraîchir (brumisation, linge humide), fermer volets le jour, aérer la nuit, éviter les efforts aux heures chaudes",
        "Signes d’alerte : fatigue inhabituelle, confusion, fièvre, peau chaude et sèche, crampes → coup de chaleur = urgence",
        "Plan canicule et registres des personnes vulnérables tenus par les mairies",
        "Catastrophes : plans ORSEC (secours) et dispositifs sanitaires ; plan blanc à l’hôpital, plan bleu en EHPAD",
        "Plan national santé-environnement : actions contre les pollutions et expositions"
      ],
      exemple: "Pendant une canicule en EHPAD, tu proposes à boire toutes les heures aux résidents, tu notes les quantités et tu signales toute confusion nouvelle.",
      piege: "La personne âgée ne ressent pas la soif : n’attends pas qu’elle demande à boire.",
      memo: "Canicule : Boire, Rafraîchir, Surveiller.",
      mots: []
    },
    {
      id: "entretien", ue: "D1", theme: "d1-entretien",
      titre: "L’entretien d’accueil et les situations difficiles",
      resume: "Accueillir un patient, accompagner une annonce, réagir à un refus de soins.",
      simple: "L’entretien d’accueil est souvent le premier contact entre le patient et l’équipe : il sert à recueillir des informations, à expliquer le fonctionnement du service et à créer un lien de confiance. Dans les situations difficiles (mauvaise nouvelle, refus de soins, fin de vie), le soignant doit surtout écouter, laisser du temps et ne pas rester seul.",
      points: [
        "Accueil : se présenter, présenter le service et la chambre, vérifier l’identité, recueillir les données (habitudes, traitements, allergies, personne de confiance)",
        "Lieu calme, temps suffisant, questions ouvertes, reformulation, synthèse",
        "Annonce d’une mauvaise nouvelle : faite par le médecin ; le soignant est présent ou reprend ensuite avec le patient, vérifie ce qu’il a compris, laisse s’exprimer les émotions",
        "Accepter le silence et les larmes ; ne pas minimiser (« ça va aller »)",
        "Refus de soins : comprendre les raisons, réexpliquer, proposer un autre moment ou une autre façon, informer l’équipe, tracer",
        "Ne pas rester seule face à une situation difficile : en parler en équipe"
      ],
      exemple: "Après l’annonce d’un diagnostic grave, tu reviens voir le patient : « Comment vous sentez-vous après ce que le médecin vous a dit ? Qu’en avez-vous retenu ? »",
      piege: "Donner des informations médicales qui n’ont pas encore été annoncées par le médecin.",
      memo: "Accueillir · Écouter · Reformuler · Laisser du temps.",
      mots: []
    },
    {
      id: "cps", ue: "D1", theme: "d1-cps",
      titre: "Compétences psychosociales et gestion du stress",
      resume: "Se connaître, gérer ses émotions et son stress pour mieux soigner.",
      simple: "Les compétences psychosociales, ce sont les capacités qui nous aident à gérer nos émotions, nos relations et nos décisions : savoir ce qu’on ressent, réguler son stress, communiquer, faire preuve d’empathie, résoudre un problème. Elles s’apprennent et se travaillent, et elles sont précieuses dans les études comme dans les soins.",
      points: [
        "Compétences cognitives : conscience de soi, pensée critique, prise de décision, résolution de problèmes",
        "Compétences émotionnelles : identifier et exprimer ses émotions, gérer son stress",
        "Compétences sociales : communication, empathie, coopération, gestion des conflits, affirmation de soi",
        "Gestion du stress : respiration lente (par exemple 6 respirations par minute pendant quelques minutes), sommeil, activité physique, pauses, parler à quelqu’un",
        "Avant un soin stressant : se préparer, répéter mentalement, demander à être accompagnée",
        "Après une situation difficile : débriefing, analyse de pratique"
      ],
      exemple: "Avant ta première injection en stage, tu prends 1 minute pour respirer lentement, tu revois les étapes dans ta tête et tu demandes à ta tutrice de rester près de toi.",
      piege: "Cacher ses émotions en permanence finit par épuiser : il est professionnel de reconnaître qu’on a été touchée par une situation.",
      memo: "Ressentir, Nommer, Réguler.",
      mots: []
    },
    {
      id: "leadership", ue: "D1", theme: "d1-leadership",
      titre: "Le leadership infirmier",
      resume: "Influencer positivement une équipe pour la qualité des soins, même sans être chef.",
      simple: "Le leadership, ce n’est pas le pouvoir hiérarchique : c’est la capacité à entraîner les autres vers un objectif commun. En soins, chaque infirmier exerce un leadership clinique : il coordonne, montre l’exemple, propose des améliorations et aide l’équipe à prendre des décisions.",
      points: [
        "Leadership ≠ autorité hiérarchique : un leader peut être n’importe quel membre de l’équipe",
        "Styles : directif (en urgence), participatif (on décide ensemble), délégatif (on fait confiance)",
        "Leadership transformationnel : inspirer, donner du sens, faire grandir les autres",
        "Leadership situationnel : adapter son style à la situation et aux personnes",
        "Qualités : communication, écoute, exemplarité, capacité à décider, gestion des conflits",
        "Impact : sécurité des patients, continuité des soins, cohésion d’équipe"
      ],
      exemple: "Pendant une urgence, l’infirmière répartit clairement les rôles (« toi le chariot, toi l’appel ») : leadership directif adapté à la situation.",
      piege: "Un seul style pour toutes les situations : le bon leader s’adapte.",
      memo: "Directif en urgence, participatif au quotidien.",
      mots: []
    },
    {
      id: "organisation", ue: "D2", theme: "d2-coord",
      titre: "Organiser sa journée de soins",
      resume: "Planifier, prioriser et coordonner ses soins avec l’équipe.",
      simple: "En stage, une des grandes difficultés est d’organiser sa journée : plusieurs patients, des soins à heures fixes, des imprévus. S’organiser, c’est faire un plan, prioriser, regrouper ce qui peut l’être et anticiper le matériel, tout en restant capable de s’adapter.",
      points: [
        "Prendre la relève : noter pour chaque patient les soins, les surveillances, les examens et les points d’attention",
        "Planifier : soins à heure fixe (médicaments, glycémies), soins programmables (toilettes, pansements), examens",
        "Prioriser : urgences vitales d’abord, puis soins à horaire imposé, puis le reste",
        "Regrouper les soins pour limiter les dérangements du patient (en respectant l’hygiène)",
        "Préparer le matériel à l’avance pour éviter les allers-retours",
        "Coordonner avec les aides-soignants, les autres professionnels et les services (radio, bloc)",
        "Réajuster en cours de journée et transmettre ce qui n’a pas été fait"
      ],
      exemple: "À 7 h, tu fais ta feuille de route : 8 h glycémie + insuline chambre 3, 9 h pansement chambre 5 avant le passage du chirurgien, 10 h départ en radio chambre 7…",
      piege: "Commencer par les soins les plus longs sans repérer ceux qui ont un horaire impératif.",
      memo: "Urgent → Horaire fixe → Programmable.",
      mots: []
    },
    {
      id: "structure", ue: "D2", theme: "d2-structure",
      titre: "Gérer une structure de soins : les bases",
      resume: "Stocks, matériel, déchets, plannings : ce qui fait tourner un service ou un cabinet.",
      simple: "Un service ou un cabinet infirmier ne fonctionne que si le matériel est disponible, entretenu et les plannings organisés. L’infirmier participe à cette gestion : commandes, vérification des chariots d’urgence, gestion des déchets, organisation des rendez-vous en libéral.",
      points: [
        "Gestion des stocks : commandes, rotation (le plus ancien en premier), vérification des dates de péremption",
        "Chariot d’urgence : vérifié et tracé régulièrement selon la procédure",
        "Maintenance des équipements (pompes, scopes) et signalement des pannes (matériovigilance)",
        "Gestion des déchets selon les filières (DASRI, ordinaires, recyclage)",
        "En libéral : plannings de rendez-vous, facturation, continuité des soins avec les autres professionnels",
        "Démarche écoresponsable dans les achats et l’organisation"
      ],
      exemple: "En vérifiant le chariot d’urgence, tu découvres un médicament périmé : tu le signales et il est remplacé immédiatement, la vérification est tracée.",
      piege: "Un matériel en panne remis en service sans signalement peut mettre un patient en danger.",
      memo: "Premier entré, premier sorti (stocks).",
      mots: [ { mot: "Matériovigilance", def: "Surveillance des incidents liés aux dispositifs médicaux." } ]
    },
    {
      id: "tutorat", ue: "D3", theme: "d3-pedagogie",
      titre: "Apprendre en stage : tutorat et évaluation",
      resume: "Qui t’accompagne en stage et comment tu es évaluée.",
      simple: "En stage, plusieurs personnes t’accompagnent, chacune avec son rôle. L’évaluation sert d’abord à te faire progresser (évaluation formative) avant de valider tes compétences. Plus tard, ce sera à toi d’accueillir et d’encadrer des étudiants : apprendre à apprendre te servira aussi à transmettre.",
      points: [
        "Maître de stage : responsable de l’organisation du stage dans la structure",
        "Tuteur de stage : suit ta progression et réalise les bilans",
        "Professionnels de proximité : t’encadrent au quotidien dans les soins",
        "Formateur référent de l’IFSI : fait le lien entre l’institut et le lieu de stage",
        "Évaluation formative : pour progresser (bilan de mi-stage) ; évaluation certificative : pour valider",
        "Feedback constructif : factuel, précis, sur ce qui a été bien fait et ce qui peut être amélioré",
        "Auto-évaluation : se situer soi-même dans ses compétences avant le bilan"
      ],
      exemple: "Au bilan de mi-stage, tu présentes ton auto-évaluation : « Je suis à l’aise pour les paramètres, je dois encore progresser dans l’organisation de ma matinée. »",
      piege: "Attendre la fin du stage pour dire qu’on se sent en difficulté : en parler tôt permet d’ajuster.",
      memo: "Formatif = pour progresser · Certificatif = pour valider.",
      mots: []
    },
    {
      id: "telesante", ue: "D4", theme: "d4-telesante",
      titre: "La télésanté",
      resume: "Téléconsultation, télésoin, télésurveillance : définitions et bonnes pratiques.",
      simple: "La télésanté, c’est soigner ou suivre un patient à distance grâce au numérique. Elle facilite l’accès aux soins, notamment dans les zones où il manque des professionnels. Les infirmiers peuvent réaliser du télésoin et participer à la télésurveillance et aux téléconsultations.",
      points: [
        "Téléconsultation : consultation d’un médecin (ou autre professionnel autorisé) à distance, en vidéo",
        "Télésoin : soin à distance réalisé par un pharmacien ou un auxiliaire médical, dont l’infirmier",
        "Téléexpertise : un professionnel demande l’avis d’un autre à distance",
        "Télésurveillance : suivi à distance de données (poids, tension, glycémie) avec des alertes",
        "Téléassistance : un professionnel en assiste un autre à distance pendant un acte",
        "Règles : consentement du patient, confidentialité (lieu, outils sécurisés), identification du patient, traçabilité dans le dossier"
      ],
      exemple: "Une infirmière à domicile assiste un patient pendant sa téléconsultation avec le médecin : elle prend les paramètres et montre la plaie à la caméra.",
      piege: "Utiliser une application de visioconférence grand public non sécurisée pour échanger des données de santé.",
      memo: "Consultation (médecin), Soin (infirmier), Expertise (entre pros), Surveillance (données).",
      mots: []
    },
    {
      id: "demarche-sci", ue: "E1", theme: "e1-recherche",
      titre: "La démarche scientifique et l’éthique de la recherche",
      resume: "Les étapes d’une recherche et les règles qui protègent les participants.",
      simple: "La démarche scientifique, c’est une méthode pour produire des connaissances fiables : on part d’une observation, on pose une question, on formule une hypothèse, on la teste avec une méthode rigoureuse, puis on publie les résultats pour qu’ils soient discutés et vérifiés par d’autres. Quand la recherche implique des personnes, des règles éthiques strictes s’appliquent.",
      points: [
        "Étapes : observation → question → hypothèse → méthode (expérience, enquête) → résultats → discussion → diffusion",
        "Relecture par les pairs : avant publication, d’autres chercheurs vérifient l’article",
        "Recommandations de bonnes pratiques (HAS, sociétés savantes) : synthèses des connaissances pour guider les soins",
        "Recherche impliquant la personne humaine : information, consentement, avis d’un comité de protection des personnes (CPP)",
        "Protection des données des participants (RGPD)",
        "Intégrité scientifique : ne pas inventer, falsifier ou plagier"
      ],
      exemple: "Une infirmière remarque que les patients dorment mal dans son service (observation) et se demande si réduire le bruit la nuit améliorerait leur sommeil (question).",
      piege: "Une seule étude ne suffit pas à « prouver » quelque chose : il faut des résultats reproduits.",
      memo: "Observer, Questionner, Tester, Partager.",
      mots: [ { mot: "CPP", def: "Comité de protection des personnes, qui donne un avis sur les projets de recherche." } ]
    },
    {
      id: "biostats", ue: "E1", theme: "e1-stats",
      titre: "Statistiques : les notions de base",
      resume: "Pourcentage, moyenne, écart-type, risque relatif, p-value : lire les chiffres d’une étude.",
      simple: "Les statistiques servent à résumer des données et à savoir si un résultat est dû au hasard ou non. Pas besoin d’être forte en maths : il suffit de comprendre ce que veulent dire quelques indicateurs pour lire un article.",
      points: [
        "Pourcentage : proportion sur 100",
        "Moyenne et médiane : valeurs centrales ; l’écart-type mesure la dispersion autour de la moyenne",
        "Variable quantitative (un nombre) ou qualitative (une catégorie)",
        "Risque relatif (RR) : compare le risque entre deux groupes ; RR = 1 → pas de différence, RR > 1 → risque augmenté, RR < 1 → risque diminué",
        "p-value : probabilité que le résultat soit dû au hasard ; souvent, p < 0,05 = résultat « statistiquement significatif »",
        "Intervalle de confiance : fourchette dans laquelle se trouve probablement la vraie valeur",
        "Graphiques : histogramme, diagramme en barres, camembert"
      ],
      exemple: "« Le risque de chute est de 0,6 (RR) dans le groupe qui a bénéficié du programme » : le programme diminue le risque de chute d’environ 40 %.",
      piege: "« Significatif » en statistique ne veut pas dire « important » : un effet peut être réel mais très petit.",
      memo: "RR = 1 : pareil · > 1 : plus de risque · < 1 : moins de risque.",
      mots: []
    },
    {
      id: "synthese", ue: "E1", theme: "e1-synthese",
      titre: "Rédiger une synthèse et citer ses sources",
      resume: "Construire un plan, citer correctement, éviter le plagiat, utiliser l’IA avec prudence.",
      simple: "Une synthèse rassemble et organise ce que disent plusieurs sources sur une question. Elle doit être claire, structurée et honnête : chaque idée empruntée est citée. C’est le travail évalué dans l’UE E.1, à l’écrit et à l’oral.",
      points: [
        "Plan : introduction (question et contexte), développement (organisé par idées, pas par article), conclusion (réponse et limites)",
        "Citer dans le texte et lister les références en fin de document, selon une norme (APA : auteur et année ; Vancouver : numéros)",
        "Plagiat : copier sans citer, même en reformulant légèrement, est une fraude",
        "Paraphraser : reformuler avec ses mots ET citer la source",
        "Figures et tableaux : numérotés, avec un titre et une source",
        "IA : peut aider à reformuler ou organiser, mais pas à inventer des sources ; vérifier chaque information, respecter les consignes de l’IFSI et signaler son usage",
        "Oral : support clair, peu de texte, respect du temps, répétition"
      ],
      exemple: "Dans le texte : « Le lever précoce réduit les complications (Dupont, 2023). » Puis en bibliographie la référence complète selon la norme demandée.",
      piege: "Les IA peuvent inventer des références qui n’existent pas : vérifie toujours dans une base de données.",
      memo: "Une idée empruntée = une citation.",
      mots: []
    },
    {
      id: "anglais-com", ue: "E2", theme: "e2-communication",
      titre: "Communiquer en anglais avec un patient",
      resume: "Rassurer, expliquer un soin, donner des consignes simples, gérer une urgence.",
      simple: "Avec un patient non francophone, des phrases simples et un ton rassurant font une grande différence. Parle lentement, utilise des gestes, montre le matériel et vérifie la compréhension. Pour les informations importantes, fais appel à un interprète professionnel.",
      points: [
        "« Don’t worry, I’m here to help you. » — Ne vous inquiétez pas, je suis là pour vous aider",
        "« I’m going to give you an injection / your medication. » — Je vais vous faire une injection / vous donner votre traitement",
        "« Please lie down / sit up. » — Allongez-vous / asseyez-vous, s’il vous plaît",
        "« Take a deep breath. » — Prenez une grande inspiration",
        "« Do you need to go to the toilet? » — Avez-vous besoin d’aller aux toilettes ?",
        "« Press this button if you need help. » — Appuyez sur ce bouton si vous avez besoin d’aide",
        "« Do you understand? Can you repeat? » — Vous comprenez ? Pouvez-vous répéter ?",
        "Vocabulaire : nausea (nausées), dizzy (vertigineux), fever (fièvre), blood test (prise de sang), stitches (points de suture)"
      ],
      exemple: "Avant une prise de sang chez un touriste, tu montres le garrot et dis : « I’m going to take a blood test. Small prick. Don’t worry. »",
      piege: "Parler plus fort n’aide pas à se faire comprendre : parler plus lentement et plus simplement, oui.",
      memo: "Slowly, simply, smile.",
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
    { ue: "B3", q: "Quelle est la méthode d’hygiène des mains à privilégier sur des mains propres et sèches ?", choices: ["Lavage au savon doux", "Friction hydro-alcoolique", "Port de gants", "Lavage antiseptique"], a: 1, exp: "La FHA est la méthode de référence, sauf mains visiblement sales ou mouillées." },
    { ue: "B3", q: "Pour prendre la tension d’un patient à la peau saine, il faut :", choices: ["Des gants stériles", "Des gants non stériles", "Pas de gants, FHA avant et après", "Un masque FFP2"], a: 2, exp: "Pas de risque de contact avec des liquides biologiques : pas de gants, mais hygiène des mains." },
    { ue: "B3", q: "Patient atteint de tuberculose pulmonaire : quel masque pour le soignant ?", choices: ["Masque chirurgical", "Masque FFP2", "Pas de masque", "Visière seule"], a: 1, exp: "Précautions « air » : FFP2 ajusté, porte fermée." },
    { ue: "B3", q: "Pourquoi se laver les mains au savon en plus de la FHA avec Clostridioides difficile ?", choices: ["Le savon tue mieux les virus", "Les spores résistent à l’alcool", "La FHA est interdite", "C’est une question de confort"], a: 1, exp: "Les spores ne sont pas détruites par l’alcool : le lavage les élimine mécaniquement." },
    { ue: "B3", q: "Après une piqûre avec une aiguille souillée, il faut d’abord :", choices: ["Faire saigner la plaie", "Nettoyer à l’eau et au savon puis antiseptique ≥ 5 min", "Attendre la fin du service", "Mettre un pansement et continuer"], a: 1, exp: "Ne pas faire saigner ; nettoyer, rincer, antiseptique, puis prévenir et consulter rapidement." },
    { ue: "B3", q: "Que signifie « per os » ?", choices: ["Par voie intraveineuse", "Par la bouche", "Sous la langue", "Par voie rectale"], a: 1, exp: "Per os = par la bouche (voie orale)." },
    { ue: "B3", q: "Laquelle de ces vérifications ne fait PAS partie des 5 B ?", choices: ["Bon patient", "Bonne dose", "Bon prix", "Bon moment"], a: 2, exp: "Les 5 B : bon patient, bon médicament, bonne dose, bonne voie, bon moment." },
    { ue: "B3", q: "Quel organe métabolise principalement les médicaments ?", choices: ["Le rein", "Le foie", "Le cœur", "La rate"], a: 1, exp: "Le foie métabolise ; le rein élimine surtout." },
    { ue: "B3", q: "1 g correspond à :", choices: ["100 mg", "1 000 mg", "10 000 mg", "1 000 µg"], a: 1, exp: "1 g = 1 000 mg ; 1 mg = 1 000 µg." },
    { ue: "B3", q: "Combien de grammes de glucose dans 500 mL de glucose 5 % ?", choices: ["5 g", "25 g", "50 g", "250 g"], a: 1, exp: "5 % = 5 g pour 100 mL, donc 25 g pour 500 mL." },
    { ue: "B3", q: "1 000 mL à passer en 8 h : quel débit ?", choices: ["80 mL/h", "100 mL/h", "125 mL/h", "250 mL/h"], a: 2, exp: "1 000 ÷ 8 = 125 mL/h." },
    { ue: "B3", q: "Avec un perfuseur standard, 1 mL correspond à :", choices: ["10 gouttes", "20 gouttes", "60 gouttes", "100 gouttes"], a: 1, exp: "1 mL = 20 gouttes (perfuseur standard)." },

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
    { ue: "E3", q: "La méthode Pomodoro consiste à :", choices: ["Travailler 2 h sans pause", "Alterner 25 min de travail et 5 min de pause", "Réviser uniquement le matin", "Ne faire que des QCM"], a: 1, exp: "25 minutes concentrées, 5 minutes de pause, et une pause plus longue toutes les 4 séries." },

    // A.1 (nouvelles)
    { ue: "A1", q: "Qui est considérée comme la fondatrice des soins infirmiers modernes ?", choices: ["Marie Curie", "Florence Nightingale", "Virginia Henderson", "Simone Veil"], a: 1, exp: "Florence Nightingale, notamment pendant la guerre de Crimée : hygiène et observation." },
    { ue: "A1", q: "Depuis quelle loi l’infirmier dispose-t-il d’un rôle propre ?", choices: ["1922", "1938", "1978", "2009"], a: 2, exp: "La loi de 1978 reconnaît à l’infirmier un rôle propre." },
    { ue: "A1", q: "Rester accroché à sa première impression sans la remettre en question est :", choices: ["Le biais d’ancrage", "Le biais de disponibilité", "La pensée critique", "La déduction"], a: 0, exp: "Le biais d’ancrage : on reste fixé sur la première hypothèse." },
    { ue: "A1", q: "La pratique fondée sur les données probantes associe :", choices: ["Uniquement les études scientifiques", "Preuves scientifiques, expertise du soignant et préférences du patient", "L’avis du médecin seul", "Les habitudes du service"], a: 1, exp: "Les trois piliers : preuves, expertise clinique, préférences du patient." },
    { ue: "A1", q: "Dans la formulation PES d’un diagnostic infirmier, le « E » signifie :", choices: ["Évaluation", "Étiologie", "Examen", "Effet"], a: 1, exp: "Problème, Étiologie (lié à…), Signes (se manifestant par…)." },
    { ue: "A1", q: "« Risque de chute lié à des troubles de l’équilibre » est un diagnostic :", choices: ["Réel", "De risque", "Médical", "De promotion de la santé"], a: 1, exp: "Pas encore de signes, mais des facteurs de risque : diagnostic de risque." },
    { ue: "A1", q: "Dans la grille AGGIR, une personne totalement autonome est classée en :", choices: ["GIR 1", "GIR 3", "GIR 6", "GIR 10"], a: 2, exp: "GIR 1 = dépendance totale, GIR 6 = autonome." },
    { ue: "A1", q: "Avec l’échelle de Braden, un score bas signifie :", choices: ["Un risque d’escarre faible", "Un risque d’escarre élevé", "Une douleur forte", "Une bonne autonomie"], a: 1, exp: "Plus le score de Braden est bas, plus le risque d’escarre est élevé." },

    // A.2
    { ue: "A2", q: "Quel texte est au sommet de la hiérarchie des normes en France ?", choices: ["La loi", "Le décret", "La Constitution", "L’arrêté"], a: 2, exp: "Constitution > traités > lois > décrets > arrêtés." },
    { ue: "A2", q: "Les devoirs propres à une profession constituent :", choices: ["La morale", "La déontologie", "L’éthique", "Le droit pénal"], a: 1, exp: "La déontologie : les devoirs d’une profession (code de déontologie des infirmiers)." },
    { ue: "A2", q: "Quelle responsabilité vise à punir une infraction ?", choices: ["Civile", "Administrative", "Pénale", "Disciplinaire"], a: 2, exp: "La responsabilité pénale sanctionne une infraction ; elle est personnelle." },
    { ue: "A2", q: "Qui juge un manquement à la déontologie infirmière ?", choices: ["L’ARS", "L’Ordre national des infirmiers", "La HAS", "Le tribunal administratif"], a: 1, exp: "Les chambres disciplinaires de l’Ordre des infirmiers." },
    { ue: "A2", q: "La loi du 4 mars 2002 relative aux droits des malades est aussi appelée :", choices: ["Loi Leonetti", "Loi Kouchner", "Loi Veil", "Loi HPST"], a: 1, exp: "Loi Kouchner : information, consentement, accès au dossier, personne de confiance." },
    { ue: "A2", q: "Un patient refuse un soin après avoir été informé. Que fais-tu ?", choices: ["Tu fais le soin quand même", "Tu respectes son refus, tu préviens le médecin et tu le traces", "Tu demandes à la famille de décider", "Tu ignores le refus s’il est âgé"], a: 1, exp: "Le refus doit être respecté après information sur les conséquences, signalé et tracé." },
    { ue: "A2", q: "La personne de confiance :", choices: ["Décide à la place du patient", "Est désignée par écrit par le patient et témoigne de sa volonté", "Est forcément un membre de la famille", "A accès à tout le dossier médical"], a: 1, exp: "Elle accompagne le patient et témoigne de sa volonté s’il ne peut plus s’exprimer." },
    { ue: "A2", q: "Lequel n’est PAS un des 4 grands principes éthiques ?", choices: ["Autonomie", "Bienfaisance", "Rentabilité", "Justice"], a: 2, exp: "Les 4 principes : autonomie, bienfaisance, non-malfaisance, justice." },
    { ue: "A2", q: "Les directives anticipées sont :", choices: ["Les prescriptions du médecin pour la nuit", "Les volontés écrites d’une personne sur sa fin de vie", "Le protocole de soins palliatifs du service", "Un document de la famille"], a: 1, exp: "Rédigées par la personne, elles s’imposent au médecin sauf exceptions prévues par la loi." },
    { ue: "A2", q: "L’obstination déraisonnable (acharnement thérapeutique) est :", choices: ["Obligatoire", "Interdite par la loi", "Autorisée si la famille le demande", "Réservée aux soins palliatifs"], a: 1, exp: "La loi Leonetti (2005) interdit l’obstination déraisonnable." },
    { ue: "A2", q: "Faire une toilette porte ouverte « pour aller plus vite » est :", choices: ["Une bonne organisation", "De la maltraitance ordinaire", "Autorisé si le patient dort", "Un soin technique"], a: 1, exp: "Non-respect de la pudeur : c’est de la maltraitance ordinaire." },
    { ue: "A2", q: "Quel numéro permet de signaler la maltraitance d’une personne âgée ?", choices: ["3977", "119", "3114", "15"], a: 0, exp: "3977 : personnes âgées et adultes en situation de handicap ; 119 : enfance en danger." },

    // B.1 (nouvelles)
    { ue: "B1", q: "Combien d’os compte environ le squelette adulte ?", choices: ["106", "206", "306", "406"], a: 1, exp: "Environ 206 os." },
    { ue: "B1", q: "Un tendon relie :", choices: ["Deux os entre eux", "Un muscle à un os", "Deux muscles", "Un nerf à un muscle"], a: 1, exp: "Tendon : muscle → os. Ligament : os → os." },
    { ue: "B1", q: "Quelle est la couche la plus superficielle de la peau ?", choices: ["Derme", "Hypoderme", "Épiderme", "Muscle"], a: 2, exp: "Épiderme, puis derme, puis hypoderme." },
    { ue: "B1", q: "Une escarre de stade 1 se reconnaît à :", choices: ["Une plaie profonde", "Une rougeur qui ne blanchit pas à la pression", "Une cloque percée", "Un os visible"], a: 1, exp: "Stade 1 : rougeur persistante, peau intacte." },
    { ue: "B1", q: "Une douleur est dite chronique quand elle dure plus de :", choices: ["1 semaine", "1 mois", "3 mois", "1 an"], a: 2, exp: "Plus de 3 mois." },
    { ue: "B1", q: "Des douleurs en brûlures et décharges électriques évoquent une douleur :", choices: ["Nociceptive", "Neuropathique", "Inflammatoire", "Viscérale"], a: 1, exp: "Lésion du système nerveux : douleur neuropathique." },
    { ue: "B1", q: "Le diabète le plus fréquent est :", choices: ["Le type 1", "Le type 2", "Le diabète gestationnel", "Le diabète insipide"], a: 1, exp: "Environ 9 diabétiques sur 10 ont un diabète de type 2." },
    { ue: "B1", q: "Un patient diabétique devient soudainement confus et en sueur. Premier réflexe ?", choices: ["Lui donner son insuline", "Faire une glycémie capillaire", "Attendre le médecin", "Le laisser dormir"], a: 1, exp: "Penser d’abord à l’hypoglycémie : glycémie capillaire puis protocole." },
    { ue: "B1", q: "L’HbA1c reflète la glycémie moyenne sur environ :", choices: ["24 heures", "1 semaine", "3 mois", "1 an"], a: 2, exp: "L’hémoglobine glyquée reflète environ les 3 derniers mois." },
    { ue: "B1", q: "Une confusion qui apparaît brutalement chez une personne âgée :", choices: ["Est normale avec l’âge", "Est une urgence : il faut en chercher la cause", "Est toujours une maladie d’Alzheimer", "Ne nécessite pas de transmission"], a: 1, exp: "Confusion = brutale, fluctuante, cause à rechercher (infection, déshydratation, médicament…)." },
    { ue: "B1", q: "Mettre une protection à une personne âgée continente « par précaution » crée :", choices: ["Une dépendance iatrogène", "Une meilleure hygiène", "Une prévention des escarres", "Un gain d’autonomie"], a: 0, exp: "C’est la dépendance provoquée par les soins (iatrogène)." },

    // B.2
    { ue: "B2", q: "Selon Piaget, le raisonnement abstrait apparaît au stade :", choices: ["Sensori-moteur", "Préopératoire", "Des opérations concrètes", "Des opérations formelles"], a: 3, exp: "Stade des opérations formelles, à partir de 11–12 ans." },
    { ue: "B2", q: "Chercher des informations et planifier pour faire face à sa maladie est un coping :", choices: ["Centré sur l’émotion", "Centré sur le problème", "D’évitement", "Social"], a: 1, exp: "Coping centré sur le problème : agir sur la situation." },
    { ue: "B2", q: "Quelle est la première étape du deuil selon Kübler-Ross ?", choices: ["Colère", "Déni", "Marchandage", "Acceptation"], a: 1, exp: "Déni, colère, marchandage, dépression, acceptation." },
    { ue: "B2", q: "Le fait que la santé diminue à mesure qu’on descend dans l’échelle sociale s’appelle :", choices: ["Le gradient social de santé", "La prévalence", "Le coping", "La transition démographique"], a: 0, exp: "C’est le gradient social des inégalités de santé." },
    { ue: "B2", q: "Pour communiquer avec un patient qui ne parle pas français lors d’une information importante, on privilégie :", choices: ["Un enfant de la famille", "Un interprète professionnel", "Des gestes uniquement", "Un traducteur automatique seul"], a: 1, exp: "Un interprète professionnel garantit une information fiable et confidentielle." },

    // B.3 (nouvelles)
    { ue: "B3", q: "Quel est le numéro d’appel d’urgence européen ?", choices: ["15", "18", "112", "114"], a: 2, exp: "112 : numéro d’urgence européen. 15 SAMU, 18 pompiers, 114 par SMS." },
    { ue: "B3", q: "Chez l’adulte en arrêt cardiaque, le rythme du massage est de :", choices: ["15 compressions / 2 insufflations", "30 compressions / 2 insufflations", "5 compressions / 1 insufflation", "50 compressions / 5 insufflations"], a: 1, exp: "30/2, à une fréquence de 100 à 120 compressions par minute." },
    { ue: "B3", q: "Une victime inconsciente qui respire normalement doit être mise :", choices: ["Sur le dos, jambes surélevées", "En position latérale de sécurité", "Assise", "Sur le ventre"], a: 1, exp: "PLS et surveillance de la respiration." },
    { ue: "B3", q: "Quel est le numéro national de prévention du suicide ?", choices: ["3114", "3977", "119", "112"], a: 0, exp: "Le 3114, gratuit, 24 h/24." },
    { ue: "B3", q: "Parler directement du suicide avec une personne en détresse :", choices: ["Lui donne l’idée de passer à l’acte", "Est à éviter absolument", "Peut la soulager et permet d’évaluer le risque", "Est réservé au psychiatre"], a: 2, exp: "Poser la question directement n’augmente pas le risque : ça ouvre le dialogue." },
    { ue: "B3", q: "Quelle échelle est une hétéro-évaluation de la douleur de la personne âgée non communicante ?", choices: ["Échelle numérique", "EVA", "Algoplus", "Échelle verbale simple"], a: 2, exp: "Algoplus (douleur aiguë) ou Doloplus (chronique) : le soignant observe." },
    { ue: "B3", q: "Après l’administration d’un antalgique, il faut :", choices: ["Ne plus évaluer", "Réévaluer la douleur et tracer", "Attendre le lendemain", "Évaluer à la place du patient"], a: 1, exp: "Évaluer → soulager → réévaluer → tracer." },
    { ue: "B3", q: "Lors d’une toilette, on lave :", choices: ["Du plus sale au plus propre", "Du plus propre au plus sale", "Dans n’importe quel ordre", "Uniquement le visage"], a: 1, exp: "Du propre vers le sale, du haut vers le bas." },
    { ue: "B3", q: "Qui réalise la dispensation des médicaments ?", choices: ["L’infirmier", "Le pharmacien", "L’aide-soignant", "Le cadre de santé"], a: 1, exp: "La dispensation (analyse, préparation, délivrance) est faite par la pharmacie." },
    { ue: "B3", q: "Un effet indésirable d’un médicament doit être :", choices: ["Gardé pour soi", "Déclaré en pharmacovigilance", "Noté seulement s’il est grave", "Signalé uniquement par le médecin"], a: 1, exp: "Tout professionnel de santé peut et doit déclarer les effets indésirables." },
    { ue: "B3", q: "Dans quel emballage jettes-tu des compresses souillées de sang ?", choices: ["Sac noir", "Emballage jaune DASRI", "Poubelle de tri papier", "Collecteur à aiguilles"], a: 1, exp: "Déchets à risque infectieux : filière DASRI (emballages jaunes)." },
    { ue: "B3", q: "Un collecteur à aiguilles se ferme définitivement :", choices: ["Quand il déborde", "Quand le trait de remplissage est atteint", "Une fois par an", "Jamais"], a: 1, exp: "On ne dépasse jamais le trait de remplissage, puis on ferme définitivement." },

    // B.4
    { ue: "B4", q: "Que signifie le « C » de la roue de Deming (PDCA) ?", choices: ["Corriger", "Check (vérifier)", "Coordonner", "Commencer"], a: 1, exp: "Plan, Do, Check, Act : planifier, faire, vérifier, ajuster." },
    { ue: "B4", q: "Qui certifie les établissements de santé en France ?", choices: ["L’ARS", "La HAS", "L’Ordre des infirmiers", "Santé publique France"], a: 1, exp: "La Haute Autorité de santé (HAS)." },
    { ue: "B4", q: "Une erreur rattrapée avant d’atteindre le patient :", choices: ["Ne se déclare pas", "Est un presque-accident à déclarer", "Doit être cachée", "Entraîne une sanction automatique"], a: 1, exp: "On déclare aussi les presque-accidents pour en analyser les causes." },
    { ue: "B4", q: "L’objectif de la déclaration des événements indésirables est :", choices: ["Trouver un coupable", "Comprendre et éviter que ça se reproduise", "Remplir un dossier administratif", "Sanctionner l’équipe"], a: 1, exp: "Culture juste : on analyse le système pour apprendre." },
    { ue: "B4", q: "Le modèle du « fromage suisse » de Reason explique que :", choices: ["Les erreurs viennent d’une seule personne", "Un accident survient quand plusieurs barrières défaillantes s’alignent", "Les protocoles sont inutiles", "Il faut plus de contrôles individuels"], a: 1, exp: "Plusieurs failles successives doivent s’aligner pour qu’un accident se produise." },

    // C.1
    { ue: "C1", q: "Un dépistage du cancer colorectal est une prévention :", choices: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], a: 1, exp: "Dépister tôt pour soigner tôt : prévention secondaire." },
    { ue: "C1", q: "La vaccination est une prévention :", choices: ["Primaire", "Secondaire", "Tertiaire", "Aucune"], a: 0, exp: "Elle évite l’apparition de la maladie : prévention primaire." },
    { ue: "C1", q: "La Charte d’Ottawa (1986) porte sur :", choices: ["Les droits des patients", "La promotion de la santé", "La fin de vie", "La qualité des soins"], a: 1, exp: "Charte de l’OMS pour la promotion de la santé." },
    { ue: "C1", q: "Le service sanitaire des étudiants en santé consiste à :", choices: ["Faire des gardes de nuit", "Mener des actions de prévention auprès du public", "Travailler à l’ARS", "Faire un stage en pharmacie"], a: 1, exp: "Préparer, réaliser et évaluer une action de prévention." },
    { ue: "C1", q: "Quel organisme organise l’offre de soins dans chaque région ?", choices: ["La HAS", "L’ARS", "La CPAM", "L’ANSM"], a: 1, exp: "L’agence régionale de santé (ARS)." },
    { ue: "C1", q: "Quelle agence est chargée de la sécurité des médicaments ?", choices: ["ANSM", "HAS", "ARS", "Santé publique France"], a: 0, exp: "L’Agence nationale de sécurité du médicament et des produits de santé." },
    { ue: "C1", q: "La première étape de l’éducation thérapeutique est :", choices: ["La séance collective", "Le bilan éducatif partagé", "L’évaluation finale", "La remise d’une brochure"], a: 1, exp: "Le bilan éducatif partagé (diagnostic éducatif) avec le patient." },

    // C.2
    { ue: "C2", q: "Le concept « Une seule santé » (One Health) relie :", choices: ["Santé humaine, animale et environnementale", "Hôpital et ville", "Médecin et infirmier", "Corps et esprit"], a: 0, exp: "Les santés humaine, animale et des écosystèmes sont liées." },
    { ue: "C2", q: "Un geste écoresponsable doit toujours :", choices: ["Passer avant l’hygiène", "Respecter la sécurité et l’hygiène des soins", "Être décidé seul", "Remplacer le tri des déchets"], a: 1, exp: "L’écoresponsabilité ne compromet jamais la sécurité du patient." },

    // D.1 (nouvelles)
    { ue: "D1", q: "Face à une personne qui devient agressive, il faut :", choices: ["Hausser le ton pour s’imposer", "Rester calme, garder une distance et ne pas rester seule", "Se placer devant la porte", "La toucher pour la calmer"], a: 1, exp: "Voix posée, distance de sécurité, sortie dégagée, demander de l’aide." },
    { ue: "D1", q: "Quand un infirmier délègue un soin à un aide-soignant :", choices: ["Il n’en est plus responsable", "Il garde la supervision et l’évaluation", "L’aide-soignant devient prescripteur", "Le cadre devient responsable"], a: 1, exp: "L’infirmier supervise et évalue les soins délégués." },
    { ue: "D1", q: "Réaliser un acte qui n’est pas de sa compétence s’appelle :", choices: ["Une délégation", "Un glissement de tâches", "Une collaboration", "Une coordination"], a: 1, exp: "Le glissement de tâches est un risque pour le patient et engage la responsabilité." },

    // D.3
    { ue: "D3", q: "Dans une analyse de situation, la partie la plus importante est :", choices: ["Le récit chronologique détaillé", "L’analyse et ce que l’on en retire", "La description du service", "La liste du matériel"], a: 1, exp: "On décrit, puis surtout on analyse et on dégage des apprentissages." },

    // D.4 (nouvelle)
    { ue: "D4", q: "Tu reçois un mail te demandant ton mot de passe de l’hôpital :", choices: ["Tu réponds vite", "C’est sans doute du hameçonnage : tu ne réponds pas et tu signales", "Tu le transfères à tes collègues", "Tu changes de mot de passe et tu réponds"], a: 1, exp: "Aucun service sérieux ne demande ton mot de passe par mail." },
    { ue: "D4", q: "Peut-on copier les données d’un patient dans une IA grand public pour résumer son dossier ?", choices: ["Oui, si c’est pratique", "Non, jamais", "Oui, en retirant juste le prénom", "Oui, avec l’accord oral d’un collègue"], a: 1, exp: "Les données de santé sont sensibles : jamais dans un outil grand public." },

    // E.1 (nouvelle)
    { ue: "E1", q: "Dans la structure IMRaD, que signifie le « M » ?", choices: ["Mesure", "Méthode", "Moyenne", "Médecine"], a: 1, exp: "Introduction, Méthode, Résultats, Discussion." },
    { ue: "E1", q: "Le nombre de nouveaux cas d’une maladie sur une période est :", choices: ["La prévalence", "L’incidence", "La médiane", "La mortalité"], a: 1, exp: "Incidence = nouveaux cas ; prévalence = tous les cas à un moment donné." },
    { ue: "E1", q: "La médiane est :", choices: ["La somme divisée par le nombre", "La valeur qui partage le groupe en deux moitiés", "La valeur la plus fréquente", "L’écart entre le maximum et le minimum"], a: 1, exp: "La médiane coupe l’échantillon en deux ; elle est peu sensible aux valeurs extrêmes." },

    // E.2
    { ue: "E2", q: "Que signifie « Where does it hurt? »", choices: ["Quand avez-vous mal ?", "Où avez-vous mal ?", "Pourquoi avez-vous mal ?", "Avez-vous faim ?"], a: 1, exp: "« Where » = où ; « hurt » = faire mal." },
    { ue: "E2", q: "En anglais médical, « drug » signifie surtout :", choices: ["Drogue uniquement", "Médicament", "Pansement", "Service"], a: 1, exp: "« Drug » désigne couramment un médicament." },
    { ue: "E2", q: "« Dressing » en anglais des soins veut dire :", choices: ["Vestiaire", "Pansement", "Robe", "Plaie"], a: 1, exp: "Dressing = pansement ; wound = plaie." },

    // ───────── QCM lot 2 ─────────
    // B.1
    { ue: "B1", q: "Combien de kilocalories apporte 1 g de lipides ?", choices: ["4 kcal", "7 kcal", "9 kcal", "12 kcal"], a: 2, exp: "Lipides 9 kcal/g ; glucides et protéines 4 kcal/g." },
    { ue: "B1", q: "Quel nutriment sert surtout à « construire » (muscles, enzymes, anticorps) ?", choices: ["Glucides", "Lipides", "Protéines", "Eau"], a: 2, exp: "Les protéines sont les briques de construction de l’organisme." },
    { ue: "B1", q: "La morphine appartient au palier :", choices: ["1", "2", "3", "4"], a: 2, exp: "Palier 3 : opioïdes forts." },
    { ue: "B1", q: "Sous morphine, quel signe doit t’alerter en premier ?", choices: ["Une somnolence importante", "Une faim importante", "Une hypertension", "Une diarrhée"], a: 0, exp: "La sédation précède la dépression respiratoire : un patient très endormi est un signal d’alerte." },
    { ue: "B1", q: "Quel est l’antidote des opioïdes ?", choices: ["Vitamine K", "Naloxone", "Glucagon", "Adrénaline"], a: 1, exp: "La naloxone antagonise les effets des opioïdes." },
    { ue: "B1", q: "On parle d’hypertension au cabinet à partir de :", choices: ["120/80 mmHg", "130/85 mmHg", "140/90 mmHg", "160/100 mmHg"], a: 2, exp: "≥ 140/90 mmHg au cabinet, confirmé sur plusieurs mesures." },
    { ue: "B1", q: "Un médicament dont le nom finit par « -pril » est :", choices: ["Un bêtabloquant", "Un IEC", "Un diurétique", "Un anticoagulant"], a: 1, exp: "-pril = IEC ; -sartan = ARA II ; -olol = bêtabloquant ; -dipine = inhibiteur calcique." },
    { ue: "B1", q: "Un brassard trop petit pour le bras du patient :", choices: ["Sous-estime la tension", "Surestime la tension", "Ne change rien", "Fausse le pouls"], a: 1, exp: "Brassard trop petit = tension faussement élevée." },
    { ue: "B1", q: "Une douleur thoracique en serrement irradiant dans le bras gauche évoque :", choices: ["Un reflux", "Un infarctus du myocarde", "Une crise d’angoisse uniquement", "Une entorse"], a: 1, exp: "Il faut toujours penser à l’infarctus : alerte immédiate et ECG." },
    { ue: "B1", q: "Chez un insuffisant cardiaque, quelle surveillance quotidienne est essentielle ?", choices: ["La glycémie", "Le poids", "La température", "La taille"], a: 1, exp: "Une prise de poids rapide traduit une rétention d’eau (décompensation)." },
    { ue: "B1", q: "Un mollet rouge, chaud, gonflé et douloureux évoque :", choices: ["Une crampe", "Une phlébite", "Une entorse", "Un érysipèle seulement"], a: 1, exp: "Thrombose veineuse profonde : on ne masse pas, on alerte." },
    { ue: "B1", q: "Un essoufflement brutal avec douleur thoracique chez un patient alité fait craindre :", choices: ["Une embolie pulmonaire", "Une crise d’asthme", "Une otite", "Une constipation"], a: 0, exp: "Complication de la phlébite : urgence." },
    { ue: "B1", q: "Que surveille-t-on chez un patient sous anticoagulant ?", choices: ["Les signes de saignement", "La pousse des cheveux", "La vision des couleurs", "Le goût"], a: 0, exp: "Gencives, urines, selles noires, hématomes : risque hémorragique." },
    { ue: "B1", q: "Pendant une crise d’asthme, on utilise :", choices: ["Un corticoïde inhalé de fond", "Un bronchodilatateur d’action rapide", "Un antibiotique", "Un antalgique"], a: 1, exp: "Crise = bronchodilatateur rapide (ex. salbutamol)." },
    { ue: "B1", q: "Principale cause de la BPCO :", choices: ["Le tabac", "Les allergies", "Le sucre", "Le stress"], a: 0, exp: "Le tabac ; l’arrêt est le traitement essentiel." },
    { ue: "B1", q: "Dans le test VITE de l’AVC, le « T » signifie :", choices: ["Température", "Trouble de la parole", "Tension", "Toux"], a: 1, exp: "Visage, Inertie d’un membre, Trouble de la parole, En urgence 15." },
    { ue: "B1", q: "Après un AVC, avant de faire boire le patient, il faut :", choices: ["Lui donner de l’eau très froide", "Vérifier sa déglutition", "Le mettre à plat", "Rien de particulier"], a: 1, exp: "Risque de fausses routes : on teste la déglutition d’abord." },
    { ue: "B1", q: "Pendant une crise convulsive, il faut :", choices: ["Mettre un objet entre les dents", "Maintenir fermement les membres", "Protéger la tête et chronométrer", "Donner à boire"], a: 2, exp: "Protéger, ne rien mettre dans la bouche, chronométrer, PLS après." },
    { ue: "B1", q: "Pour un patient parkinsonien, les médicaments doivent être donnés :", choices: ["Quand il le demande", "À l’heure exacte prescrite", "Uniquement le soir", "Une fois par semaine"], a: 1, exp: "Un retard aggrave fortement les symptômes (blocage, chutes)." },
    { ue: "B1", q: "Jambe raccourcie et en rotation externe après une chute évoque :", choices: ["Une entorse de cheville", "Une fracture du col du fémur", "Une phlébite", "Une arthrose"], a: 1, exp: "Signe classique de fracture du col du fémur." },
    { ue: "B1", q: "L’arthrose correspond à :", choices: ["Une inflammation de l’articulation", "Une usure du cartilage", "Une infection de l’os", "Une fracture"], a: 1, exp: "-ose = usure ; -ite = inflammation (arthrite)." },
    { ue: "B1", q: "Sur le bras porteur d’une fistule de dialyse, on peut :", choices: ["Prendre la tension", "Faire une prise de sang", "Poser une perfusion", "Rien de tout cela"], a: 3, exp: "Bras de fistule : ni tension, ni prise de sang, ni perfusion." },
    { ue: "B1", q: "Quel médicament est à risque pour les reins ?", choices: ["Le paracétamol à dose normale", "Les AINS", "La vitamine C", "Le sérum physiologique"], a: 1, exp: "Les anti-inflammatoires non stéroïdiens sont néphrotoxiques." },
    { ue: "B1", q: "Brûlures urinaires sans fièvre évoquent :", choices: ["Une pyélonéphrite", "Une cystite", "Une insuffisance rénale", "Un calcul seulement"], a: 1, exp: "Cystite = vessie, sans fièvre ; pyélonéphrite = rein, avec fièvre." },
    { ue: "B1", q: "Chez un patient sondé, l’ECBU se prélève :", choices: ["Dans la poche collectrice", "Au site de prélèvement de la sonde", "En retirant la sonde", "Au bassin"], a: 1, exp: "Jamais dans la poche : site dédié, après désinfection." },
    { ue: "B1", q: "Des selles noires et goudronneuses s’appellent :", choices: ["Hématémèse", "Méléna", "Rectorragie", "Stéatorrhée"], a: 1, exp: "Méléna = sang digéré. Hématémèse = vomissement de sang." },
    { ue: "B1", q: "Les médicaments dont le nom finit par « -prazole » sont :", choices: ["Des antibiotiques", "Des inhibiteurs de la pompe à protons", "Des laxatifs", "Des anticoagulants"], a: 1, exp: "Les IPP réduisent l’acidité de l’estomac." },
    { ue: "B1", q: "Chez une personne âgée constipée, une diarrhée peut être due à :", choices: ["Un fécalome", "Une bonne hydratation", "Un excès de fibres", "Un IPP"], a: 0, exp: "Fausse diarrhée autour d’un bouchon de selles dures." },
    { ue: "B1", q: "Quel médicament favorise fortement la constipation ?", choices: ["La morphine", "Le paracétamol", "La vitamine D", "L’insuline"], a: 0, exp: "Les opioïdes ralentissent le transit : laxatif souvent associé." },
    { ue: "B1", q: "Fatigue, frilosité, prise de poids et pouls lent évoquent :", choices: ["Une hyperthyroïdie", "Une hypothyroïdie", "Un diabète", "Une anémie seulement"], a: 1, exp: "Hypothyroïdie : tout ralentit." },
    { ue: "B1", q: "La lévothyroxine se prend :", choices: ["Le soir au coucher avec un repas", "Le matin à jeun", "Uniquement en cas de fatigue", "Une fois par mois"], a: 1, exp: "Le matin à jeun, à distance des autres médicaments." },
    { ue: "B1", q: "Quelle contraception protège aussi des IST ?", choices: ["La pilule", "Le stérilet", "Le préservatif", "L’implant"], a: 2, exp: "Le préservatif est la seule méthode qui protège des IST." },
    { ue: "B1", q: "Une grossesse dure environ :", choices: ["35 SA", "41 SA", "45 SA", "52 SA"], a: 1, exp: "Environ 41 semaines d’aménorrhée." },
    { ue: "B1", q: "La chlamydia est souvent :", choices: ["Très douloureuse", "Sans symptômes", "Visible sur la peau", "Transmise par l’air"], a: 1, exp: "Souvent silencieuse, d’où l’importance du dépistage." },
    { ue: "B1", q: "Une brûlure avec des cloques est du :", choices: ["1er degré", "2e degré", "3e degré", "4e degré"], a: 1, exp: "2e degré : phlyctènes ; 3e degré : peau cartonnée, peu douloureuse." },
    { ue: "B1", q: "Premier geste devant une brûlure :", choices: ["Appliquer du beurre", "Refroidir à l’eau tempérée", "Percer les cloques", "Mettre de la glace"], a: 1, exp: "Eau tempérée (environ 15 °C) pendant environ 15 minutes." },
    { ue: "B1", q: "Une plaque rouge, chaude, douloureuse sur la jambe avec fièvre évoque :", choices: ["Un zona", "Un érysipèle", "Une escarre", "Une allergie"], a: 1, exp: "Érysipèle : infection bactérienne de la peau." },
    { ue: "B1", q: "Le zona est dû à :", choices: ["Une bactérie", "La réactivation du virus de la varicelle", "Un champignon", "Une allergie"], a: 1, exp: "Éruption douloureuse en bande, d’un seul côté." },
    { ue: "B1", q: "Le VIH ne se transmet PAS par :", choices: ["Le sang", "Les rapports sexuels non protégés", "La salive et les contacts sociaux", "La mère à l’enfant"], a: 2, exp: "Pas de transmission par salive, sueur, larmes, couverts, toilettes." },
    { ue: "B1", q: "Quelle hépatite peut aujourd’hui être guérie par un traitement ?", choices: ["Hépatite A", "Hépatite B", "Hépatite C", "Aucune"], a: 2, exp: "Les traitements antiviraux guérissent l’hépatite C." },
    { ue: "B1", q: "Les antibiotiques sont efficaces contre :", choices: ["Les virus", "Les bactéries", "Les allergies", "Le stress"], a: 1, exp: "Inutiles contre les virus (rhume, grippe, covid)." },
    { ue: "B1", q: "Avant la première dose d’antibiotique, il faut si possible :", choices: ["Faire les prélèvements prescrits", "Attendre 48 h", "Donner un antalgique", "Arrêter la perfusion"], a: 0, exp: "Hémocultures, ECBU… avant de commencer, pour identifier la bactérie." },
    { ue: "B1", q: "L’opacification du cristallin s’appelle :", choices: ["Glaucome", "Cataracte", "DMLA", "Conjonctivite"], a: 1, exp: "La cataracte se traite par chirurgie." },
    { ue: "B1", q: "Un patient âgé semble confus et ne répond pas : premier réflexe ?", choices: ["Conclure à une démence", "Vérifier qu’il porte ses appareils auditifs et ses lunettes", "Le contentionner", "Ne rien faire"], a: 1, exp: "Les déficits sensoriels peuvent mimer une confusion." },
    { ue: "B1", q: "Fièvre chez un patient sous chimiothérapie :", choices: ["Banale", "Urgence", "À surveiller la semaine suivante", "Effet attendu sans risque"], a: 1, exp: "Risque d’infection grave lié à la baisse des globules blancs." },
    { ue: "B1", q: "Le dépistage organisé du cancer du sein concerne les femmes de :", choices: ["25 à 65 ans", "40 à 60 ans", "50 à 74 ans", "Plus de 75 ans"], a: 2, exp: "Mammographie tous les 2 ans de 50 à 74 ans." },
    { ue: "B1", q: "Pour prévenir la mort inattendue du nourrisson, on le couche :", choices: ["Sur le ventre", "Sur le côté", "Sur le dos", "Assis"], a: 2, exp: "Sur le dos, dans un lit vide, sans tabac." },
    { ue: "B1", q: "Un nourrisson qui mouille peu ses couches lors d’une gastro est à risque de :", choices: ["Déshydratation", "Hypertension", "Obésité", "Allergie"], a: 0, exp: "Le nourrisson se déshydrate très vite : signaler rapidement." },
    { ue: "B1", q: "On parle de dépression quand les symptômes durent au moins :", choices: ["2 jours", "2 semaines", "6 mois", "1 an"], a: 1, exp: "Au moins 2 semaines, presque tous les jours." },
    { ue: "B1", q: "Les antidépresseurs agissent en général après :", choices: ["1 heure", "1 jour", "2 à 4 semaines", "6 mois"], a: 2, exp: "Délai d’action de 2 à 4 semaines, vigilance sur le risque suicidaire au début." },
    { ue: "B1", q: "Chez la personne âgée, les benzodiazépines augmentent surtout le risque de :", choices: ["Chutes et confusion", "Hypertension", "Diabète", "Fièvre"], a: 0, exp: "Somnolence, chutes, confusion et dépendance." },
    { ue: "B1", q: "Le traitement de première ligne du choc anaphylactique est :", choices: ["Le paracétamol", "L’adrénaline intramusculaire", "Un antibiotique", "Un laxatif"], a: 1, exp: "L’adrénaline IM, en urgence." },
    { ue: "B1", q: "Un temps de recoloration cutanée est anormal s’il dépasse :", choices: ["1 seconde", "3 secondes", "10 secondes", "1 minute"], a: 1, exp: "Au-delà de 3 secondes : signe de mauvaise circulation." },
    { ue: "B1", q: "Chez un patient en fin de vie qui ne boit plus, un soin de confort essentiel est :", choices: ["La pesée quotidienne", "Les soins de bouche", "Le lever au fauteuil obligatoire", "Le régime sans sel"], a: 1, exp: "Soins de bouche réguliers pour le confort." },
    { ue: "B1", q: "Quel dispositif prend en charge les soins des personnes étrangères sans titre de séjour ?", choices: ["La C2S", "L’AME", "L’APA", "La PASS uniquement"], a: 1, exp: "Aide médicale de l’État (AME)." },
    { ue: "B1", q: "Avec une personne atteinte de la maladie d’Alzheimer, on privilégie :", choices: ["Plusieurs consignes à la fois", "Des phrases courtes, une consigne à la fois", "La contradiction pour la ramener à la réalité", "Parler plus fort"], a: 1, exp: "Phrases simples, une consigne, calme et sourire." },

    // B.3
    { ue: "B3", q: "L’histoire de la maladie racontée par le patient s’appelle :", choices: ["L’auscultation", "L’anamnèse", "La palpation", "La synthèse"], a: 1, exp: "L’anamnèse est la première étape de l’examen clinique." },
    { ue: "B3", q: "Écouter avec un stéthoscope correspond à :", choices: ["L’inspection", "La palpation", "La percussion", "L’auscultation"], a: 3, exp: "Inspection (voir), palpation (toucher), percussion (tapoter), auscultation (écouter)." },
    { ue: "B3", q: "Lors d’une prise de sang avec hémocultures, celles-ci sont prélevées :", choices: ["En dernier", "En premier", "Au milieu", "Le lendemain"], a: 1, exp: "Les hémocultures sont prélevées en premier." },
    { ue: "B3", q: "Les tubes de prélèvement doivent être étiquetés :", choices: ["À l’avance pour toute la journée", "Au lit du patient", "Au laboratoire", "Après le service"], a: 1, exp: "Étiquetage au lit du patient pour éviter toute erreur d’identité." },
    { ue: "B3", q: "Avant une IRM, il faut notamment :", choices: ["Faire boire 2 L d’eau", "Retirer tout objet métallique", "Faire un ECG", "Donner un laxatif"], a: 1, exp: "Champ magnétique : objets métalliques retirés, pacemaker vérifié." },
    { ue: "B3", q: "Une plaie jaune correspond à :", choices: ["De la nécrose", "De la fibrine", "Du bourgeonnement", "De l’épidermisation"], a: 1, exp: "Noir = nécrose, jaune = fibrine, rouge = bourgeonnement, rose = épidermisation." },
    { ue: "B3", q: "Pour une plaie qui coule beaucoup ou saigne, on utilise souvent :", choices: ["Un hydrogel", "Un alginate", "Rien", "Un film transparent seul"], a: 1, exp: "Les alginates absorbent bien et sont hémostatiques." },
    { ue: "B3", q: "Les vaccins se conservent :", choices: ["À température ambiante", "Entre +2 et +8 °C", "Au congélateur", "Au soleil"], a: 1, exp: "Chaîne du froid entre +2 et +8 °C, jamais congelés." },
    { ue: "B3", q: "Le ROR est un vaccin :", choices: ["Inactivé", "Vivant atténué", "Antibiotique", "Anticorps"], a: 1, exp: "Vivant atténué : contre-indiqué pendant la grossesse et en cas d’immunodépression." },
    { ue: "B3", q: "Après une vaccination, on surveille le patient environ :", choices: ["15 minutes", "2 heures", "24 heures", "Pas de surveillance"], a: 0, exp: "Environ 15 minutes pour repérer une réaction allergique rare." },
    { ue: "B3", q: "L’insuline et les HBPM s’injectent en général par voie :", choices: ["Intradermique", "Sous-cutanée", "Intramusculaire", "Intraveineuse directe"], a: 1, exp: "Voie sous-cutanée, en alternant les sites." },
    { ue: "B3", q: "Avec une seringue préremplie d’HBPM, il faut :", choices: ["Purger la bulle d’air", "Ne pas purger la bulle et ne pas masser", "Masser longuement", "Injecter dans le muscle"], a: 1, exp: "On ne purge pas la bulle et on ne masse pas après l’injection." },
    { ue: "B3", q: "Un gonflement froid autour du cathéter avec une perfusion qui ne passe plus évoque :", choices: ["Une veinite", "Une diffusion hors de la veine", "Une bonne perfusion", "Une allergie"], a: 1, exp: "On arrête la perfusion et on prévient." },
    { ue: "B3", q: "Un cathéter veineux qui ne sert plus doit être :", choices: ["Gardé au cas où", "Signalé pour être retiré", "Rincé tous les jours sans prescription", "Recouvert d’un pansement opaque"], a: 1, exp: "Moins de cathéters inutiles = moins d’infections." },
    { ue: "B3", q: "Le contrôle ultime prétransfusionnel se fait :", choices: ["Au laboratoire", "Au lit du patient", "Au bureau infirmier", "La veille"], a: 1, exp: "Au lit du patient, par la personne qui pose la transfusion." },
    { ue: "B3", q: "Pendant une transfusion, frissons et douleurs lombaires imposent de :", choices: ["Accélérer le débit", "Arrêter la transfusion et alerter", "Donner un antalgique et continuer", "Attendre la fin"], a: 1, exp: "Signes d’accident transfusionnel : arrêt immédiat et alerte." },
    { ue: "B3", q: "L’IMC se calcule par :", choices: ["Poids × taille", "Poids ÷ taille²", "Taille ÷ poids", "Poids − taille"], a: 1, exp: "IMC = poids (kg) ÷ taille² (m)." },
    { ue: "B3", q: "Un patient tousse à chaque gorgée : il faut penser à :", choices: ["Une allergie", "Des fausses routes", "Une hypoglycémie", "Une constipation"], a: 1, exp: "Arrêter, redresser, signaler : évaluation de la déglutition et textures adaptées." },
    { ue: "B3", q: "Avant un soin douloureux chez un enfant, il vaut mieux :", choices: ["Dire que ça ne fera pas mal", "Expliquer honnêtement et anticiper la douleur", "Éloigner toujours les parents", "Faire vite sans prévenir"], a: 1, exp: "Ne jamais mentir ; crème anesthésiante, distraction, présence des parents." },
    { ue: "B3", q: "L’isolement et la contention en psychiatrie sont décidés par :", choices: ["L’infirmier seul", "Un psychiatre", "La famille", "Le cadre de santé"], a: 1, exp: "Décision médicale, durée limitée, surveillance et traçabilité." },
    { ue: "B3", q: "Le conseil minimal pour l’arrêt du tabac commence par :", choices: ["« Vous devez arrêter »", "« Fumez-vous ? »", "« Combien dépensez-vous ? »", "« Votre médecin est au courant ? »"], a: 1, exp: "« Fumez-vous ? » puis « Souhaitez-vous arrêter ? »" },
    { ue: "B3", q: "Le numéro de Tabac info service est :", choices: ["39 89", "3114", "3919", "115"], a: 0, exp: "39 89, avec une application d’accompagnement." },

    // A.2 / B.2 / B.4
    { ue: "A2", q: "Une étudiante victime de propos sexistes en stage doit en priorité :", choices: ["Se taire pour valider son stage", "En parler à son formateur référent IFSI", "Changer de métier", "Attendre la fin du stage"], a: 1, exp: "L’IFSI doit protéger l’étudiante et agir." },
    { ue: "A2", q: "Le numéro national d’écoute pour les femmes victimes de violences est :", choices: ["3919", "3977", "119", "39 89"], a: 0, exp: "3919, gratuit et anonyme." },
    { ue: "B2", q: "Le consentement à un acte sexuel :", choices: ["Peut être retiré à tout moment", "Est acquis s’il n’y a pas de refus", "Est définitif une fois donné", "N’est pas nécessaire dans le couple"], a: 0, exp: "Libre, éclairé, spécifique et réversible." },
    { ue: "B2", q: "Une envie irrépressible de consommer s’appelle :", choices: ["Tolérance", "Craving", "Sevrage", "Abus"], a: 1, exp: "Le craving est un signe de dépendance." },
    { ue: "B2", q: "Repère de consommation d’alcool à moindre risque :", choices: ["Pas plus de 10 verres par semaine", "Pas plus de 5 verres par jour", "Pas de limite le week-end", "1 bouteille par semaine"], a: 0, exp: "Maximum 10 verres par semaine, 2 par jour, et des jours sans." },
    { ue: "B2", q: "Tremblements, sueurs et agitation 2 jours après l’hospitalisation font penser à :", choices: ["Un sevrage alcoolique", "Une hypothyroïdie", "Une otite", "Une constipation"], a: 0, exp: "Risque de crise convulsive et de delirium tremens : signaler vite." },
    { ue: "B4", q: "Dans la méthode SAED, le « D » signifie :", choices: ["Diagnostic", "Demande", "Durée", "Données"], a: 1, exp: "Situation, Antécédents, Évaluation, Demande." },
    { ue: "B4", q: "Quel facteur favorise les erreurs médicamenteuses ?", choices: ["Les interruptions de tâche", "Le double contrôle", "Les check-lists", "La relecture des prescriptions"], a: 0, exp: "Les interruptions pendant la préparation sont une cause fréquente d’erreurs." },

    // C / D / E
    { ue: "C1", q: "Pour mobiliser un patient lourd, la bonne pratique est :", choices: ["Le porter seule rapidement", "Utiliser les aides techniques et être deux", "Tirer sur ses bras", "Garder les jambes tendues"], a: 1, exp: "Aides techniques, travail à deux, jambes fléchies, dos droit." },
    { ue: "C1", q: "L’épuisement professionnel s’appelle aussi :", choices: ["Burn-out", "Coping", "Craving", "Turn-over"], a: 0, exp: "Le burn-out est un épuisement physique et émotionnel lié au travail." },
    { ue: "C2", q: "Les médicaments non utilisés doivent être :", choices: ["Jetés à l’évier", "Rapportés en pharmacie", "Mis à la poubelle ordinaire", "Donnés à un voisin"], a: 1, exp: "Filière de collecte en pharmacie." },
    { ue: "C2", q: "Pendant une canicule, chez la personne âgée, il faut :", choices: ["Attendre qu’elle demande à boire", "Proposer à boire régulièrement", "Augmenter le chauffage", "Fermer les fenêtres la nuit"], a: 1, exp: "La sensation de soif diminue avec l’âge." },
    { ue: "D1", q: "Après l’annonce d’une mauvaise nouvelle par le médecin, le rôle du soignant est de :", choices: ["Donner de nouveaux détails médicaux", "Écouter, vérifier ce qui a été compris, laisser s’exprimer", "Changer de sujet", "Dire que tout va bien se passer"], a: 1, exp: "Présence, écoute, reformulation, respect des émotions." },
    { ue: "D1", q: "Laquelle est une compétence psychosociale émotionnelle ?", choices: ["Gérer son stress", "Calculer une dose", "Poser une perfusion", "Classer des dossiers"], a: 0, exp: "Identifier, exprimer et réguler ses émotions et son stress." },
    { ue: "D1", q: "En situation d’urgence, le style de leadership le plus adapté est souvent :", choices: ["Délégatif", "Directif", "Absent", "Participatif long"], a: 1, exp: "Rôles clairs et consignes rapides." },
    { ue: "D2", q: "Pour organiser sa matinée, on traite en premier :", choices: ["Les soins programmables", "Les urgences puis les soins à horaire fixe", "Le rangement", "Les transmissions écrites"], a: 1, exp: "Urgent → horaire fixe → programmable." },
    { ue: "D2", q: "Dans la gestion des stocks, on utilise en premier :", choices: ["Le matériel le plus récent", "Le matériel le plus ancien (non périmé)", "Le matériel le plus cher", "Au hasard"], a: 1, exp: "Premier entré, premier sorti, en vérifiant les dates de péremption." },
    { ue: "D3", q: "Le bilan de mi-stage est une évaluation :", choices: ["Formative", "Certificative", "Disciplinaire", "Facultative"], a: 0, exp: "Elle sert à progresser et à réajuster ses objectifs." },
    { ue: "D3", q: "Qui fait le lien entre l’IFSI et le lieu de stage ?", choices: ["Le formateur référent", "Le chirurgien", "Le patient", "L’ARS"], a: 0, exp: "Le formateur référent de l’IFSI." },
    { ue: "D4", q: "Un soin à distance réalisé par un infirmier s’appelle :", choices: ["Téléconsultation", "Télésoin", "Téléexpertise", "Téléassistance"], a: 1, exp: "Le télésoin concerne pharmaciens et auxiliaires médicaux, dont les infirmiers." },
    { ue: "D4", q: "Un professionnel qui demande l’avis d’un autre à distance fait de la :", choices: ["Téléexpertise", "Télésurveillance", "Téléconsultation", "Télémédecine sportive"], a: 0, exp: "Téléexpertise = avis entre professionnels." },
    { ue: "E1", q: "Quel comité donne un avis sur une recherche impliquant des personnes ?", choices: ["Le CPP", "La CPAM", "Le CHSCT", "L’Ordre"], a: 0, exp: "Le comité de protection des personnes." },
    { ue: "E1", q: "Un risque relatif égal à 1 signifie :", choices: ["Risque doublé", "Pas de différence entre les groupes", "Risque nul", "Risque divisé par deux"], a: 1, exp: "RR = 1 : pas de différence ; > 1 : plus de risque ; < 1 : moins de risque." },
    { ue: "E1", q: "Reformuler l’idée d’un auteur sans le citer est :", choices: ["Autorisé", "Du plagiat", "Une paraphrase correcte", "Une synthèse"], a: 1, exp: "Paraphraser exige aussi de citer la source." },
    { ue: "E1", q: "Avec une IA pour un travail écrit, il faut surtout :", choices: ["Copier ses réponses", "Vérifier chaque information et chaque référence", "Lui faire inventer des sources", "Ne jamais la mentionner"], a: 1, exp: "Les IA peuvent inventer des références : vérification indispensable." },
    { ue: "E2", q: "« Take a deep breath » veut dire :", choices: ["Prenez votre traitement", "Prenez une grande inspiration", "Allongez-vous", "Toussez"], a: 1, exp: "Breath = respiration." },
    { ue: "E2", q: "« Dizzy » signifie :", choices: ["Fatigué", "Pris de vertiges", "Fiévreux", "Affamé"], a: 1, exp: "Dizzy = avoir la tête qui tourne." }
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
