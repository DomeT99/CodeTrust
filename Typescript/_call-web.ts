//Server-side call library
function callWebApiGet(url: string, callback) {
  let request = new Request(url);
  fetch(request)
    .then((response) => response.json())
    .then(callback)
    .catch((err) => {
      console.log("Oh no! 😵 " + err);
    });
}

function callWebMethod(
  url: string,
  data: object,
  succFunc: Function,
  errFunc: Function
) {
  let request = new Request(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  });

  fetch(request)
    .then((response) => {
      response.json();
    })
    .then(() => succFunc)
    .catch(() => errFunc);
}
