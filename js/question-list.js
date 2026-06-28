const params = new URLSearchParams(window.location.search);

const chapter = params.get("chapter");
const type = params.get("type");

const title = document.getElementById("title");
const questionList = document.getElementById("question-list");

title.innerText =
type === "long" ? "Long Questions" : "Short Notes";

loadQuestions();

async function loadQuestions(){

const { data, error } = await window.supabaseClient
.from("questions")
.select("*")
.eq("chapter_id", Number(chapter))
.eq("category", type === "long" ? "Long" : "Short")
.order("repeat_count", { ascending:false });

if(error){
questionList.innerHTML="<h2>Error Loading Questions</h2>";
console.log(error);
return;
}

questionList.innerHTML="";

if(data.length===0){
questionList.innerHTML="<h3>No Questions Found</h3>";
return;
}

data.forEach(q=>{

questionList.innerHTML+=`

<div class="question">

<h3>${q.question}</h3>

<div class="repeat">
🔥 Repeated ${q.repeat_count} Times
</div>

</div>

`;

});

}
