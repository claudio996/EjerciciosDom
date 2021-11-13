const d = document;

export default function countDown(id,limitDate,finalMessage) {
const  $countDown = document.getElementById(id),
        countDownDate = new Date(limitDate).getTime();  //get time in miliseconds  
        //Trabajar un set interval
        let countdownTempo = setInterval(() => {
            let now = new Date().getTime(),
            limitTime =  countDownDate - now, //fecha -hoy
            days =  Math.floor(limitTime/(1000 * 60 * 60 * 24)),
            hours = ("0" + Math.floor((limitTime %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
            minutes = ("0" + Math.floor((limitTime %  (1000 * 60 * 60 * 60)) / (1000 * 60 ))).slice(-2),
            seconds = ("0" + Math.floor((limitTime %  (1000 * 60 )) / (1000))).slice(-2);

            $countDown.innerHTML = `<h1> Faltan: ${days} dias ${hours} horas  ${minutes} minutos  ${seconds} segundos</h1>`,

            console.log(countDownDate,now, limitTime)
            if (limitTime < 0) {
                clearInterval(countdownTempo);
                $countDown.innerHTML = `<h1>${finalMessage}</h1>`;
            }

        }, 1000);
}

