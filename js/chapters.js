fetch("data/chapters.json")
  .then(response => response.json())
  .then(data => {

    let html = "";

    data.forEach(chapter => {

      html += `
      <div class="chapter"
      onclick="location.href='chapter.html?name=${chapter.chapter}'">

      ${chapter.chapter}

      <span class="count">${chapter.count}</span>

      </div>
      `;

    });

    document.getElementById("chapter-list").innerHTML = html;

  });
