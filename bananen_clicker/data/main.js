
// von janjansen
// gemacht mit meinen eigenen händen
// nicht von ki

const stylesheet = document.getElementById("stylesheet").sheet
const button = document.getElementById("button")
const scoretext = document.getElementById("data.bananen")
const bpctext = document.getElementById("bpc")
const bpstext = document.getElementById("data.bps")
const cookietext = document.getElementById("cookie-text")
const storediv = document.getElementsByClassName("storediv")

let data = {
    bananen: 0,
    bpc: 1,
    bps: 0
}

console.log(data.bpc)

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
        data.bananen = Number(getCookie("bananen"));
        data.bpc = Number(getCookie("bpc"));
        data.bps = Number(getCookie("bps"));
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
    data.bananentext.textContent = data.bananen.toString();
    //cookietext.textContent = "cookie: " + document.cookie.toString();
    bpctext.textContent = data.bpc.toString() + " Bananen pro Click";
    data.bpstext.textContent = data.bps.toString() + " Bananen pro Sekunde";
    setCookie("bananen",data.bananen.toString())
    setCookie("bpc",data.bpc.toString())
    setCookie("bps",data.bps.toString())
}
function clicked() {
    data.bananen += data.bpc
}
function bpsfunc() {
    data.bananen += data.bps
}

setInterval(loop,1)
setInterval(data.bpsfunc,1000)
button.onclick = clicked

document.getElementById("s1").onclick = function() {
    if (data.bananen >= 30) {
        data.bananen -= 30
        data.bpc += 1
    }
}
document.getElementById("s2").onclick = function() {
    if (data.bananen >= 10) {
        data.bananen -= 10
        data.bps += 1
    }
}
document.getElementById("s3").onclick = function() {
    if (data.bananen >= 100) {
        data.bananen -= 100
        stylesheet.cssRules[0].style.backgroundImage = "url('data/bananen_bg.webp')"
        document.getElementById("s3").remove()
    }
}
document.getElementById("s4").onclick = function() {
    if (data.bananen >= 300) {
        data.bananen -= 300
        button.firstChild.src = "data/regenbogenbanane.png"
        document.getElementById("s4").remove()
    }
}