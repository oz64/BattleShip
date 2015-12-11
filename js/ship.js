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


