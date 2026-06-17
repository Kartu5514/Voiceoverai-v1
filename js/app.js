const idea =
document.getElementById("idea");

const script =
document.getElementById("script");

document
.getElementById("generateBtn")
.addEventListener(
"click",
async ()=>{

script.value =
"Generating...";

const result =
await generateScript(
idea.value
);

script.value =
result;

}
);


document
.getElementById("copyBtn")
.addEventListener(
"click",
()=>{

navigator.clipboard.writeText(
script.value
);

alert("Copied");

}
);

document
.getElementById("saveBtn")
.addEventListener(
"click",
()=>{

saveHistory(
script.value
);

}
);

loadHistory();

document
.getElementById("speakBtn")
.addEventListener(
"click",
()=>{

alert("Play ditekan");

speakText(script.value);

}
);
