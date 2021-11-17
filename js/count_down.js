const d = document;

export default function countDown(id,limitDate,finalMessage) {
const  $countDown = document.getElementById(id),
        countDownDate = new Date(limitDate).getTime();  //get time in miliseconds   expresar la fecha en milisegundos.
        //Trabajar un set interval
        let countdownTempo = setInterval(() => { //creamos el contador.
            let now = new Date().getTime(), //rescatamos la hora.
            limitTime =  countDownDate - now, // establecemos la fecha limite restando hoy la fecha ingresada.
            
            days =  Math.floor(limitTime/(1000 * 60 * 60 * 24)), //dividimos lo expresado en milisegundos por la fecha limite para obtener los dias. 
            hours = ("0" + Math.floor((limitTime %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),//dividimos lo expresado en milisegundos por la fecha limite para obtener las horas. 
            minutes = ("0" + Math.floor((limitTime %  (1000 * 60 * 60 * 60)) / (1000 * 60 ))).slice(-2),//dividimos lo expresado en milisegundos por la fecha limite para obtener los minutos
            seconds = ("0" + Math.floor((limitTime %  (1000 * 60 )) / (1000))).slice(-2);//dividimos lo expresado en milisegundos por la fecha limite para obtener los segundos. 

            $countDown.innerHTML = `<h1> Faltan: ${days} dias ${hours} horas  ${minutes} minutos  ${seconds} segundos</h1>`, //dibujamos en el div countdown

            console.log(countDownDate,now, limitTime)
            if (limitTime < 0) { //verificamos si la fecha llega a su limite para limpiar variable -- dibujamos en el div count down.
                clearInterval(countdownTempo);
                $countDown.innerHTML = `<h1>${finalMessage}</h1>`;
            }

        }, 1000); //segundos.
}

