const popup =
document.getElementById("popup");

const btn =
document.getElementById("yesBtn");

const close =
document.querySelector(".close");

btn.onclick = () => {

    popup.style.display = "flex";

    let count = 0;

    const shower = setInterval(() => {

        createHeart();

        count++;

        if(count >= 12){
            clearInterval(shower);
        }

    }, 250);

};

close.onclick = () => {

    popup.style.display = "none";

};

window.onclick = (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

};

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className = "heart";

    const hearts = [
        "💖",
        "💕",
        "💗",
        "💞",
        "💘"
    ];

    heart.textContent =
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
    Math.random()*90 + "vw";

    heart.style.fontSize =
    (25 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);

}
