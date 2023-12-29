// =============== GAME öN ========= NEPHA CODE ===============
// IMPORT  ====================================================
// =============================================== 2023 =======
import {formField, formFinish} from '/js/form.js';

// =============== GAME öN ========= NEPHA CODE ===============
// VARIABLES ==================================================
// =============================================== 2023 =======
const modal = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// VARIABLE PROGZ
const gameCgu = "checkboxcgu";
const checkRgpd = "checkboxads";
const cguDown = document.getElementById("checkboxcgu");
//console.log(cguDown);
const btnSub = document.getElementById("FinalBtn");
const gameTournoi = 'input[name="location"]';
// VARIABLE REGEX
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const stringRegEx = /^[a-zA-Z0-9._-\u000-\u00FF]{2,32}$/;
const dateRegEx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const tourRegEx = /^\d{1,4}$/;

// ================================= NEPHA CODE ===============
// NAV RESPONSIVE =============================================
// ================================  SPARROW ==================
const navMobile = document.getElementById("myTopnav"); 
navMobile.addEventListener("click", () => {

  if (navMobile.className === "topnav") {
    navMobile.className += " responsive";
  } else {
    navMobile.className = "topnav";
  }
});

// ============================================================
// MODAL ACTION ===============================================
// ============================================================

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modal.style.display = "block";
  console.log("Ouverture de la modale");
  document.getElementById(gameCgu).checked = false;
}
// ============================================================
// CLOSE CROIX ================================================
// ============================================================
const close = document.querySelector(".close");
//const modal = document.querySelector(".bground");
const resetForm = document.getElementById('ocform');
close.addEventListener("click", () => {
  modal.style.display = "none";
  document.getElementById("ocform").reset();
  resetForm.innerHTML = formField;
  console.log("Fermeture Croix et Clean modale");
});

// ============================================================
// CLOSE BUTTON ===============================================
// ============================================================
/*
if(clozForm){
  let clozForm = document.getElementById("clozerClean");
}
clozForm.addEventListener("click", () => {
  // Ajoutez la logique pour cacher la modale
  modal.style.display = 'none';
  formOC.innerHTML = formField;
  console.log("Fermeture Button et Clean Modale");
});
*/
// ============================================================
// INPUT TEXT  =========================== NEPHA CODE =========
// ============================================================
/**
 * @param {string} inputOnAir
 * */
const onAirChange = (inputOnAir, listenerOnAir, regRuleOnAir) => {
  const targetAir = document.getElementById(inputOnAir);
  targetAir.addEventListener(listenerOnAir, (event) => {
    const inputValue = event.target.value;
    const fieldData = targetAir.parentElement;
    if (inputValue && regRuleOnAir.test(inputValue)) {
      console.log(`L'input ${inputValue} est valide`);
      fieldData.classList.add("formDataOK");
      fieldData.setAttribute("data-error-visible", "false");
      fieldData.setAttribute(
        "data-error",
        `Votre saisie ${inputValue} est valide`
      );
    } else {
      //btnSub.setAttribute("disabled", "");
      console.log(`L'input ${inputValue} est invalide`);
      fieldData.setAttribute("data-error-visible", "true");
      fieldData.setAttribute(
        "data-error",
        `Votre saisie ${inputValue} n'est pas valide`
      );
      throw new Error(`L'élément ${inputValue} spécifié n'est pas valide`);
    }
  });
};

// ============================================================
// FONCTION RGPD =================== NEPHA CODE ===============
// =============================================== 2023 =======
/**
 * @param {string } inputRgpd
 */
const rgpd = (inputRgpd, listenerRgpd) => {
  let elementInput = document.getElementById(inputRgpd);
  elementInput.addEventListener(listenerRgpd, (event) => {
    //console.log(elementInput);
    let retro = elementInput.checked;
    if (retro) {
      console.log("Droits RGDP : OUI \n" + retro);
      //console.log(retro);
    } else {
      console.log("Droits RGDP : NON \n" + retro);
      //console.log(retro);
      //throw new Error(`Le bouton ${inputDisamit} des CGU n'est pas coché`);
    }
  });
};


// ============================================================
// FONCTION DISAMIT ================ NEPHA CODE ===============
// =============================================== 2023 =======
/**
 * @param {string } inputDisamit
 */
const disamit = (inputDisamit, targetDisamit, listenerDisamit) => {
  let elementInput = document.getElementById(inputDisamit);
  //let conditionDisable = elementInput.checked;
  let retro = elementInput.checked;

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
};

// ============================================================
// FONCTION RATIOCHECK ============= NEPHA CODE ===============
// =============================================== 2023 =======
/**
 * @param {string} inputRadioIn
 * @param {string} listenerRadio
 **/
const radioCheck = (inputRadioIn, listenerRadio) => {
  const inputRadio = document.querySelectorAll(inputRadioIn);
  let location = "";
  for (let i = 0; i < inputRadio.length; i++) {
    inputRadio[i].addEventListener(listenerRadio, (event) => {
      if (inputRadio[i].checked) {
        location = inputRadio[i].value;
        console.log("Tournoi sélectionné : " + location);
      } else {
        location = inputRadio[0].value;
        console.log("Tournoi par défaut : " + location);
      }
    });
  }
};
// RADIOCHECK END ================================ 2023 =======

// ============================================================
// EXECUTE CHANGE ================== NEPHA CODE ===============
// =============================================== 2023 =======


// Call the function with the ID of your email input, 'change' as the listener, and the regex
try {
  onAirChange("first", "blur", stringRegEx);
  onAirChange("last", "blur", stringRegEx);
  onAirChange("email", "blur", emailRegEx);
  onAirChange("birthdate", "blur", dateRegEx);
  onAirChange("quantity", "blur", tourRegEx);
  /////
  disamit(gameCgu, btnSub, "change");
  rgpd(checkRgpd, "change");
  /////
  radioCheck(gameTournoi, "click");
} catch (Error) {
  btnSub.setAttribute("disabled", "");
  document.getElementById(gameCgu).checked = false;
  document.getElementById(cguDown).checked = false;
  console.log(gameCgu.value);
  console.log(gameCgu);
  console.log(gameCgu.checked);
  console.log("il y'a des erreurs" + Error.message);
}

// =================== GAMe öN ============== ATHENA PRACTICE =
// OC FORM SUBMIT ================== NEPHA CODE ===============
// =============================================== 2023 =======
const formOC = document.getElementById("ocform");
formOC.addEventListener("submit", (event) => {
  event.preventDefault();
  formOC.innerHTML = formFinish;
});
// END =============== GAMe öN ================================
