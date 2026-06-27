const params = new URLSearchParams(window.location.search);
const chapter = params.get("name");

document.getElementById("title").innerText = chapter || "Chapter";

document.getElementById("chapter-data").innerHTML = `
<div class="card">
🔥 ${chapter} Chapter
</div>

<div class="card">
Previous Year Questions
</div>

<div class="card">
Important Questions
</div>

<div class="card">
Notes
</div>

<div class="card">
Images
</div>

<div class="card">
MCQs
</div>
`;
