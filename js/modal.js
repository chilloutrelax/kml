var modal = document.getElementById("modal");
var modalBtn = document.getElementById("modalBtn");

var close = document.getElementById("close");

modalBtn.onclick = function () {
    modal.style.display="block";
};

close.onclick = function() {
    modal.style.display="none";
};

window.onclick = function(event) {
    if (event.target == modal){
        this.modal.style.display = "none";
    };
};

