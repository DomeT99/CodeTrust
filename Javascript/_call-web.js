//POST
function callWebMethod(url, data, succFunc, errFunc) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (this.readyState == 4 && xhr.status == 200) {
      console.log("Success");
    }
    if (xhr.status == 500) {
      console.error("Server error 😵");
    }
    if (xhr.status == 403) {
      console.error("You don't have the necessary permissions!");
    }
    if (xhr.status == 404) {
      console.error("Page not found or nonexistent!");
    }
  };
  xhr.onload = () => {
    succFunc();
  };
  xhr.onerror = (error) => {
    errFunc(error);
  };

  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}
