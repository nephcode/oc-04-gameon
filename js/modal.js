// ==================================NEPHA CODE ===============
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

// Target la croix
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.bground');
// Clic sur la croix
closeBtn.addEventListener('click', () => {
  // DisplayNone La Modale
  modal.style.display = 'none';
  document.getElementById('ocform').reset();
  console.log("Fermeture et clean modal");
});

// ===================================== NephaC00d3 ===========
// VALID FORM ====================== NEAH GAME ================
// =============================================== 2023 =======
// change button by NeahGame Feat NephaCode 
/***
* @param {string} targetBtn
* @param {string} classChg
* @param {string} txtBtn
*/
function DisplayValidForm(targetBtn, txtBtn, classChg){
  /// =============
  let btCloseForm = document.getElementById(targetBtn);
  //let finalMessage = "Merci pour votre inscription";
  //let paragraphe = "L'application pour apprendre à taper plus vite !";
  /// =============
  let txtDone = `
         <bouton id="FinalBtn" class="${classChg}"
          type="submit"
          class="button">${txtBtn}</bouton>
        `;
  let txtDon = `${txtBtn}`;
  btCloseForm.innerText = txtDon;
  /// =============  
}

// Ajoutez un écouteur d'événements pour détecter le clic sur la croix
let clozForm = document.getElementById("FinalBtn");
clozForm.addEventListener('click', () => {
  // Ajoutez la logique pour cacher la modale
  //modal.style.display = 'none';
  console.log("Fermeture et Clean Modal");
});

// ============================================================
// INPUT TEXT  =========================== NEPHA CODE =========
// ============================================================
 /// nom-fonction (nom-champ, condition, type de listener)
 // la fonction s'appelle en change sur les champs
 /**
 * 
 *
 * @param {string} inputOnAir
 * 
 * */
const onAirChange = (inputOnAir, listenerOnAir, regRuleOnAir) => {
  const targetAir = document.getElementById(inputOnAir);
  targetAir.addEventListener(listenerOnAir, (event) => {
    // bloquer le GET 
    //event.preventDefault();
    const inputValue = event.target.value;
    const fieldData = targetAir.parentElement;
    if (regRuleOnAir.test(inputValue)) {
      console.log(`L'input ${inputValue} est valide`);
      fieldData.classList.add("formDataOK");
      fieldData.setAttribute("data-error-visible", "false")
      fieldData.setAttribute("data-error", `Votre saisie ${inputValue} est valide`)
    } else {
      console.log(`L'input ${inputValue} est invalide`);
      fieldData.setAttribute("data-error-visible", "true");
      fieldData.setAttribute("data-error", `Votre saisie ${inputValue} n'est pas valide`)
      throw new Error(`L'élément ${inputValue} spécifié n'est pas valide`);
    }
  });
}

// ============================================================
// FONCTION DISAMIT ================ NEPHA CODE ===============
// =============================================== 2023 =======
/**
*
* @param {string } inputDisamit 
*
*/
const disamit = (inputDisamit, targetDisamit, listenerDisamit) => {
  let elementInput = document.getElementById(inputDisamit);
  //let conditionDisable = elementInput.checked;
  //let retro = elementInput.checked;

  elementInput.addEventListener(listenerDisamit, (event) => {
    retro = elementInput.checked;
    if (retro) {
      console.log("Conditions générales acceptées : Oui");
      targetDisamit.removeAttribute("disabled");
    } else {
      //console.log("Conditions générales acceptées : Non");
      targetDisamit.setAttribute("disabled", "");
      throw new Error(`Le bouton ${inputDisamit} des CGU n'est pas coché`);
    }
  });
}

// ============================================================
// FONCTION RATIOCHECK ============= NEPHA CODE ===============
// =============================================== 2023 =======

/// Bolean YES/NO if NO Error else WHILE Return values 
/**
/**
 * Vérifie l'état d'un bouton radio et ajoute un écouteur d'événements.
 *
 * @param {string} inputRadio - L'ID de l'élément bouton radio.
 * @param {string} listenerCheck - Le type d'événement à écouter (par exemple, 'change').
 * @throws {Error} Si l'élément radio spécifié n'existe pas ou si aucun bouton n'est sélectionné.
 */
const radioCheck = (inputRadio,listenerCheck) => {
  //const inputRadio = document.querySelectorAll('input[name="location"]');
  console.log("Tournoi sélectionné : " + inputRadio);
  //let location = inputRadio[0];
  for (let i = 0; i < inputRadio.length; i++) {
    inputRadio[i].addEventListener(listenerCheck, (event) => {
      if (inputRadio[i].checked) {
       location = inputRadio[i].value;
       console.log("Tournoi sélectionné : " + location);
      }
      else{
        inputRadio[0].checked
        location = inputRadio[0].value;
        console.log("Tournoi par défaut : " + location);
      }
    });
  }
  if (!gameTournoi) {
    throw new Error("L'élément radio spécifié n'existe pas");
  }
}
// RADIOCHECK END ================================ 2023 =======


// ============================================================
// EXECUTE CHANGE ================== NEPHA CODE ===============
// =============================================== 2023 =======

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const stringRegEx = /^[a-zA-Z0-9._-\u000-\u00FF]{2,32}$/;
const dateRegEx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const tourRegEx = /^\d{1,4}$/;



// Call the function with the ID of your email input, 'change' as the listener, and the regex
onAirChange('email', 'change', emailRegEx);
onAirChange('last', 'change', stringRegEx);
onAirChange('first', 'change', stringRegEx);
onAirChange('birthdate', 'change', dateRegEx);
onAirChange('quantity', 'change', tourRegEx);
/////
const gameCgu = "checkboxcgu";
const btnSub = document.getElementById("FinalBtn");
disamit(gameCgu, btnSub, 'change');
/////
const gameTournoi = document.querySelectorAll('input[name="location"]');
radioCheck(gameTournoi, 'click');


// =================== GAMe öN ============== ATHENA PRACTICE =
// OC FORM SUBMIT ================== NEPHA CODE ===============
// =============================================== 2023 =======
const formOC = document.getElementById("ocform");
formOC.addEventListener("submit", (event) => {
try {
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
  if(gameCgu){
    console.log("Conditions générales acceptées : Oui");  }
  else {
    console.log("Conditions générales acceptées : Non");  }
  const gameAds = document.getElementById("checkboxads").value;
  if(gameAds){
    console.log("Conditions RGPD acceptées : Oui");  }
  else {
    console.log("Conditions RGPD acceptées : Non");  }

  let ar = "Valider à Nouveau";
  let classos = "btn-submit btn-signup modal-btn";
  let target = "FinalBtn";
  DisplayValidForm(target, ar, classos );
/*
  const emailInput = document.getElementById("email");
  let regexMail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  let resultat = regexMail.test(emailInput);
  console.log(resultat); // Affiche true.
  //Validor(emailInput, resultat );*/
}
//// >>>>>>>> GO TO CATCH
catch (Error) {
  console.log("y'a des erreurs" + error.message)
}
//// >>>>>>>> END 
});
