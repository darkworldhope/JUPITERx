async function loadHealth() {
  const response = await fetch("data/health.json");
  const data = await response.json();

  const list = document.getElementById("health-list");
  list.innerHTML = "";

  data.forEach((item) => {
    list.innerHTML += `
      <div class="card">
        <b>${item.year}</b><br>
        ${item.type} (${item.marks} Marks)<br><br>
        ${item.question}
      </div>
    `;
  });
}

loadHealth();
