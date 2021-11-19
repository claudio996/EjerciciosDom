const d = document,
    n = navigator,
    ua = n.userAgent;

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
        isDesktop = {
            linux: () => ua.match(/linux/i),//buscar expresion regular para cadena de texto userAgent.
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () { //funcion anonima. //cualquier so de escritorio
                return this.linux() || this.mac() || this.windows(); //funcion anonima para hacer referencia a los otros objetos.
            }
        },
        isBrowser = {

            Chrome: () => ua.match(/Chrome/i),//buscar expresion regular para cadena de texto userAgent.
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () { //funcion anonima.
                return this.Chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge(); //funcion anonima para hacer referencia a los otros objetos.
            }
        },



        isMobile = {
            android: () => ua.match(/android/i),//buscar expresion regular para cadena de texto userAgent.
            ios: () => ua.match(/iphone|iphad|ipod/i),
            windowsPhone: () => ua.match(/windows phone/i),
            any: function () { //funcion anonima.
                return this.android() || this.ios() || this.windowsPhone(); //funcion anonima para hacer referencia a los otros objetos.
            }
        }
  

   // console.log(ua);
    $id.innerHTML = `<ul>
    <li>User Agent <b>${ua} </b> </li>
    <li>Plataforma <b>${isMobile.any()? isMobile.any():isDesktop.any() } </b> </li>
    <li> <b>${ua} </b> </li>
    <li>Navegador <b>${isBrowser.any} </b> </li>
    </ul>`

    //contenido exclivo

    if (isBrowser.Chrome) {
        $id.innerHTML += `<p>Conteido que solo se ve en chrome</p>`
    }
    if (isBrowser.edge) {
        $id.innerHTML += `<p>Conteido que solo se ve en edge</p>`
    }
    if (isBrowser.firefox) {
        $id.innerHTML += `<p>Conteido que solo se ve en firefox</p>`
    }

    if (isDesktop.linux) {
        $id.innerHTML += `<p>Descarga para linux</p>`
    }

    if (isDesktop.mac) {
        $id.innerHTML += `<p>Descarga para safari</p>`
    }

    if (isDesktop.windows) {
        $id.innerHTML += `<p>Descarga para windows</p>`
    
    }

    //redirecciones
    if (isMobile.android()) {
        window.location.href = "https://facebook.com";
    }
}