function validateData() {
    var name = document.getElementById("name");
    var category = document.getElementById("category");
    var duration = document.getElementById("duration");
    var description = document.getElementById("description");
    var playlist = document.getElementById("playlist");
    var courseImg = document.getElementById("image");

    var elements = [name, category, duration, description, playlist, courseImg];

    for (var i = 0; i < elements.length; ++i) {
        if (elements[i].value == "") {
            window.alert("Please enter course " + elements[i].id + ".");
            elements[i].focus();
            return false;
        }
    }

    return true;
}