//FUNZIONI PER APRIRE E CHIUDERE I POPUP
function openPopup() {
    let b_screen = document.getElementById("black_screen");
    if (b_screen.style.display !== "block") {
        b_screen.style.display = "block";

    }
}
function closePopup() {
    let b_screen = document.getElementById("black_screen");
    if (b_screen.style.display !== "none") {

        b_screen.style.display = "none";
    }
}
//Variabile dei parametri dei popup
var _popupParams = {

    title: undefined,
    message: undefined,
    height: undefined,
    width: undefined,
    color: undefined
}
//Popup richiamati direttamente dal javascript
function alertPopUp(title, msg) {

    //Viene dichiarata la variabile contenente il black screen ed il popup
    let b_screen = "<div id='b-screen' class='black-screen'><div class='alert-func'><div class='alert-head'>" + title + "</div><div class='alert-content'>" + msg + "</div><button onclick='closeAlert()' class='button-green btn-close'>OK</button></div></div>";
    const wrapper = document.createElement('div');//viene creato l'elemento padre
    wrapper.innerHTML = b_screen;//a cui verrà 'iniettato' tutto il popup
    document.body.appendChild(wrapper);//infine viene 'appeso' al corpo della pagina
}
function closeAlert() {
    debugger
    let b_screen = document.getElementById('b-screen');
    document.body.remove(b_screen);
}