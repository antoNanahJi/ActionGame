var canvas = document.getElementById("myCanvas");
canvas.width = 700;
canvas.height = 600;
var surface = canvas.getContext("2d");

var mouseX;
var mouseY;

var playImage = new Image();
playImage.src = "./Assets/Image/play.png";

var startAudio = document.createElement("audio");
startAudio.setAttribute("src","./Assets/Audio/Start.mp3");

var uiButton= { x:200, y:260, width:288, height:120 };



timerId = setInterval(updateUI, 1000/frames);
function updateUI()
{
	canvas.addEventListener("mousemove", checkPos);
	canvas.addEventListener("mouseup", checkClick);
	clear();
	startAudio.play();
	startAudio.loop=true;
	draw();
}

function clear(){
    surface.clearRect(0, 0, canvas.width, canvas.height);
}

function draw()
{	
	surface.drawImage(playImage, uiButton.x, uiButton.y);
}

function checkPos(mouseEvent)
{
        mouseX = mouseEvent.pageX - this.offsetLeft;    //Get mouse position
        mouseY = mouseEvent.pageY - this.offsetTop;
}	

function checkClick(mouseEvent)
{
        //Check mouse position
        if(mouseX > uiButton.x && mouseX < uiButton.x + uiButton.width)
        {
            if(mouseY > uiButton.y && mouseY < uiButton.y + uiButton.height)
            {
				canvas.removeEventListener("mousemove", checkPos);
				canvas.removeEventListener("mouseup", checkClick);
                clearInterval(timerId);
				startAudio.pause();
			    clear();
                initGame();
            }
        }
    
}