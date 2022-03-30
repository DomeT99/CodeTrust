function callWebMethod(method, url, data, succFunc, errFunc) {
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
    let dataParse = JSON.parse(xhr.response);
    succFunc(dataParse);
  };
  xhr.onerror = (error) => {
    errFunc(error);
  };

  if (method == "GET" || method == "POST") {
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }
}
/*---------------------------------------------------------------- */

//Funzione chiamata Api globale
async function CallApiWeb(url, method, dataBody, succFunc, errorFunc) {
  //Uso uno switch per determinare il metodo di chiamata(GET,POST,PUT,DELETE)
  switch (method) {
    case "GET":
      let getRes = await GetApiResult(url, succFunc, errorFunc);
      return getRes;

    case "POST":
      let postRes = await PostApiResult(url, dataBody, succFunc, errorFunc);
      return postRes;

    case "PUT":
      let putResult = await fetch(url, {
        method: method,
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataBody),
      });

      return putResult.json();
    case "DELETE":
      let deleteRes = await DeleteApiResult(url, dataBody, succFunc, errorFunc);
      return deleteRes;

    default:
      throw `L'espressione "${method}" non è valida.`;
  }
}

//Funzione risultato "GET" richiamata nello switch della funzione principale
async function GetApiResult(url, succFunc, errorFunc) {
  let getResult = await fetch(url).catch(() => {
    if (typeof errorFunc === "function") {
      errorFunc();
    }
  });

  if (!getResult.ok) {
    switch (getResult.status) {
      case 403:
        throw "Non hai i permessi necessari, stato 403";
      case 404:
        throw "Pagina non trovata, stato 404";
      case 405:
        throw "Operazione non consentita(probabilmente errata), stato 405";
      case 500:
        throw "Errore lato server, stato 500";
    }
  } else {
    if (getResult.status == 200) {
      if (typeof succFunc === "function") {
        succFunc();
      }
    }
  }

  return getResult.json();
}

//Funzione risultato "POST" richiamata nello switch della funzione principale
async function PostApiResult(url, dataBody, succFunc, errorFunc) {
  let postResult = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBody),
  }).catch(() => {
    if (typeof errorFunc === "function") {
      errorFunc();
    }
  });

  if (!postResult.ok) {
    switch (postResult.status) {
      case 403:
        throw "Non hai i permessi necessari, stato 403";
      case 404:
        throw "Pagina non trovata, stato 404";
      case 405:
        throw "Operazione non consentita(probabilmente errata), stato 405";
      case 500:
        throw "Errore lato server, stato 500";
    }
  } else {
    if (postResult.status == 200) {
      if (typeof succFunc === "function") {
        succFunc();
      }
    }
  }

  return postResult.json();
}

//Funzione risultato "DELETE" richiamata nello switch della funzione principale
async function DeleteApiResult(url, dataBody, succFunc, errorFunc) {
  debugger
  let deleteResult = await fetch(url, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataBody),
  }).catch(() => {
    if (typeof errorFunc === "function") {
      errorFunc();
    }
  });

  if (!deleteResult.ok) {
    switch (deleteResult.status) {
      case 403:
        throw "Non hai i permessi necessari, stato 403";
      case 404:
        throw "Pagina non trovata, stato 404";
      case 405:
        throw "Operazione non consentita(probabilmente errata), stato 405";
      case 500:
        throw "Errore lato server, stato 500";
    }
  } else {
    if (deleteResult.status == 200) {
      if (typeof succFunc === "function") {
        succFunc();
      }
    }
  }

  return deleteResult.json();
}
