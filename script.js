function changerCouleur() {
    const bouteille = document.getElementById('bouteille');
    const couleurs = ['#4CAF50', '#2196F3', '#f44336', '#FF9800', '#9C27B0']; // Exemples de couleurs

    // Générer un indice de couleur aléatoire
    const indiceCouleur = Math.floor(Math.random() * couleurs.length);

    // Changer la couleur de la bouteille
    bouteille.style.backgroundColor = couleurs[indiceCouleur];
}
