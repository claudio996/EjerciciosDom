const d = document;
let clockTime;

export function digitalClock(clock, btnEnabled, btnStop) {
    d.addEventListener("click", e => {
        if (e.target.matches(btnEnabled)) {
            clockTime = setInterval(() => {
                let hour = new Date().toLocaleTimeString(); //get hour. 
                d.querySelector(clock).innerHTML = `<h1>${hour}</h1>`; // paint in container clock.
            }, 1000);

            e.target.disabled = true; //disable button enabled clock
        }
        if (e.target.matches(btnStop)) { // detect  button stop  and clear(clock) and set new value = null and disabled  button enabled.
            clearInterval(clockTime);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnEnabled).disabled = false;
        }
    })
}

export function alarm(sound, btnEnabled, btnStop) {
    let alarmanTep;
    const $alarma = d.createElement("audio");
    $alarma.src = sound;
    d.addEventListener("click", e => {
        if (e.target.matches(btnEnabled)) {
            alarmanTep = setTimeout(() => {
                $alarma.play();
            }, 2000);
            e.target.disabled = true; //disable button enabled clock
        
        } if (e.target.matches(btnStop)) {
           clearTimeout(alarmanTep)
           $alarma.pause();
           $alarma.currentTime = 0;
           d.querySelector(btnEnabled).disabled = false;

        }
    })
}

