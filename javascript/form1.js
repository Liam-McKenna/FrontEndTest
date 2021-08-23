const form = document.getElementById('form1');

const radio = document.getElementsByName('radio1');

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
    // e.preventDefault();
  }
});

form1.addEventListener('change', (e) => {
  let id = e.target.id;
  let value = e.target.value;
  //   console.log(id);
  //   console.log(value);

  // console.log(radio);
  // console.log('Radio Value: ');
  // radio.forEach((option) => {
  //   if (option.checked) {
  //     console.log(option.value);
  //   }
  // });

  //   console.log(document.querySelector('input[name="radio1"]:checked'));

  checkInputs(); // for continue button

  if (e.target.id === 'legalformat') {
    if (e.target.value === '') {
      let message = '';
      setError(e.target.id, message);
    } else {
      setSuccess(e.target.id);
    }
  }
  if (e.target.id === 'Dénominationsociale') {
    if (e.target.value === '') {
      let message = '';
      setError(e.target.id, message);
    } else {
      setSuccess(e.target.id);
    }
  }
  if (e.target.id === 'Civilité') {
    if (e.target.value === '') {
      let message = '';
      setError(e.target.id, message);
    } else {
      setSuccess(e.target.id);
    }
  }
  if (e.target.id === 'Nom') {
    if (e.target.value === '') {
      let message = '';
      setError(e.target.id, message);
    } else {
      setSuccess(e.target.id);
    }
  }
  if (e.target.id === 'Prénom') {
    if (e.target.value === '') {
      let message = '';
      setError(e.target.id, message);
    } else {
      setSuccess(e.target.id);
    }
  }
  if (e.target.id === 'Téléphone') {
    if (e.target.value === '') {
      let message = '';
      setError(e.target.id, message);
    } else {
      setSuccess(e.target.id);
    }
  }
  if (e.target.id === 'Email') {
    if (e.target.value === '') {
      let message = '';
      setError(e.target.id, message);
    } else {
      setSuccess(e.target.id);
    }
  }
});

function checkInputs() {
  let changeErrors = {};

  if (document.querySelector('input[name="radio1"]:checked') === null) {
    console.log('radio is null');
    changeErrors['Voussouhaitez'] = 'Vous souhaitez Cannot be blank';
  }

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
  //   console.log(changeErrors);
}

function setError(inputId, message) {
  const input = document.getElementById(inputId);
  const inputContainer = input.parentElement;
  inputContainer.classList.remove('success');
  inputContainer.classList.add('error');
}

function setSuccess(inputId) {
  console.log('adding Success');
  const input = document.getElementById(inputId);
  const inputContainer = input.parentElement;
  inputContainer.classList.add('success');
  inputContainer.classList.remove('error');
}
