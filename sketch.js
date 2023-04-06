var valor=50
var valor2=100
var valor3=150

var pontos=150




function preload(){
cenario=loadImage("cenario.jpg")

torre1=loadImage("torre1.png")
torre2=loadImage("torre2.png")
torre3=loadImage("torre3.png")

inimigo=loadAnimation("inimigo3.1.png","inimigo3.2.png","inimigo3.3.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 cenario2=createSprite(600,310)
 cenario2.addImage(cenario)
 cenario2.scale=0.8

 torre=createSprite(275,550)
 torre.addImage(torre1)  
 torre.scale= 0.5   

 torreb=createSprite(400,550)
 torreb.addImage(torre2)
 torreb.scale= 0.5

 torrec=createSprite(535,550)
 torrec.addImage(torre3)
 torrec.scale= 0.5

 torre=createSprite(275,550)
 torre.addImage(torre1)  
 torre.scale= 0.5   

 torreb=createSprite(400,550)
 torreb.addImage(torre2)
 torreb.scale= 0.5

 torrec=createSprite(535,550)
 torrec.addImage(torre3)
 torrec.scale= 0.5

 inimigo1=createSprite(250,100)
 inimigo1.addAnimation("inimigo1",inimigo)
 inimigo1.scale=0.7
}

function draw() {
 drawSprites()

 fill("black")
 text("$"+valor,300,550)

 fill("black")
 text("$"+valor,430,550)

 fill("black")
 text("$"+valor,565,550)

 textSize(30)
 text (pontos,265,450)

 if(mousePressedOver(torre)){
    torre.position.x=mouseX
    torre.position.y=mouseY
 }
    if(mousePressedOver(torreb)){
        torreb.position.x=mouseX
        torreb.position.y=mouseY

    }
 if (mousePressedOver(torrec)){
    torrec.position.x=mouseX
    torrec.position.y=mouseY
 }

}   