const API_KEY = "Tambahkan disini";

async function generateScript(prompt){

const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${}`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:
`Buat script voice over YouTube yang menarik:

${prompt}`
}
]
}
]
})
}
);

const data = await response.json();

return data.candidates[0].content.parts[0].text;

}