function popupAlert() {
    var b_screen = document.getElementById("black_screen");
    if(b_screen.style.display !== "none"){
       setTimeout(()=>{
        b_screen.style.display = "block";
       },100)
    }
}