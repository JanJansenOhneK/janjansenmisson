
/*
document.getElementById("button").onclick = function() {
    fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(data => fetch("http://ip-api.com/json/"+data.ip)
            .then(res => res.json())
            .then(data => window.open("https://www.google.com/maps/place/"+data.city,"","width=1000,height=500"))
            
        )
}
*/

var fetch
var json

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("button").onclick = async function() {
    fetch = await fetch("https://api.ipify.org?format=json")
        .then(res => res.json())
        .then(data => fetch("http://ip-api.com/json/"+data.ip)
            .then(res => res.json())
            .then(data => json = data)
        )
    await json
    console.log(json)

    window.open("https://www.google.com/maps/place/"+json.city,"1","width=1000,height=500")
    window.open("https://www.google.com/search?q="+json.query,"_blank","width=1000,height=500")

    document.getElementById("button").remove()
}