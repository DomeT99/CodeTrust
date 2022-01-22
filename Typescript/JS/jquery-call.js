function callJqWebMethod(url, data, funSucces, funError) {
  $.ajax({
    type: "POST",
    data: data,
    url: url,
    dataType: "JSON",
    contentType: "application/json; charset=utf-8",
    success: funSucces,
    error: funError,
  });
}
