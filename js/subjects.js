const params = new URLSearchParams(window.location.search);
const year = params.get("year");

const title = document.getElementById("title");
const subjectsDiv = document.getElementById("subjects");

const yearNames = {
  "1": "1st MBBS",
  "2": "2nd MBBS",
  "3": "3rd MBBS",
  "4": "Final MBBS"
};

title.innerText = yearNames[year] || "Subjects";

loadSubjects();

async function loadSubjects() {

  const { data, error } = await window.supabaseClient
    .from("subjects")
    .select("*")
    .eq("year_id", Number(year))
    .order("name");

  if (error) {
    subjectsDiv.innerHTML = "<h3>Error loading subjects</h3>";
    console.log(error);
    return;
  }

  subjectsDiv.innerHTML = "";

  data.forEach(subject => {

    subjectsDiv.innerHTML += `
      <div class="card"
      onclick="location.href='papers.html?subject=${subject.id}'">

      ${subject.name}

      </div>
    `;

  });

}
