const d = document
export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"); //get list node
         console.log($selectors);

    let moon = "🌙",
        sun = "🌞";

    d.addEventListener("click", e => {
       
        if (e.target.matches(btn)) {
            console.log('ddd');
            //verificar que modo esta en el boton
            if ($themeBtn.textContent === moon) {
                $selectors.forEach(elemento => elemento.classList.add(classDark));
                $themeBtn.textContent = sun;
            } else {
                $selectors.forEach(elemento => elemento.classList.remove(classDark));
                $themeBtn.textContent = moon;
            }
        }
    });

}