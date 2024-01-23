'use strict'

// Открытие-закрытие модального окна

const openModalButtons = document.querySelectorAll(".modal-open-button-js");
const modalWindow = document.querySelector(".modal-container");
const closeModalButton = document.querySelector(".form__close-button");
const form = document.querySelector('.modal-window');

const openModal = () => {
  modalWindow.style.display = "flex";
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = "fixed";
  closeModalButton.focus();
};

const closeModal = () => {
  modalWindow.style.display = "none";
  let scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  clearForm();
};

openModalButtons.forEach(btn => {
  btn.addEventListener('click', openModal);
});

closeModalButton.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

modalWindow.addEventListener('click', closeModal);
form.addEventListener('click', evt => evt.stopPropagation());


// Валидация формы

const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");

const clearForm = () => {
  nameInput.value = "";
  phoneInput.value = "";
};

const clearNameInput = () => nameInput.placeholder = "Введите Ваше имя*";
const clearPhoneInput = () => phoneInput.placeholder = "Введите Ваш телефон*";
const nameInputHover = () => nameInput.placeholder = "Введите от 3 до 60 символов";
const phoneInputHover = () => phoneInput.placeholder = "Формат номера +79220722947";

nameInput.addEventListener('mouseover', nameInputHover);
nameInput.addEventListener('mouseout', clearNameInput);
nameInput.addEventListener('focus', nameInputHover);
nameInput.addEventListener('blur', clearNameInput);
phoneInput.addEventListener('mouseover', phoneInputHover);
phoneInput.addEventListener('mouseout', clearPhoneInput);
phoneInput.addEventListener('focus', phoneInputHover);
phoneInput.addEventListener('blur', clearPhoneInput);


// Слайдер

const GAP = 30;
const WIDTH = 360;

const slider = document.getElementById("slider");
const content = document.getElementById("content");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

prev.disabled = true;

next.addEventListener("click", () => {
  slider.scrollBy(WIDTH + GAP, 0);
  if (slider.scrollLeft > WIDTH * 2) next.disabled = true;
  if (slider.scrollLeft < WIDTH * 2) prev.disabled = false;
});


prev.addEventListener("click", () => {
  slider.scrollBy(-(WIDTH + GAP), 0);
  if (slider.scrollLeft == 0) prev.disabled = true;
  if (slider.scrollLeft < WIDTH * 2) next.disabled = false;
});

