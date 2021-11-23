const d = document,
    w = window;

export default function speechReader() {
    const $spechSelect = d.getElementById('speech-select'),
        $spechTextarea = d.getElementById('speech-text'),
        $spechBtn = d.getElementById('speech-btn'),
        speechMsg = new SpeechSynthesisUtterance();
    console.log(speechMsg);

    let voices = [];
    d.addEventListener("DOMContentLoaded", e => {
        //console.log(w.speechSynthesis.onvoiceschanged);

        w.speechSynthesis.addEventListener("voiceschanged", e => {
            voices = w.speechSynthesis.getVoices();

            voices.forEach(voice => {
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} - ${voice.lang}`;
                $spechSelect.appendChild($option); //agregando al nodo padre.
            })
            console.log(voices);
        })
    });
    d.addEventListener("change", e => {
        if (e.target === $spechSelect) {
            speechMsg.voice = voices.find(voice => voices.name === e.target.value);
        }
        console.log(speechMsg);
    })
    d.addEventListener("click", e => {
        if (e.target === $spechBtn) {
            speechMsg.text = $spechTextarea.value;
            w.speechSynthesis.speak(speechMsg)
        }
    })

}