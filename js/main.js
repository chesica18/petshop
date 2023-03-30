let estaRegistrado;

function preguntarSiEstaRegistrado() {
  estaRegistrado = prompt("¿Estás registrado?");
}

let nombreUsuario;
let password;

function pedirUserPass() {
  nombreUsuario = prompt("Ingrese nombre de usuario: ");
  password = prompt("Ingrese su contraseña: ");
}

function datosValidos() {
  return nombreUsuario && password;
}

preguntarSiEstaRegistrado()
if (estaRegistrado === "si") {
  const numeroDeIntentos = 3
  for (let i = 1; i <= numeroDeIntentos; i++) {
    pedirUserPass();
    if (datosValidos()) {
      alert("Bienvenido " + nombreUsuario);
      break;
    } else if (i === numeroDeIntentos) {
      alert("No se pudo acceder. Intentalo más tarde.");
    } else {
      alert("Error nombre usuario o contraseña. Ingrese nuevamente:");
    }
  }
} else if (estaRegistrado === "no") {
  let edad = prompt("Registrate. ¿Cuántos años tenés?");
  if (edad === "") {
    alert("Campo vacío. Ingrese nuevamente");
  } else if (edad >= 18) {
    alert("Registrado");
  } else if (edad < 18) {
    alert("No puede registrarse");
  } else {
    alert("Dato inválido");
  }
} else {
  alert("Dato inválido.");
}

//-----HOJA DE CONTACTO---------//
function formulario(nombreApellido, mail, celular, consulta){
this.nombreApellido = nombreApellido;
this.mail = mail;
this.celular = celular;
this.consulta = consulta;


this.pepito = function ( nombreApellido ) {alert ( "gracias por contactarnos" + this.nombreApellido)
}
}



let nombreApellido = prompt("Ingrese Nombre y Apellido:");
let mail = prompt("Ingrese su dirección de mail:");
let celular = prompt("Ingrese su número de celular");
let consulta = prompt("Déjenos aquí su consulta:");
formulario.pepito(nombreApellido)
console.table(formulario);