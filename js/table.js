/**
 * Created by oscardelgadillo on 11/20/2015.
 */
var Table = function(size){
    this.size = size;
    this.emptyCell = '0';
    this.cells = [];
    this.ships = [];
    this.init();
    this.createShips();
};

Table.prototype.init = function()
{
    for (var fil = 0 ; fil < this.size; fil++)
    {
        this.cells[fil] = [];
        for (var col=0; col < this.size; col++)
            this.cells[fil][col] = this.emptyCell;
    }
};

Table.prototype.draw = function()
{
    for (var fil = 0 ; fil < this.size; fil++)
        console.log(this.cells[fil]);
};

Table.prototype.createShips = function(ships){
    this.ships.push(new Ship(2));

};

Table.prototype.drawShips = function(){
    var shipSize = this.ships[0].size;
    var initPs = Math.round(Math.random() * this.size);
    var size = this.size - shipSize;
    for (var i = initPs; i < (initPs - shipSize); i++)
        this.cells[0][i] = '1';
};