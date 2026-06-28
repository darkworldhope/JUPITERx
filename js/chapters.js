const params = new URLSearchParams(window.location.search);
const paper = params.get("paper");

const title = document.getElementById("title");
const chapterList = document.getElementById("chapter-list");

loadChapters();

async function loadChapters() {

  const { data, error } = await window.supabaseClient
    .from("chapters")
    .select("*")
    .eq("paper_id", Number(paper))
    .order("name");

  if (error) {
    chapterList.innerHTML = "<h3>Error loading chapters</h3>";
    console.log(error);
    return;
  }

  title.innerHTML = "Chapters";
  chapterList.innerHTML = "";

  data.forEach(chapter => {

    chapterList.innerHTML += `
      <div class="chapter"
      onclick="location.href='questions.html?chapter=${chapter.id}'">

      ${chapter.name}

      </div>
    `;

  });

}
