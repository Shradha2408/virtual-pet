var Dog;
var HappyDog;
var database;
var foodS;
var foodStock;

function preload(){
var Dog=loadImage("images/dogImg.png")
var HappyDog=loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  var dog=createSprite(Dog)
  database=firebase.databse()
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46, 139, 87) 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(HappyDog);
  }

  drawSprites();
  var foodStock=database.ref('Food')
  textSize(20);
  fill("white")
  stroke(51)
  text("Note:Press UP_ARROW Key To Feed Skipper Milk")
}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}






