function showError(error) {
    var message = "An error occurred";
    if (error.message) {
        message = error.message;
    } else if (error.errors) {
        var errors = error.errors;
        message = "";
        Object.keys(errors).forEach(function (k) {
            message += k + ": " + errors[k] + "\n";
        });
    }

    alert(message);
}

$(document).ready(function () {
  
    document.getElementById('name').innerHTML = localStorage.getItem("name");
    document.getElementById('type').innerHTML = localStorage.getItem("type");
    document.getElementById('age').innerHTML = localStorage.getItem("age");
    document.getElementById('area').innerHTML = localStorage.getItem("area");
    document.getElementById('medUse').innerHTML = localStorage.getItem("medUse");
    document.getElementById('comment').innerHTML = localStorage.getItem("comment");
});