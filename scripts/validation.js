// When submission is processed
function validate() {
    // Set result to no errors
    var result = true;

    // Get form feilds
    var email = document.forms["contact"]["email"];
    var name = document.forms["contact"]["name"];
    var subject = document.forms["contact"]["subject"];
    var message = document.forms["contact"]["message"];
    var error = document.getElementsByClassName("invalid");

    // If email is empty
    if (email.value == "") {
        // Show error
        error[0].className += " visible";
        // Colour field
        email.className += " error";
        // Set result to an error
        result = false;
    }

    // If name is empty
    if (name.value == "") {
        // Show error
        error[1].className += " visible";
        // Colour field
        name.className += " error";
        // Set result to an error
        result = false;
    }
    
    // If subject is empty
    if (subject.value == "") {
        // Show error
        error[2].className += " visible";
        // Colour field
        subject.className += " error";
        // Set result to an error
        result = false;
    }
    
    // If message is empty
    if (message.value == "") {
        // Show error
        error[3].className += " visible";
        // Colour field
        message.className += " error";
        // Set result to an error
        result = false;
    }

    // Return if whether error or not
    return result;
}