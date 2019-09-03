
let form = document.getElementById("form");
form.addEventListener("submit", validate);

function validate(e){
    e.preventDefault();
    //alert(this.title.value.length)

    if(this.name.value.length < 4){
        alert("Name is too short");
        this.name.style.border = "2px solid red";
    }else{
        this.name.style.border = "";
    }

    if(this.message.value.length < 20){
        alert("Message is too short");
        this.message.style.border = "2px solid red";
    }else{
        this.message.style.border = "";
    }

    if(!this.email.value.includes("@") || !this.email.value.includes(".")){
        alert("Invalid email format");
        this.email.style.border = "2px solid red";
        
    }else{
        this.email.style.border = "";
    }
}