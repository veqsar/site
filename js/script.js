const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  const canvas2 = document.getElementById('myCanvas2');
  const ctx2 = canvas2.getContext('2d');
  let game = 0;
  let winerF;
  let winerT;
  let userScore = 0;
  let computerScore = 0;
  let random;
  const image = new Image();
  image.src = "img/Cards1.png";
  const image1 = new Image();
  image.onload = () => {
    ctx.drawImage(image1, 1360, 226, 2268, 2835, 0, 0, 195, 295);
    ctx2.drawImage(image1, 1360, 226, 2268, 2835, 0, 0, 195, 295);
  };
  image.onerror = () => {
    console.error("Failed to load the image. Check the file path.");
  };
  const userNameElem = document.querySelectorAll(".text")[0];
  let userName = prompt("Введіть ім'я");
  userNameElem.textContent = userName ? userName : userName = "User";
  const userScoreElem = document.querySelectorAll(".score")[0];
  const computerScoreElem = document.querySelectorAll(".score")[1];
function getRandomNumber12() {
   random = Math.floor(Math.random() * 13);
};
 function getRandomNumber4() {
  return Math.floor(Math.random() * 4);
};
function WinerValue(i) {
  if (i === 1){
    if(random === 0){
    winerF = 14;
  }else{
    winerF = random+1;
  }
  userScore += winerF;
}else{
  if(random === 0){
    winerT = 14;
  }else{
    winerT = random+1;
  }
  computerScore += winerT;
  game = game+1;
}};
  document.addEventListener("DOMContentLoaded",function () {
    const generateButton = document.querySelectorAll(".button")[0];
    const generateButton2 = document.querySelectorAll(".button")[1];
    function updateGame() {
      ctx.clearRect(0, 0, 195, 295);
      ctx2.clearRect(0, 0, 195, 295);
      getRandomNumber12();
      ctx.drawImage(image, (88 + 1147 * random), (88 + 1676 * getRandomNumber4()), 1059, 1588, 0, 0, 195, 295);
      WinerValue(1);
      userScoreElem.textContent = userScore;
      getRandomNumber12();
       ctx2.drawImage(image, (88 + 1147 * random), (88 + 1676 * getRandomNumber4()), 1059, 1588, 0, 0, 195, 295);
       WinerValue(2);
      computerScoreElem.textContent = computerScore;
     
     
     
      if(game === 3){
        setTimeout(function() {
          if (winerF > winerT) {
              alert(userName + " переміг!");
          } else {
              alert("Комп'ютер переміг!");
          }
          resetGame(); 
      }, 300);}
  }
  function resetGame() {
    game = 0;
    userName = prompt("Введіть ім'я");
    userNameElem.textContent = userName ? userName : userName = "User";
    userScore = 0;
    computerScore = 0;
    userScoreElem.textContent = userScore;
    computerScoreElem.textContent = computerScore;
    ctx.drawImage(image1, 1360, 226, 2268, 2835, 0, 0, 195, 295);
    ctx2.drawImage(image1, 1360, 226, 2268, 2835, 0, 0, 195, 295);
  }
    generateButton.addEventListener("click", updateGame);
});



