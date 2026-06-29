const importBtn = document.getElementById("importPdf");
const status = document.getElementById("status");

pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

importBtn.addEventListener("click", async () => {

    const file = document.getElementById("pdfFile").files[0];

    if (!file) {
        status.innerHTML = "❌ Select PDF";
        return;
    }

    status.innerHTML = "📖 Reading PDF...";

    const buffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
        data: buffer
    }).promise;

    let text = "";

    for(let i=1;i<=pdf.numPages;i++){

        const page = await pdf.getPage(i);

        const content = await page.getTextContent();

        text += content.items.map(x=>x.str).join(" ");

        text += "\n";
    }

    const lines = text.split("\n");

    let chapter = "";
    let type = "";

    for(let line of lines){

        line = line.trim();

        if(line.length < 3) continue;

        if(
            line === line.toUpperCase() &&
            !line.includes("PAGE") &&
            !line.includes("MBBS")
        ){
            chapter = line;
            console.log("📚 Chapter:",chapter);
            continue;
        }

        if(line.includes("ESSAY")){
            type="Long";
            continue;
        }

        if(line.includes("SHORT NOTES")){
            type="Short";
            continue;
        }

        if(/^[0-9]+\./.test(line)){

            const question=line.replace(/^[0-9]+\./,"").trim();

            console.log({
                chapter,
                type,
                question
            });

        }

    }

    status.innerHTML="✅ Parsing Finished. Check Console.";

});
