# MCP et Vibecoding - Présentation Web

Une application web responsive pour présenter le contenu "Introduction aux Model Context Protocols (MCP) et au Vibecoding".

## Fonctionnalités

- **Navigation fluide entre les diapositives** : Utilisez les boutons, les flèches du clavier ou balayez sur mobile pour naviguer
- **Modes de présentation** : Manuel ou automatique avec différentes durées configurables
- **Interface responsive** : S'adapte parfaitement aux écrans de desktop, tablettes et mobiles
- **Illustrations SVG personnalisées** : Chaque diapositive possède une illustration vectorielle animée
- **Commandes clavier** :
  - Flèches gauche/droite pour naviguer
  - Barre d'espace pour avancer
  - Touche 'p' pour activer/désactiver le mode automatique
- **Double-clic** pour passer en mode plein écran
- **Barre de progression** en haut de la présentation

## Technologies utilisées

- HTML5
- CSS3 (avec variables CSS pour le thème de couleur)
- JavaScript vanilla (aucune dépendance externe)
- Tailwind CSS (via CDN)
- Police Poppins (Google Fonts)
- Font Awesome pour les icônes
- SVG pour les illustrations vectorielles

## Palette de couleurs

- Couleur principale : #FF9900 (Orange)
- Couleurs secondaires :
  - #0A58A5 (Bleu)
  - #0A58A5 (Vert)
  - #FC121B (Rouge)
  - #1C1C1C (Noir)

## Comment utiliser

1. Ouvrez le fichier `index.html` dans n'importe quel navigateur moderne
2. Utilisez les boutons de navigation ou les touches du clavier pour naviguer entre les diapositives
3. Pour activer la lecture automatique, sélectionnez un intervalle de temps dans le menu déroulant et cliquez sur le bouton de lecture

## Compatibilité

Cette présentation est compatible avec tous les navigateurs modernes :
- Chrome (recommandé)
- Firefox
- Safari
- Edge

## Structure du projet

```
presentation/
├── index.html       # Structure de la présentation
├── styles.css       # Styles et mise en page responsive
├── script.js        # Fonctionnalités de navigation et d'automatisation
├── images/          # Dossier contenant les illustrations SVG
│   ├── slide1-introduction.svg
│   ├── slide2-what-is-mcp.svg
│   ├── slide3-why-adopt-mcp.svg
│   ├── slide4-vibecoding.svg
│   ├── slide5-debate.svg
│   └── slide6-conclusion.svg
└── README.md        # Documentation
```

## Personnalisation

Pour modifier le contenu de la présentation, éditez les sections `<div class="slide">` dans le fichier `index.html`.
Pour modifier l'apparence, vous pouvez:
- Ajuster les variables CSS dans le fichier `styles.css`
- Modifier la configuration Tailwind dans la balise `<script>` du fichier `index.html`
- Changer la police en modifiant les importations Google Fonts
- Personnaliser les illustrations SVG dans le dossier `images/`