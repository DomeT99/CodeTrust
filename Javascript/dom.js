window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  function cloack() {
    let dateNow = new Date();
    let hour = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    document.getElementById("cloak").innerHTML =
      hour + ":" + minutes + ":" + seconds;
  }
  setInterval(cloack, 1000);
});
