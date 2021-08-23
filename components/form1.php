<html>
<div class="form1-container">
    <h2>Informations sur la société</h2>
    <form action="#" method="get" id="form1">
        <label for="">Vous souhaitez</label>
        <div class="line-container">

            <input type="radio" name="radio1" id="r1" class="input-hidden" />
            <label for="r1">
                <img src="./img/form-icon1.svg" alt="r1" />
            </label>

            <input type="radio" name="radio1" id="r2" class="input-hidden" />
            <label for="r2">
                <img src="./img/form-icon2.svg" alt="r2" />
            </label>

        </div>
        <div class="line-container">
            <div class="input-container">
                <label for="Formejuridique">Forme juridique</label>
                <select name="legalformat" id="legalformat">
                    <option value="">SASU</option>
                    <option value="option1">AUTO ENTREPRENEUR</option>
                    <option value="option2">LIAISON OFFICE</option>
                    <option value="option3">EIRL</option>
                </select>
            </div>
            <div class="input-container">
                <label for="Dénominationsociale">Dénomination sociale</label>
                <input type="text" name="Dénominationsociale" id="Dénominationsociale" placeholder="XXXXXX">
            </div>
        </div>
        <div class="line-container">
            <div class="input-container">
                <label for="Civilité">Civilité</label>
                <select name="Civilité" id="Civilité">
                    <option value="">Mme</option>
                    <option value="Ms">Ms</option>
                    <option value="Mr">Mr</option>
                </select>
            </div>
            <div class="input-container">
                <label for="Nom">Nom</label>
                <input type="text" name="Nom" id="Nom" placeholder="Doe">
            </div>
            <div class="input-container">
                <label for="Prénom">Prénom</label>
                <input type="text" name="Prénom" id="Prénom" placeholder="Jeanne">
            </div>
        </div>
        <div class="line-container">
            <div class="input-container">
                <label for="Téléphone ">Téléphone</label>
                <input type="text" name="Téléphone" id="Téléphone" placeholder="05.44.23.02.01">
            </div>
            <div class="input-container">
                <label for="email ">Email</label>
                <input type="email" name="Email" id="Email" placeholder="jeanne.doe@gmail.com">
            </div>
        </div>
        <div class="line-container">
            <div class="input-container">
                <button type="submit" class="submitBtn" id="submitBtn">Continuer l'enregistrement</button>
            </div>

        </div>


    </form>

</div>


</html>