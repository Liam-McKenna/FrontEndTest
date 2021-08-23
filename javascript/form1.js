const form = document.getElementById('form1');

//get top radio 1
//get top radio 2

const legalformat = document.getElementById('legalformat');
const Dénominationsociale = document.getElementById('Dénominationsociale');

const Civilité = document.getElementById('Civilité');
const Nom = document.getElementById('Nom');
const Prénom = document.getElementById('Prénom');

const Téléphone = document.getElementById('Téléphone');
const Email = document.getElementById('Email');

const submitBtn = document.getElementById('submitBtn');

let formComplete = false;

form1.addEventListener('submit', (e) => {
  if (!formComplete) {
    console.log('Form Incomplete');
    //write function to display errors
    e.preventDefault();
  } else {
    console.log('submitted');
    e.preventDefault();
  }
});

form1.addEventListener('change', (e) => {
  let id = e.target.id;
  let value = e.target.value;
  console.log(id);
  console.log(value);

  checkInputs();
});

function checkInputs() {
  let changeErrors = {};

  if (legalformat.value === '') {
    changeErrors['legalformat'] = 'legalformat Cannot be blank';
  }
  if (Dénominationsociale.value === '') {
    changeErrors['Dénominationsociale'] = 'Dénominationsociale Cannot be blank';
  }
  if (Civilité.value === '') {
    changeErrors['Civilité'] = 'Civilité Cannot be blank';
  }
  if (Nom.value === '') {
    changeErrors['Nom'] = 'Nom Cannot be blank';
  }
  if (Prénom.value === '') {
    changeErrors['Prénom'] = 'Prénom Cannot be blank';
  }
  if (Téléphone.value === '') {
    changeErrors['Téléphone'] = 'Téléphone Cannot be blank';
  }
  if (Email.value === '') {
    changeErrors['Email'] = 'Email Cannot be blank';
  }

  //check for 'Continue' button to be green or not
  if (Object.keys(changeErrors).length > 0) {
    submitBtn.classList.remove('greenCheck');
    formComplete = false;
  } else {
    submitBtn.classList.add('greenCheck');
    formComplete = true;
  }
  console.log(changeErrors);
}
