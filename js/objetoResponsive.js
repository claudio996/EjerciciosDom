const d = document,  //d para cargar el document
    w = window //window para invocar un objeto  window

export default function responsiveMedia(id, mediaQuery, mobileContent, desktopContent) {
    let breakPoint = w.matchMedia(mediaQuery); //obtenemos la media query esta es el tamaño del width

    const responsive = (e) => {
        if (e.matches) {
            console.log(e.matches);
            d.getElementById(id).innerHTML = desktopContent //cuando la mediaquery cumpla  
            
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }

        //console.log(e.matches,breakPoint);
    }

    breakPoint.addListener(responsive)
    responsive(breakPoint);
}