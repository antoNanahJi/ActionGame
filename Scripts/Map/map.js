const SIZE=100;
const ROWS = 6; 
const COLS = 7;

var rock = new Image();
rock.src = "./assets/Image/rock.png";;
var empty = new Image();
empty.src = "./assets/Image/empty.png";
var map = [];

function generateMap()
{
	//Generating MAP.
	for (var row = 0; row < ROWS+1; row++) 
	{
		map[row] = []; 
		for (var col = 0; col < COLS; col++) 
		{
			var tempTile = { x:col*SIZE, y:row*SIZE, image:null,
							 aRock:false };
			tempTile.image = empty;
			map[row][col] = tempTile;			
		}
	}
}


function scrollMap()
{
	for (var row = 0; row < map.length; row++)
	{
		for (var col = 0; col < map[0].length; col++)
		{
			map[row][col].y += 5;
		}
	}
	/*for(var r = 0; r < ROWS+1; r++)
	{
		for(var c = 0; c < COLS; c++)
		{
			if (map[r][c].y >= 600)  
			{	
				var l = Math.floor(Math.random() * COLS);
				var tempTile = {x:c*SIZE, y:r*SIZE,image:null,
								aRock:false};
				switch(l%4)
				{
					case 0:
					case 1:
					case 2:
						tempTile.image = empty;	
						break;
					case 3:
						tempTile.image = rock;
						tempTile.aRock=true;
						break;			 
				}		
				map[r][c] = tempTile;
				map[r][c].y=-100;
				
			}	
		}
	}*/
	if(map[map.length-1][map[0].length-1].y >= canvas.height)
	{
		var tempRow=[];
		map.pop();
		for(var i=0;i<map[0].length;i++)
		{
			var N = Math.floor(Math.random() * COLS);
			var tempTile = {x:i*SIZE, y:-1*SIZE,image:null,
							aRock:false};
				switch(N%5)
				{
					case 0:
					case 1:
					case 2:
					case 3:
						tempTile.image = empty;	
						break;
					case 4:
						tempTile.image = rock;
						tempTile.aRock=true;
						break;			 
				}		
					tempRow.push(tempTile);
		}
		map.unshift(tempRow);
	}
}