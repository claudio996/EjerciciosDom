const d = document,
    n = navigator;
export default function detectWebCam(id) {
    const $video = d.getElementById(id);
    console.log(n);
    if (n.mediaDevices.getUserMedia) { //si encontramos el metodo getUser Media
        n.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((stream) => { // ejecutamos la promesa.
                //   console.log(stream);
                $video.srcObject = stream;
                $video.play(); //reproducimos en camara.
            })

            .catch((err) => {
                $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`); //coolstyle
                console.log(`Sucedio el siguiente error: ${err}`);
            });
    }
}