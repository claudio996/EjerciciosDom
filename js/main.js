import hamburguerMenu from "./menu_hamburguesa.js"; //importando el modulo hamburguesa.js
import { digitalClock } from "./reloj.js"; //Importando reloj.

const d = document;  //pasamos el evento y selector.
d.addEventListener("DOMContentLoaded", (e) => { // cargando el document.
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); //envio  de parametros a funcion.
    digitalClock("#clock","#active","#stop");
})



