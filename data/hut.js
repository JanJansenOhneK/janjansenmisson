var hut = document.getElementById("hut")
var hut_img = document.getElementById("hut_img")

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function script() {
    hut_img.src = "data/hueterle_unten.jpeg";
    const sound = new Audio("data/komischer_hut.mp3")
    sound.play();
    await sleep(2000);
    hut_img.src = "data/hueterle.jpeg";
}


hut.onclick = function() {
    script();
}