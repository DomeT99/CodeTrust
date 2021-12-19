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
function closeAlert() {
  let b_screen = document.getElementById("b-screen");
  document.body.remove(b_screen);
}
//Variabile dei parametri dei popup
var _popupParams = {
  title: title,
  message: message,
  height: height,
  width: width,
  color: color,
};
//Popup richiamati direttamente dal javascript
function alertPopUp(title, msg, height, color, width) {
  //Viene dichiarata la variabile contenente il black screen ed il popup
  let b_screen = `<div id='b-screen' class='black-screen'><div style='height:${height}px!important;width:${width}px!important;' class='alert-func'><div style='background-color:${color}!important' class='alert-head'>${title}</div><div class='alert-content'>${msg}</div><button style='background-color:${color}!important' onclick='closeAlert()' class='button-green btn-close'>OK</button></div></div>`;
  const wrapper = document.createElement("div"); //viene creato l'elemento padre
  wrapper.innerHTML = b_screen; //a cui verrà 'iniettato' tutto il popup
  document.body.appendChild(wrapper); //infine viene 'appeso' al corpo della pagina
}
