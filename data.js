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
    },
    {
      id: "ibuprofene",
      dci: "Ibuprofène",
      princeps: "Advil / Nurofen",
      classe: "AINS (anti-inflammatoire non stéroïdien)",
      atc: "M01AE01",
      moa: "Inhibition non sélective des cyclo-oxygénases (COX-1/COX-2) → ↓ synthèse des prostaglandines.",
      indications: "Douleur, fièvre, inflammation ; douleurs inflammatoires ponctuelles.",
      posologie: "Adulte : 200–400 mg × 3/j max, au cours d’un repas. Cure courte.",
      ci: "Ulcère évolutif, insuffisance rénale/hépatique sévère, 3e trimestre de grossesse, association IEC/sartan + diurétique (triple whammy).",
      ei: "Troubles digestifs, ulcère, saignement, rétention hydrosodée, insuffisance rénale aiguë.",
      interactions: "IEC/sartans + diurétiques (risque rénal), anticoagulants/antiagrégants (saignement), lithium, méthotrexate.",
      surveillance: "Fonction rénale si association à risque, tolérance digestive, durée du traitement.",
      conseil: "Toujours au cours d’un repas, dose minimale efficace, durée la plus courte possible. Éviter en fin de grossesse.",
      tags: ["AINS", "douleur", "officine", "base"]
    },
    {
      id: "tramadol",
      dci: "Tramadol",
      princeps: "Topalgic / Contramal",
      classe: "Antalgique opioïde palier II",
      atc: "N02AX02",
      moa: "Agoniste opioïde faible + inhibition de la recapture de la sérotonine et de la noradrénaline.",
      indications: "Douleurs modérées à sévères.",
      posologie: "50–100 mg toutes les 4–6 h selon forme (LI/LP), à adapter à l’âge et à la fonction rénale.",
      ci: "Épilepsie non contrôlée, insuffisance respiratoire sévère, association aux IMAO.",
      ei: "Nausées, vertiges, somnolence, risque de syndrome sérotoninergique, convulsions à forte dose, dépendance.",
      interactions: "ISRS/IRSNA/triptans (syndrome sérotoninergique), autres dépresseurs du SNC (alcool, benzodiazépines), IMAO (contre-indiqué).",
      surveillance: "Vigilance, transit (constipation), signes de syndrome sérotoninergique en cas d’association.",
      conseil: "Ne pas conduire en début de traitement. Ne pas associer à l’alcool. Prévenir la constipation.",
      tags: ["antalgique", "opioïde", "stage", "à risque"]
    },
    {
      id: "amlodipine",
      dci: "Amlodipine",
      princeps: "Amlor",
      classe: "Inhibiteur calcique (dihydropyridine)",
      atc: "C08CA01",
      moa: "Blocage des canaux calciques de type L → vasodilatation artérielle.",
      indications: "HTA, angor.",
      posologie: "5–10 mg/j en une prise.",
      ci: "Choc cardiogénique ; prudence en cas de sténose aortique serrée symptomatique.",
      ei: "Œdèmes des chevilles, céphalées, flush, tachycardie réflexe.",
      interactions: "Inhibiteurs puissants du CYP3A4 (↑ concentrations), jus de pamplemousse.",
      surveillance: "PA, œdèmes des membres inférieurs.",
      conseil: "Les œdèmes de cheville sont fréquents et non dangereux mais à signaler s’ils gênent ; ne pas arrêter seul.",
      tags: ["cardio", "HTA"]
    },
    {
      id: "bisoprolol",
      dci: "Bisoprolol",
      princeps: "Détensiel / Cardensiel",
      classe: "β-bloquant cardiosélectif",
      atc: "C07AB07",
      moa: "Blocage des récepteurs β1 → ↓ fréquence cardiaque, ↓ contractilité, ↓ conduction AV.",
      indications: "HTA, angor, insuffisance cardiaque stable, post-IDM, prévention rythmique.",
      posologie: "Titration lente, dose usuelle 2,5–10 mg/j selon indication.",
      ci: "Asthme/BPCO sévère, bloc AV de haut degré non appareillé, bradycardie sévère, insuffisance cardiaque décompensée.",
      ei: "Bradycardie, hypotension, refroidissement des extrémités, bronchospasme, fatigue, masque les signes d’hypoglycémie.",
      interactions: "Autres bradycardisants (vérapamil, diltiazem), insuline/ADO (masque l’hypoglycémie), AINS (↓ effet antihypertenseur).",
      surveillance: "Fréquence cardiaque, PA, tolérance respiratoire.",
      conseil: "Ne jamais arrêter brutalement (risque de rebond angineux/tachycardie). Signaler tout essoufflement inhabituel.",
      tags: ["cardio", "HTA", "à risque"]
    },
    {
      id: "furosemide",
      dci: "Furosémide",
      princeps: "Lasilix",
      classe: "Diurétique de l’anse",
      atc: "C03CA01",
      moa: "Inhibition du cotransporteur Na-K-2Cl dans la branche ascendante de Henlé → diurèse importante.",
      indications: "Œdèmes (insuffisance cardiaque, rénale, hépatique), HTA résistante, urgence hypertensive/OAP.",
      posologie: "Dose individuelle, souvent 20–40 mg/j PO, à adapter à la réponse et à la fonction rénale.",
      ci: "Anurie, déshydratation sévère, hypovolémie non corrigée.",
      ei: "Hypokaliémie, hyponatrémie, déshydratation, hypotension, ototoxicité à forte dose IV.",
      interactions: "Digoxine (hypoK → toxicité), lithium (↑ toxicité), AINS (↓ effet), aminosides (ototoxicité).",
      surveillance: "Ionogramme (surtout kaliémie), fonction rénale, poids, PA.",
      conseil: "Prise le matin pour éviter les levers nocturnes. Signaler crampes, vertiges, soif intense.",
      tags: ["cardio", "diurétique", "à risque"]
    },
    {
      id: "hctz",
      dci: "Hydrochlorothiazide",
      princeps: "Esidrex",
      classe: "Diurétique thiazidique",
      atc: "C03AA03",
      moa: "Inhibition du cotransporteur Na-Cl dans le tube contourné distal.",
      indications: "HTA en 1re intention (souvent en association), œdèmes légers à modérés.",
      posologie: "12,5–25 mg/j en une prise le matin.",
      ci: "Anurie, hypokaliémie sévère non corrigée, allergie aux sulfamides.",
      ei: "Hypokaliémie, hyponatrémie, hyperuricémie (crise de goutte), hyperglycémie modérée, photosensibilisation.",
      interactions: "Lithium (↑ toxicité), digoxine (hypoK), AINS (↓ effet antihypertenseur).",
      surveillance: "Ionogramme, uricémie, glycémie si diabète.",
      conseil: "Protection solaire (photosensibilisation). Signaler toute douleur articulaire brutale (goutte).",
      tags: ["cardio", "HTA"]
    },
    {
      id: "clopidogrel",
      dci: "Clopidogrel",
      princeps: "Plavix",
      classe: "Antiagrégant plaquettaire (thiénopyridine)",
      atc: "B01AC04",
      moa: "Inhibition irréversible du récepteur P2Y12 → ↓ agrégation plaquettaire.",
      indications: "Prévention secondaire cardiovasculaire, syndrome coronarien aigu, après pose de stent.",
      posologie: "75 mg/j en entretien (dose de charge en aigu, en milieu hospitalier).",
      ci: "Saignement actif, insuffisance hépatique sévère.",
      ei: "Saignements, troubles digestifs, rares thrombopénies.",
      interactions: "Oméprazole/ésoméprazole (↓ activation via CYP2C19, préférer le pantoprazole), AINS et anticoagulants (↑ risque hémorragique).",
      surveillance: "Signes hémorragiques, NFS si besoin.",
      conseil: "Ne pas arrêter seul (surtout après pose de stent). Signaler tout saignement inhabituel avant un geste dentaire/chirurgical.",
      tags: ["cardio", "hémostase", "à risque", "stage"]
    },
    {
      id: "apixaban",
      dci: "Apixaban",
      princeps: "Eliquis",
      classe: "Anticoagulant oral direct (AOD, anti-Xa)",
      atc: "B01AF02",
      moa: "Inhibition directe et sélective du facteur Xa.",
      indications: "Fibrillation atriale non valvulaire, prévention/traitement de la maladie thromboembolique veineuse.",
      posologie: "Dose fixe selon indication (ex. 5 mg × 2/j en FA), sans surveillance biologique de routine.",
      ci: "Saignement actif significatif, insuffisance hépatique avec coagulopathie, grossesse.",
      ei: "Saignements, anémie.",
      interactions: "Inhibiteurs/inducteurs puissants du CYP3A4 et de la P-gp (azolés, rifampicine), autres anticoagulants/antiagrégants.",
      surveillance: "Pas d’INR ; surveiller la fonction rénale et les signes hémorragiques.",
      conseil: "Ne pas oublier de dose (durée d’action plus courte que l’AVK). Carte de porteur d’AOD utile avant un geste invasif.",
      tags: ["hémostase", "cardio"]
    },
    {
      id: "omeprazole",
      dci: "Oméprazole",
      princeps: "Mopral",
      classe: "IPP (inhibiteur de la pompe à protons)",
      atc: "A02BC01",
      moa: "Inhibition irréversible de la H+/K+-ATPase gastrique → ↓ sécrétion acide.",
      indications: "RGO, ulcère gastroduodénal, éradication de H. pylori (en association), protection gastrique sous AINS/antiagrégant.",
      posologie: "20 mg/j le matin avant le petit-déjeuner ; doses plus élevées en traitement d’attaque.",
      ci: "Allergie aux IPP.",
      ei: "Céphalées, troubles digestifs, carence en B12/magnésium au long cours, risque infectieux digestif augmenté.",
      interactions: "Clopidogrel (↓ activation), atazanavir/kétoconazole (↓ absorption car nécessitent un milieu acide).",
      surveillance: "Réévaluer la pertinence d’un traitement prolongé, magnésémie au long cours.",
      conseil: "À prendre avant le repas. Ne pas poursuivre indéfiniment sans réévaluation médicale.",
      tags: ["digestif", "officine", "base"]
    },
    {
      id: "domperidone",
      dci: "Dompéridone",
      princeps: "Motilium",
      classe: "Antiémétique / prokinétique (antagoniste dopaminergique)",
      atc: "A03FA03",
      moa: "Antagonisme des récepteurs D2 périphériques → ↑ motilité digestive, effet antiémétique.",
      indications: "Nausées, vomissements, ballonnements post-prandiaux.",
      posologie: "Dose la plus faible efficace, durée la plus courte possible (traitement limité à quelques jours).",
      ci: "Allongement du QT connu, insuffisance hépatique modérée à sévère, association aux inhibiteurs puissants du CYP3A4.",
      ei: "Allongement du QT, troubles du rythme rares mais graves, hyperprolactinémie.",
      interactions: "Autres médicaments allongeant le QT, inhibiteurs du CYP3A4 (azolés, macrolides).",
      surveillance: "Durée de traitement, terrain cardiaque à risque.",
      conseil: "Ne pas dépasser la durée recommandée. Signaler palpitations ou malaise.",
      tags: ["digestif", "officine", "à risque"]
    },
    {
      id: "loperamide",
      dci: "Lopéramide",
      princeps: "Imodium",
      classe: "Antidiarrhéique (agoniste opioïde périphérique)",
      atc: "A07DA03",
      moa: "Ralentissement du transit intestinal par action sur les récepteurs opioïdes intestinaux.",
      indications: "Diarrhée aiguë non compliquée de l’adulte.",
      posologie: "2 gélules puis 1 après chaque selle liquide, dose maximale selon RCP, durée courte.",
      ci: "Diarrhée fébrile, sanglante, ou évocatrice de colite (dont post-antibiotique).",
      ei: "Constipation, ballonnements, rares troubles du rythme à forte dose (mésusage).",
      interactions: "Autres ralentisseurs du transit ; prudence en cas de dysbiose digestive.",
      surveillance: "Réévaluer si persistance > 48 h, signes de déshydratation.",
      conseil: "Ne pas utiliser en cas de fièvre ou de sang dans les selles : orienter vers un avis médical. Bien s’hydrater.",
      tags: ["digestif", "officine", "base"]
    },
    {
      id: "escitalopram",
      dci: "Escitalopram",
      princeps: "Seroplex",
      classe: "ISRS (antidépresseur)",
      atc: "N06AB10",
      moa: "Inhibition sélective de la recapture de la sérotonine.",
      indications: "Épisode dépressif majeur, troubles anxieux.",
      posologie: "10 mg/j, effet clinique après 2–4 semaines, arrêt progressif.",
      ci: "Association aux IMAO, allongement du QT connu (prudence).",
      ei: "Nausées en début de traitement, troubles sexuels, risque de syndrome sérotoninergique, hyponatrémie chez le sujet âgé.",
      interactions: "Autres sérotoninergiques (tramadol, triptans, IMAO), anticoagulants (↑ risque hémorragique).",
      surveillance: "Idées suicidaires en début de traitement (surtout jeune adulte), efficacité à 4–6 semaines.",
      conseil: "Ne pas arrêter brutalement. L’effet n’est pas immédiat : expliquer le délai d’action.",
      tags: ["psy", "chronicité"]
    },
    {
      id: "alprazolam",
      dci: "Alprazolam",
      princeps: "Xanax",
      classe: "Benzodiazépine anxiolytique",
      atc: "N05BA12",
      moa: "Potentialisation du GABA-A → effet anxiolytique, sédatif, myorelaxant.",
      indications: "Anxiété (traitement de courte durée).",
      posologie: "Dose minimale efficace, durée limitée (quelques semaines), à diminuer progressivement à l’arrêt.",
      ci: "Insuffisance respiratoire sévère, myasthénie, apnée du sommeil sévère.",
      ei: "Somnolence, troubles de la mémoire, chutes (sujet âgé), dépendance, syndrome de sevrage à l’arrêt brutal.",
      interactions: "Alcool et autres dépresseurs du SNC (opioïdes ++), risque de dépression respiratoire.",
      surveillance: "Durée de prescription, signes de dépendance, vigilance chez le sujet âgé.",
      conseil: "Pas d’alcool. Ne jamais arrêter brutalement après un traitement prolongé. Attention à la conduite.",
      tags: ["psy", "à risque", "stage"]
    },
    {
      id: "zolpidem",
      dci: "Zolpidem",
      princeps: "Stilnox",
      classe: "Hypnotique (apparenté aux benzodiazépines)",
      atc: "N05CF02",
      moa: "Agoniste sélectif d’un sous-type de récepteur GABA-A → effet hypnotique de courte durée.",
      indications: "Insomnie occasionnelle ou transitoire.",
      posologie: "10 mg au coucher, cure courte (quelques semaines maximum).",
      ci: "Insuffisance respiratoire sévère, myasthénie, apnée du sommeil sévère.",
      ei: "Somnolence résiduelle, troubles de la mémoire, comportements complexes du sommeil (rares), dépendance.",
      interactions: "Alcool, autres dépresseurs du SNC.",
      surveillance: "Durée de prescription ; des renouvellements répétés sont un signal d’alerte.",
      conseil: "À prendre juste avant le coucher, prévoir au moins 7–8 h de sommeil. Pas de conduite si réveil trop précoce.",
      tags: ["psy", "officine", "à risque"]
    },
    {
      id: "cetirizine",
      dci: "Cétirizine",
      princeps: "Zyrtec / Virlix",
      classe: "Antihistaminique H1 de 2e génération",
      atc: "R06AE07",
      moa: "Antagonisme des récepteurs H1 périphériques.",
      indications: "Rhinite allergique, urticaire.",
      posologie: "10 mg/j en une prise.",
      ci: "Insuffisance rénale sévère (adaptation de dose).",
      ei: "Somnolence légère possible, sécheresse buccale, plus rarement troubles digestifs.",
      interactions: "Peu d’interactions significatives ; prudence avec d’autres sédatifs.",
      surveillance: "Tolérance, vigilance si activité nécessitant de l’attention.",
      conseil: "Moins sédatif que les antihistaminiques de 1re génération, mais rester prudent en conduite selon la sensibilité individuelle.",
      tags: ["allergie", "OTC", "officine", "base"]
    },
    {
      id: "beclometasone",
      dci: "Béclométasone (inhalée)",
      princeps: "Bécotide / Qvar",
      classe: "Corticoïde inhalé",
      atc: "R03BA01",
      moa: "Action anti-inflammatoire locale sur les bronches.",
      indications: "Traitement de fond de l’asthme (seul ou associé à un bronchodilatateur de longue durée).",
      posologie: "Dose selon le palier de sévérité, en général 2 prises/j.",
      ci: "Allergie aux constituants ; prudence en cas de tuberculose évolutive.",
      ei: "Candidose oropharyngée, raucité de la voix, toux à l’inhalation.",
      interactions: "Peu d’interactions systémiques significatives aux doses inhalées usuelles.",
      surveillance: "Observance (traitement de fond, pas à la demande), technique d’inhalation.",
      conseil: "Se rincer la bouche après chaque prise pour éviter la candidose. Ce n’est pas un traitement de la crise.",
      tags: ["respi", "officine", "chronicité"]
    },
    {
      id: "fluconazole",
      dci: "Fluconazole",
      princeps: "Triflucan",
      classe: "Antifongique azolé",
      atc: "J02AC01",
      moa: "Inhibition de la synthèse de l’ergostérol fongique via le cytochrome P450 fongique.",
      indications: "Candidoses (vaginale, buccale, systémique selon la forme).",
      posologie: "Dose unique 150 mg PO pour une candidose vaginale simple ; schémas prolongés selon indication.",
      ci: "Association à certains médicaments allongeant le QT ; grossesse (selon dose/indication).",
      ei: "Troubles digestifs, céphalées, hépatotoxicité, allongement du QT à forte dose.",
      interactions: "Inhibiteur du CYP3A4/CYP2C9 : ↑ concentrations des statines, des AVK, des sulfamides hypoglycémiants.",
      surveillance: "Fonction hépatique si traitement prolongé, interactions médicamenteuses.",
      conseil: "Vérifier les traitements en cours avant délivrance (statines, AVK) en raison des interactions.",
      tags: ["antifongique", "officine"]
    },
    {
      id: "cocp",
      dci: "Éthinylestradiol / Lévonorgestrel",
      princeps: "ex. Leeloo, Minidril",
      classe: "Contraceptif oral combiné",
      atc: "G03AA07",
      moa: "Blocage de l’ovulation (rétrocontrôle hypothalamo-hypophysaire) + modification de la glaire cervicale et de l’endomètre.",
      indications: "Contraception.",
      posologie: "1 comprimé/j à heure fixe, schéma 21/7 ou continu selon la plaquette.",
      ci: "Tabac + âge > 35 ans, antécédent thromboembolique, migraine avec aura, certains cancers hormonodépendants.",
      ei: "Risque thromboembolique veineux et artériel, nausées, tension mammaire, spotting.",
      interactions: "Inducteurs enzymatiques (certains antiépileptiques, rifampicine, millepertuis) → ↓ efficacité contraceptive.",
      surveillance: "Facteurs de risque cardiovasculaire, tabac, observance.",
      conseil: "Oubli < 12 h : rattraper vite. Oubli > 12 h ou vomissements : contraception mécanique de complément + avis. Ne pas fumer en association.",
      tags: ["gynéco", "officine", "base"]
    },
    {
      id: "gliclazide",
      dci: "Gliclazide",
      princeps: "Diamicron",
      classe: "Sulfamide hypoglycémiant",
      atc: "A10BB09",
      moa: "Stimulation de la sécrétion d’insuline par les cellules β pancréatiques.",
      indications: "Diabète de type 2 si metformine insuffisante ou contre-indiquée.",
      posologie: "Dose individuelle, prise avant un repas, titration progressive.",
      ci: "Diabète de type 1, insuffisance rénale/hépatique sévère, association au miconazole.",
      ei: "Hypoglycémie (risque principal), prise de poids.",
      interactions: "Miconazole (contre-indiqué, hypoglycémie sévère), autres hypoglycémiants, β-bloquants (masquent les signes d’hypoglycémie).",
      surveillance: "Glycémie, signes d’hypoglycémie, fonction rénale.",
      conseil: "Toujours prendre avec un repas. Reconnaître et savoir traiter une hypoglycémie (sucre rapide).",
      tags: ["diabète", "officine", "à risque"]
    },
    {
      id: "azithromycine",
      dci: "Azithromycine",
      princeps: "Zithromax",
      classe: "Macrolide (azalide)",
      atc: "J01FA10",
      moa: "Inhibition de la synthèse protéique bactérienne (sous-unité 50S).",
      indications: "Infections ORL/respiratoires basses, certaines IST (selon protocole), alternative en cas d’allergie aux pénicillines.",
      posologie: "Souvent cure courte (ex. 500 mg J1 puis 250 mg J2–J5, ou schéma court selon indication).",
      ci: "Allergie aux macrolides, allongement du QT connu.",
      ei: "Troubles digestifs, allongement du QT, plus rarement hépatotoxicité.",
      interactions: "Statines (↑ risque de myopathie), autres médicaments allongeant le QT, colchicine.",
      surveillance: "Tolérance digestive, interactions avec un traitement chronique.",
      conseil: "Respecter le schéma court. Signaler des palpitations si terrain cardiaque à risque.",
      tags: ["antibiotique", "officine"]
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
    { stem: "-gliptine", classe: "iDPP-4", ex: "sitagliptine" },
    { stem: "-dipine", classe: "Inhibiteurs calciques (dihydropyridines)", ex: "amlodipine, nifédipine" },
    { stem: "-floxacine", classe: "Fluoroquinolones", ex: "ciprofloxacine, lévofloxacine" },
    { stem: "-triptan", classe: "Antimigraineux (triptans)", ex: "sumatriptan" },
    { stem: "-tidine", classe: "Anti-H2", ex: "famotidine, ranitidine (historique)" },
    { stem: "-parine", classe: "Héparines de bas poids moléculaire", ex: "énoxaparine" },
    { stem: "-zosine", classe: "Alpha-bloquants", ex: "doxazosine" },
    { stem: "-oxétine", classe: "ISRS", ex: "fluoxétine, paroxétine" },
    { stem: "-mycine", classe: "Macrolides / aminosides (classes distinctes, suffixe commun)", ex: "azithromycine, gentamicine" }
  ],
  pharmacoGenerale: [
    {
      id: "pg-adme",
      titre: "ADME : vue d’ensemble",
      resume: "Le devenir d’un médicament dans l’organisme se décrit en 4 étapes : Absorption, Distribution, Métabolisme, Élimination.",
      points: [
        "Absorption : passage du site d’administration vers la circulation générale.",
        "Distribution : répartition dans les tissus et compartiments.",
        "Métabolisme : transformation biochimique, principalement hépatique.",
        "Élimination : excrétion du médicament ou de ses métabolites (rénale, biliaire…).",
        "Ces 4 étapes déterminent la concentration plasmatique au cours du temps."
      ],
      piege: "Un médicament peut être actif sous forme de métabolite (prodrogue) : le métabolisme n’est pas toujours une inactivation."
    },
    {
      id: "pg-biodispo",
      titre: "Biodisponibilité",
      resume: "Fraction de la dose administrée qui atteint la circulation générale sous forme inchangée, et vitesse à laquelle elle l’atteint.",
      points: [
        "Biodisponibilité absolue F = (ASC voie testée / ASC IV) × (dose IV / dose testée).",
        "La voie IV a par définition une biodisponibilité de 100 %.",
        "Effet de premier passage hépatique : ↓ biodisponibilité orale pour certains médicaments.",
        "Dépend de l’absorption, du premier passage intestinal et hépatique.",
        "Notion de bioéquivalence entre génériques : F comparable au princeps."
      ],
      piege: "Biodisponibilité ≠ pourcentage absorbé : un médicament bien absorbé peut avoir une faible biodisponibilité s’il subit un fort effet de premier passage."
    },
    {
      id: "pg-distribution",
      titre: "Distribution et volume de distribution (Vd)",
      resume: "Le Vd est un paramètre théorique reliant la quantité de médicament dans l’organisme à sa concentration plasmatique.",
      points: [
        "Vd = Quantité totale dans l’organisme / Concentration plasmatique.",
        "Vd faible (proche du volume plasmatique) : médicament peu diffusible, très lié aux protéines plasmatiques.",
        "Vd élevé : médicament très diffusible dans les tissus (lipophile, peu lié).",
        "La liaison aux protéines plasmatiques (albumine++) limite la fraction libre active.",
        "Seule la fraction libre est active et diffusible."
      ],
      piege: "Un Vd très supérieur au volume corporel total ne signifie pas une erreur : il traduit une forte fixation tissulaire."
    },
    {
      id: "pg-metabolisme",
      titre: "Métabolisme (phases I et II)",
      resume: "Le métabolisme rend en général les molécules plus hydrosolubles pour faciliter leur élimination rénale.",
      points: [
        "Phase I : réactions de fonctionnalisation (oxydation, réduction, hydrolyse), notamment via les cytochromes P450.",
        "Phase II : réactions de conjugaison (glucuronoconjugaison, sulfoconjugaison…) → composé très hydrosoluble.",
        "Le foie est le principal organe métabolisateur.",
        "Un métabolite peut être actif, inactif, ou toxique.",
        "Inducteurs/inhibiteurs enzymatiques du CYP450 = source majeure d’interactions médicamenteuses."
      ],
      piege: "Un inducteur enzymatique (ex. rifampicine) diminue l’efficacité des médicaments métabolisés par le même CYP, contrairement à un inhibiteur qui l’augmente."
    },
    {
      id: "pg-elimination",
      titre: "Élimination et clairance",
      resume: "La clairance représente le volume de plasma totalement épuré du médicament par unité de temps.",
      points: [
        "Clairance totale = somme des clairances (rénale, hépatique, autres).",
        "Élimination rénale : filtration glomérulaire, sécrétion et réabsorption tubulaires.",
        "Élimination biliaire possible, avec parfois cycle entéro-hépatique.",
        "L’insuffisance rénale ou hépatique impose souvent une adaptation de posologie.",
        "La clairance conditionne directement la demi-vie du médicament."
      ],
      piege: "Cycle entéro-hépatique : un médicament réabsorbé après excrétion biliaire peut voir sa durée d’action prolongée de façon inattendue."
    },
    {
      id: "pg-demivie",
      titre: "Demi-vie et état d’équilibre",
      resume: "La demi-vie (t½) est le temps nécessaire pour que la concentration plasmatique diminue de moitié.",
      points: [
        "État d’équilibre (steady state) atteint après environ 4 à 5 demi-vies d’administrations répétées.",
        "Plus la demi-vie est longue, plus le temps pour atteindre l’équilibre est long.",
        "Une dose de charge permet d’atteindre plus vite la concentration d’équilibre.",
        "La demi-vie dépend du Vd et de la clairance : t½ = 0,693 × Vd / Clairance.",
        "Utile pour définir le rythme d’administration (nombre de prises/jour)."
      ],
      piege: "Doubler la dose ne double pas la vitesse d’atteinte de l’équilibre : seule une dose de charge initiale accélère l’atteinte du plateau."
    },
    {
      id: "pg-recepteurs",
      titre: "Récepteurs pharmacologiques",
      resume: "La plupart des médicaments agissent en se liant à une cible protéique spécifique (récepteur, enzyme, canal, transporteur).",
      points: [
        "4 grandes familles de récepteurs : couplés aux protéines G, canaux ioniques, récepteurs-enzymes, récepteurs nucléaires.",
        "L’affinité décrit la force de liaison ligand-récepteur.",
        "L’activité intrinsèque décrit la capacité à activer le récepteur une fois lié.",
        "La spécificité n’est jamais totale : à forte dose, un médicament peut agir sur d’autres cibles.",
        "La densité et la sensibilité des récepteurs peuvent varier (régulation, tolérance)."
      ],
      piege: "Une forte affinité n’implique pas une forte efficacité : un antagoniste peut avoir une affinité très élevée sans activité intrinsèque."
    },
    {
      id: "pg-agonistes",
      titre: "Agonistes, antagonistes, agonistes partiels",
      resume: "La réponse pharmacologique dépend à la fois de l’affinité et de l’activité intrinsèque de la molécule sur son récepteur.",
      points: [
        "Agoniste plein : affinité + activité intrinsèque maximale (effet = 100 %).",
        "Agoniste partiel : active le récepteur mais sans atteindre l’effet maximal, même à forte dose.",
        "Antagoniste : se lie sans activer, bloque l’action d’un agoniste (compétitif ou non compétitif).",
        "Antagoniste compétitif : effet réversible par ↑ de la dose d’agoniste.",
        "Antagoniste non compétitif : l’effet maximal de l’agoniste reste diminué même à forte dose."
      ],
      piege: "Un agoniste partiel peut agir comme un antagoniste relatif s’il est associé à un agoniste plein puissant (il « prend la place » sans activer autant)."
    },
    {
      id: "pg-doseeffet",
      titre: "Relation dose-effet et index thérapeutique",
      resume: "La courbe dose-effet décrit l’intensité de la réponse pharmacologique en fonction de la dose administrée.",
      points: [
        "DE50 : dose produisant 50 % de l’effet maximal (mesure de la puissance).",
        "Index thérapeutique = rapport entre dose toxique et dose efficace (DT50/DE50 par exemple).",
        "Plus l’index thérapeutique est élevé, plus la marge de sécurité est grande.",
        "Une fenêtre thérapeutique étroite impose souvent une surveillance biologique (ex. lithium, digoxine, AVK).",
        "La variabilité interindividuelle peut déplacer la courbe dose-effet d’un patient à l’autre."
      ],
      piege: "Puissance (dose nécessaire) et efficacité (effet maximal atteignable) sont deux notions différentes : un médicament peut être plus puissant sans être plus efficace."
    },
    {
      id: "pg-voies",
      titre: "Voies d’administration",
      resume: "Le choix de la voie d’administration influence la vitesse d’action, la biodisponibilité et l’observance.",
      points: [
        "Voie orale : pratique, mais soumise à l’absorption digestive et au premier passage hépatique.",
        "Voie IV : biodisponibilité de 100 %, action rapide, pas d’effet de premier passage.",
        "Voie sublinguale : évite le premier passage hépatique (ex. trinitrine).",
        "Voie rectale : évite partiellement le premier passage hépatique.",
        "Voie transdermique : libération prolongée, évite le tube digestif et le premier passage hépatique.",
        "Voie inhalée : action locale rapide sur les voies respiratoires, faible passage systémique aux doses usuelles."
      ],
      piege: "La voie sublinguale et la voie rectale ne suppriment pas totalement le premier passage hépatique, elles le réduisent seulement en partie."
    }
  ],
  physiologie: [
    {
      id: "phy-coeur",
      titre: "Cycle cardiaque",
      resume: "Le cycle cardiaque alterne systole (contraction, éjection) et diastole (relâchement, remplissage).",
      points: [
        "Systole ventriculaire : contraction isovolumétrique puis éjection.",
        "Diastole : relâchement isovolumétrique puis remplissage passif puis actif (systole auriculaire).",
        "Le nœud sinusal (pacemaker naturel) initie l’activité électrique.",
        "La conduction passe par le nœud auriculo-ventriculaire, le faisceau de His, puis les fibres de Purkinje.",
        "Le débit cardiaque = fréquence cardiaque × volume d’éjection systolique."
      ],
      piege: "Le nœud AV ralentit physiologiquement la conduction pour laisser le temps aux ventricules de se remplir avant leur contraction."
    },
    {
      id: "phy-respi",
      titre: "Mécanique ventilatoire et échanges gazeux",
      resume: "La ventilation pulmonaire assure les échanges gazeux (O2/CO2) entre l’air alvéolaire et le sang capillaire.",
      points: [
        "Inspiration : phénomène actif (contraction du diaphragme et des intercostaux externes).",
        "Expiration au repos : phénomène passif (relâchement musculaire, élasticité pulmonaire).",
        "Les échanges gazeux se font par diffusion simple à travers la membrane alvéolo-capillaire.",
        "Le CO2 est transporté majoritairement sous forme de bicarbonates (HCO3-) dans le sang.",
        "La ventilation est régulée principalement par la PaCO2 (via les chémorécepteurs centraux)."
      ],
      piege: "C’est surtout la PaCO2 (et non la PaO2) qui pilote physiologiquement la commande ventilatoire chez le sujet sain."
    },
    {
      id: "phy-digestif",
      titre: "Digestion et absorption",
      resume: "La digestion transforme les macronutriments en unités absorbables, principalement au niveau de l’intestin grêle.",
      points: [
        "Digestion des glucides : amylase salivaire et pancréatique → disaccharides → monosaccharides (bordure en brosse).",
        "Digestion des protéines : pepsine gastrique puis enzymes pancréatiques (trypsine, chymotrypsine) → acides aminés.",
        "Digestion des lipides : émulsification par les sels biliaires, hydrolyse par la lipase pancréatique.",
        "L’absorption se fait majoritairement au niveau du jéjunum.",
        "Le foie reçoit le sang portal en premier : rôle central dans le métabolisme post-absorptif."
      ],
      piege: "Les lipides absorbés (sous forme de chylomicrons) rejoignent la circulation lymphatique et non directement la veine porte, contrairement aux glucides et protéines."
    },
    {
      id: "phy-renal",
      titre: "Filtration glomérulaire et réabsorption",
      resume: "Le rein filtre le plasma au niveau du glomérule puis réabsorbe sélectivement l’eau et les solutés utiles le long du néphron.",
      points: [
        "Filtration glomérulaire : passage non sélectif de l’eau et des petites molécules, pas des protéines/cellules.",
        "Réabsorption majoritaire (eau, glucose, acides aminés) au niveau du tube contourné proximal.",
        "L’anse de Henlé participe à la concentration des urines (gradient corticopapillaire).",
        "Le tube contourné distal et le tube collecteur assurent l’ajustement fin (régulé par l’aldostérone, l’ADH).",
        "Le débit de filtration glomérulaire (DFG) est le reflet principal de la fonction rénale."
      ],
      piege: "Le glucose filtré est normalement entièrement réabsorbé au tube proximal : sa présence dans les urines (glycosurie) traduit un dépassement du seuil de réabsorption, pas un défaut de filtration."
    },
    {
      id: "phy-nerveux",
      titre: "Potentiel d’action et transmission synaptique",
      resume: "L’influx nerveux se propage sous forme de potentiel d’action, puis se transmet à la cellule suivante via une synapse.",
      points: [
        "Potentiel de repos négatif (~-70 mV), maintenu par la pompe Na+/K+-ATPase.",
        "Dépolarisation : entrée de Na+ ; repolarisation : sortie de K+.",
        "Le potentiel d’action est un phénomène « tout ou rien », qui se propage sans s’atténuer.",
        "Synapse chimique : libération d’un neurotransmetteur dans la fente synaptique, fixation sur des récepteurs post-synaptiques.",
        "La transmission peut être excitatrice (ex. glutamate) ou inhibitrice (ex. GABA)."
      ],
      piege: "La vitesse de conduction est augmentée par la myélinisation (conduction saltatoire), pas par une modification du potentiel d’action lui-même."
    },
    {
      id: "phy-endocrine",
      titre: "Grands axes hormonaux",
      resume: "Le système endocrinien régule les grandes fonctions de l’organisme via des boucles de rétrocontrôle hormonal.",
      points: [
        "Axe hypothalamo-hypophyso-thyroïdien : TRH → TSH → T3/T4, avec rétrocontrôle négatif.",
        "Axe hypothalamo-hypophyso-surrénalien : CRH → ACTH → cortisol.",
        "Pancréas endocrine : insuline (hypoglycémiante) et glucagon (hyperglycémiant), en équilibre.",
        "Le rétrocontrôle négatif est le mécanisme de régulation le plus fréquent (la hausse de l’hormone périphérique freine l’axe).",
        "Certaines hormones agissent en quelques secondes (peptidiques, récepteurs membranaires), d’autres en heures (stéroïdiennes, récepteurs nucléaires)."
      ],
      piege: "Une hormone périphérique élevée (ex. T4) freine normalement l’axe hypophysaire (TSH basse) : une TSH haute avec T4 basse oriente vers une hypothyroïdie périphérique, pas centrale."
    },
    {
      id: "phy-sang",
      titre: "Sang et hématopoïèse",
      resume: "Le sang est composé de plasma et d’éléments figurés (globules rouges, globules blancs, plaquettes), tous issus de la moelle osseuse.",
      points: [
        "Hématopoïèse : différenciation à partir d’une cellule souche hématopoïétique pluripotente.",
        "Globules rouges (hématies) : transport de l’O2 via l’hémoglobine, durée de vie ~120 jours.",
        "Globules blancs (leucocytes) : rôle immunitaire (polynucléaires, lymphocytes, monocytes).",
        "Plaquettes : rôle dans l’hémostase primaire (formation du clou plaquettaire).",
        "L’érythropoïétine (rénale) stimule la production de globules rouges en réponse à l’hypoxie."
      ],
      piege: "Une insuffisance rénale chronique peut provoquer une anémie par déficit de production d’érythropoïétine, indépendamment de toute carence martiale."
    },
    {
      id: "phy-immunite",
      titre: "Immunité innée et adaptative",
      resume: "Le système immunitaire combine une réponse innée rapide et non spécifique, et une réponse adaptative plus lente mais spécifique et mémorisée.",
      points: [
        "Immunité innée : barrières physiques, phagocytes, complément, inflammation — réponse immédiate, non spécifique.",
        "Immunité adaptative : lymphocytes T et B, réponse spécifique d’un antigène, avec mémoire immunitaire.",
        "Lymphocytes B → différenciation en plasmocytes → production d’anticorps (immunité humorale).",
        "Lymphocytes T : CD4 (auxiliaires, coordination) et CD8 (cytotoxiques, destruction des cellules infectées).",
        "Le principe de la vaccination repose sur la mémoire immunitaire adaptative."
      ],
      piege: "La réponse immunitaire secondaire (2e contact avec l’antigène) est plus rapide et plus intense que la primaire grâce aux lymphocytes mémoire, pas parce que l’immunité innée s’améliore."
    }
  ],
  biochimie: [
    {
      id: "bc-aa",
      titre: "Acides aminés et protéines",
      resume: "Les protéines sont des polymères d’acides aminés reliés par des liaisons peptidiques, organisés en structures hiérarchiques.",
      points: [
        "20 acides aminés protéinogènes, différant par leur chaîne latérale (R).",
        "Structure primaire : séquence des acides aminés.",
        "Structure secondaire : hélice α et feuillet β, stabilisées par liaisons hydrogène.",
        "Structure tertiaire : repliement 3D global d’une chaîne ; structure quaternaire : assemblage de plusieurs chaînes.",
        "La fonction d’une protéine dépend étroitement de sa conformation 3D (dénaturation = perte de fonction)."
      ],
      piege: "La liaison peptidique a un caractère partiellement rigide (résonance), ce qui limite la rotation libre du squelette protéique."
    },
    {
      id: "bc-enzymo",
      titre: "Enzymologie : cinétique de Michaelis-Menten",
      resume: "La cinétique enzymatique décrit la vitesse d’une réaction catalysée en fonction de la concentration en substrat.",
      points: [
        "Vmax : vitesse maximale de la réaction, atteinte à saturation en substrat.",
        "Km : constante de Michaelis, concentration en substrat pour laquelle v = Vmax/2. Reflète l’affinité enzyme-substrat (Km faible = forte affinité).",
        "Inhibition compétitive : ↑ Km apparent, Vmax inchangée (dépassable par excès de substrat).",
        "Inhibition non compétitive : Vmax ↓, Km inchangé.",
        "Les cofacteurs (coenzymes, ions métalliques) sont souvent indispensables à l’activité enzymatique."
      ],
      piege: "Une inhibition compétitive peut toujours être levée par un excès de substrat, contrairement à une inhibition non compétitive."
    },
    {
      id: "bc-glucides",
      titre: "Glucides : structure et digestion",
      resume: "Les glucides regroupent oses simples, disaccharides et polysaccharides, principale source d’énergie rapidement mobilisable.",
      points: [
        "Oses de référence : glucose, fructose, galactose (hexoses).",
        "Disaccharides : saccharose (glucose+fructose), lactose (glucose+galactose), maltose (glucose+glucose).",
        "Polysaccharides de réserve : glycogène (animal), amidon (végétal).",
        "La digestion des polysaccharides commence dans la bouche (amylase salivaire) et se termine au niveau de la bordure en brosse intestinale.",
        "Le glucose est la seule source d’énergie utilisable directement par certains tissus (cerveau, globules rouges)."
      ],
      piege: "Le glucose et le galactose ne diffèrent que par la configuration d’un seul carbone (épimères), ce qui suffit à changer leurs propriétés biologiques."
    },
    {
      id: "bc-glycolyse",
      titre: "Glycolyse",
      resume: "La glycolyse est la voie de dégradation cytoplasmique du glucose en pyruvate, avec production nette d’ATP et de NADH.",
      points: [
        "Se déroule dans le cytoplasme, en présence ou absence d’oxygène.",
        "Bilan net : 1 glucose → 2 pyruvate + 2 ATP (nets) + 2 NADH.",
        "En anaérobiose : le pyruvate est converti en lactate pour régénérer le NAD+.",
        "En aérobiose : le pyruvate entre dans la mitochondrie pour être décarboxylé en acétyl-CoA.",
        "Étape clé régulatrice : la phosphofructokinase-1 (PFK-1), inhibée par un excès d’ATP."
      ],
      piege: "Le bilan net est de 2 ATP (et non 4) car 2 ATP sont consommés en début de voie avant la phase de production."
    },
    {
      id: "bc-krebs",
      titre: "Cycle de Krebs",
      resume: "Le cycle de Krebs (cycle de l’acide citrique) oxyde l’acétyl-CoA dans la mitochondrie, produisant du CO2 et des coenzymes réduits.",
      points: [
        "Se déroule dans la matrice mitochondriale.",
        "1 tour du cycle par acétyl-CoA entrant : produit 3 NADH, 1 FADH2, 1 GTP (ou ATP), 2 CO2.",
        "Les coenzymes réduits (NADH, FADH2) alimentent ensuite la chaîne respiratoire.",
        "Le cycle est aussi une plaque tournante pour la synthèse de précurseurs (acides aminés, hème…).",
        "Régulé notamment par la disponibilité en NAD+ et en ADP."
      ],
      piege: "Le cycle de Krebs ne consomme pas d’O2 directement : c’est la chaîne respiratoire en aval qui en a besoin pour réoxyder NADH et FADH2."
    },
    {
      id: "bc-chaine",
      titre: "Chaîne respiratoire et phosphorylation oxydative",
      resume: "La chaîne respiratoire mitochondriale utilise les électrons de NADH/FADH2 pour créer un gradient de protons, exploité pour synthétiser l’ATP.",
      points: [
        "Localisée dans la membrane interne mitochondriale, 4 complexes protéiques principaux.",
        "Le transfert d’électrons pompe des protons (H+) de la matrice vers l’espace intermembranaire.",
        "L’ATP synthase utilise le reflux de protons pour phosphoryler l’ADP en ATP (chimiosmose).",
        "L’oxygène est l’accepteur final des électrons, réduit en eau.",
        "Un découplant dissipe le gradient sans produire d’ATP → production de chaleur."
      ],
      piege: "Le NADH mitochondrial et le NADH cytoplasmique n’ont pas le même rendement énergétique final, car leur transfert vers la mitochondrie passe par des navettes différentes."
    },
    {
      id: "bc-lipides",
      titre: "Lipides et β-oxydation",
      resume: "Les acides gras constituent une réserve énergétique majeure, dégradée par β-oxydation mitochondriale.",
      points: [
        "Triglycérides = 3 acides gras + glycérol, forme de stockage principale dans le tissu adipeux.",
        "La β-oxydation dégrade l’acide gras par cycles successifs, libérant des unités d’acétyl-CoA.",
        "Chaque cycle de β-oxydation produit 1 FADH2 et 1 NADH en plus de l’acétyl-CoA.",
        "L’acétyl-CoA produit peut ensuite entrer dans le cycle de Krebs.",
        "En cas de jeûne prolongé, l’excès d’acétyl-CoA hépatique génère des corps cétoniques."
      ],
      piege: "La β-oxydation se déroule dans la mitochondrie, ce qui nécessite un transporteur spécifique (carnitine) pour faire entrer les acides gras à longue chaîne."
    },
    {
      id: "bc-nucleiques",
      titre: "Acides nucléiques : structure ADN/ARN",
      resume: "L’ADN et l’ARN sont des polymères de nucléotides portant l’information génétique et assurant son expression.",
      points: [
        "Nucléotide = base azotée + sucre (désoxyribose ou ribose) + phosphate.",
        "ADN : double hélice, bases A-T et C-G appariées par liaisons hydrogène.",
        "ARN : simple brin, contient de l’uracile à la place de la thymine.",
        "La complémentarité des bases permet la réplication fidèle de l’ADN.",
        "Différents types d’ARN : messager (ARNm), ribosomal (ARNr), de transfert (ARNt)."
      ],
      piege: "A-T sont liés par 2 liaisons hydrogène et C-G par 3 : une séquence riche en GC est donc plus stable thermiquement."
    },
    {
      id: "bc-expression",
      titre: "Réplication, transcription, traduction",
      resume: "L’expression du génome suit le dogme central : ADN → ARN (transcription) → protéine (traduction).",
      points: [
        "Réplication : duplication de l’ADN avant division cellulaire, semi-conservative.",
        "Transcription : synthèse d’un ARNm à partir d’un brin d’ADN matrice, par l’ARN polymérase (noyau).",
        "Traduction : synthèse protéique par le ribosome à partir de l’ARNm, avec l’ARNt apportant les acides aminés (cytoplasme).",
        "Le code génétique est lu par codons (triplets de nucléotides), dégénéré et quasi universel.",
        "Chez les eucaryotes, l’ARNm subit une maturation (épissage, coiffe, queue poly-A) avant traduction."
      ],
      piege: "Le code génétique est dégénéré (plusieurs codons pour un même acide aminé) mais pas ambigu : un codon donné ne code jamais qu’un seul acide aminé."
    },
    {
      id: "bc-uree",
      titre: "Cycle de l’urée",
      resume: "Le cycle de l’urée permet l’élimination de l’azote issu du catabolisme des acides aminés, sous forme d’urée non toxique.",
      points: [
        "Se déroule pour partie dans la mitochondrie, pour partie dans le cytoplasme des hépatocytes.",
        "L’ammoniac (NH3), toxique, est capté et transformé en urée, beaucoup moins toxique et hydrosoluble.",
        "L’urée produite est ensuite éliminée par voie rénale.",
        "Une insuffisance hépatique sévère peut provoquer une hyperammoniémie (accumulation d’ammoniac).",
        "Ce cycle est directement lié au catabolisme des acides aminés (désamination)."
      ],
      piege: "C’est le foie, pas le rein, qui transforme l’ammoniac toxique en urée : le rein ne fait qu’excréter l’urée déjà formée."
    }
  ],
  questions: [
    {
      id: "q1",
      module: "dci",
      theme: "Pharmaco",
      q: "Quel effet indésirable typique des IEC doit faire évoquer un switch vers un sartan ?",
      choices: ["Toux sèche", "Photosensibilité", "Syndrome extrapyramidal", "Hypoglycémie"],
      a: 0,
      exp: "La toux sèche par accumulation de bradykinine est classique sous IEC. Un sartan ne l’entraîne généralement pas."
    },
    {
      id: "q2",
      module: "dci",
      theme: "Diabète",
      q: "La metformine expose principalement à quel risque rare mais grave ?",
      choices: ["Acidocétose", "Acidose lactique", "Syndrome sérotoninergique", "Agranulocytose"],
      a: 1,
      exp: "Acidose lactique, surtout si IR, hypoxie, alcool, ou produit iodé."
    },
    {
      id: "q3",
      module: "dci",
      theme: "Calcul",
      q: "Amoxicilline 1 g × 3/j pendant 7 jours. Combien de gélules de 500 mg faut-il délivrer ?",
      choices: ["21", "28", "42", "14"],
      a: 2,
      exp: "1 g = 2 gélules de 500 mg, × 3/j × 7 j = 42."
    },
    {
      id: "q4",
      module: "dci",
      theme: "AVK",
      q: "Quel conseil est prioritaire à la délivrance de warfarine ?",
      choices: ["Prendre avec du pamplemousse", "Automédication AINS possible", "Surveillance de l’INR et carnet AVK", "Arrêt dès disparition des symptômes"],
      a: 2,
      exp: "Les AVK imposent un INR ciblé et une éducation stricte, notamment contre les AINS."
    },
    {
      id: "q5",
      module: "dci",
      theme: "OTC",
      q: "Dose maximale usuelle de paracétamol chez l’adulte sans facteur de risque hépatique ?",
      choices: ["2 g/j", "3 g/j", "4 g/j", "6 g/j"],
      a: 2,
      exp: "4 g/24 h en l’absence de risque ; 3 g si facteur de risque (âgé, dénutri, alcool, IR/IH)."
    },
    {
      id: "q6",
      module: "dci",
      theme: "Cardio",
      q: "Les statines sont contre-indiquées principalement en cas de :",
      choices: ["Asthme", "Grossesse", "Hypothyroïdie traitée", "Insuffisance veineuse"],
      a: 1,
      exp: "Grossesse et allaitement : CI. Aussi maladie hépatique active."
    },
    {
      id: "q7",
      module: "dci",
      theme: "Respi",
      q: "Un patient utilise sa Ventoline 8 fois par jour depuis 1 semaine. Que faut-il en conclure ?",
      choices: ["Contrôle asthmatique satisfaisant", "Possible mauvais contrôle, réorienter", "Normal en fond de traitement", "Arrêter le corticoïde inhalé"],
      a: 1,
      exp: "Un SABA très fréquent = mauvais contrôle. Il faut un fond (CSI ± LABA) et une évaluation médicale."
    },
    {
      id: "q8",
      module: "dci",
      theme: "Thyroïde",
      q: "La lévothyroxine se prend idéalement :",
      choices: ["Au coucher avec un lait", "À jeun, à distance du calcium et du fer", "Seulement si TSH basse", "En même temps que les IPP pour mieux absorber"],
      a: 1,
      exp: "Absorption optimale à jeun. Calcium, fer, soja, certains IPP diminuent l’absorption."
    },
    {
      id: "q9",
      module: "dci",
      theme: "AINS",
      q: "Quelle association médicamenteuse expose particulièrement au risque d’insuffisance rénale aiguë (« triple whammy ») ?",
      choices: ["IEC/sartan + diurétique + AINS", "Statine + IPP", "Paracétamol + antihistaminique", "β-bloquant + IEC"],
      a: 0,
      exp: "L’association IEC ou sartan + diurétique + AINS majore fortement le risque d’insuffisance rénale aiguë, surtout en cas de déshydratation."
    },
    {
      id: "q10",
      module: "dci",
      theme: "Antalgie",
      q: "Quel risque majeur si le tramadol est associé à un ISRS ou un triptan ?",
      choices: ["Syndrome sérotoninergique", "Acidose lactique", "Hypokaliémie", "Photosensibilisation"],
      a: 0,
      exp: "Le tramadol a une action sérotoninergique ; associé à d’autres sérotoninergiques, il expose au syndrome sérotoninergique."
    },
    {
      id: "q11",
      module: "dci",
      theme: "Cardio",
      q: "Quel effet indésirable fréquent et bénin de l’amlodipine faut-il expliquer au patient ?",
      choices: ["Toux sèche", "Œdèmes des chevilles", "Hypoglycémie", "Photosensibilisation"],
      a: 1,
      exp: "Les inhibiteurs calciques dihydropyridiniques provoquent souvent des œdèmes des membres inférieurs, non dangereux mais à expliquer."
    },
    {
      id: "q12",
      module: "dci",
      theme: "Cardio",
      q: "Que faut-il absolument éviter à l’arrêt d’un traitement par bisoprolol au long cours ?",
      choices: ["Un arrêt brutal", "Une prise le matin", "Une association au paracétamol", "Un contrôle de la PA"],
      a: 0,
      exp: "L’arrêt brutal d’un β-bloquant expose à un effet rebond (tachycardie, poussée hypertensive, angor)."
    },
    {
      id: "q13",
      module: "dci",
      theme: "Cardio",
      q: "Quel paramètre biologique surveiller en priorité sous furosémide au long cours ?",
      choices: ["La kaliémie", "La glycémie à jeun", "Les plaquettes", "La TSH"],
      a: 0,
      exp: "Les diurétiques de l’anse exposent à l’hypokaliémie, à surveiller notamment si association à la digoxine."
    },
    {
      id: "q14",
      module: "dci",
      theme: "Hémostase",
      q: "Quel IPP est préférable à l’oméprazole en association avec le clopidogrel ?",
      choices: ["Le pantoprazole", "L’ésoméprazole", "Le lansoprazole à forte dose", "Aucun IPP n’est possible"],
      a: 0,
      exp: "Oméprazole et ésoméprazole inhibent le CYP2C19 qui active le clopidogrel ; le pantoprazole interfère moins."
    },
    {
      id: "q15",
      module: "dci",
      theme: "Hémostase",
      q: "Contrairement aux AVK, les AOD comme l’apixaban ne nécessitent pas :",
      choices: ["De surveillance systématique de l’INR", "De respecter les CI", "De surveiller la fonction rénale", "D’éduquer le patient"],
      a: 0,
      exp: "Les AOD ont une posologie fixe sans surveillance INR de routine, mais la fonction rénale reste à surveiller."
    },
    {
      id: "q16",
      module: "dci",
      theme: "Digestif",
      q: "La dompéridone est contre-indiquée en cas de :",
      choices: ["Allongement du QT connu", "Reflux gastro-œsophagien", "Constipation", "Allergie au paracétamol"],
      a: 0,
      exp: "La dompéridone expose à un risque d’allongement du QT et de troubles du rythme, d’où la CI en cas de QT long connu."
    },
    {
      id: "q17",
      module: "dci",
      theme: "Digestif",
      q: "Devant une diarrhée fébrile avec traces de sang, que faut-il éviter de délivrer sans avis médical ?",
      choices: ["Le lopéramide", "La réhydratation orale", "Le paracétamol", "Les probiotiques"],
      a: 0,
      exp: "Le lopéramide est contre-indiqué en cas de diarrhée fébrile ou sanglante évocatrice de colite : il faut orienter vers un avis médical."
    },
    {
      id: "q18",
      module: "dci",
      theme: "Psychiatrie",
      q: "Combien de temps faut-il en général avant de juger de l’efficacité d’un ISRS comme l’escitalopram ?",
      choices: ["24 à 48 heures", "2 à 4 semaines", "6 mois", "Immédiatement"],
      a: 1,
      exp: "L’effet antidépresseur des ISRS n’est pas immédiat ; il faut souvent 2 à 4 semaines avant d’évaluer l’efficacité."
    },
    {
      id: "q19",
      module: "dci",
      theme: "Psychiatrie",
      q: "Quelle association est particulièrement dangereuse avec l’alprazolam ?",
      choices: ["Alcool ou opioïdes", "Paracétamol", "Vitamine D", "Antihistaminique H1 non sédatif"],
      a: 0,
      exp: "L’association benzodiazépine + alcool ou opioïdes majore le risque de dépression respiratoire, parfois mortelle."
    },
    {
      id: "q20",
      module: "dci",
      theme: "Sommeil",
      q: "Un patient demande un renouvellement répété de zolpidem depuis plusieurs mois. Que dois-tu suspecter ?",
      choices: ["Une dépendance possible", "Une allergie", "Une interaction avec le paracétamol", "Un surdosage en vitamine D"],
      a: 0,
      exp: "Le zolpidem est indiqué pour une cure courte ; des renouvellements répétés doivent faire évoquer une dépendance."
    },
    {
      id: "q21",
      module: "dci",
      theme: "Respi",
      q: "Que conseiller systématiquement après une prise de corticoïde inhalé (béclométasone) ?",
      choices: ["Se rincer la bouche", "Boire un verre de lait", "Attendre 1 heure avant de manger", "Prendre un antihistaminique"],
      a: 0,
      exp: "Le rinçage buccal après chaque prise de corticoïde inhalé prévient la candidose oropharyngée."
    },
    {
      id: "q22",
      module: "dci",
      theme: "Antifongique",
      q: "Le fluconazole nécessite une vigilance particulière lors de la délivrance concomitante de :",
      choices: ["Statines et AVK", "Vitamine C", "Antihistaminiques H1", "Paracétamol"],
      a: 0,
      exp: "Le fluconazole inhibe des CYP450 et augmente les concentrations des statines et des AVK, avec risque toxique."
    },
    {
      id: "q23",
      module: "dci",
      theme: "Gynéco",
      q: "En cas d’oubli de plus de 12 h d’une pilule œstroprogestative, que faut-il conseiller ?",
      choices: ["Continuer sans rien changer", "Rattraper l’oubli et utiliser une contraception mécanique complémentaire", "Arrêter la plaquette immédiatement", "Doubler la dose du lendemain uniquement"],
      a: 1,
      exp: "Un oubli de plus de 12 h expose à un risque de grossesse : il faut rattraper l’oubli et ajouter une contraception mécanique le temps recommandé."
    },
    {
      id: "q24",
      module: "dci",
      theme: "Diabète",
      q: "Quelle association est contre-indiquée avec le gliclazide ?",
      choices: ["Le miconazole", "Le paracétamol", "La cétirizine", "Le fluconazole en prise unique vaginale"],
      a: 0,
      exp: "Le miconazole (même par voie locale) potentialise fortement l’effet du gliclazide et expose à une hypoglycémie sévère : association contre-indiquée."
    },
    {
      id: "q25",
      module: "pharmaco",
      theme: "Pharmacocinétique",
      q: "Quelle voie d’administration a, par définition, une biodisponibilité de 100 % ?",
      choices: ["Voie orale", "Voie intraveineuse", "Voie sublinguale", "Voie rectale"],
      a: 1,
      exp: "La voie IV délivre directement le médicament dans la circulation générale : F = 100 % par définition."
    },
    {
      id: "q26",
      module: "pharmaco",
      theme: "Pharmacocinétique",
      q: "Après combien de demi-vies environ l’état d’équilibre (steady state) est-il atteint lors d’administrations répétées ?",
      choices: ["1 à 2 demi-vies", "4 à 5 demi-vies", "10 demi-vies", "Immédiatement"],
      a: 1,
      exp: "Il faut environ 4 à 5 demi-vies pour atteindre l’état d’équilibre, quelle que soit la dose administrée."
    },
    {
      id: "q27",
      module: "pharmaco",
      theme: "Pharmacodynamie",
      q: "Un antagoniste compétitif se caractérise par :",
      choices: ["Un effet réversible par augmentation de la dose d’agoniste", "Une activité intrinsèque maximale", "Une diminution irréversible de l’effet maximal de l’agoniste", "Une absence totale d’affinité pour le récepteur"],
      a: 0,
      exp: "L’antagonisme compétitif est surmontable : un excès d’agoniste peut déplacer l’antagoniste du récepteur."
    },
    {
      id: "q28",
      module: "pharmaco",
      theme: "Pharmacocinétique",
      q: "Qu’est-ce que la clairance d’un médicament ?",
      choices: ["Le volume de plasma totalement épuré du médicament par unité de temps", "La dose totale éliminée en 24 h", "Le pourcentage de liaison aux protéines plasmatiques", "La concentration plasmatique maximale atteinte"],
      a: 0,
      exp: "La clairance est un débit d’épuration : volume de plasma épuré du médicament par unité de temps."
    },
    {
      id: "q29",
      module: "pharmaco",
      theme: "Pharmacodynamie",
      q: "Un index thérapeutique étroit signifie que :",
      choices: ["La dose toxique est proche de la dose efficace, nécessitant une surveillance", "Le médicament est très sûr", "Le médicament n’a aucun effet indésirable", "La posologie ne varie jamais d’un patient à l’autre"],
      a: 0,
      exp: "Un index thérapeutique étroit impose souvent un suivi biologique rapproché (ex. lithium, digoxine, AVK)."
    },
    {
      id: "q30",
      module: "pharmaco",
      theme: "Pharmacocinétique",
      q: "L’effet de premier passage hépatique concerne principalement quelle voie d’administration ?",
      choices: ["La voie orale", "La voie intraveineuse", "La voie sublinguale", "La voie inhalée"],
      a: 0,
      exp: "Après absorption digestive, le médicament passe par la veine porte puis le foie avant d’atteindre la circulation générale : c’est le premier passage hépatique, propre à la voie orale."
    },
    {
      id: "q31",
      module: "physio",
      theme: "Cardio physio",
      q: "Quelle structure initie physiologiquement l’activité électrique cardiaque ?",
      choices: ["Le nœud sinusal", "Le nœud auriculo-ventriculaire", "Le faisceau de His", "Les fibres de Purkinje"],
      a: 0,
      exp: "Le nœud sinusal est le pacemaker naturel du cœur, à l’origine de l’activité électrique spontanée."
    },
    {
      id: "q32",
      module: "physio",
      theme: "Respi physio",
      q: "Quel est le principal stimulus physiologique de la commande ventilatoire chez le sujet sain ?",
      choices: ["La PaCO2", "La PaO2 seule", "Le pH urinaire", "La fréquence cardiaque"],
      a: 0,
      exp: "C’est la PaCO2, détectée par les chémorécepteurs centraux, qui régule en priorité la ventilation chez le sujet sain."
    },
    {
      id: "q33",
      module: "physio",
      theme: "Rénal physio",
      q: "Où se fait la réabsorption majoritaire de l’eau et du glucose filtrés au niveau du néphron ?",
      choices: ["Le tube contourné proximal", "Le glomérule", "Le tube collecteur seul", "L’uretère"],
      a: 0,
      exp: "Le tube contourné proximal réabsorbe la majorité de l’eau, du glucose et des acides aminés filtrés."
    },
    {
      id: "q34",
      module: "physio",
      theme: "Nerveux physio",
      q: "Que se passe-t-il lors de la phase de dépolarisation du potentiel d’action ?",
      choices: ["Une entrée massive de Na+ dans la cellule", "Une sortie massive de K+", "Une entrée de Cl-", "Un arrêt total des échanges ioniques"],
      a: 0,
      exp: "La dépolarisation correspond à l’ouverture des canaux Na+ voltage-dépendants et à l’entrée de sodium."
    },
    {
      id: "q35",
      module: "physio",
      theme: "Endocrino physio",
      q: "Dans l’axe thyroïdien, une TSH élevée associée à une T4 basse oriente vers :",
      choices: ["Une hypothyroïdie périphérique", "Une hyperthyroïdie", "Un fonctionnement normal", "Une atteinte hypophysaire isolée"],
      a: 0,
      exp: "Le rétrocontrôle négatif normal : quand la T4 périphérique est basse, l’hypophyse sécrète davantage de TSH pour compenser — typique d’une hypothyroïdie périphérique."
    },
    {
      id: "q36",
      module: "physio",
      theme: "Hématologie",
      q: "Quelle hormone stimule la production de globules rouges par la moelle osseuse ?",
      choices: ["L’érythropoïétine", "L’insuline", "L’aldostérone", "La TSH"],
      a: 0,
      exp: "L’érythropoïétine, produite principalement par le rein, stimule l’érythropoïèse en réponse à l’hypoxie."
    },
    {
      id: "q37",
      module: "biochimie",
      theme: "Enzymologie",
      q: "Qu’indique un Km faible dans la cinétique de Michaelis-Menten ?",
      choices: ["Une forte affinité de l’enzyme pour son substrat", "Une faible affinité de l’enzyme pour son substrat", "Une vitesse maximale élevée", "Une inhibition non compétitive"],
      a: 0,
      exp: "Km est inversement lié à l’affinité : un Km faible signifie que l’enzyme atteint la moitié de sa vitesse maximale à faible concentration en substrat, donc une forte affinité."
    },
    {
      id: "q38",
      module: "biochimie",
      theme: "Glycolyse",
      q: "Quel est le bilan net en ATP de la glycolyse pour une molécule de glucose ?",
      choices: ["2 ATP", "4 ATP", "36 ATP", "0 ATP"],
      a: 0,
      exp: "La glycolyse produit 4 ATP bruts mais en consomme 2 en début de voie, soit un bilan net de 2 ATP."
    },
    {
      id: "q39",
      module: "biochimie",
      theme: "Cycle de Krebs",
      q: "Où se déroule le cycle de Krebs dans la cellule ?",
      choices: ["Dans la matrice mitochondriale", "Dans le cytoplasme", "Dans le noyau", "Dans le réticulum endoplasmique"],
      a: 0,
      exp: "Le cycle de Krebs se déroule dans la matrice mitochondriale, contrairement à la glycolyse qui est cytoplasmique."
    },
    {
      id: "q40",
      module: "biochimie",
      theme: "Chaîne respiratoire",
      q: "Quel est l’accepteur final des électrons dans la chaîne respiratoire mitochondriale ?",
      choices: ["L’oxygène", "Le CO2", "Le NAD+", "Le glucose"],
      a: 0,
      exp: "L’oxygène est réduit en eau à l’issue de la chaîne respiratoire : c’est l’accepteur final des électrons."
    },
    {
      id: "q41",
      module: "biochimie",
      theme: "Lipides",
      q: "Quel cofacteur est indispensable pour faire entrer les acides gras à longue chaîne dans la mitochondrie avant la β-oxydation ?",
      choices: ["La carnitine", "La biotine", "L’acide folique", "La thiamine"],
      a: 0,
      exp: "La carnitine permet le transport des acides gras à longue chaîne à travers la membrane mitochondriale interne (navette carnitine)."
    },
    {
      id: "q42",
      module: "biochimie",
      theme: "Acides nucléiques",
      q: "Quelle base azotée remplace la thymine dans l’ARN ?",
      choices: ["L’uracile", "La cytosine", "La guanine", "L’adénine"],
      a: 0,
      exp: "L’ARN contient de l’uracile à la place de la thymine présente dans l’ADN."
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
    },
    {
      id: "c4",
      titre: "Trio à risque comptoir",
      enonce: "Un patient traité par ramipril et hydrochlorothiazide demande de l’ibuprofène en automédication pour une lombalgie, en pleine canicule.",
      question: "Quel risque identifies-tu et que fais-tu ?",
      points: [
        "Reconnaître le « triple whammy » : IEC + diurétique + AINS → risque d’insuffisance rénale aiguë.",
        "Risque majoré par la chaleur (déshydratation).",
        "Proposer une alternative sans AINS (paracétamol) en 1re intention.",
        "Si un AINS est jugé nécessaire : dose minimale, durée courte, bonne hydratation, avis médical si besoin.",
        "Insister sur l’hydratation en période de canicule."
      ]
    },
    {
      id: "c5",
      titre: "Clopidogrel et automédication",
      enonce: "Un patient sous clopidogrel après pose de stent coronarien demande de l’oméprazole en automédication pour des brûlures d’estomac occasionnelles.",
      question: "Quelle vigilance particulière as-tu à ce comptoir ?",
      points: [
        "L’oméprazole (et l’ésoméprazole) peuvent réduire l’efficacité du clopidogrel via le CYP2C19.",
        "Préférer le pantoprazole si un IPP est réellement nécessaire.",
        "Ne jamais faire arrêter le clopidogrel de sa propre initiative.",
        "Orienter vers le médecin/cardiologue si les brûlures persistent.",
        "Rappeler l’importance de la double antiagrégation après stent."
      ]
    },
    {
      id: "c6",
      titre: "Renouvellement de zolpidem",
      enonce: "Une patiente de 68 ans revient chercher son ordonnance de zolpidem pour la 8e fois consécutive, un comprimé par soir, sans limite de durée précisée par le prescripteur.",
      question: "Que fais-tu au comptoir ?",
      points: [
        "Repérer le risque de dépendance et de mésusage sur un usage prolongé.",
        "Évaluer le retentissement (chutes, troubles de la mémoire chez le sujet âgé).",
        "Ne pas arrêter brutalement : proposer un sevrage progressif avec le prescripteur.",
        "Aborder les règles d’hygiène du sommeil comme alternative.",
        "Alerter le prescripteur si la situation persiste sans réévaluation."
      ]
    }
  ]
};
