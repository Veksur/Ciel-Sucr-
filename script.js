let panier = [];
let total = 0;

function ajouterAuPanier(nomProduit, prixProduit) {
    // Ajouter le produit au panier
    panier.push({ nom: nomProduit, prix: prixProduit });

    // Mettre à jour le total
    total += prixProduit;

    // Mettre à jour l'affichage du panier
    afficherPanier();
}

function afficherPanier() {
    const listePanier = document.getElementById('liste-panier');
    const totalPanier = document.getElementById('total-panier');

    // Vider la liste actuelle
    listePanier.innerHTML = '';

    // Afficher chaque produit dans le panier
    panier.forEach((produit) => {
        const item = document.createElement('li');
        item.textContent = `${produit.nom} - ${produit.prix}€`;
        listePanier.appendChild(item);
    });

    // Mettre à jour le total
    totalPanier.textContent = total.toFixed(2);
}
