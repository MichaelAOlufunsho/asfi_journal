const loginForm = document.getElementById("loginForm")


loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "../../dashboard/submitNewManuscript.html"
})