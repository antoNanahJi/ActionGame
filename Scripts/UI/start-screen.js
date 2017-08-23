var canvas = document.getElementById("myCanvas");
canvas.width = 700;
canvas.height = 600;
var surface = canvas.getContext("2d");

var mouseX;
var mouseY;

var playImage = new Image();
playImage.src = "./Assets/Image/play.png";
var insImage = new Image();
insImage.src = "./Assets/Image/instructions.png";
var contImage = new Image();
contImage.src = "./Assets/Image/Controls.jpg";
var backImage = new Image();
backImage.src = "./Assets/Image/BackBtn.png";

var startAudio = document.createElement("audio");
startAudio.setAttribute("src","./Assets/Audio/Start.mp3");

var uiButton=[];
uiButton[0]= { x:200, y:160, width:288, height:120 };
uiButton[1]= { x:0, y:260, width:758, height:120 };
uiButton[2]= { x:0, y:500, width:100, height:100 };

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
	surface.drawImage(playImage, uiButton[0].x, uiButton[0].y);
	surface.drawImage(insImage, uiButton[1].x, uiButton[1].y);
	//surface.drawImage(backImage, uiButton[2].x, uiButton[2].y);
}

function checkPos(mouseEvent)
{
        mouseX = mouseEvent.pageX - this.offsetLeft;    //Get mouse position
        mouseY = mouseEvent.pageY - this.offsetTop;
}	

function checkClick(mouseEvent)
{
        //Check mouse position
		for(var i = 0; i < uiButton.length; i++)
    {
        if(mouseX > uiButton[i].x && mouseX < uiButton[i].x + uiButton[i].width)
        {
            if(mouseY > uiButton[i].y && mouseY < uiButton[i].y + uiButton[i].height)
            {
				if(i==0){
				canvas.removeEventListener("mousemove", checkPos);
				canvas.removeEventListener("mouseup", checkClick);
                clearInterval(timerId);
				startAudio.pause();
			    clear();
                initGame();
				}
				if(i==1)
				{
					clearInterval(timerId);
					clear();
					surface.drawImage(contImage, 0, 0);
					surface.drawImage(backImage, uiButton[2].x, uiButton[2].y);
				}
				if(i==2)
				{
					clear();
					timerId = setInterval(updateUI, 1000/frames);
				}
            }
        }
    }
}