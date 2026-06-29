const btn = document.getElementById("addSubject");
const result = document.getElementById("result");

btn.addEventListener("click", async () => {

    const subject = document.getElementById("subject").value.trim();
    const year = parseInt(document.getElementById("year").value);

    if(subject===""){
        result.innerHTML="❌ Please enter subject name";
        result.style.color="red";
        return;
    }

    const { error } = await window.supabaseClient
    .from("subjects")
    .insert([
        {
            name: subject,
            year_id: year
        }
    ]);

    if(error){
        result.innerHTML="❌ " + error.message;
        result.style.color="red";
    }
    else{
        result.innerHTML="✅ Subject Added Successfully";
        result.style.color="green";
        document.getElementById("subject").value="";
    }

});


// ======================
// PDF Upload
// ======================

const uploadBtn = document.getElementById("uploadPdf");
const pdfResult = document.getElementById("pdfResult");

uploadBtn.addEventListener("click", async () => {

    const file = document.getElementById("pdfFile").files[0];

    if(!file){
        pdfResult.innerHTML="❌ Please select a PDF";
        pdfResult.style.color="red";
        return;
    }

    pdfResult.innerHTML="Uploading PDF...";
    pdfResult.style.color="black";

    const fileName = Date.now() + "_" + file.name;

    const { error } = await window.supabaseClient
    .storage
    .from("pdfs")
    .upload(fileName, file);

    if(error){
        pdfResult.innerHTML="❌ " + error.message;
        pdfResult.style.color="red";
        return;
    }

    pdfResult.innerHTML="✅ PDF Uploaded Successfully";
    pdfResult.style.color="green";

    console.log("PDF Uploaded:", fileName);

});
