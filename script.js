function showFields() {
  // Masquer tous les champs dynamiques au départ
  let donFields = document.querySelectorAll('.donFields');
  donFields.forEach(field => field.style.display = 'none');

  // Récupérer la valeur du don sélectionné
  let donType = document.getElementById('donType').value;

  // Afficher les champs correspondants en fonction du choix
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
