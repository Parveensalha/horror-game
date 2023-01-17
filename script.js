score = 0;
//when dino gets cross then audio will come
cross = true;

audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");
setTimeout(() => {
  audio.play();
}, 1000);
document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    Dino = document.querySelector(".Dino");
    Dino.classList.add("animateDino");
    setTimeout(() => {
      Dino.classList.remove("animateDino");
    }, 700);
  }
  //39 is positive direction
  if (e.keyCode == 39) {
    Dino = document.querySelector(".Dino");
    DinoX = parseInt(
      window.getComputedStyle(Dino, null).getPropertyValue("left")
    );
    Dino.style.left = DinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    Dino = document.querySelector(".Dino");
    DinoX = parseInt(
      window.getComputedStyle(Dino, null).getPropertyValue("left")
    );
    Dino.style.left = DinoX - 112 + "px";
  }
};
//SET INTERVAL CALL A FUCNTION OR RETURN
setInterval(() => {
  //THESE ARE THE THREE CLASSES
  Dino = document.querySelector(".Dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");
  //DINO X POSITION AND Y POSITION // THERE IS NO PSEUDO ELEMENT SO NULL
  dx = parseInt(window.getComputedStyle(Dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(Dino, null).getPropertyValue("top"));
  //OBSTACLE X POSITION AND Y POSITION
  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );
  //calculation in maths ti find the score
  //math.abs finds the difference between dino and obstacle
  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX, offsetY)
  //reads the property //reads the coordinates X and Y
  //it reads the x and y coordinates then when dragon reaches dino then it makes sound 
  //AND is logical AND//both condition should be true



  
  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = "Game Over - Reload to Play Again";
    obstacle.classList.remove("obstacleAni");
    audiogo.play();

    setTimeout(() => {
        //audio which is ongoing and audio get stopped, it gets collapsed
      audiogo.pause();
      audio.pause();
      //1000milliseconds that is one second
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
       // convet non integer to integer and non float to float
//animation duration
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.1;
      //converting time into seconds
      obstacle.style.animationDuration = newDur + "s";
      console.log("New animation duration: ", newDur);
    }, 500);//it travels 0.5 seconds 0.5 is sub time
  }
}, 10);
// we pass out score here
//parameter is score
//function name is updatescore
function updateScore(score) {
  scoreCount.innerHTML = "Your Score: " + score;
}
