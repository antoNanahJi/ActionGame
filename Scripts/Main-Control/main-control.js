var audio = document.createElement("audio");
audio.setAttribute("src","./Assets/Audio/song.mp3");

var gameOverAudio = document.createElement("audio");
gameOverAudio.setAttribute("src","./Assets/Audio/EvilLaugh.mp3");
var gameWinImg = new Image();
gameWinImg.src = "./Assets/Image/GameWin.jpg";
var gameWinAudio = document.createElement("audio");
gameWinAudio.setAttribute("src","./Assets/Audio/Victory.mp3");

var score = 0;
var time=1;
var mainUpdateInterval ;
var endInt;

//initGame();

function initGame()
{
	generateMap();
	generateAliens();
	audio.play();
	audio.loop=true;
	
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);
	mainUpdateInterval=setInterval(update, 33.34);
}
	
function update()
{
	time++;
	if(score==100)gameWin();
	moveAliens();	
	movePlayer();
	moveBullet();
	scrollMap();
	collisionCheck();
	render();	
}


function gameEnd()
{  
   clearInterval(mainUpdateInterval);
   clearInterval(timerId);
   gameOverImg.src = "./Assets/Image/GameOver.jpg";
   endInt=setInterval(updateEndUI, 1000/frames);
   audio.pause();
   startAudio.play();
   startAudio.loop=true;
   time=0;
   score=0;
   
}

function gameWin()
{  
   clearInterval(mainUpdateInterval);
   clearInterval(timerId);
   gameOverImg.src="./Assets/Image/GameWin.jpg";
   endInt=setInterval(updateEndUI, 1000/frames);
   startAudio.pause();
   time=0;
   score=0;
   audio.pause();
   gameWinAudio.play();
   gameWinAudio.loop=true;
}

