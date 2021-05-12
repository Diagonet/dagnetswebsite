function sendingMsgs() {
  $("#messageForm").submit(function (event) {
    event.preventDefault();
    $.ajax({
      url: "https://api.apispreadsheets.com/data/12250/",
      type: "post",
      data: $("#messageForm").serializeArray(),
      success: function () {
        alert("You message has been sent!");
      },
      error: function () {
        alert("There was an error");
      },
    });
  });
}
$(sendingMsgs);
