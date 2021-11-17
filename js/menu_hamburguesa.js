export default function hamburguerMenu(panelBtn, panel, menuLink) { //exportando funciones. params (panel-btn,panel-links-menu).
    const d = document; // Invocamos el document para invocar el document.
    //La intraccion del dom y el despliegue de clases la haremos al momento de interactuar con el boton.-
    d.addEventListener("click", e => { //Registrar un evento de un objeto especifico. addEventListener estara atento a nuestro evento. 
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) { //Seleccionamos todo lo referenciado a la clase panel-btn.
            // Al momento de dart click en el  boton activamos clases con toggle.
            d.querySelector(panel).classList.toggle('is-active'); //  // mostrar y desactivar clases con toggle. activamos la clase active en el panel si le damos click al boton.
            d.querySelector(panelBtn).classList.toggle('is-active'); //activamos la clase active en el panel-btn si damos click al boton.
        }
        //al momento de cerrar quitamos las clases del panel.
        if (e.target.matches(menuLink)) { //detectamos si hay interaccion con  la seccion que contiene los enlaces. 
            d.querySelector(panel).classList.remove('is-active');  //ocultamos el panel al dar click.
            d.querySelector(panelBtn).classList.remove('is-active');
        }

    })
}

