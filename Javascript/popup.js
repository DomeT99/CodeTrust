//FUNZIONI PER APRIRE E CHIUDERE I POPUP
function openPopup() {
    var b_screen = document.getElementById("black_screen");
    if (b_screen.style.display !== "block") {
        b_screen.style.display = "block";
        
    }
}
function closePopup() {
    var b_screen = document.getElementById("black_screen");
    if (b_screen.style.display !== "none") {

        b_screen.style.display = "none";
    }
}
