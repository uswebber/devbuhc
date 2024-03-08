document.querySelector(".regiscoin").addEventListener("click",function(){
    document.querySelector("#popup").classList.add("active");
});
document.querySelector("#cancelBtn").addEventListener("click",function(){
    document.querySelector("#popup").classList.remove("active");
});