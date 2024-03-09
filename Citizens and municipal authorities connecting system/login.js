const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => {
    home.classList.toggle("show");
});

pwShowHide.forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.preventDefault();
        let getPwInput = icon.parentElement.querySelector("input");
        getPwInput.type = getPwInput.type === "password" ? "text" : "password";
        icon.classList.toggle("uil-eye-slash");
        icon.classList.toggle("uil-eye");
    });
});

// Event delegation for signup and login buttons
document.addEventListener("click", (e) => {
    if (e.target === signupBtn || e.target === loginBtn) {
        e.preventDefault();
        formContainer.classList.add("active");
    }
});

// Close the form when the close icon is clicked
formCloseBtn.addEventListener("click", () => {
    formContainer.classList.remove("active");
});
