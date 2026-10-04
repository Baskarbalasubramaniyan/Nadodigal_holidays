// NavBar Background Change

window.addEventListener("scroll",function()
{
    let navbar = document.getElementById("navbar");

    if(window.scrollY > 30){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled")
    }
});



