const params = new URLSearchParams(window.location.search);

const chapter = params.get("chapter");
const year = Number(params.get("year"));

document.getElementById("title").innerText =
`${chapter} - ${year}`;

fetch("data/pyqs.json")
.then(response => response.json())
.then(data => {

const filtered = data.filter(item =>
item.chapter === chapter && item.year === year
);

let html = "";

filtered.forEach(item => {

html += `
<div class="question">

<span class="count">${item.marks}M</span>

<b>${item.type}</b><br><br>

${item.question}

</div>
`;

});

if(filtered.length===0){
html="<div class='question'>No PYQs Available</div>";
}

document.getElementById("question-list").innerHTML=html;

});
