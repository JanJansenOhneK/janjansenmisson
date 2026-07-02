
const easter_eggs = [
    "max",
    "maxi",
    "banane",
    "banana",
    "eierkopf",
    "manface",
    ""
]
const easter_egg_src = [
    "data/max.png",
    "data/max.png",
    "data/banane.png",
    "data/banane.png",
    "data/eierkopf.png",
    "data/manface.png",
    "data/nichts.png"
]

function getRandomInt(min, max) {
    // ty to some random guy on stack overflow lol
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw_letters(text) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!1234567890";
    document.getElementById("img_div").innerHTML = "";
    for (let letter of text) {
        if (letter == "\n") {
            const img = document.createElement("br");
            document.getElementById("img_div").appendChild(img);
        } else {
            const img = document.createElement("img");
            document.getElementById("img_div").appendChild(img);
            img.width = 50;
            if (letter == " ") {
                img.src = "../feuerbuchstaben/data/_space.jpeg";
            } else if (letter == "?") {
                img.src = "../feuerbuchstaben/data/_questionmark.jpeg";
            } else if (letter == ".") {
                img.src = "../feuerbuchstaben/data/_dot.jpeg";
            } else if (letter == ",") {
                img.src = "../feuerbuchstaben/data/_comma.jpeg";
            } else if (letter == ":") {
                img.src = "../feuerbuchstaben/data/_doubledot.jpeg";
            } else if (letter == ";") {
                img.src = "../feuerbuchstaben/data/_commadot.jpeg";
            } else if (letters.includes(letter.toUpperCase())) {
                img.src = "../feuerbuchstaben/data/"+letter.toUpperCase()+".jpeg";
            } else {
                img.src = "../feuerbuchstaben/data/_notfound.jpeg";
            }
        }
    }
}

document.getElementById("button").onclick = function() {
    draw_letters("EVIL "+document.getElementById("text_input").value.toUpperCase());
    if (easter_eggs.includes(document.getElementById("text_input").value.toLowerCase())) {
        document.getElementById("evil_img").src = easter_egg_src[easter_eggs.indexOf(document.getElementById("text_input").value.toLowerCase())]
    } else {
        document.getElementById("evil_img").src = "data/evil"+getRandomInt(1,3).toString()+".png"
    }
    document.getElementById("evil_img").alt = document.getElementById("evil_img").src
}