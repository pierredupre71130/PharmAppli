# Mon IFSI

App de révision pour étudiante en soins infirmiers (iPhone / iPad / ordinateur), basée sur le **référentiel de formation infirmière 2026** (arrêté du 20 février 2026, applicable depuis la rentrée de septembre 2026).

## Ouvrir
Ouvre `index.html` dans Safari ou Chrome (ou héberge le dossier, par ex. avec GitHub Pages).
Sur iPhone/iPad : Partager → Sur l’écran d’accueil. L’app marche ensuite hors-ligne.

## Contenu (semestre 1)
- **6 UE du S1**, rangées par domaine : A.1 Fondements des sciences infirmières et raisonnement clinique · B.1 Sciences biomédicales · D.1 Savoir-être, communication professionnelle et leadership · D.4 Numérique en santé · E.1 Recherche, méthodes, analyse critique et données probantes · E.3 Méthodes de travail et aide à la réussite
- **Fiches de cours** : « En simple », « À retenir », « En stage », piège fréquent, astuce mémo, vocabulaire, et tes notes perso
- **Fiche PDF** : bouton sur chaque fiche, ou toute une UE d’un coup (ouvre l’impression → « Enregistrer en PDF » ; sur iPhone : Imprimer → bouton Partager → « Enregistrer dans Fichiers »)
- **QCM corrigés** par UE, avec explications et score
- **Calculs de doses** (volume à prélever, dose/poids, débit mL/h et gouttes/min, pourcentages)
- **Lexique** des préfixes/suffixes médicaux
- Suivi de progression (« Je maîtrise ») enregistré sur l’appareil, mode sombre automatique

⚠️ La liste des UE du S1 vient des sources publiques sur le référentiel 2026 : vérifie-la avec le planning de ton IFSI. Les fiches sont des aides à la révision et ne remplacent pas les cours.

## Ajouter du contenu
Tout est dans `data.js` :
- `ues` : une UE par entrée (`semestre`, `domaine`, `code`, `titre`…)
- `fiches` : une fiche par entrée, rattachée à une UE via `ue`
- `questions` : QCM (`a` = index de la bonne réponse)
- Pour ouvrir un nouveau semestre : passer `dispo: true` dans `semestres`

## Mettre à jour l’app (important pour éviter le cache)
1. Change la constante `VERSION` en haut de `sw.js`.
2. Bump les `?v=` dans `index.html` (`styles.css`, `data.js`, `app.js`).

## Archive
L’ancienne app pharma (PharmaÉtudes) est mise de côté dans `archive/pharma-etudes/`.
