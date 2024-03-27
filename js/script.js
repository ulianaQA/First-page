console.log('hello');
// console.log(document.getElementById('logo-id').innerHTML);

//This part is waiting ofr DOM to load
document.addEventListener ("DOMContentLoaded", function () {
    console.log("DOM loaded");

    let logo = document.getElementById("logo-id");

    logo.addEventListener("mouseover", function () {
        console.log("mouseover");
        logo.style.color = "pink"; });

    logo.addEventListener("mouseout", function () {
        console.log("mouseout");
        logo.style.color = "red"; });

    logo.addEventListener("click", function () {
        console.log("click");
        logo.style.backgroundColor = "blue"; 
    
        logo.innerHTML = "NEW TEXT";

        logo.style.color = "white";

        document.getElementById("logo");
    });


    document.getElementById("concactinput-id").addEventListener("submit", function (event){
        console.log("event");
        event.preventDefault();

        let emailinput = document.getElementById("emailinput");
        let errorMessage = document.getElementById("errorMessage");
    

        if (emailinput.value === ""){
            errorMessage.textContent = "Please type in the fields";
            errorMessage.style.color = "red";
        }
        else {
            errorMessage.textContent = "Email received";
            errorMessage.style.color = "green";
        }



    });

});