function saveHistory(text){

let history =
JSON.parse(
localStorage.getItem("history")
) || [];

history.unshift(text);

localStorage.setItem(
"history",
JSON.stringify(history)
);

loadHistory();

}

function loadHistory(){

let history =
JSON.parse(
localStorage.getItem("history")
) || [];

const container =
document.getElementById("history");

container.innerHTML="";

history.forEach(item=>{

container.innerHTML += `
<div class="history-item">
${item.substring(0,100)}...
</div>
`;

});

}
