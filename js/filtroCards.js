const d = document;
export default function searchFilter(input, selector) { //recibimos los selectores-
    d.addEventListener("keyup", e => { //detectamos las teclas 
        if (e.target.matches(input)) { //detectamos el input
            console.log(e.key);
            d.querySelectorAll(selector); //recibimos las cartas.

            if (e.key === 'Escape') e.target.value =''
            
            d.querySelectorAll(selector).forEach(el => el.textContent.toLowerCase().includes(e.target.value) //recorremos las cartas e igualamos lo escrito en nuestro input.
                ? el.classList.remove("filter")
                : el.classList.add("filter")
            );
        }
    })
}