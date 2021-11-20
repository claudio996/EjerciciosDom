const d = document,
    n = navigator;

export default function getGeolocation(id) {

    let $id = d.querySelector(id),

        options = {
            enableHightAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

    const success = (position) => {
        let coords = position.coords;
        console.log('parrafo tu posiscion es ');
        console.log('<p>Tu posicion es </p><ul><li>latitud</li><li><b>' + coords.latitude + '</b></li></ul>');
        console.log('<p>Tu posicion es </p><ul><li>longitud</li><li><b>' + coords.longitude + '</b></li></ul>');
        console.log('<p>Tu posicion es </p><ul><li>Presicion</li><li><b>' + coords.accuracy + '</b></li></ul>');

        console.log('<a href ="https://www.google.cl/maps/@>' + coords.latitude, coords.longitude, '10z target ="_blank rel= "noopener "','</a>');
    };

    const error = (err) => {

        console.log('algo ha salido mal');
        //  $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        //  console.log(`Error ${err.code} : ${err.message}` );
    }
    n.geolocation.getCurrentPosition(success, error, options)
    //options = {};

}