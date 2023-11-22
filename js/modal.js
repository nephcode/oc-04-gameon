// ============================================================
// NAV ========================================================
// ============================================================
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ============================================================
// MODAL ACTION ===============================================
// ============================================================
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

let gamePassFirst = document.getElementById("first").value;
console.log(gamePassFirst);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("Ouverture de la modal");
}


// Sélectionnez l'élément qui représente la croix
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.bground');

// Ajoutez un écouteur d'événements pour détecter le clic sur la croix
closeBtn.addEventListener('click', () => {
  // Ajoutez la logique pour cacher la modale
  modal.style.display = 'none';
  console.log("Fermeture de la modal");
});

// ============================================================
// FORMULAIRE  ================================================
// ============================================================


// PRENOM =====================================================
let gameFirst = document.getElementById("first").value;
if (gameFirst) {
  gameFirst.addEventListener('blur', () => {
      console.log(gameFirst);
  });
} else {
  gameFirstStyle = document.getElementById("first");
  gameFirstStyle.classList.add(".text-control");
  console.log("L'élément 'first' est vide.");
  
}
// NOM ========================================================
let gameLast = document.getElementById("last").value;
if (gameLast) {
  gameLast.addEventListener('blur', () => {
      console.log(gameLast);
  });
} else {
  console.log("L'élément 'last' est vide.");
}


//const gameLast = document.getElementById("last").value;
const gameBirth = document.getElementById("birthdate").value;
const gameEmail = document.getElementById("email").value;
const gameQuantity = document.getElementById("quantity").value;
console.log(gameFirst);
console.log(gameLast);

//=====================
//=====================
//=====================

form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  console.log("Il n’y a pas eu de rechargement de page");


});