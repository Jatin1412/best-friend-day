const popup =
document.getElementById("popup");

const btn =
document.getElementById("yesBtn");

const close =
document.querySelector(".close");

btn.onclick = () => {

popup.style.display="flex";

    for(let i=0;i<40;i++)
        createHeart();

};

close.onclick = () => {

popup.style.display = "none";

};

window.onclick = (e) => {

if(e.target === popup){

popup.style.display = "none";

}

};

yesBtn.addEventListener("click",()=>{

    popup.style.display = "flex";

    for(let i=0;i<25;i++){

        setTimeout(()=>{
            createHeart();
        },i*100);

    }

});

function createHeart(){

    const heart =
    document.createElement("div");

    heart.className = "heart";

   const hearts = ["💖","💕","💗","💞","💘"];

heart.textContent =
hearts[Math.floor(Math.random()*hearts.length)];
    heart.style.left =
    Math.random()*90 + "vw";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },4000);
}
