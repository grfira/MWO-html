function menu(name){
    let main= document.getElementsByClassName('main')
    for(let m of main){
        m.style.display = "none";
    }
    let elem = document.getElementById(name);
    elem.style.display = "block"
}
menu("article_history")

let button_history = document.getElementById("nav_history")
button_history.addEventListener('click', () => {menu('article_history')})

let button_tech_data = document.getElementById("nav_tech-data")
button_tech_data.addEventListener('click', () => {menu('article_tech_data')})

let button_gallery = document.getElementById("nav_gallery")
button_gallery.addEventListener("click", () => {menu("article_gallery")})

let button_form = document.getElementById("nav_form")
button_form.addEventListener("click", () => {menu("article_form")})