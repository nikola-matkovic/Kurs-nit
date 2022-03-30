<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentor Bootstrap Template - Index</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="script.js"  defer></script>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="responsive.css">
    <link rel="icon" href="favicon.png">
</head>
<body>
    <?php
        include "nav.html";
        include "hero.html";
        include "secound.html";
        include "numbers.html";
        include "fourth.html";
        include "icons.html";
        include "popular-header.html";
        include "popular.html";
        include "mentors.html";
        include "footer.html";
        include "arrow.html";
    ?>
    <script>
        window.onload=()=>{
            active(1);
        };
    </script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
</body>
</html>