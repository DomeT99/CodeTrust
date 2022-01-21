//Server-side call library
function callWebApiGet(url, callback) {
    var request = new Request(url);
    fetch(request)
        .then(function (response) { return response.json(); })
        .then(callback)["catch"](function (err) {
        console.log("Oh no! 😵 " + err);
    });
}
function callWebMethod(url, data, succFunc, errFunc) {
    var request = new Request(url, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(data)
    });
    fetch(request)
        .then(function (response) {
        response.json();
    })
        .then(function () { return succFunc; })["catch"](function () { return errFunc; });
}
