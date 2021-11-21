const colors = ["green" , "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
   //get random numbr btwn 0 - 3
   //const randomNumber = 2;
   const randomNumber = getRandomNumber()
  
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);// asla 1 olmiyacak math randomdan dolayi 0-3 arasi degiscek
}

//buraya kadar const ta yazdigimiz degerler cagiriliyor...