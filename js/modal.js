function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Sélectionnez l'élément qui représente la croix
const closeBtn = document.querySelector('.close');

// La modale que vous souhaitez fermer
const modal = document.querySelector('.bground');

// Ajoutez un écouteur d'événements pour détecter le clic sur la croix
closeBtn.addEventListener('click', () => {
  // Ajoutez la logique pour cacher la modale
  modal.style.display = 'none';
});