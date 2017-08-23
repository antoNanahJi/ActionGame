//Drawing on Canvas
function render()
{
	surface.clearRect(0, 0, canvas.width, canvas.height); 
	for (var row = 0; row < map.length; row++)
	{
		for (var col = 0; col < map[0].length; col++)
		{
			
			if (map[row][col].image != null)
				surface.drawImage(map[row][col].image,
								  map[row][col].x,
								  map[row][col].y);	
				
		}
	}	
	for (var i = 0; i < alien.length; i++)
	{
		if (alien[i].alive == true)
		surface.drawImage(alien[i].img, alien[i].x, alien[i].y);
	}
	for (i = 0; i < bullet.length; i++)
	{
		surface.drawImage(bullet[i].image,bullet[i].x, bullet[i].y, 20, 20);
	}
	
	
	surface.drawImage(player.image,player.x-SIZE/2,player.y-SIZE/2);	
			surface.font = "25px Arial";
			surface.fillStyle = "Red";
			surface.fillText("Score: " + score , 0 , 25 );
			surface.font = "25px Arial";
			surface.fillStyle = "Yellow";
			surface.fillText("Timer: " + time , 550 , 25 );
			
	if(dead==true)surface.drawImage(gameOverImg,0,0,700, 600);
	if(win==true)surface.drawImage(gameWinImg,0,0,700, 600);
}
