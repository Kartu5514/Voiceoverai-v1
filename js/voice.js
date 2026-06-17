function speakText(text){

speechSynthesis.cancel();

const utterance =
new SpeechSynthesisUtterance(text);

utterance.lang = "id-ID";

utterance.rate =
parseFloat(document.getElementById("rate").value);

utterance.volume = 1;

utterance.onstart = () => {
console.log("Voice started");
};

utterance.onerror = (e) => {
console.log("Voice error", e);
alert("Gagal memutar suara");
};

speechSynthesis.speak(utterance);

}
