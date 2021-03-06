class Food{
    constructor(foodStock,lastFed){
        this.image = loadImage("images/Milk.png");
        this.foodStock = 0;
        this.lastFed = lastFed;
    }

    getFoodStock(){
        //var foodStock=database.ref('Food')
        //foodStock.on("value",function(data){
        //foodS = data.val()
        //})
        return this.foodStock;
    }

    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }
    
    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image,700,260,90,90);

        if(this.foodStock !=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+70;
                }
                image(this.image,x,y,70,70);
                x = x + 30;
            }
        }
    }
}