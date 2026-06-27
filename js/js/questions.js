const params = new URLSearchParams(window.location.search);

const chapter = params.get("chapter");
const year = params.get("year");

document.getElementById("title").innerText =
`${chapter} - ${year}`;

const questions = [
{
question:"Define Health. Explain dimensions of Health.",
count:7
},
{
question:"Explain Levels of Prevention.",
count:5
},
{
question:"Describe Screening.",
count:4
}
];

let html="";

questions.forEach(q=>{

html+=`
<div class="question">
<span class="count">${q.count}×</span>

${q.question}

</div>
`;

});

document.getElementById("question-list").innerHTML=html;
