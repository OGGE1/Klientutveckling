$(document).ready(function () {

  let storageArray = [];

  $("#button").click(function () {
    let article = $("#userInput").val();

    if (article.trim() == "") {
      alert("Ange en artikel!");
      $("#userInput").val("");
    } else {
      $("#tbodyTable").prepend(
        "<tr>" +
          "<td>" +
          "<div class='row'>" +
          "<div class='col-1'><input class='form-check-input' type='checkbox' value='' id='checkbox'> </div>" +
          "<div class='col-9'> " +
          article +
          "</div>" +
          "<div class='col-2'>" +
          "<button class='btn btn-primary btn-sm' id='removeButton'>Ta bort</button>" +
          "</div>" +
          "</div>" +
          "</td>" +
          "</tr>"
      );
      storageArray.push(article);
      $("#userInput").val("");
      localStorage.setItem("artikel_namn", JSON.stringify(storageArray));
    }

    $("#removeButton").click(function () {
      $(this).closest("tr").remove();
    });

    $("#checkbox").click(function () {
      if ($(this).is(":checked")) {
        $(this).closest("tr").css("background-color", "#00FF00");
      } else {
        $(this).closest("tr").css("background-color", "");
      }
    });
  });

  function loadStorage() {

  }

});
