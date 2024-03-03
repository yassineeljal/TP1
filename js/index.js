const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("buttonLogin");
const loginErrorMsg = document.getElementById("loginError");
const USERNAME = document.getElementById("username");
const PSW = document.getElementById("password");
const CPASSWORD = document.getElementById("confPassword");






function subLocalStorage(){
    if (PSW === CPASSWORD){
        localStorage.setItem("psw", PSW)
    }
    else{
        alert("Mot de passe incorrect")
    }

    localStorage.setItem("username", USERNAME)

    window.location.replace("accueil.html")
}


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.value;
    const password = loginForm.value;

    if (username === "salut" && password === "salut") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})



function userInfo (){
    document.location='accueil.html';
  }
  

  // ////////////////// Obtenez le modal d'inscription ///////////////////////
var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
window.onclick = function(event) {
if (event.target == modal) {
 modal.style.display = "none";
}
}


// ///////////////// Obtenez le modal de connexion //////////////////////////
var modal2 = document.getElementById('id02');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
window.onclick = function(event) {
if (event.target == modal2) {
}
}
  
  
