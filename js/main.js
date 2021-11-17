import hamburguerMenu from "./menu_hamburguesa.js"; //importando el modulo hamburguesa.js 
import { digitalClock,alarm } from "./reloj.js"; //Importando reloj.
import {moveBall, shortcuts} from  "./teclado.js"; //Importando reloj.
import countDown from "./count_down.js";
import scrollToBoton from "./scroll.js";
import darkTheme from "./themeDark.js";

const d = document;  //Inicializamos el document html.

d.addEventListener("DOMContentLoaded", (e) => { // cargando el document. junto con el evento
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); //enviamos el panel principal - el aside del boton hamburger- y la clase que contiene los enlaces. 
    digitalClock("#clock","#active","#stop");
    alarm("dist/assets/sonidos/car-alarm.mp3","#enable-alarm","#disabled-alarm")
    //countDown("count-down", 'january 17 2022 12:45:45' , 'feliz cumpleaños')
    scrollToBoton(".scroll-top-btn")
    darkTheme(".dark-theme-btn", "dark-mode");
})

//teclas
d.addEventListener("keydown" , e => { // detect keys down left right  
    shortcuts(e); //enviamos la tecla presionada. el evento. e.wich. code key
    moveBall(e,".ball", ".stage") //tecla , bola, ecenario.
} )