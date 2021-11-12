import hamburguerMenu from "./menu_hamburguesa.js"; //importando el modulo hamburguesa.js
import { digitalClock,alarm } from "./reloj.js"; //Importando reloj.
import {shortcuts} from  "./teclado.js"; //Importando reloj.


const d = document;  //pasamos el evento y selector.
d.addEventListener("DOMContentLoaded", (e) => { // cargando el document.
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); //envio  de parametros a funcion.
    digitalClock("#clock","#active","#stop");
    alarm("dist/assets/sonidos/car-alarm.mp3","#enable-alarm","#disabled-alarm")
    
})

//teclas
d.addEventListener("keydown" , e => { // detect keys down left right  
    shortcuts(e); //recepcionamos el evento. e.wich. code key
    
} )