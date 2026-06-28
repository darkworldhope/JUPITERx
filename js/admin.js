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
        result.innerHTML="❌ "+error.message;
        result.style.color="red";
    }
    else{
        result.innerHTML="✅ Subject Added Successfully";
        result.style.color="green";
        document.getElementById("subject").value="";
    }

});
