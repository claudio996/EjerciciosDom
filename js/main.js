import hamburguerMenu from "./menu_hamburguesa.js";
const d = document;  //pasamos el evento y selector.
d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
})
