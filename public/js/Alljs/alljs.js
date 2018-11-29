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







function Plant(name,type,medicUse,age,height,area){
    this.name = name;
    this.age = age;
    this.height = height;
    this.area = area;
    this.medicUse = false;
    this.type = type;
    this.getName = getName;
    
    this.setAge = function (agePlant) {
        if (age < 0 )
            throw "Значение должно быть больше 0 ";
        this.age = agePlant;
    }
    this.getAge = function () {
        return this.age;
    }
    this.setSize = function (heightPlant) {
        if (height < 0 )
            throw "Значение должно быть больше 0 ";
        this.height = heightPlant;
    }
    this.getAge = function () {
        return this.height;
    }
}
function Fir(needleLength, sort){
    Plant.call(this);
    this.sort = sort;
    this.needleLength = needleLength;
    this.setNeedleLenght = function(lenght){
        if(lenght < 0)
            throw "Значение должно быть больше 0 ";
            this.needleLength = lenght;
    }
    this.getNeedleLenght = function(){
        return this.needleLength;
    }
}
function Fern(){
    Plant.call(this);
}

function getName(){
    return this.name;
}

var Plant = new Plant('вася','зеденый', 'колючконогие', 'широколистые', 'тайша');
Plant.setAge(80);

var h1 = document.getElementById('h1');


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

    loadComments();

    $('#plant-form').submit(function () {
    
        var name = $('#name').val();
        var type = $('#type').val();
        var area = $('#area').val();
        var age = $('#age').val();
        var medUse = $('#medUse').val();
        var comment = $('#comment').val();

        dpd.plants.post({
            name: name,
            type: type,
            area: area,
            age: age,
            medUse: medUse,
            comment: comment
        }, function (comment, error) {
            if (error) return showError(error);

            addComment(comment);
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

    function addComment(comment) {

        var editLink = $('<a href="#">Редактировать</a>');
        var deleteLink = $('<a href="#">Удалить</a>');
        var viewLink = $('<a href="#"><br>Страница объекта</a>');
        var tr = $('<tr >' +
            '<td >' + comment.name + '</td>' +
            '<td>' + comment.type + '</td>' +
            '<td>' + comment.area + '</td>' +
            '<td >' + comment.comment + '</td>' +
            '</tr>').append(editLink).append(" ").append(deleteLink).append(" ").append(viewLink);

        $("#table").append(tr).appendTo("#table");
        localStorage.setItem("tr",tr);
       
        deleteLink.click(function () {
            let asc = confirm("Вы точно хотите удалить эту книгу?");
            if (asc == true) {
            dpd.plants.del(comment.id, function (success, error) {
                if (error) return showError(error);
                tr.remove();
            });
            return false;
        }
        });

        editLink.click(function () {
            window.location = "Edit.html";
            localStorage.setItem("id",comment.id);
            localStorage.setItem("name",comment.name);
            localStorage.setItem("type",comment.type);
            localStorage.setItem("area",comment.area);
            localStorage.setItem("age",comment.age);
            localStorage.setItem("medUse",comment.medUse);
            localStorage.setItem("comment",comment.comment);
            return false;
        });

        viewLink.click(function (){

            window.location = "Object.html";
            localStorage.setItem("name",comment.name);
            localStorage.setItem("type",comment.type);
            localStorage.setItem("area",comment.area);
            localStorage.setItem("age",comment.age);
            localStorage.setItem("medUse",comment.medUse);
            localStorage.setItem("comment",comment.comment);
            return false;

        });
    }

    function loadComments() {
        dpd.plants.get(function (plants, error) { //Use dpd.js to access the API
            plants.forEach(function (comment) { //Loop through the result
                addComment(comment); //Add it to the DOM.
            });
        });
    }



});


document.getElementById('createButton').onclick = function () {

    window.location = "constructor.html"

}


document.getElementById('medUse').onclick = function () {

    if (this.checked) {
        document.getElementById('medUse').value = "Да";
    } else {
        document.getElementById('medUse').value = "Нет";
    }

}

