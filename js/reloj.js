export function digitalClock(clock, btnEnabled, btnStop) {
    const d = document;
    let clockTime;

    d.addEventListener("click", e => {
        if (e.target.matches(btnEnabled)) {
            clockTime = setInterval(() => {
                let hour = new Date().toLocaleTimeString(); //get hour. 
                d.querySelector(clock).innerHTML = `<h1>${hour}</h1>`; // paint in h1
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

export function alarm() {

}



