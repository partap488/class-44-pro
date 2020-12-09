var snake
var apple
var rottenApple
 var gameState="play" //1 means play

function preload(){
}
function setup(){
  createCanvas(800,800)
snake=createSprite(200,200,20,20)
snake.shapeColor="green"
apple=createSprite(150,150,10,10)
apple.shapeColor="red"
rottenApple=createSprite(100,100,10,10)
rottenApple.shapeColor="brown"


}
function draw(){
background("white")

if(gameState=="play"){
  if(keyIsDown(UP_ARROW)){
    snake.y=snake.y-1
    
    }
    if(keyIsDown(DOWN_ARROW)){
     snake.y=snake.y+1
    }
    if(keyIsDown(LEFT_ARROW)){
      snake.x=snake.x-1
    }
    if(keyIsDown(RIGHT_ARROW)){
    snake.x=snake.x+1
    }
    if(snake.isTouching(rottenApple)){
      gameState="end"
    }
if(snake.isTouching(apple)){
  snake.height=snake.height+20
  apple.destroy()
}
}
else{

fill("black")
textSize(50,50)
strokeWeight(5)
stroke("red")
text("you are bad",200,200)

}



drawSprites()
}