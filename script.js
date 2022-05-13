
let btnEl = document.getElementById("buttonRequest");
let nameEl = document.getElementById("nameRequest");
let emailEl = document.getElementById("emailRequest");
let telEl = document.getElementById("telRequest");


btnEl.addEventListener("click", function () {
    nameEl.classList.remove("error");
    nameEl.classList.remove("success");
    emailEl.classList.remove("error");
    emailEl.classList.remove("success");
    telEl.classList.remove("error");
    telEl.classList.remove("success");
})

nameEl.addEventListener("blur", function(){

    if( !nameEl.value ) {
		nameEl.classList.add("error");
        return;
	} else {
		nameEl.classList.add("success");
	}
})
emailEl.addEventListener("blur", function(){
    if( !emailEl.value ) {
		emailEl.classList.add("error");
	} else {
		emailEl.classList.add("success");
	}
})
telEl.addEventListener("blur", function(){
    if( !telEl.value ) {
		telEl.classList.add("error");
	} else {
		telEl.classList.add("success");
	}
})

