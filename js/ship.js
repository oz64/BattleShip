/**
 * Created by MARIA on 04/12/2015.
 */
var Ship = function(size){
    this.sizeShip = size;
    this.orientaton = '';
    this.state = 'live';
    this.Cell = [];
    //this.createNewShip();//es necesario???
};
/**
 * este metodo solo es para prueba
 * @constructor
 */
//Ship.prototype.createNewShip = function(){
//    for(var i = 0; i < this.sizeShip; i++)
//        this.Cell[i] = '0';
//};


Ship.prototype.shotShip = function(coorX,coorY){
    for(var i =0; i < this.sizeShip; i++)
    {
        if(this.Cell[i] == coorX + ',' + coorY)
        {
            this.Cell[i] = 'X';
            if(this.getState()==true)
                this.state = 'hurt';
            else
                this.state = 'killed';
        }
    }
};
Ship.prototype.getState = function(){
    var state = true;
    var countHurt = 0;
    for(var i =0; i < this.sizeShip; i++)
    {
        if(this.Cell[i] == 'X')
            countHurt++;
    }
    if(countHurt == this.sizeShip)
        state = false;
    return state;
};