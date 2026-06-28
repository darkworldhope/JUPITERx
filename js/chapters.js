const params = new URLSearchParams(window.location.search);
const paper = params.get("paper");

const title = document.getElementById("title");
const chapterList = document.getElementById("chapter-list");

if (paper === "1") {

title.innerText = "Community Medicine - Paper I";

chapterList.innerHTML = `

<div class="chapter" onclick="location.href='questions.html?chapter=man'">
Man & Medicine
</div>

<div class="chapter" onclick="location.href='questions.html?chapter=concepts'">
Concepts in Health & Disease
</div>

<div class="chapter" onclick="location.href='questions.html?chapter=epidemiology'">
Principles & Methods of Epidemiology
</div>

<div class="chapter">
Epidemiology of Communicable Diseases
</div>

<div class="chapter">
Epidemiology of Non-Communicable Diseases
</div>

<div class="chapter">
Screening for Disease
</div>

<div class="chapter">
Demography & Family Planning
</div>

<div class="chapter">
Nutrition & Health
</div>

<div class="chapter">
Environmental Health
</div>

<div class="chapter">
Occupational Health
</div>

<div class="chapter">
Health Information & Medical Statistics
</div>

`;

}

if (paper === "2") {

title.innerText = "Community Medicine - Paper II";

chapterList.innerHTML = `

<div class="chapter">
Health Planning & Management
</div>

<div class="chapter">
Health Care of Community
</div>

<div class="chapter">
MCH
</div>

<div class="chapter">
Medicine & Social Science
</div>

`;

}
