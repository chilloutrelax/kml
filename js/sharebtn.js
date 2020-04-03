var share = document.getElementById("share");
var times = document.getElementById("times");
var social = document.getElementById("socialBtn");

share.onclick = function() {
    share.style.display = "none";
    times.style.display = "inline-block";
    social.style.display = "block";
};

times.onclick = function() {
    share.style.display = "inline-block";
    times.style.display = "none";
    social.style.display = "none";
};







