class webApiParams {
  url: string;
  callback: Function;
}

function callWebApi(url: string, callback) {
  let params = new webApiParams();

  params.callback = callback;
  params.url = url;

  let request = new Request(url);
  fetch(request)
    .then((response) => response.json())
    .then(callback);
}
