var overlay = document.getElementById("overlay");
var closeicon = document.getElementById("closeicon");
var menu = document.getElementById("menu");
var modal = document.getElementById("modal");
var logo = document.getElementById("logo");
var close1 = document.getElementById("close1");

menu.addEventListener("click", function(){
    overlay.style.display = "flex"
    
})
closeicon.addEventListener("click", function(){
    overlay.style.display = "none"
})

logo.addEventListener("click", function(){
    modal.style.display = "flex"
})

close1.addEventListener("click", function(){
    modal.style.display = "none"
})


function validate() {
    var name1 = document.getElementById("name1")
    var email = document.getElementById("email")
    var subject = document.getElementById("subject")
    var message = document.getElementById("message")
    var error = document.getElementById("error")

    if(name1.value == "") {
        error.innerHTML = "enter your name"
        return false
    }else if(email.value == "") {
        error.innerHTML = "enter your email"
        return false
    }else if(email.value.includes("@") == false){
        error.innerHTML = "You must include @"
        return false
    }
    else if(subject.value == ""){
        error.innerHTML = "Please enter your subject"
        return false
    }else if(message.value == ""){
        error.innerHTML = "Please enter your message"
        return false
    }
}


AOS.init();









