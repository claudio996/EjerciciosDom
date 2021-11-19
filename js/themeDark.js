const d = document, 
    ls = localStorage;

export default function darkTheme(btn, classDark) { 
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"); //get list node

    let moon = "🌙",
        sun = "🌞";

    const lightMode = () => {
        $selectors.forEach(elemento => elemento.classList.remove(classDark)); //removemos la clase dark
        $themeBtn.textContent = moon;
        ls.setItem('theme', 'light'); //establecemos el valor para localstorage
    }
    const darkMode = () => {

        $selectors.forEach(elemento => elemento.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem('theme', 'dark'); //establecemos el valor para localstorage
    }


    d.addEventListener("click", e => { //detectamos el boton enviado desde el main.

        if (e.target.matches(btn)) {
            //verificar que modo esta en el boton
            if ($themeBtn.textContent === moon) {
                darkMode()
            } else {
                lightMode()
            }
        }
    });

    
    //cargamos el dom  obteniendo el valor del localstorage, 
    d.addEventListener("DOMContentLoaded", e => {//cuando el navegador cargue consulte al localstorage

        if (ls.getItem('theme') === null) //si la variable theme es nula
            ls.setItem('theme', 'light');  // si la varible theme  es nula seteraremos la variable a light

        if (ls.getItem('theme') === 'light') //cuando la varible sea igual a light llamamos a la funcion light.
            lightMode();

        if (ls.getItem('theme') === 'dark')  //cuando la varible sea igual a dark llamamos a la funcion dark.
            darkMode();
    });
}