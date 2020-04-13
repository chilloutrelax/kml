<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kogu Me Lugu</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
    <link rel="stylesheet" href="./scss/styles.css">
    
</head>

<body>
    <?php include './components/header.html' ?>

    <main>
        <?php include './components/searchBar_medium.html' ?>
        
        <?php include './components/video-list-tab.html' ?>

        <?php include './components/shareBtn.html' ?>
    </main>
    



    <?php include './components/footer.html' ?>
</body>


    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.2.1/build/ol.js"></script>    
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>
    <script src="js/header.js"></script>
    <script src="js/modal.js"></script>
    <script src="js/map.js"></script>
    <script src="js/sharebtn.js"></script>
    <script src="js/videoteek.js"></script>
    <script src="js/mobileMenu.js"></script>
    
</html>