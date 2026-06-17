function speakText(text){

if(!('speechSynthesis' in window)){
alert("Browser tidak mendukung Text To Speech");
return;
}

const utterance = new SpeechSynthesisUtterance(text);

utterance.lang = "en-US";
utterance.rate = 1;

utterance.onstart = () => {
alert("Suara mulai diputar");
};

utterance.onerror = (event) => {
alert("Error TTS: " + event.error);
console.log(event);
};

speechSynthesis.speak(utterance);

}
