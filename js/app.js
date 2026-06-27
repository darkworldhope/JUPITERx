async function loadQuestions() {
  const response = await fetch("data/community.json");
  const questions = await response.json();

  const list = document.getElementById("question-list");
  list.innerHTML = "";

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<b>${index + 1}.</b> ${q.question}`;
    list.appendChild(div);
  });
}

loadQuestions();
