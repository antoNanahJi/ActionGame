var restartImage = new Image();
restartImage.src = "./Assets/Image/restartBtn.png";
var quitImage = new Image();
quitImage.src = "./Assets/Image/quitBtn.png";
var gameOverImg = new Image();


var endUiBtn=[];
endUiBtn[0]= { x:150, y:400, width:100, height:100 };
endUiBtn[1]= { x:450, y:400, width:100, height:100 };


function updateEndUI()
{
	canvas.addEventListener("mousemove", checkPos2);
	canvas.addEventListener("mouseup", checkClick2);
	clear();
	endDraw();
}

function endDraw()
{
	surface.drawImage(gameOverImg,0,0,700, 600);
	surface.drawImage(restartImage, endUiBtn[0].x, endUiBtn[0].y);
	surface.drawImage(quitImage, endUiBtn[1].x, endUiBtn[1].y);

}
function checkPos2(mouseEvent)
{
        mouseX = mouseEvent.pageX - this.offsetLeft;    //Get mouse position
        mouseY = mouseEvent.pageY - this.offsetTop;
}	

function checkClick2(mouseEvent)
{
        //Check mouse position
		for(var i = 0; i < endUiBtn.length; i++)
    {
        if(mouseX > endUiBtn[i].x && mouseX < endUiBtn[i].x + endUiBtn[i].width)
        {
            if(mouseY > endUiBtn[i].y && mouseY < endUiBtn[i].y + endUiBtn[i].height)
            {
				if(i==0){
				canvas.removeEventListener("mousemove", checkPos);
				canvas.removeEventListener("mouseup", checkClick);
                clearInterval(endInt);
				startAudio.pause();
				gameWinAudio.pause();
			    clear();
                initGame();
				}
				if(i==1)
				{
					clearInterval(endInt);
					open(location, '_self').close();
				}
				
            }
        }
    }
}