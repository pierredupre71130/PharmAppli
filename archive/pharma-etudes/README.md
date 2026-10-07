# PharmaÉtudes

PWA de révision pour étudiants en pharmacie (iPhone / iPad / ordinateur).

## Ouvrir
Ouvre `index.html` dans Safari ou Chrome.
Sur iPhone/iPad : Partager → Sur l’écran d’accueil.

## Niveau ciblé
Focus **DFGSP2** (1re année dans la fac de pharma, après la sélection PASS/L.AS) : priorité aux fondamentaux (pharmaco générale, physiologie, biochimie). Les fiches DCI et cas de comptoir restent disponibles en bonus (plutôt niveau DFASP/stage).

## Contenu
- **Cours & fondamentaux** (onglet dédié, 4 catégories) :
  - 10 fiches de pharmaco générale (ADME, biodisponibilité, récepteurs, index thérapeutique…)
  - 8 fiches de physiologie par grand système (cardio, respi, digestif, rénal, nerveux, endocrinien, sang, immunité)
  - 10 fiches de biochimie (structurale + métabolique : glycolyse, Krebs, chaîne respiratoire, β-oxydation…)
  - 28 fiches DCI (MOA, CI, EI, interactions, conseil) couvrant antibiotiques, cardio, diabète, hémostase, digestif, psy, respi, allergie, antifongique, gynéco
- 20 suffixes de classes thérapeutiques
- 42 QCM corrigés avec explication, filtrables par Fondamentaux / Médicaments / Tout
- Calculateurs (délivrance, dose/poids, débit)
- 6 cas de stage officinal (bonus)
- Mode sombre automatique (suit les réglages du téléphone)

## Mettre à jour l'app (important pour éviter le cache)
Le service worker (`sw.js`) sert l'app même hors-ligne. Pour qu'un téléphone qui a déjà installé l'app voie bien la nouvelle version après une mise à jour :
1. Change la constante `VERSION` en haut de `sw.js` (ex. date du jour).
2. Bump les `?v=` dans `index.html` (`styles.css`, `data.js`, `app.js`).

Sans ça, le navigateur ne détecte pas de changement dans `sw.js` et continue de servir l'ancien contenu en cache indéfiniment. Avec ce système, le nouveau service worker s'installe, prend la main immédiatement (`skipWaiting` + `clients.claim`) et recharge la page automatiquement dès qu'il devient actif.

## Règles de contenu (à respecter, surtout en vue d'une monétisation)
Objectif : éviter tout risque de copyright si l'app devient payante.
- **Jamais de copier-coller** depuis Vidal.fr, une notice/RCP ANSM, Wikipédia, un polycopié de cours ou des annales d'examen réelles. Toujours reformuler avec ses propres mots à partir des connaissances générales.
- Les **DCI** et **codes ATC** sont dans le domaine public / réutilisables librement — aucun souci à les citer.
- Les **noms de marque (princeps)** sont des marques déposées : les citer à titre informatif ("DCI X = marque Y") est un usage standard, mais ne jamais utiliser leurs logos/chartes graphiques ni laisser penser à un partenariat avec le laboratoire.
- Les **QCM et cas de stage** doivent être inventés (situations types), pas recopiés d'une banque d'annales existante.
- Si besoin d'une source de référence pour vérifier un fait : privilégier la **BDPM** (base de données publique des médicaments, data.gouv.fr), en **Licence Ouverte/Etalab**, explicitement réutilisable y compris commercialement.
- Un disclaimer est affiché dans l'app (page d'accueil) rappelant que le contenu est indépendant, à visée pédagogique, et que les marques citées appartiennent à leurs titulaires. Le maintenir à jour si le contenu évolue.

## Suite possible
- Brancher l’API BDPM (médicaments français)
- Importer des decks Anki
- Compte / sync
- Programme par année (DFGSP / DFASP / internat)
