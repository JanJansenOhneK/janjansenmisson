
const bob = document.getElementById("bob")
const bobd = document.getElementById("bob_dialouge")

function bob_say(message) {
    bobd.textContent = "Bob: " + message
}

function bob_run() {
    bob.src = "data/bob_idle.png"
    bob_say("Moinsen!")
}