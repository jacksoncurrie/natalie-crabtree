function validate() {
    var result = true;
    var email = document.forms["contact"]["email"];
    var name = document.forms["contact"]["name"];
    var subject = document.forms["contact"]["subject"];
    var message = document.forms["contact"]["message"];
    var error = document.getElementsByClassName("invalid");

    if (email.value == "") {
        error[0].className += " visible";
        email.className += " error";
        result = false;;
    }

    if (name.value == "") {
        error[1].className += " visible";
        name.className += " error";
        result = false;
    }
    
    if (subject.value == "") {
        error[2].className += " visible";;
        subject.className += " error";
        result = false;
    }
    
    if (message.value == "") {
        error[3].className += " visible";
        message.className += " error";
        result = false;
    }

    return result;
}