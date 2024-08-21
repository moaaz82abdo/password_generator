const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container")

btnEl.addEventListener("click",()=>{
    createPassword();
});
copyEl.addEventListener("click",()=>{
    copyPassword();
    if(inputEl.value){
        alertEl.classList.remove("active");
        setTimeout(()=>{
            alertEl.classList.add("active")
        }, 2000)
    }
  
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 8;
    let password = "";
    for (var i =0; i < passwordLength ; i++ ) {
          const randomNum = Math.floor (Math.random() * chars.length);
          password += chars.substring(randomNum, randomNum+1);
    }
    inputEl.value = password;
    alertEl.innerHTML = password + " copied!";

};

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);

}