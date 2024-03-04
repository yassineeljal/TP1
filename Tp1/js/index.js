const registerButton = document.querySelector(".signupbtn");
const loginButton = document.getElementById("buttonLogin");
const loginErrorMsg = document.getElementById("loginError");

// Fonction d'inscription
function register(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confPassword").value;

    if (password === confirmPassword) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Inscription réussie. Vous pouvez maintenant vous connecter.");
        document.getElementById('id01').style.display = 'none';
    } else {
        alert("Les mots de passe ne correspondent pas.");
    }
}

function login(e) {
    e.preventDefault();
    const username = document.getElementById("infoUser2").value;
    const password = document.getElementById("infoUser2").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Connexion réussie.");
        window.location.replace("accueil.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
}

document.getElementById('id01').addEventListener("submit", register);

document.getElementById('id02').addEventListener("submit", login);

