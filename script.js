const cards = document.querySelectorAll(".card");

let current = 0;

function nextCard(){

cards[current].classList.remove("active");

current++;

if(current < cards.length){

cards[current].classList.add("active");

}

}

function celebrate(){

confetti({
particleCount:250,
spread:180,
origin:{y:0.6}
});

setTimeout(()=>{

alert("❤️ Happy Girlfriend's Day My Teekhi Kachori 🌶️❤️\n\nLove You Forever ❤️");

},800);

}

const hearts = document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,300);