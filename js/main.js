
window.onload = function(){ 

    //Dark background for mobile

    foggingOn = () => document.querySelector('.fogging-container').classList.add('active');
    foggingOff = () => document.querySelector('.fogging-container').classList.remove('active');  
 
    //Open "Sign Up" modal-window

    let modal = document.getElementById("registrationModal");
    let btn = document.getElementById("registrationBtn");
    let clouseBtn = document.getElementsByClassName("clouse-btn")[0];

    btn.onclick = function() {
        foggingOn();
        modal.style.display = "flex";
    };

    clouseBtn.onclick = function() {
        foggingOff();
        modal.style.display = "none";
    };

    //Open "Login In" modal-window

    let loginModal = document.getElementById("loginModal");
    let loginBtn = document.getElementById("loginBtn");
    let loginClouseBtn = document.getElementsByClassName("loginClouseBtn")[0];

    loginBtn.onclick = function() {
        foggingOn();
        loginModal.style.display = "flex";
    };

    loginClouseBtn.onclick = function() {
        foggingOff();
        loginModal.style.display = "none";
    };

};
 
    

