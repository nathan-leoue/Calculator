function rab() {
    document.getElementById("zone_affichage").value = "";
}

function calcul() {
    try {
        let résultat = eval(document.getElementById("zone_affichage").value);
        document.getElementById("zone_affichage").value = résultat;
    } catch (error) {
        document.getElementById("zone_affichage").value = "Une erreur est survenue";
    }
}

function init() {
    document.getElementById("zone_affichage").value = "";
    let btn_simple = document.getElementsByClassName("bouton_simple");
    for (let i=0; i<btn_simple.length; i++) {
        btn_simple[i].setAttribute("onclick", "affiche(this)");
    }
}

function affiche(button) {
    let afficher_btn = document.getElementById("zone_affichage");
    afficher_btn.value += button.value;
}

function plusmoins() {
    let début = document.getElementById("zone_affichage").value;
    if (début.startsWith("-")) {
        let zone = document.getElementById("zone_affichage");
        zone.value = zone.value.slice(1);
    } else {
        let zone = document.getElementById("zone_affichage");
        zone.value = "-" + zone.value;
    }
}

let memory = ""
function range_memory() {
    memory = document.getElementById("zone_affichage").value;
}

function affiche_memory() {
    if (memory == "") {
        // rien faire
    } else {
        console.log(memory);
        let zone = document.getElementById("zone_affichage");
        zone.value += memory;
    }
}

function raz_memory() {
    memory = ""
}

let édition = false

if (édition === false) {
    let zone = document.getElementById("E");
    zone.setAttribute("onclick", "mode_édition()");
}

function mode_édition() {
    édition = true
    document.getElementById("E").style.color = "#6176ddff";
    let zone = document.getElementById("E");
    let btn_libre = document.getElementsByClassName("bouton_libre")
    for (let i=0; i<btn_libre.length; i++) {
        btn_libre[i].setAttribute("ondblclick", "edit(this)");
    }
    for (let i=0; i<btn_libre.length; i++) {
        btn_libre[i].removeAttribute("onclick", "affiche(this)");
    }
    zone.setAttribute("onclick", "mode_calcul()");
}

function mode_calcul() {
    édition = false
    document.getElementById("E").style.color = "#f2f2f2";
    let zone = document.getElementById("E");
    let btn_libre = document.getElementsByClassName("bouton_libre")
    for (let i=0; i<btn_libre.length; i++) {
        btn_libre[i].removeAttribute("ondblclick", "edit(this)");
    }
    for (let i=0; i<btn_libre.length; i++) {
        btn_libre[i].setAttribute("onclick", "affiche(this)");
        btn_libre[i].setAttribute("type", "button");
    }
    zone.setAttribute("onclick", "mode_édition()");
}

function edit(btn_libre) {
    btn_libre.setAttribute("type", "text");
    btn_libre.removeAttribute("ondblclick");
    btn_libre.setAttribute("ondblclick", "fix(this)");
}

function fix(btn_fix) {
    btn_fix.setAttribute("type", "button");
    btn_fix.removeAttribute("ondblclick");
    btn_fix.setAttribute("ondblclick", "edit(this)");
}

display_down();

function display_up() {
    let dp = document.getElementById("ligne_affichage");
    let calc = document.getElementById("calc");
    calc.appendChild(dp);
    dp.setAttribute("ondblclick", "display_down()")
}

function display_down() {
    let dp = document.getElementById("ligne_affichage");
    let calc = document.getElementById("calc");
    let premier_elem = document.getElementById("1");
    calc.insertBefore(dp, premier_elem);
    dp.setAttribute("ondblclick", "display_up()")
}