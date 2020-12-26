class Food {
  constructor(){
  this.foodStock=0;
  this.image=loadImage('images/Milk.png');

    }

 updateFoodStock(foodStock){
  this.foodStock=foodStock;
 }

 deductFood(){
   if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
   }
  }

  getFoodStock(){
    return this.foodStock;
  }

  display(){

   
    var x=420,y=400;
    
    imageMode(CENTER);
 
  
    
    if(this.foodStock!=0){
     
      for(var i=0;i<this.foodStock;i++){
        textSize(17);
        fill("navy");
        text("Mm.. very yummy food 😋 . thankyou for feeding me..😄",700,20);
        
        if(i%9==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,80,60);
        x=x+30;
      }
    }
  }
}