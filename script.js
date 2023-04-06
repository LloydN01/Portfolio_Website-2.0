window.addEventListener("resize", navAppear);

function mobileNav (){
    let nav = document.getElementById('top-nav-links');
    if (nav.style.display === "inline-flex") {
        nav.style.display = "none";
        document.getElementById('menu').innerHTML = "+";
    } else {
        nav.style.display = "inline-flex";
        document.getElementById('menu').innerHTML = "-";
    }
}

function navAppear(e){
    let nav = document.getElementById('top-nav-links');
    if (window.innerWidth > 768) {
        nav.style.display = "inline-flex";
    } else {
        nav.style.display = "none";
    }
}