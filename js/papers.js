const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");

const title = document.getElementById("title");
const papers = document.getElementById("papers");

loadPapers();

async function loadPapers(){

const {data,error}=await window.supabaseClient
.from("papers")
.select("*")
.eq("subject_id",Number(subject))
.order("id");

if(error){
papers.innerHTML="<h3>Error loading papers</h3>";
console.log(error);
return;
}

title.innerHTML="Papers";

papers.innerHTML="";

data.forEach(paper=>{

papers.innerHTML+=`
<div class="card"
onclick="location.href='chapters.html?paper=${paper.id}'">

${paper.paper_name}

</div>
`;

});

}
