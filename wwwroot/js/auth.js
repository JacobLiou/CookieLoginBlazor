/*
 * Call the Authentication API
 */

export function SignIn(email, password, redirect) {

    var url = "/api/auth/signin";
    var xhr = new XMLHttpRequest();

    // Initialization
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    // Catch response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) // 4=DONE 
        {
            console.log("Call '" + url + "'. Status " + xhr.status);
            if (redirect)
                location.replace(redirect);
        }
    };

    // Data to send
    var data = {
        email: email,
        password: password
    };

    // Call API
    xhr.send(JSON.stringify(data));
}

export function SignOut(redirect) {

    var url = "/api/auth/signout";
    var xhr = new XMLHttpRequest();

    // Initialization
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    // Catch response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) // 4=DONE 
        {
            console.log("Call '" + url + "'. Status " + xhr.status);
            if (redirect)
                location.replace(redirect);
        }
    };

    // Call API
    xhr.send();
}