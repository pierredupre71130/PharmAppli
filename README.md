# Mon IFSI

App de révision pour étudiante en soins infirmiers (iPhone / iPad / ordinateur), basée sur le **référentiel de formation infirmière 2026** (arrêté du 20 février 2026, applicable depuis la rentrée de septembre 2026).

## Ouvrir
Ouvre `index.html` dans Safari ou Chrome (ou héberge le dossier, par ex. avec GitHub Pages).
Sur iPhone/iPad : Partager → Sur l’écran d’accueil. L’app marche ensuite hors-ligne.

## Contenu (1re année)
Le référentiel national définit **15 UE** (domaines A à E) et leur programme sur les 3 ans ; **la répartition par semestre est fixée par chaque IFSI**. L’app suit donc cette logique :
- **Les 15 UE**, chacune avec son **programme officiel** (éléments de contenu du référentiel, regroupés par thème), ce que le référentiel attend **en 1re année**, et les fiches rattachées à chaque thème
- **Mon S1 / Mon S2** : sur chaque UE, tu indiques le semestre où ton IFSI la place ; l’accueil, les cours et les QCM peuvent ensuite être filtrés
- **126 fiches** (tous les thèmes du programme ont au moins une fiche) : « En simple », « À retenir », « En stage », piège fréquent, astuce mémo, vocabulaire, tes notes perso
- **Fiche PDF** : une fiche ou toute une UE (impression → « Enregistrer en PDF » ; sur iPhone : Imprimer → Partager → « Enregistrer dans Fichiers »)
- **230 QCM corrigés**, par UE ou par semestre, questions et réponses mélangées
- **Calculs de doses**, **lexique** médical, progression « Je maîtrise », mode sombre automatique

Les fiches sont des aides à la révision et ne remplacent pas les cours.

## Ajouter du contenu
Tout est dans `data.js` :
- `ues` : une UE par entrée (`domaine`, `code`, `titre`, `ects`, `an1`, `programme` = thèmes officiels)
- `fiches` : une fiche par entrée, rattachée à une UE via `ue` et à un thème du programme via `theme`
- `questions` : QCM (`a` = index de la bonne réponse)
- Pour ouvrir une nouvelle année : passer `dispo: true` dans `annees`

## Mettre à jour l’app (important pour éviter le cache)
1. Change la constante `VERSION` en haut de `sw.js`.
2. Bump les `?v=` dans `index.html` (`styles.css`, `data.js`, `app.js`).

## Archive
L’ancienne app pharma (PharmaÉtudes) est mise de côté dans `archive/pharma-etudes/`.
