var alien = [];
var numOfAliens = 3;
var alien1 = new Image(); 
alien1.src = "./Assets/Image/alien1.png";
var alien2 = new Image();
alien2.src = "./Assets/Image/alien2.png";
var alien3 = new Image();
alien3.src = "./Assets/Image/alien3.png";



function generateAliens()
{
	//Generating ALIENS.
	for (var i = 0; i< numOfAliens; i++)
	{ 
		var tile = {};
		tile.x = (i+1 )*COLS*SIZE ;
		tile.y = Math.floor(Math.random()*300+1); 
		tile.alive = true;
		switch(i)
		{
			case i=0:
				tile.img = alien1;
				break;
			case i=1:
				tile.img = alien2;
				break;
			case i=2:
				tile.img = alien3;
				break;				 
		}
		alien[i] = tile;		
	}
}

function moveAliens()
{
	for(var i = 0; i < alien.length; i++)
	{ 
		alien[i].x -= 3;		
	}
	for(var s = 0; s < alien.length; s++)
	{
		if(alien[s].x <=  -100)
		{	
			alien[s].alive=true;
			alien[s].x=alien.length*COLS*SIZE-100 ; 
			alien[s].y= Math.floor(Math.random()*300+1);
		}	
	}
}