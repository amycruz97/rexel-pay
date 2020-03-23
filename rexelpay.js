function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')

    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);




function currency() {
    // document.getElementById("select").style.display = "block"

    var x = document.getElementById("select");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }



}

function currencies() {
    // document.getElementById("select").style.display = "block"

    var i = document.getElementById("selects");
    if (i.style.display == "none") {
        i.style.display = "block";
    } else {
        i.style.display = "none";
    }



}


function myFunc(e) {

    var simple = e.getAttribute('data-curid');

    if (simple == 1) {
        document.getElementById("select-img").src = "./image/nigeria.png";
        document.getElementById("select-currency").innerHTML = "NGN";


    } else if (simple == 2) {
        document.getElementById("select-img").src = "./image/usa.png";
        document.getElementById("select-currency").innerHTML = "USD";


    } else if (simple == 3) {
        document.getElementById("select-img").src = "./image/bristish flag.png";
        document.getElementById("select-img").setAttribute("style", "width:37px; height:50x; padding-right:20px;")
        document.getElementById("select-currency").innerHTML = "GBP";

    } else if (simple == 4) {
        document.getElementById("select-img").src = "./image/ghana.jpeg";
        document.getElementById("select-img").setAttribute("style", "width:37px; height:50x;")
        document.getElementById("select-currency").innerHTML = "GHS";
    } else if (simple == 5) {
        document.getElementById("select-img").src = "./image/canada.jpeg";
        document.getElementById("select-img").setAttribute("style", "width:37px; height:50x;")
        document.getElementById("select-currency").innerHTML = "CAD";
    }


    document.getElementById("select").style.display = "none"
    console.log(e.getAttribute('data-curid'));



}


function myFunct(e) {

    var simples = e.getAttribute('data-curid');

    if (simples == 1) {
        document.getElementById("select-imgs").src = "./image/nigeria.png";
        document.getElementById("select-currencies").innerHTML = "NGN";


    } else if (simples == 2) {
        document.getElementById("select-imgs").src = "./image/usa.png";
        document.getElementById("select-currencies").innerHTML = "USD";


    } else if (simples == 3) {
        document.getElementById("select-imgs").src = "./image/bristish flag.png";
        document.getElementById("select-imgs").setAttribute("style", "width:37px; height:50x; padding-right:20px;")
        document.getElementById("select-currencies").innerHTML = "GBP";

    } else if (simples == 4) {
        document.getElementById("select-imgs").src = "./image/ghana.jpeg";
        document.getElementById("select-imgs").setAttribute("style", "width:37px; height:50x;")
        document.getElementById("select-currencies").innerHTML = "GHS";
    } else if (simples == 5) {
        document.getElementById("select-imgs").src = "./image/canada.jpeg";
        document.getElementById("select-imgs").setAttribute("style", "width:37px; height:50x;")
        document.getElementById("select-currencies").innerHTML = "CAD";
    }


    document.getElementById("select").style.display = "none"
    console.log(e.getAttribute('data-curid'));



}