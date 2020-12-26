var database ,dog,dog1,dog2
var position
//var form
var feed,add
var foodobject
var Feedtime
var Lastfeed
//Create variables here

function preload()

{
  dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
 
	//load images here
}

function setup() {
	createCanvas(displayWidth-10,displayHeight-20);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(1000,450,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.25
 
  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  feed = createButton("FEED SANDY")
  feed.position(500,20)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,20)
  add.mousePressed(AddFood)
  
 


} 

function draw(){
 background("orange");

 foodobject.display()
 
 drawSprites();
  
 fill(255,255,254);
 textSize(15);

drawSprites();
}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo){
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('/').set({
    'Food': nazo
  })

}
function AddFood(){
position++
database.ref('/').update({
  Food:position
}

)
}
function FeedDog(){

dog.addImage(dogimg2)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),
   FeedTime:hour ()
 })
}
