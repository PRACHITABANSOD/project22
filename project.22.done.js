class Player {
    constructor ( x,y) {
        this.x = x;
        this.y = y;   
        this.spt = createSprite( this.x , this.y , 50 ,50 );
        this.spt.shapeColor = " yellow "; 
    }


    move(xdir,ydir){
        this.spt.x += xdir*grid;
		this.spt.y += ydir*grid;
    }
    
    moveleft(){
     this.spt.x =  this.spt.x - 12 ;
    }    
    
    moveright (){
        this.spt.x =  this.spt.x + 12 ; 
    }

    jump (){
        this.spt.velocityY = -12 ;
    }
}