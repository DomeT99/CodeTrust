window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    //Funzione orologio
    function clock() {
        var dateNow = new Date();
        var hour = dateNow.getHours();
        var minutes = dateNow.getMinutes();
        var seconds = dateNow.getSeconds();
        document.getElementById("cloak").innerHTML =
            hour + ":" + minutes + ":" + seconds;
    }
    setInterval(clock, 1000);
});
