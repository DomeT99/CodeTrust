class GeneralPopup {
  b_screen: String;
  template: String;
  title: String;
  bodyMessage: String;
  color: String;
  width: Number;
  height: Number;
  closePopup: Function;

  constructor() {
    this.b_screen = `<div id='b-screen' class='black-screen'></div>`;
    this.template = `<div style='height:${this.height}px!important;width:${this.width}px!important;' class='alert-func'><div style='background-color:${this.color}!important' class='alert-head'>${this.title}</div><div class='alert-content'>${this.bodyMessage}</div><button style='background-color:${this.color}!important' onclick='${this.closePopup}' class='button-green btn-close'>OK</button></div>`;
    this.closePopup = () => {
      let b_screen = document.getElementById("b-screen");
      document.body.removeChild(b_screen);
    };
  }
}