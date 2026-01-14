function registerUser(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (pass !== confirm) {
        alert("Password mismatch");
        return;
    }

    let user = {
        name: document.getElementById("name").value,
        dob: document.getElementById("dob").value,
        email: email,
        password: pass,
        mobile: document.getElementById("mobile").value
    };

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Account Created Successfully");
    window.location.href = "login.html";
}

function loginUser(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    let stored = JSON.parse(localStorage.getItem("userData"));

    if (!stored || email !== stored.email || pass !== stored.password) {
        document.getElementById("error").innerText = "Invalid Email or Password";
        return;
    }

    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
}

function checkLogin() {
    let login = localStorage.getItem("loggedIn");
    if (login) {
        alert("User Logged In");
    } else {
        window.location.href = "login.html";
    }
}
