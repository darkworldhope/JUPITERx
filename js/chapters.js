<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Question Types</title>

<style>
body{
font-family:Arial,sans-serif;
background:#f5f5f5;
padding:20px;
}

h1{
text-align:center;
}

.card{
background:white;
padding:20px;
margin:15px auto;
max-width:500px;
border-radius:12px;
box-shadow:0 2px 8px rgba(0,0,0,.15);
font-size:22px;
font-weight:bold;
text-align:center;
cursor:pointer;
}

.back{
text-decoration:none;
font-size:18px;
}
</style>

</head>

<body>

<a href="javascript:history.back()" class="back">⬅ Back</a>

<h1>Question Types</h1>

<div id="buttons"></div>

<script>

const params = new URLSearchParams(window.location.search);
const chapter = params.get("chapter");

document.getElementById("buttons").innerHTML = `

<div class="card"
onclick="location.href='question-list.html?chapter=${chapter}&type=long'">
📖 Long Questions
</div>

<div class="card"
onclick="location.href='question-list.html?chapter=${chapter}&type=short'">
📝 Short Notes
</div>

`;

</script>

</body>
</html>
