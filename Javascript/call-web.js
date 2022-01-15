function callWebApi(url, callback) {
  let request = new Request(url);
  fetch(request).then((response) => response.json()).then(callback);
}

