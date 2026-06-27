const params = new URLSearchParams(window.location.search);
const chapter = params.get("name");

document.getElementById("title").innerText = chapter + " - Previous Year Questions";

const years = [2025, 2024, 2023, 2022, 2021];

let html = "";

years.forEach(year => {
  html += `
  <div class="card"
       onclick="location.href='questions.html?chapter=${chapter}&year=${year}'">
    ${year}
  </div>
  `;
});

document.getElementById("year-list").innerHTML = html;
