const d = document,
 w  = window
export default function ResponsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if (e.target === $form) {
            //alert("formulario enviado");

            e.preventDefault(); 
            tester = w.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight = ${$form.alto.value}`); //references to form
        }
    })

    d.addEventListener("click" , e => {
        if (e.target === $form.cerrar) {
            tester.close();
        }
    })
}