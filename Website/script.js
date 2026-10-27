var modal = document.getElementById("myModal");

var images = document.getElementsByClassName("hero-image");

var bigImage = document.getElementById("bigImage");

var caption = document.getElementById("caption");

var close = document.getElementsByClassName("close")[0];

var i;

for (i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        bigImage.src = this.src;
        bigImage.alt = this.alt;
        caption.innerHTML = this.getAttribute("data-caption");
    };
}

close.onclick = function() {
    modal.style.display = "none";
};

modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.onkeydown = function(event) {
    if (event.key == "Escape") {
        modal.style.display = "none";
    }
};
