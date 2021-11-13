import hamburguerMenu from "./menu_hamburguesa.js"; //importando el modulo hamburguesa.js
import { digitalClock,alarm } from "./reloj.js"; //Importando reloj.
import {moveBall, shortcuts} from  "./teclado.js"; //Importando reloj.
import countDown from "./count_down.js";

const d = document;  //pasamos el evento y selector.
d.addEventListener("DOMContentLoaded", (e) => { // cargando el document.
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); //envio  de parametros a funcion.
    digitalClock("#clock","#active","#stop");
    alarm("dist/assets/sonidos/car-alarm.mp3","#enable-alarm","#disabled-alarm")
    countDown("count-down", 'january 17 2022 12:45:45' , 'feliz cumpleaños')
})

//teclas
d.addEventListener("keydown" , e => { // detect keys down left right  
    shortcuts(e); //recepcionamos el evento. e.wich. code key
    moveBall(e,".ball", ".stage")
} )