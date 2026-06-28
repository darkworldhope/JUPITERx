const params = new URLSearchParams(window.location.search);
const year = Number(params.get("year"));

const title = document.getElementById("title");
const subjects = document.getElementById("subjects");

title.innerText =
year === 1 ? "1st MBBS" :
year === 2 ? "2nd MBBS" :
year === 3 ? "3rd MBBS" :
"Final MBBS";

loadSubjects();

async function loadSubjects() {

  const { data, error } = await window.supabaseClient
    .from("subjects")
    .select("*")
    .eq("year_id", year)
    .order("name");

  if (error) {
    console.log(error);
    subjects.innerHTML = "<h3>Error Loading Subjects</h3>";
    return;
  }

  subjects.innerHTML = "";

  data.forEach(subject => {

    subjects.innerHTML += `
      <div class="card"
      onclick="location.href='papers.html?subject=${subject.id}'">

      ${subject.name}

      </div>
    `;

  });

}
