const params = new URLSearchParams(window.location.search);

const chapter = params.get("chapter");
const type = params.get("type");

const title = document.getElementById("title");
const questionList = document.getElementById("question-list");

title.innerText =
type === "long" ? "Long Questions" : "Short Notes";

loadQuestions();

async function loadQuestions() {

  const { data, error } = await window.supabaseClient
    .from("questions")
    .select("*")
    .eq("chapter_id", Number(chapter))
    .eq("question_type", type === "long" ? "Long" : "Short")
    .order("id", { ascending: true });

  if (error) {
    questionList.innerHTML = "<h3>Error Loading Questions</h3>";
    console.log(error);
    return;
  }

  if (!data || data.length === 0) {
    questionList.innerHTML = "<h3>No Questions Found</h3>";
    return;
  }

  questionList.innerHTML = "";

  data.forEach(q => {
    questionList.innerHTML += `
      <div class="card"
      onclick="location.href='questions.html?id=${q.id}'">
        ${q.question}
      </div>
    `;
  });

}
