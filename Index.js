/*
document.addEventListener('DOMContentLoaded', function () {
  const startNowBtn = document.getElementById('startNowBtn');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.querySelector('.close-modal');
  const passwordInput = document.getElementById('password');
  const normalCharacter = document.getElementById('plantCharacter');
  const hiddenCharacter = document.getElementById('plantCharacterHidden');
  const togglePassword = document.querySelector('.toggle-password');


  // Abrir modal cuando se hace clic en "Comenzar ahora"
  startNowBtn.addEventListener('click', function () {
    loginModal.style.display = 'block';
  });
  

  // Cerrar modal cuando se hace clic en la X
  closeModal.addEventListener('click', function () {
    loginModal.style.display = 'none';
  });

  // Cerrar modal cuando se hace clic fuera del contenedor
  window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Cuando se hace focus en el campo de contraseña, el personaje se esconde
  passwordInput.addEventListener('focus', function () {
    normalCharacter.style.opacity = '0';
    hiddenCharacter.style.opacity = '1';
  });

  // Cuando se pierde el focus, el personaje vuelve a aparecer
  passwordInput.addEventListener('blur', function () {
    if (!passwordInput.value) {
      normalCharacter.style.opacity = '1';
      hiddenCharacter.style.opacity = '0';
    }
  });

  // Opcional: Mostrar/ocultar contraseña
  togglePassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.classList.add('show');
      // Cuando se muestra la contraseña, el personaje vuelve a aparecer
      normalCharacter.style.opacity = '1';
      hiddenCharacter.style.opacity = '0';
    } else {
      passwordInput.type = 'password';
      togglePassword.classList.remove('show');
      // Si el campo de contraseña sigue enfocado, el personaje se esconde de nuevo
      if (document.activeElement === passwordInput) {
        normalCharacter.style.opacity = '0';
        hiddenCharacter.style.opacity = '1';
      }
    }
  });
});
*/

// menu hamburguesa cuando ingresa por celular
const hamburguesa = document.getElementById("hamburguesa");
//const menuEnlaces = document.getElementById("nav-links");

if (hamburguesa) console.log("Menu hamburguesa encontrado");
else console.log("Menu hamburguesa no encontrado");

hamburguesa.addEventListener('click', () => {
  //menuEnlaces.classList.toggle('show');
  hamburguesa.classList.toggle('active');
  console.log("Menu hamburguesa activado");
});

















const titulo = document.getElementById("titulo");

titulo.addEventListener('click', () =>{
  titulo.classList.toggle('pepito');

console.log(titulo.classList);
});




hamburguesa.addEventListener ('click', DimeAlgoLindo());
function DimeAlgoLindo() {
  const frases = [
    "Eres una persona increíble.",
    "Tu sonrisa ilumina el día.",
    "Tienes un corazón de oro.",
    "Eres único y especial.",
    "Tu bondad inspira a los demás.",
    "Eres capaz de lograr grandes cosas.",
    "Tu risa es contagiosa.",
    "Eres un regalo para el mundo.",
    "Tu creatividad no tiene límites.",
    "Eres amado y valorado."
  ];
  
  const randomIndex = Math.floor(Math.random() * frases.length);
  return frases[randomIndex];
}

  