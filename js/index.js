const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.boxed');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});



const zoneNom = document.getElementById("nom");
const zonePrenom = document.getElementById("prenom");
const zoneEmail = document.getElementById("email");
const messageErreur = document.getElementById("messageErreur");

// Regex pour la validation
const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/; // Accepte uniquement les lettres et espaces
const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Vérifie que l'email est bien un Gmail

// Fonction de validation
function validerChamp(champ, regex, erreurMessage) {
    let valeur = champ.value.trim();
    if (!regex.test(valeur)) {
        messageErreur.textContent = erreurMessage;
        return false;
    }
    messageErreur.textContent = ""; // Efface le message si tout est bon
    return true;
}

// Écouteurs d'événements pour la validation instantanée
zoneNom.addEventListener("input", () => validerChamp(zoneNom, nameRegex, "Le nom doit contenir uniquement des lettres et espaces !"));
zonePrenom.addEventListener("input", () => validerChamp(zonePrenom, nameRegex, "Le prénom doit contenir uniquement des lettres et espaces !"));
zoneEmail.addEventListener("input", () => validerChamp(zoneEmail, emailRegex, "Veuillez entrer une adresse Gmail valide !"));

// Validation lors de l'envoi du formulaire
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi automatique

    let nomValide = validerChamp(zoneNom, nameRegex, "Le nom est invalide !");
    let prenomValide = validerChamp(zonePrenom, nameRegex, "Le prénom est invalide !");
    let emailValide = validerChamp(zoneEmail, emailRegex, "Veuillez entrer une adresse Gmail valide !");

    if (nomValide && prenomValide && emailValide) {
        alert("Formulaire envoyé avec succès !");
        this.submit(); // Envoie le formulaire si tout est valide
    }
});
