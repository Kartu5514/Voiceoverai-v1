function speakText(text){

const utterance =
new SpeechSynthesisUtterance(text);

utterance.rate =
document.getElementById("rate").value;

speechSynthesis.speak(utterance);

}
