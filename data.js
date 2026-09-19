window.PHARMA_DATA = {
  drugs: [
    {
      id: "amox",
      dci: "Amoxicilline",
      princeps: "Clamoxyl",
      classe: "Pénicilline A / bêta-lactamine",
      atc: "J01CA04",
      moa: "Inhibition de la synthèse du peptidoglycane (PBP).",
      indications: "Infections ORL, pulmonaires, urinaires, digestives sensibles ; association à un inhibiteur de bêta-lactamase si besoin.",
      posologie: "Adulte : 1 g × 2–3/j PO. Adapter à l’indication et à la fonction rénale.",
      ci: "Allergie aux pénicillines. Prudence si ATCD d’allergie croisée céphalosporines.",
      ei: "Digestifs, rash, colite à C. difficile, rare DRESS.",
      interactions: "Méthotrexate (↑ toxicité), anticoagulants oraux (surveillance).",
      surveillance: "Allergie, diarrhée, fonction rénale si fortes doses / insuffisance rénale.",
      conseil: "Bien répartir les prises. Finir le traitement. Signaler toute éruption ou diarrhée sévère.",
      tags: ["antibiotique", "officine", "DFGSP"]
    },
    {
      id: "metfo",
      dci: "Metformine",
      princeps: "Glucophage",
      classe: "Biguanide",
      atc: "A10BA02",
      moa: "↓ néoglucogenèse hépatique, ↑ sensibilité à l’insuline, pas d’hypoglycémie isolée.",
      indications: "Diabète de type 2, 1re intention si pas de CI.",
      posologie: "Débuter bas (500 mg) puis titrer. Dose usuelle 500–1000 mg × 2–3/j au cours des repas.",
      ci: "IR sévère (DFG < 30), acidose, insuffisance hépatique sévère, hypoxie, alcoolisme.",
      ei: "Troubles digestifs, carence B12 au long cours, rare acidose lactique.",
      interactions: "Produits iodés (arrêt temporaire), alcool, médicaments néphrotoxiques.",
      surveillance: "DFG, B12, tolérance digestive, signes d’acidose.",
      conseil: "Prendre pendant le repas. Arrêter si gastro-entérite sévère, déshydratation, ou avant un examen iodé.",
      tags: ["diabète", "chronicité", "DFASP"]
    },
    {
      id: "atorva",
      dci: "Atorvastatine",
      princeps: "Tahor",
      classe: "Statine (inhibiteur HMG-CoA réductase)",
      atc: "C10AA05",
      moa: "↓ synthèse hépatique du cholestérol → ↑ récepteurs LDL.",
      indications: "Hypercholestérolémie, prévention CV.",
      posologie: "10–80 mg/j le soir ou à heure fixe selon spécialité.",
      ci: "Maladie hépatique active, grossesse, allaitement.",
      ei: "Myalgies, ↑ CPK, ↑ transaminases, rare rhabdomyolyse.",
      interactions: "Inhibiteurs CYP3A4 (macrolides, azolés, jus de pamplemousse), fibrates.",
      surveillance: "Bilan lipidique, ASAT/ALAT, CPK si douleurs musculaires.",
      conseil: "Signaler douleurs musculaires inexpliquées. Éviter le pamplemousse.",
      tags: ["cardio", "prévention"]
    },
    {
      id: "ramipril",
      dci: "Ramipril",
      princeps: "Triatec",
      classe: "IEC",
      atc: "C09AA05",
      moa: "Inhibition de l’enzyme de conversion → ↓ angiotensine II et ↓ aldostérone.",
      indications: "HTA, insuffisance cardiaque, post-IDM, néphroprotection.",
      posologie: "Titration. Ex. HTA : 2,5–10 mg/j.",
      ci: "Sténose bilatérale des artères rénales, angio-œdème, grossesse 2e–3e trimestre, hyperK sévère.",
      ei: "Toux sèche, hypotension, hyperkaliémie, ↑ créatinine, angio-œdème.",
      interactions: "AINS, diurétiques épargneurs de K, potassium, sartans (double blocage).",
      surveillance: "PA, kaliémie, créatinine à J7–J14 puis régulièrement.",
      conseil: "Se lever progressivement. Signaler toux persistante ou gonflement visage/lèvres.",
      tags: ["cardio", "HTA"]
    },
    {
      id: "levothyrox",
      dci: "Lévothyroxine",
      princeps: "Levothyrox",
      classe: "Hormone thyroïdienne",
      atc: "H03AA01",
      moa: "Substitution en T4 → conversion périphérique en T3.",
      indications: "Hypothyroïdie, TSH-suppression selon contexte.",
      posologie: "Dose individuelle à jeun. Titration selon TSH.",
      ci: "Thyréotoxicose non traitée, insuffisance surrénale non substituée.",
      ei: "Signes de surdosage : palpitations, tremblements, insomnie, amaigrissement.",
      interactions: "Calcium, fer, IPP, soja : décaler de 2–4 h. Inducteurs enzymatiques.",
      surveillance: "TSH (et T4l si besoin) 6–8 semaines après changement.",
      conseil: "Même marque si possible. À jeun, 30 min avant le petit-déjeuner. Ne pas arrêter brutalement.",
      tags: ["endocrino", "officine"]
    },
    {
      id: "paracetamol",
      dci: "Paracétamol",
      princeps: "Doliprane",
      classe: "Antalgique antipyrétique",
      atc: "N02BE01",
      moa: "Action centrale ; peu d’effet anti-inflammatoire.",
      indications: "Douleur faible à modérée, fièvre.",
      posologie: "1 g × 3–4/j adulte. Max 3 g/j si facteur de risque hépatique, sinon 4 g/j selon reco.",
      ci: "Insuffisance hépatique sévère, allergie.",
      ei: "Hépatotoxicité en surdosage. Rares toxidermies graves.",
      interactions: "Warfarine au long cours (INR), inducteurs, alcool.",
      surveillance: "Compter toutes les sources (associations, rhume).",
      conseil: "Respecter 4 à 6 h entre prises. Danger du surdosage même « anodin ».",
      tags: ["OTC", "officine", "base"]
    },
    {
      id: "warfarine",
      dci: "Warfarine",
      princeps: "Coumadine",
      classe: "AVK",
      atc: "B01AA03",
      moa: "Inhibition vitamine K époxyde réductase → ↓ facteurs II, VII, IX, X.",
      indications: "FA, MTEV, valves mécaniques selon indication.",
      posologie: "Dose individuelle selon INR cible.",
      ci: "Grossesse (sauf rares cas valves), saignement actif, mauvaise observance prévisible.",
      ei: "Hémorragies, nécrose cutanée rare, interactions alimentaires.",
      interactions: "Très nombreuses : antibiotiques, AINS, amiodarone, aliments riches en K.",
      surveillance: "INR régulier, signes hémorragiques.",
      conseil: "Carnet AVK. Même alimentation en vitamine K. Pas d’automédication AINS.",
      tags: ["hémostase", "stage", "à risque"]
    },
    {
      id: "salbutamol",
      dci: "Salbutamol",
      princeps: "Ventoline",
      classe: "β2-mimétique de courte durée",
      atc: "R03AC02",
      moa: "Agoniste β2 → bronchodilatation.",
      indications: "Crise d’asthme, bronchospasme.",
      posologie: "1–2 bouffées à la demande. Réévaluer si usage trop fréquent.",
      ci: "Hypersensibilité. Prudence rythme, hyperthyroïdie.",
      ei: "Tremblements, tachycardie, hypokaliémie à forte dose.",
      interactions: "β-bloquants (antagonisme), diurétiques (K+).",
      surveillance: "Fréquence d’utilisation = signal de mauvais contrôle.",
      conseil: "Technique d’inhalation. Chambre d’inhalation si besoin. Ce n’est pas un fond.",
      tags: ["respi", "officine"]
    }
  ],
  suffixes: [
    { stem: "-pril", classe: "IEC", ex: "ramipril, énalapril" },
    { stem: "-sartan", classe: "ARA2 / sartans", ex: "losartan, valsartan" },
    { stem: "-olol", classe: "β-bloquants", ex: "bisoprolol, aténolol" },
    { stem: "-statine", classe: "Statines", ex: "atorvastatine, simvastatine" },
    { stem: "-prazole", classe: "IPP", ex: "oméprazole, pantoprazole" },
    { stem: "-azépam / -azolam", classe: "Benzodiazépines", ex: "diazépam, alprazolam" },
    { stem: "-cilline", classe: "Pénicillines", ex: "amoxicilline" },
    { stem: "-conazole", classe: "Azolés antifongiques", ex: "fluconazole" },
    { stem: "-mab", classe: "Anticorps monoclonaux", ex: "adalimumab" },
    { stem: "-nib", classe: "Inhibiteurs de kinase", ex: "imatinib" },
    { stem: "-xaban", classe: "AOD anti-Xa", ex: "apixaban, rivaroxaban" },
    { stem: "-gliptine", classe: "iDPP-4", ex: "sitagliptine" }
  ],
  questions: [
    {
      id: "q1",
      theme: "Pharmaco",
      q: "Quel effet indésirable typique des IEC doit faire évoquer un switch vers un sartan ?",
      choices: ["Toux sèche", "Photosensibilité", "Syndrome extrapyramidal", "Hypoglycémie"],
      a: 0,
      exp: "La toux sèche par accumulation de bradykinine est classique sous IEC. Un sartan ne l’entraîne généralement pas."
    },
    {
      id: "q2",
      theme: "Diabète",
      q: "La metformine expose principalement à quel risque rare mais grave ?",
      choices: ["Acidocétose", "Acidose lactique", "Syndrome sérotoninergique", "Agranulocytose"],
      a: 1,
      exp: "Acidose lactique, surtout si IR, hypoxie, alcool, ou produit iodé."
    },
    {
      id: "q3",
      theme: "Calcul",
      q: "Amoxicilline 1 g × 3/j pendant 7 jours. Combien de gélules de 500 mg faut-il délivrer ?",
      choices: ["21", "28", "42", "14"],
      a: 2,
      exp: "1 g = 2 gélules de 500 mg, × 3/j × 7 j = 42."
    },
    {
      id: "q4",
      theme: "AVK",
      q: "Quel conseil est prioritaire à la délivrance de warfarine ?",
      choices: ["Prendre avec du pamplemousse", "Automédication AINS possible", "Surveillance de l’INR et carnet AVK", "Arrêt dès disparition des symptômes"],
      a: 2,
      exp: "Les AVK imposent un INR ciblé et une éducation stricte, notamment contre les AINS."
    },
    {
      id: "q5",
      theme: "OTC",
      q: "Dose maximale usuelle de paracétamol chez l’adulte sans facteur de risque hépatique ?",
      choices: ["2 g/j", "3 g/j", "4 g/j", "6 g/j"],
      a: 2,
      exp: "4 g/24 h en l’absence de risque ; 3 g si facteur de risque (âgé, dénutri, alcool, IR/IH)."
    },
    {
      id: "q6",
      theme: "Cardio",
      q: "Les statines sont contre-indiquées principalement en cas de :",
      choices: ["Asthme", "Grossesse", "Hypothyroïdie traitée", "Insuffisance veineuse"],
      a: 1,
      exp: "Grossesse et allaitement : CI. Aussi maladie hépatique active."
    },
    {
      id: "q7",
      theme: "Respi",
      q: "Un patient utilise sa Ventoline 8 fois par jour depuis 1 semaine. Que faut-il en conclure ?",
      choices: ["Contrôle asthmatique satisfaisant", "Possible mauvais contrôle, réorienter", "Normal en fond de traitement", "Arrêter le corticoïde inhalé"],
      a: 1,
      exp: "Un SABA très fréquent = mauvais contrôle. Il faut un fond (CSI ± LABA) et une évaluation médicale."
    },
    {
      id: "q8",
      theme: "Thyroïde",
      q: "La lévothyroxine se prend idéalement :",
      choices: ["Au coucher avec un lait", "À jeun, à distance du calcium et du fer", "Seulement si TSH basse", "En même temps que les IPP pour mieux absorber"],
      a: 1,
      exp: "Absorption optimale à jeun. Calcium, fer, soja, certains IPP diminuent l’absorption."
    }
  ],
  cases: [
    {
      id: "c1",
      titre: "Toux sous IEC",
      enonce: "Madame L., 62 ans, ramipril 5 mg depuis 6 semaines pour HTA. Elle se plaint d’une toux sèche diurne et nocturne, sans fièvre ni expectoration. PA contrôlée. Pas d’IEC précédemment.",
      question: "Que fais-tu au comptoir et que proposes-tu comme conduite ?",
      points: [
        "Évoquer la toux aux IEC (fréquent, non grave mais invalidant).",
        "Éliminer une cause infectieuse / IC / RGO si signes d’alerte.",
        "Ne pas arrêter brutalement sans relais antihypertenseur.",
        "Contacter le prescripteur : switch possible vers un sartan.",
        "Conseiller de ne pas s’automédiquer par antitussif au long cours."
      ]
    },
    {
      id: "c2",
      titre: "Metformine et gastro",
      enonce: "Monsieur D., 71 ans, metformine 1000 mg matin et soir. Diarrhée fébrile depuis 48 h, boit peu. Il vient chercher un antidiarrhéique et veut continuer son traitement « comme d’habitude ».",
      question: "Quel est le risque et quel conseil donnes-tu ?",
      points: [
        "Risque d’insuffisance rénale fonctionnelle → accumulation de metformine → acidose lactique.",
        "Règle des jours malades : suspendre la metformine tant que déshydratation / gastro sévère.",
        "Réhydratation, avis médical si persistance, âge, fièvre.",
        "Pas de NSAID en automédication.",
        "Reprise après réalimentation et hydratation normales, selon avis."
      ]
    },
    {
      id: "c3",
      titre: "Paracétamol partout",
      enonce: "Une mère achète Doliprane 1 g pour son mari grippé. Dans le panier : Humex rhume et un sachet de Fervex. Elle veut aussi un sirop « pour la fièvre ».",
      question: "Quelle erreur évites-tu ?",
      points: [
        "Additionner toutes les sources de paracétamol.",
        "Rappeler le max 3–4 g/j selon le profil.",
        "Espacer les prises de 4–6 h.",
        "Dépister alcool, dénutrition, poids faible, IH.",
        "Proposer une seule spécialité clairement dosée."
      ]
    }
  ]
};
