
const stylesheet = document.getElementById("stylesheet").sheet
const button = document.getElementById("button")
const scoretext = document.getElementById("score")
const bpctext = document.getElementById("bpc")
const bpstext = document.getElementById("bps")
const storediv = document.getElementsByClassName("storediv")
let score = 0
let click_modifier = 1
let bps = 0

function loop() {
    scoretext.textContent = score
    bpctext.textContent = click_modifier.toString() + " Bananen pro Click"
    bpstext.textContent = bps.toString() + " Bananen pro Sekunde"
}
function clicked() {
    score += click_modifier
}
function bpsfunc() {
    score += bps
}

setInterval(loop,1)
setInterval(bpsfunc,1000)
button.onclick = clicked

document.getElementById("s1").onclick = function() {
    if (score >= 30) {
        score -= 30
        click_modifier += 1
    }
}
document.getElementById("s2").onclick = function() {
    if (score >= 10) {
        score -= 10
        bps += 1
    }
}
document.getElementById("s3").onclick = function() {
    if (score >= 100) {
        score -= 100
        stylesheet.cssRules[0].style.backgroundImage = "url('data/bananen_bg.webp')"
        document.getElementById("s3").remove()
    }
}
document.getElementById("s4").onclick = function() {
    if (score >= 300) {
        score -= 300
        button.firstChild.src = "data/regenbogenbanane.png"
        document.getElementById("s4").remove()
    }
}