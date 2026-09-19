# PharmaÉtudes

PWA de révision pour étudiants en pharmacie (iPhone / iPad / ordinateur).

## Ouvrir
Ouvre `index.html` dans Safari ou Chrome.
Sur iPhone/iPad : Partager → Sur l’écran d’accueil.

## Contenu
- 28 fiches DCI (MOA, CI, EI, interactions, conseil) couvrant antibiotiques, cardio, diabète, hémostase, digestif, psy, respi, allergie, antifongique, gynéco
- 20 suffixes de classes thérapeutiques
- 24 QCM corrigés avec explication
- Calculateurs (délivrance, dose/poids, débit)
- 6 cas de stage officinal

## Mettre à jour l'app (important pour éviter le cache)
Le service worker (`sw.js`) sert l'app même hors-ligne. Pour qu'un téléphone qui a déjà installé l'app voie bien la nouvelle version après une mise à jour :
1. Change la constante `VERSION` en haut de `sw.js` (ex. date du jour).
2. Bump les `?v=` dans `index.html` (`styles.css`, `data.js`, `app.js`).

Sans ça, le navigateur ne détecte pas de changement dans `sw.js` et continue de servir l'ancien contenu en cache indéfiniment. Avec ce système, le nouveau service worker s'installe, prend la main immédiatement (`skipWaiting` + `clients.claim`) et recharge la page automatiquement dès qu'il devient actif.

## Suite possible
- Brancher l’API BDPM (médicaments français)
- Importer des decks Anki
- Compte / sync
- Programme par année (DFGSP / DFASP / internat)
