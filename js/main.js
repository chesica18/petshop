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


this.avisoMensajeEnviado = function ( nombreApellido ) {alert ( "gracias por contactarnos" + this.nombreApellido)
}
}



let nombreApellido = prompt("Ingrese Nombre y Apellido:");
let mail = prompt("Ingrese su dirección de mail:");
let celular = prompt("Ingrese su número de celular");
let consulta = prompt("Déjenos aquí su consulta:");
formulario.avisoMensajeEnviado(nombreApellido)
console.table(formulario);


const persona1 = {
	nombreUsuario: prompt('¿como te llamas?'),
	medioDePagoUsuario: prompt('¿como vas a pagar?'),
	numerosTc: '',
}
function payment() {
	if (persona1.medioDePagoUsuario === 'tarjeta de credito') {
		payTc()
	} else if (persona1.medioDePagoUsuario === 'efectivo') {
		payCash()
	} else {
		alert('Medio de pago inválido')
	}
}

function payCash() {
  alert('Puede retirar su pedido en las próximas 24hs')
}

function payTc() {
  persona1.numerosTc = prompt('Ingrese los números de la T.C.')
}

const listaDeProductos = [
	{
		imagen: '/images/shampooOsspret.jpg',
		descripcion: 'SHAMPOO OSSPRET AQUA - CACHORRO',
		precio: 990,
	},
	{
		imagen: '/images/shampooDermapet.jpg',
		descripcion: 'SHAMPOO DERMAPET VOLUMINIZANTE x 250 Ml',
		precio: 1050,
	},
]
listaDeProductos.push ( 
  {imagen: "/img/enjuaguelacio.jpg",
  descripcion: "Crema de enjuague",
  precio: 900

  }
)
  

listaDeProductos.some(producto => prorducto.pecio===900)