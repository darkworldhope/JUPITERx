const params = new URLSearchParams(window.location.search);
const subject = Number(params.get("subject"));

const title = document.getElementById("title");
const papers = document.getElementById("papers");

loadPapers();

async function loadPapers() {

  const { data, error } = await window.supabaseClient
    .from("papers")
    .select("*")
    .eq("subject_id", subject)
    .order("id");

  if (error) {
    console.log(error);
    papers.innerHTML = "<h3>Error Loading Papers</h3>";
    return;
  }

  title.innerText = "Papers";
  papers.innerHTML = "";

  if (data.length === 0) {
    papers.innerHTML = "<h3>No Papers Found</h3>";
    return;
  }

  data.forEach(paper => {

    papers.innerHTML += `
      <div class="card"
      onclick="location.href='chapters.html?paper=${paper.id}'">

      ${paper.paper_name}

      </div>
    `;

  });

}
