export default function hamburguerMenu(panelBtn, panel, menuLink) { //exportando funciones.
    const d = document; //dom

    d.addEventListener("click", e => { //atento a la interacción de un usuario sobre un elemento en concreto.
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) { //detectamos el pane y el boton.
            d.querySelector(panel).classList.toggle('is-active'); 
            d.querySelector(panelBtn).classList.toggle('is-active');
        }

        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove('is-active');
            d.querySelector(panelBtn).classList.remove('is-active');
        }

    })
}

