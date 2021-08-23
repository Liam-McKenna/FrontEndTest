<html>
<div class="form1-container">
    <h2>Informations sur la société</h2>
    <form action="#" method="get">
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
                <input type="text" placeholder="XXXXXX" name="Dénominationsociale">
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
                <input type="text" placeholder="Doe" name="Nom">
            </div>
            <div class="input-container">
                <label for="Prénom">Prénom</label>
                <input type="text" placeholder="Jeanne" name="Prénom">
            </div>
        </div>
        <div class="line-container">
            <div class="input-container">
                <label for="Téléphone ">Téléphone</label>
                <input type="text" placeholder="05.44.23.02.01" name="Téléphone">
            </div>
            <div class="input-container">
                <label for="email ">Email</label>
                <input type="email" placeholder="jeanne.doe@gmail.com" name="Email">
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