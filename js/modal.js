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
// FONCTION  ======================= NEAH GAME ================
// =============================================== 2023 =======
  // change button by neah
/***
*
* 
* @param {string} targetBtn
* @param {string} classChg
* @param {string} TxtBtn
*/

function DisplayValidForm(targetBtn, TxtBtn, classChg){
  /// =============
  let btCloseForm = document.getElementById(targetBtn);
  //let finalMessage = "Merci pour votre inscription";
  //let paragraphe = "L'application pour apprendre à taper plus vite !";
  /// =============
  let txtDone = `
         <bouton id="FinalBtn" class="${classChg}"
          type="submit"
          class="button">${TxtBtn}</bouton>
        `;
  btCloseForm.innerHTML = txtDone;
  /// =============  
}

// ============================================================
// FORMULAIRE  ================================================
// ============================================================

// PRENOM =====================================================
/*
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
*/
// NOM ========================================================
/*
let gameLast = document.getElementById("last").value;
if (gameLast) {
  gameLast.addEventListener('blur', () => {
      console.log(gameLast);
  });
} else {
  console.log("L'élément 'last' est vide.");
}

*/

//const gameLast = document.getElementById("last").value;
const gameBirth = document.getElementById("birthdate").value;

const gameQuantity = document.getElementById("quantity").value;
//console.log(gameFirst);
//console.log(gameLast);

//=====================
//=====================
//=====================
const formOC = document.getElementById("ocform");
formOC.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  console.log("Il n’y a pas eu de rechargement de page");
  // prenom
  let gameFirst = document.getElementById("first").value;
  console.log("Prénom : " + gameFirst);
  // nom
  let gameLast = document.getElementById("last").value;
  console.log("Nom :" + gameLast);
  // email
  let gameEmail = document.getElementById("email").value;
  console.log("Email : " + gameEmail);
  // birth
  const gameBirth = document.getElementById("birthdate").value;
  console.log("Date de naissance : " + gameBirth);
  // Participation 
  const gameQuantity = document.getElementById("quantity").value;
  console.log("Nombre de Participation : " + gameQuantity);
  // Tournoi
  let gameTournoi = document.querySelectorAll('input[name="location"]');
  let location = "";
  for (let i = 0; i < gameTournoi.length; i++) {
    if (gameTournoi[i].checked) {
      location = gameTournoi[i].value
      break
    }
  }
  console.log(location) // affiche la valeur du radio coché
  // CGU & ADS
  const gameCgu = document.getElementById("checkboxcgu").checked;
  if(gameCgu){
    console.log("Conditions générales acceptées : Oui");  }
  else {
    console.log("Conditions générales acceptées : Non");  }
  const gameAds = document.getElementById("checkboxads").value;
  if(gameAds){
    console.log("Conditions RGPD acceptées : Oui");  }
  else {
    console.log("Conditions RGPD acceptées : Non");  }

  let ar = "Fermer";
  let classos = "btn-submit btn-signup modal-btn";
  let target = "FinalBtn";
  DisplayValidForm(target, ar, classos );
});