// **/@{HTML Canvas Element}*/
const numberOfEnemies=100;
const enemiesArray=[];
var gameSpeed=0;
const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
CANVAS_WIDTH=canvas.width=500;
CANVAS_HEIGHT=canvas.height=1000;
const enemyImage= new Image;
enemyImage.src='enemies/enemy1.png';

class Enemy
{
    constructor()
    {
        const enemyImage= new Image;
    enemyImage.src='enemies/enemy1.png';
        this.image=enemyImage;

        this.x=Math.random() * canvas.width;
        this.y=Math.random() * canvas.height;
        this.speed=Math.random() * 4-2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth/2;
        this.height = this.spriteHeight/2;
        this.frame=0;
        this.flapSpeed= 5;
     }
        update()
        {
            this.x=this.x+this.speed;
            this.y=this.y+this.speed;
              if (gameSpeed%this.flapSpeed===0) {
                  this.frame>4?this.frame=0:this.frame++;
             }
             
        };
        draw()
        {
            ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
        }

    };
for(let i=0;i<numberOfEnemies;i++)
{
    enemiesArray.push(new Enemy());

}
console.log(enemiesArray);


function animate()
{
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy =>
        {
            enemy.update();
            enemy.draw();
        });
    gameSpeed++;  
    requestAnimationFrame(animate);
    
}
animate();
