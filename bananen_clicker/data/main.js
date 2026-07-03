
// von janjansen
// gemacht mit meinen eigenen händen
// nicht von ki

const stylesheet = document.getElementById("stylesheet").sheet
const button = document.getElementById("button")
const scoretext = document.getElementById("score")
const bpctext = document.getElementById("bpc")
const bpstext = document.getElementById("bps")
const cookietext = document.getElementById("cookie-text")
const storediv = document.getElementsByClassName("storediv")
let score = 0
let click_modifier = 1
let bps = 0

function deleteCookie() {
    document.cookie = "username=;"
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
        console.log("user ist zurück");
        score = Number(getCookie("bananen"));
        click_modifier = Number(getCookie("bpc"));
        bps = Number(getCookie("bps"));
    } else {
        console.log("neuer user");
        setCookie("username","user");
        setCookie("bananen","0");
        setCookie("bpc","1");
        setCookie("bps","0");
    }
}

checkCookie()

function loop() {
    scoretext.textContent = score.toString();
    //cookietext.textContent = "cookie: " + document.cookie.toString();
    bpctext.textContent = click_modifier.toString() + " Bananen pro Click";
    bpstext.textContent = bps.toString() + " Bananen pro Sekunde";
    setCookie("bananen",score)
    setCookie("bpc",click_modifier)
    setCookie("bps",bps)
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