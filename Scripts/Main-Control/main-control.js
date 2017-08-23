var audio = document.createElement("audio");
audio.setAttribute("src","./Assets/Audio/song.mp3");
var gameOverImg = new Image();
gameOverImg.src = "./Assets/Image/GameOver.jpg";
var gameOverAudio = document.createElement("audio");
gameOverAudio.setAttribute("src","./Assets/Audio/EvilLaugh.mp3");
var gameWinImg = new Image();
gameWinImg.src = "./Assets/Image/GameWin.jpg";
var gameWinAudio = document.createElement("audio");
gameWinAudio.setAttribute("src","./Assets/Audio/Victory.mp3");

var score = 0;
var time=1;
var dead=false;
var win=false;
var mainUpdateInterval ;
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
   dead=true;
   audio.pause();
   gameOverAudio.play();
}

function gameWin()
{  
   clearInterval(mainUpdateInterval);
   win=true;
   audio.pause();
   gameWinAudio.play();
}

