const d = document;
let x = 0;
let y = 0;


export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball), //bola
        $stage = d.querySelector(stage); //ecenario
    let limitsBall; //limites.
    let limitStage;//limit ecenario

    limitsBall = $ball.getBoundingClientRect(), //tamaño de la bola
        console.log(limitsBall);
    limitStage = $stage.getBoundingClientRect() //tamaño del ecenario.
    console.log(limitStage);
    //console.log(limitsBall, limitStage);

    if (e.keyCode === 37) {

        //move("left")
        // e.preventDefault()
        //definir limites del ecenario.

        if (limitsBall.left > limitStage.left)
            x--;


    } if (e.keyCode === 39) {
        //move("right")
        // e.preventDefault() 
        if (limitsBall.right < limitStage.right) 
        x++;

    } if (e.keyCode === 38) {
        //move("up")
        e.preventDefault() // 
        if (limitsBall.top > limitStage.top) y--;



    } if (e.keyCode === 40) {
        // move("down")
        e.preventDefault()
        if (limitsBall.bottom < limitStage.bottom) y++;
        //y++;
    }
    $ball.style.transform = `translate(${x * 10}px , ${y * 10}px)`;  //move ball


}

export const shortcuts = (e) => { //recibimos el evento.
    /*console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log("ctl", e.ctrlKey);
    console.log("alt", e.altKey);
    console.log("shift", e.shiftKey);
    // three types events wondow prompt alert confirm
    */
    if (e.key === "a" && e.altKey) { //
        alert("Has lanzado una alerta con el teclado");

    }
    if (e.key === "c" && e.altKey) {
        confirm("Has lanzado una confirmación con el teclado");

    }
    if (e.key === "p" && e.altKey) {
        prompt("Has lanzado un prompt con el teclado");

    }

}