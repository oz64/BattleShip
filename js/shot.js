/**
 * Created by oscardelgadillo on 11/20/2015.
 */

var Shot = function(sTable){

    this.x;
    this.y;
    this.sizeTable = sTable;

    this.askCoordinates = function (){
        this.x = validatingCoordinates('X',this.sizeTable);
        this.y = validatingCoordinates('Y',this.sizeTable);
    };

    this.makeShot = function(player){
        console.log('X:',this.x);
        console.log('Y:',this.y);
        //this.players[player].field.shot2ship(this.x, this.y);
        this.field.shot2ship(this.x, this.y);
    };
};

