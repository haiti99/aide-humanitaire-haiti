// Fonction pour afficher ou masquer les champs en fonction du type de don sélectionné
function showFields() {
  const donType = document.getElementById('donType').value;
  
  // Masquer tous les champs d'input de don
  document.getElementById('argentFields').style.display = 'none';
  document.getElementById('nourritureFields').style.display = 'none';
  document.getElementById('vetementsFields').style.display = 'none';
  document.getElementById('medicamentsFields').style.display = 'none';

  // Afficher le champ correspondant en fonction du type de don choisi
  if (donType === 'argent') {
    document.getElementById('argentFields').style.display = 'block';
  } else if (donType === 'nourriture') {
    document.getElementById('nourritureFields').style.display = 'block';
  } else if (donType === 'vetements') {
    document.getElementById('vetementsFields').style.display = 'block';
  } else if (donType === 'medicaments') {
    document.getElementById('medicamentsFields').style.display = 'block';
  }
}

// Fonction pour gérer la soumission du formulaire
document.getElementById('donForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Empêcher l'envoi par défaut du formulaire

  // Récupérer les informations saisies dans le formulaire
  const donType = document.getElementById('donType').value;
  let detailsDon = '';

  if (donType === 'argent') {
    const montant = document.getElementById('montant').value;
    detailsDon = `Montant du don : ${montant} USD`;
  } else if (donType === 'nourriture') {
    const quantiteNourriture = document.getElementById('quantiteNourriture').value;
    detailsDon = `Quantité de nourriture : ${quantiteNourriture}`;
  } else if (donType === 'vetements') {
    const quantiteVetements = document.getElementById('quantiteVetements').value;
    detailsDon = `Quantité de vêtements : ${quantiteVetements}`;
  } else if (donType === 'medicaments') {
    const quantiteMedicaments = document.getElementById('quantiteMedicaments').value;
    detailsDon = `Quantité de médicaments : ${quantiteMedicaments}`;
  }

  // Préparer les données à envoyer au serveur
  const donData = {
    donType: donType,
    detailsDon: detailsDon
  };

  // Envoyer les données au serveur via une requête POST
  fetch('/votre-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(donData)  // Convertir les données en JSON
  })
  .then(response => response.json())  // Traiter la réponse du serveur
  .then(data => {
    // Afficher un message de confirmation ou une action après la soumission
    alert('Merci pour votre don !');
  })
  .catch(error => {
    console.error('Erreur:', error);
    alert('Une erreur est survenue. Veuillez réessayer plus tard.');
  });
});
