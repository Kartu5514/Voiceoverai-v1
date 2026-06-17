function speakText(text){

speechSynthesis.cancel();

const utterance =
new SpeechSynthesisUtterance(text);

utterance.lang = "en-US";

utterance.rate =
parseFloat(document.getElementById("rate").value);

speechSynthesis.speak(utterance);

}
