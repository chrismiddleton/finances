<?php
$title = "finances";
?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<title><?= $title ?></title>
</head>
<body>
<div id="finances-root">
</div>
<script src='FinancesApp.js'></script>
<script>
window.addEventListener("load", function () {
	var app = new FinancesApp(document.getElementById("finances-root"));
	app.init();
});
</script>
</body>
</html>