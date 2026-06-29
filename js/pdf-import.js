const importBtn = document.getElementById("importPdf");
const status = document.getElementById("status");

pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

importBtn.addEventListener("click", async () => {

    const file = document.getElementById("pdfFile").files[0];

    if (!file) {
        status.innerHTML = "❌ Please select a PDF";
        return;
    }

    status.innerHTML = "📖 Reading PDF...";

    const arrayBuffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
        data: arrayBuffer
    }).promise;

    let fullText = "";

    for (let page = 1; page <= pdf.numPages; page++) {

        const p = await pdf.getPage(page);

        const content = await p.getTextContent();

        fullText += content.items
            .map(item => item.str)
            .join(" ");

        fullText += "\n";
    }

    console.log(fullText);

    status.innerHTML =
        "✅ PDF Read Successfully. Check Console.";
});
