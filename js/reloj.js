const d = document;
let clockTime;

export function digitalClock(clock, btnEnabled, btnStop) { //exportamos la funcion del reloj.
    d.addEventListener("click", e => {
        if (e.target.matches(btnEnabled)) {
            clockTime = setInterval(() => { //Cada un segundo dibujaremos la hora obtwnida en el objeto.
                let hour = new Date().toLocaleTimeString(); //get hour. 
                d.querySelector(clock).innerHTML = `<h1>${hour}</h1>`; // atravez del selector accedemos al container clock y dibujamos la hora.
            }, 1000);

            e.target.disabled = true; //desactivamos el boton.
        }
        if (e.target.matches(btnStop)) { // detect  button stop  and clear(clock) and set new value = null and disabled  button enabled.
            clearInterval(clockTime); // limpiamos la variable.
            d.querySelector(clock).innerHTML = null; //vaciamos el h1
            d.querySelector(btnEnabled).disabled = false; //volvemos a activar el boton.
        }
    })
}
//Alarma.
export function alarm(sound, btnEnabled, btnStop) {
    let alarmanTep;
    const $alarma = d.createElement("audio"); //creamo9s elementos 
    $alarma.src = sound; //atributo de elemnto audio.
    d.addEventListener("click", e => {
        if (e.target.matches(btnEnabled)) {
            alarmanTep = setTimeout(() => {
                $alarma.play();
            }, 2000);
            e.target.disabled = true; //disable button enabled clock

        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmanTep) //limpiamos la variable que contiene el contador
            $alarma.pause();
            $alarma.currentTime = 0;
            d.querySelector(btnEnabled).disabled = false; //enable 

        }
    })
}