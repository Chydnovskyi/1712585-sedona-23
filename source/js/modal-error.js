const form  = document.querySelector('.form');
const name = document.querySelector('.form__name');
const surname = document.querySelector('.form__surname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const emailErrorShow = document.querySelector('.modal-error--show');
const succsesfull = document.querySelector('.modal-succsesfull--show');

emailErrorShow.classList.remove('modal-error--show');
succsesfull.classList.remove('modal-succsesfull--show');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log({ phone });
  if(!email.validity.valid || !name.validity.valid || !surname.validity.valid || (!phone.validity.valid && phone.value.length > 5)) {
    emailErrorShow.classList.add('modal-error--show');
  }
  else {
    succsesfull.classList.add('modal-succsesfull--show');
  }
});
