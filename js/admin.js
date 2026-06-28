const btn = document.getElementById("addSubject");

btn.addEventListener("click", async () => {
  const name = document.getElementById("subject").value.trim();
  const yearId = parseInt(document.getElementById("year").value);

  if (!name) {
    alert("Please enter subject name");
    return;
  }

  const { error } = await window.supabaseClient
    .from("subjects")
    .insert([
      {
        name: name,
        year_id: yearId
      }
    ]);

  if (error) {
    alert(error.message);
  } else {
    alert("Subject Added Successfully ✅");
    document.getElementById("subject").value = "";
  }
});
