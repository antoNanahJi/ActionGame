var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var firePressed = false;

var ballIsMoving = false;

var laser=document.createElement("audio");
laser.setAttribute("src","./Assets/Audio/Boss_Laser.wav");

var pImage1 = new Image();
pImage1.src = "./Assets/Image/spaceship.png";
var redBall = new Image();
redBall.src = "./Assets/Image/redBall.png";
		
var bullet = [];


var player = { x:SIZE*3, y:550, speed:10,
			   width:100, height:100, image:pImage1};


		
			
function onKeyDown(event)
{
	switch(event.keyCode)
	{
		case 37: 
				if ( leftPressed == false )
					leftPressed = true;
				break;
		case 39: 
				if ( rightPressed == false )
					rightPressed = true;
				break;
		case 38: 
				if ( upPressed == false )
					upPressed = true;
				break;
		case 40: 
				if ( downPressed == false )
				downPressed = true;
				break;
		case 32:
				if ( firePressed == false )
				firePressed = true;
				laser.play();
				fire();
				 break;
		default:
				console.log("Unhandled key.");
				break;
	}
}

function onKeyUp(event)
{
	switch(event.keyCode)
	{
		case 37: 
				leftPressed = false;
				break;
		case 39: 
				rightPressed = false;
				break;
		case 38: 
				upPressed = false;
				break;
		case 40: 
				downPressed = false;
				break;
		case 32:
				firePressed=false;
				break;
		default:
				console.log("Unhandled key.");
				break;
	}
}


function movePlayer()
{
	if ( leftPressed == true && player.x > SIZE/2 ) 
	{
		player.x -= player.speed;
	}
	if ( rightPressed == true && player.x < canvas.width - SIZE/2 )
	{
		player.x += player.speed;
	}
	if ( upPressed == true && player.y > SIZE/2)
	{
		player.y -= player.speed;
	}
	if ( downPressed == true && player.y < canvas.height - SIZE/2)
	{
		player.y += player.speed;
	}
}


function collisionCheck()
{	
	for(var r = 0; r < map.length; r++)
	{
		for(var c = 0; c < map[0].length; c++)
		{
			if(map[r][c].aRock===true)
			{	
				//Collision between ROCKS & PLAYER.
				if ((player.x + player.width > map[r][c].x+65 || player.x >= map[r][c].x+65   ) && (player.x < map[r][c].x+SIZE+30))
				{
					if ((player.y + player.height > map[r][c].y+65) && (player.y < map[r][c].y + SIZE-20))
					{
						//audio.pause();
						//clearInterval(idInt);	
						//alert("O My God, I crashed...");
						//console.log(c);
						gameEnd();
					}			
				}
				//Collision between ROCKS & BALL.
				for (i = 0; i < bullet.length; i++)
				{
					if( (bullet[i].x+bullet[i].width >= map[r][c].x+15 || bullet[i].x >= map[r][c].x+15)  &&					
						bullet[i].x <= map[r][c].x+SIZE-25)
					{
						if(bullet[i].y +bullet[i].height >= map[r][c].y+25 && 
							bullet[i].y <= map[r][c].y+SIZE-20 )
						{
							bullet.splice(i,1);
						}			
					}
				}
			}			
		}
	}	
	
	//Collision between ALIENS & PLAYER.
	for(var i = 0; i < alien.length; i++)
	{
		if(alien[i].alive == true){
		if( (player.x+player.width   >= alien[i].x+50 || player.x >= alien[i].x+50) && (player.x <= alien[i].x+145) )
		{
			if( (player.y <= alien[i].y+150) && (player.y + player.height >= alien[i].y+50) )
			{
				//audio.pause();
				//clearInterval(idInt);	
				//alert("O My God, I crashed ALIEN...");
				alien[i].alive = true;
				gameEnd();
			}
		}
		}
	}
	//Collision between ALIENS & Bullet.
	
	for(var i = 0; i < alien.length; i++)
	{
		if(alien[i].alive == true){
		for (j = 0; j < bullet.length; j++)
		{
		if( (bullet[j].x+bullet[j].width   >= alien[i].x+20 || bullet[j].x >= alien[i].x+50) && (bullet[j].x <= alien[i].x+150) )
		{
			if( (bullet[j].y <= alien[i].y+SIZE) && (bullet[j].y >= alien[i].y) )
			{
				bullet.splice(j,1);
				
				score+=10;
				alien[i].alive = false;
			}
		}
		}
		}
	}
} 

function fire()
{	
	var ball = { x:player.x-10, y:player.y+20, speed:10,
			width:20, height:20, image:redBall,bulletLife: 700};
	ballIsMoving=true;
	bullet.push(ball);
	
}
function moveBullet()
{
	var i = 0; 

	while(bullet[i] != undefined )
	{
		if (bullet[i].bulletLife <= 0 || bullet[i].y <= -20 )
		{
			bullet.splice(i,1);
			break;
		}
		bullet[i].y -=bullet[i].speed;
		bullet[i].bulletLife -= bullet[i].speed;
		i++;
	
	}  
}
