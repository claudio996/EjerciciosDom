const d = document,
    w = window

export default function responsiveMedia(id, mediaQuery, mobileContent, desktopContent) {
    let breakPoint = w.matchMedia(mediaQuery); //punto de quebre width

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent //cuando la mediaquery cumpla  
            
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }

        //console.log(e.matches,breakPoint);
    }

    breakPoint.addListener(responsive)
    responsive(breakPoint);
}