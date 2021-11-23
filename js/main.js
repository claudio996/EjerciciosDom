import hamburguerMenu from "./menu_hamburguesa.js"; //importando el modulo hamburguesa.js 
import { digitalClock, alarm } from "./reloj.js"; //Importando reloj.
import { moveBall, shortcuts } from "./teclado.js"; //Importando reloj.
//import countDown from "./count_down.js";
import scrollToBoton from "./scroll.js";
import darkTheme from "./themeDark.js";
//import responsiveMedia from "./objetoResponsive.js";
//import ResponsiveTester from "./pruebaResponsive.js";
import searchFilter from "./filtroCards.js";
import draw from "./sorteo.js";
import slider from "./carrousel.js";
/*import userDeviceInfo from "./deteccion_device.js";
import networkStatus from "./redDetection.js";
import detectWebCam from "./webCamDetetection.js";
import getGeolocation from "./geolocation.js";
*/
import smartVideo from "./videoInteligente.js";
import contactFormValidation from "./validaciones.js";
import speechReader from "./narrador.js";

const d = document;  //Inicializamos el document html.

d.addEventListener("DOMContentLoaded", (e) => { // cargando el document. junto con el evento
    hamburguerMenu(".panel-btn", ".panel", ".menu a"); //enviamos el panel principal - el aside del boton hamburger- y la clase que contiene los enlaces. 
    /*
    digitalClock("#clock", "#active", "#stop");
    alarm("dist/assets/sonidos/car-alarm.mp3", "#enable-alarm", "#disabled-alarm")
    //countDown("count-down", 'january 17 2022 12:45:45' , 'feliz cumpleaños')
    scrollToBoton(".scroll-top-btn");
    //responsiveMedia("youtube", "(min-width:1024px)", `<a href = "https://www.youtube.com/watch?v=FgQR2O8PGf4&ab_channel=TWINENGINE"  target="_blank" rel "noopeer">Ver video</a> `, `<iframe width="560" height="315" src="https://www.youtube.com/embed/FgQR2O8PGf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    //responsiveMedia("gmaps", "(min-width:1024px)", `<a href = "https://goo.gl/maps/jgH2mmn3DbWriN5x7" target="_blank" rel "noopeer">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.1437545464587!2d-71.66816658474814!3d-35.42646878025449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c6a014abd285%3A0x444443c9367d5a75!2sPlaza%20De%20Armas%20de%20Talca!5e0!3m2!1ses!2scl!4v1637182874153!5m2!1ses!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    //ResponsiveTester("responsive-tester");
    //userDeviceInfo("user-device"); 
    //detectWebCam("webCam");
    //getGeolocation("geolocation");
    searchFilter(".card-filter", '.card');
    draw('#winner-btn','.player');
    slider();
    */
   smartVideo();
   contactFormValidation();
   
})

//teclas
d.addEventListener("keydown", e => { // detect keys down left right  
    shortcuts(e); //enviamos la tecla presionada. el evento. e.wich. code key
    moveBall(e, ".ball", ".stage") //tecla , bola, ecenario.

})

darkTheme(".dark-theme-btn", "dark-mode");  // pasamos el selector - 
//networkStatus();

speechReader();// los que contienen los metodos document no se invocan en si mismo.