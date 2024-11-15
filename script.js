document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Votre message a été envoyé avec succès !');
    // Vous pouvez également envoyer le formulaire via un service comme Formspree ou un backend ici.
  } else {
    alert('Veuillez remplir tous les champs.');
  }
});
