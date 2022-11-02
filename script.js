// get elements
const header__navbar_item_register=document.querySelector(".header__navbar-item-register");
const header__navbar_item_login=document.querySelector(".header__navbar-item-login")
const modal__account_btnChanges=document.querySelectorAll(".modal__account-btnChange")
const modal__account_register=document.querySelector(".modal__account-register")
const modal__account_login=document.querySelector(".modal__account-login")
const modal=document.querySelector(".modal")
const modal__close_btn=document.querySelector(".modal__close-btn")
const modal__container=document.querySelector(".modal__container")
// handle modal
function removeModal(){
    modal.style.display="none"
    modal__account_login.style.display="none"
    modal__account_register.style.display="none"
}
modal__close_btn.onclick=function(){
    removeModal()
}
modal.onclick=function(){
    removeModal()
}
modal__container.onclick=function(e){
    e.stopPropagation()
}

// handle modal account
header__navbar_item_register.onclick=function(){
    modal.style.display="flex"
    modal__account_register.style.display="block"
}
header__navbar_item_login.onclick=function(){
    modal.style.display="flex"
    modal__account_login.style.display="block"
}
modal__account_btnChanges.forEach(modal__account_btnChange => {
    modal__account_btnChange.onclick=function() {
        if(modal__account_btnChange.closest(".modal__account-register")){
            modal__account_register.style.display="none"
            modal__account_login.style.display="block"
        }
        else{
            modal__account_register.style.display="block"
            modal__account_login.style.display="none"
        }
    }
})
