<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - Mentor Bootstrap Template</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="responsive.css">
    <link rel="stylesheet" href="about.css">
    <link rel="icon" href="favicon.png">
    <script src="script.js" defer></script>
</head>
<body>
    <?php
        $header = "About Us";
        include "nav.html";
        include "description.php";
        include "secound.html";
        include "numbers.html";
        include "slide-show.html";
        include "footer.html";
        include "arrow.html";
    ?>
    <script>
        window.onload=()=>{
            active(8);
        };
    </script>
</body>
</html>