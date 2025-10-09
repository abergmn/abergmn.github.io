const text = "Hi, I'm Aaron Bergmann";
const t_el = document.getElementById("typed");

let index = 0;
t_el.innerHTML = "";

function typingEffect() {
    if (index < text.length) {
        t_el.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100); // ms delay
    }
}

window.onload = typingEffect;
