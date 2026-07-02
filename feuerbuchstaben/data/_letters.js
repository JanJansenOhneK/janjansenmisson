
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!1234567890";

function update() {
    document.getElementById("img_div").innerHTML = "";
    const text = document.getElementById("text_input").value;
    for (let letter of text) {
        if (letter == "\n") {
            const img = document.createElement("br");
            document.getElementById("img_div").appendChild(img);
        } else {
            const img = document.createElement("img");
            document.getElementById("img_div").appendChild(img);
            img.width = 50;
            if (letter == " ") {
                img.src = "data/_space.jpeg";
            } else if (letter == "?") {
                img.src = "data/_questionmark.jpeg";
            } else if (letter == ".") {
                img.src = "data/_dot.jpeg";
            } else if (letter == ",") {
                img.src = "data/_comma.jpeg";
            } else if (letter == ":") {
                img.src = "data/_doubledot.jpeg";
            } else if (letter == ";") {
                img.src = "data/_commadot.jpeg";
            } else if (letters.includes(letter.toUpperCase())) {
                img.src = "data/"+letter.toUpperCase()+".jpeg";
            } else {
                img.src = "data/_notfound.jpeg";
            }
        }
    }
}

document.getElementById("knopf").onclick = update;
