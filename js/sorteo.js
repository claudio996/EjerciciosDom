const d = document;

export default function draw(btn, selector){
  

    d.addEventListener("click", e => { //delegacion de eventos
        if (e.target.matches(btn)) {
           // console.log(e.target);
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    })

    const  getWinner = (selector) => { //obtenemos el ganador.
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];
        console.log($players,random,winner);

        return  `El ganador es ${winner.textContent}`;
    
    }
}

