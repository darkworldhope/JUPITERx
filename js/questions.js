const params = new URLSearchParams(window.location.search);
const chapter = params.get("chapter");

console.log("Chapter:", chapter);
