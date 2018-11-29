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

    let id = localStorage.getItem("id");
    loadComments();

     $('#name').val(localStorage.getItem("name"));
     $('#type').val(localStorage.getItem("type"));
     $('#area').val(localStorage.getItem("area"));
     $('#age').val(localStorage.getItem("age"));
     $('#medUse').val(localStorage.getItem("medUse"));
     $('#comment').val(localStorage.getItem("comment"));

    $('#edit-form').submit(function () {

        var name = $('#name').val();
        var type = $('#type').val();
        var area = $('#area').val();
        var age = $('#age').val();
        var medUse = $('#medUse').val();
        var comment = $('#comment').val();

        dpd.plants.put(id,{
            name: name,
            type: type,
            area: area,
            age: age,
            medUse: medUse,
            comment: comment
           
        }, function (comment, error) {
            if (error) return showError(error);

            $('#name').val('');
            $('#type').val('');
            $('#area').val('');
            $('#age').val('');
            $('#medUse').val('');
            $('#comment').val('');
            window.location = "index.html"
        });

        return false;
    });

    function loadComments() {
        dpd.plants.get(id, function (plants, error) { //Use dpd.js to access the API
            plants.forEach(function (comment) { //Loop through the result
                
            });
        });
    }

});






