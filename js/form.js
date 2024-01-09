// ================================= NEPHA CODE ===============
// FORM FIELD =================================================
// ============================================= 2023 =========
let txtBtn = "Fermer";
let classChg = "btn-submit";
let idButton = "BtnInscriptionClozer";
export const formField =`<form
              name="reserve"
              action="/index.html"
              method="get" id="ocform" novalidate>
              <div
                class="formData" data-error-visible="false" data-error="Champ Prénom invalide">
                *
                <label>Prénom</label><br>
                <input
                  class="text-control"
                  type="text"
                  id="first"
                  name="first"
                ><br>
              </div>
              <div
                class="formData" data-error-visible="false" data-error="Champ Nom invalide">
                <label>Nom</label><br>
                <input
                  class="text-control"
                  type="text"
                  id="last"
                  name="last"
                ><br>
              </div>
              <div
                class="formData" data-error-visible="false" data-error="Champ Email invalide">
                <label>E-mail</label><br>
                <input
                  class="text-control"
                  type="email"
                  id="email"
                  name="email"
                ><br>
              </div>
              <div
                class="formData" data-error-visible="false">
                <label>Date de naissance</label><br>
                <input
                  class="text-control"
                  type="date"
                  id="birthdate"
                  name="birthdate" 
                ><br>
              </div>
              <div
                class="formData" data-error-visible="false">
                <label>À combien de tournois GameOn avez-vous déjà participé ?</label><br>
                <input type="number" class="text-control" id="quantity" name="quantity" min="0" max="99">
              </div>
              <p class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>
              <div
                class="formData" data-error-visible="false">
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location1"
                  name="location"
                  value="New York"
                >
                <label class="checkbox-label" for="location1">
                  <span class="checkbox-icon"></span>
                  New York</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location2"
                  name="location"
                  value="San Francisco"
                >
                <label class="checkbox-label" for="location2">
                  <span class="checkbox-icon"></span>
                  San Francisco</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location3"
                  name="location"
                  value="Seattle"
                >
                <label class="checkbox-label" for="location3">
                  <span class="checkbox-icon"></span>
                  Seattle</label>
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location4"
                  name="location"
                  value="Chicago"
                >
                <label class="checkbox-label" for="location4">
                  <span class="checkbox-icon"></span>
                  Chicago</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location5"
                  name="location"
                  value="Boston"
                >
                <label class="checkbox-label" for="location5">
                  <span class="checkbox-icon"></span>
                  Boston</label
                >
                <input
                  class="checkbox-input"
                  type="radio"
                  id="location6"
                  name="location"
                  value="Portland"
                >
                <label class="checkbox-label" for="location6">
                  <span class="checkbox-icon"></span>
                  Portland</label
                >
              </div>

              <div
                class="formData" data-error="false">
                <input
                  class="checkbox-input"
                  type="checkbox"
                  id="checkboxcgu" 
                  required                 
                >
                <label class="checkbox2-label" for="checkboxcgu" >
                  <span class="checkbox-icon"></span>
                  J'ai lu et accepté les conditions d'utilisation.
                </label>
                <br>
                <input class="checkbox-input" type="checkbox" id="checkboxads" />
                <label class="checkbox2-label" for="checkboxads">
                  <span class="checkbox-icon"></span>
                  Je souhaite être prévenu des prochains évènements.
                </label>
                <br>
              </div>
              <button id="FinalBtn" class="btn-submit"
              type="submit"
              class="button" disabled>C'est parti</button>
            </form>

`;

// ================================= NEPHA CODE ===============
// FORM FINISH ================================================
// ============================================= 2023 =========

export const formFinish = `<form 
      name="reserve"
      action="/index.html"
      method="get" 
      id="ocform" 
      novalidate
    >
      <div class="form-data squareNeph">Merci pour <br/>votre inscription</div>
      <bouton 
        id="${idButton}" 
        class="${classChg}"
        type="submit"
        >${txtBtn}
      </bouton>
    </form>
     `;
