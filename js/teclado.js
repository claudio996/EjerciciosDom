const d = document;

export const shortcuts = (e) =>{ //recibimos el evento.
    console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log("ctl", e.ctrlKey);
    console.log("alt",e.altKey);
    console.log("shift", e.shiftKey);
    // three types events wondow prompt alert confirm

    if (e.key === "a" && e.altKey) {
        alert("Has lanzado una alerta con el teclado");
        
    }
    if (e.key === "c" && e.altKey) {
        confirm("Has lanzado una confirmación con el teclado");
        
    }
    if (e.key === "p" && e.altKey) {
        prompt("Has lanzado un prompt con el teclado");
        
    }
   
}
