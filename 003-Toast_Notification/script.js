const btn = document.getElementById("btn");
const container = document.querySelector(".container");

btn.addEventListener("click", function(){
   createElement();
})

function createElement(){
   const notif = document.createElement("div");
   notif.classList.add("toast");

   notif.innerText = "This is Toast Notification!"
   container.appendChild(notif);

   setTimeout(() =>{
      notif.remove();
   }, 3000);
}