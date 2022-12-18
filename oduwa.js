const nav = document.querySelector(".get");
const menu_btn = document.getElementById("wrap");
const container = document.querySelector("    div-container")
const about = document.querySelector(".hw")
const navbar = document.querySelector("nav ul")
const hi = document.querySelector(".hi")
const html = document.getElementById("html")
const welcome = document.querySelector(".welcome")
const submit = document.getElementById("submit")
const output = document.getElementById("output")
const name = document.getElementById("name")



// event listeners
menu_btn.addEventListener("click",
function (){
    if(nav.style.right == "-100%") {
        nav.style.right ="0" ;
        hi.style.display ="none";
        welcome.style.display = "none";
    } 
    else {
        nav.style.right ="-100%"  
        hi.style.display ="grid";
        welcome.style.display = "grid";
        navbar.style.display ="inline-block"
        
    } 
})
navbar.addEventListener("click",
function (){
    navbar.style.display ="none"
    hi.style.display ="grid";
    welcome.style.display = "grid";
     
}
)




window.addEventListener("scroll", 
function () {
    if (this.window.innerHeight == 1799){
        container.div.style.marginTop = "200px "
    }
}
)
console.log(window.innerHeight)
console.log(about.getBoundingClientRect().bottom)
