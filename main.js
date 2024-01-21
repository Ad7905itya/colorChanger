let colorInput = document.querySelector("input");
let btn = document.querySelector("#btn");


btn.addEventListener("click",()=>{
   document.getElementById("board").style.background = colorInput.value;
});

colorInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("board").style.background = colorInput.value;
    }
});
