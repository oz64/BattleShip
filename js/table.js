/**
 * Created by MARIA on 04/12/2015.
 */
function Table(sTable){
    //validar vacio y letras
    //VALIDAR QUE SEA MENOR QUE 3 EL TAMANO DE LA TABLA
    this.sizeTable =  sTable;
    this.valueCell = '';
    this.cell = [];
    this.Ships = [];
    this.createTable();

}
/**
 * function for create a new table dynamically
 */
Table.prototype.createTable = function(){
    for(var row = 0; row < this.sizeTable; row++)
    {
        this.cell[row] = '';
        var colu = [];
        for(var col = 0; col < this.sizeTable; col++)
        {
            colu[col] = '0';
        }
        this.cell[row] = colu;
    }
}
/**
 *  function for display the table
 */
Table.prototype.displayTable = function(){
    for(var row = 0; row < this.sizeTable; row++)
        console.log(this.cell[row]);
};

/**
 * This function is to createships
 */
Table.prototype.createShips = function(){
    var cantShips = 0;
    var cantFill = (Math.pow(this.sizeTable,2)*0.4 ).toFixed();
    do// for(var i = 1; i <= cantFill ; i++)
    {
        var sizeTableShip = this.createNumber(this.sizeTable);
        this.Ships[cantShips] = new Ship(sizeTableShip);
        cantFill = cantFill - sizeTableShip;
        cantShips++;
    }
    while(cantFill > 0)

}
/**
 * this code is for test
 */
Table.prototype.displayShips = function () {
    for(var i = 0; i < this.Ships.length; i++)
    {
        console.log(this.Ships[i]);
    }
}
/**
 * function for create dynamically the sizeTable of ship
 * that is not matter for this application still
 * @returns {number}
 */
Table.prototype.createNumber = function (){
    var number = 0;
    do
    {
        number = Math.floor((Math.random() * 3) + 1);
    }
    while(number > 3);
    return number;
}

Table.prototype.setShipsOnTable = function(){

    var indexShip = 0;
    do
    {
        var coorX = Math.round(Math.random() * (t.sizeTable - 1));
        var coorY = Math.round(Math.random() * (t.sizeTable - 1));
        //this line is to validate that there is space for the ship
        var pos = Math.round(Math.random()*1);
        console.log('H'+pos);
        if(coorY + this.Ships[indexShip].sizeShip <= this.sizeTable)
        {
            this.fillShips(coorX,coorY,indexShip,pos);
            indexShip++;
        }
    }
    while(indexShip < this.Ships.length);

}

/**
 * THis functions fill a ship in the table
 * @constructor
 */
Table.prototype.fillShips = function (coorX, coorY, indexShip, pos) {

    var sizeShip = this.Ships[indexShip].sizeShip;
    if(pos == 0)
    {
        console.log(indexShip);
        for(var i = 0; i < sizeShip; i++)
        {
            this.cell[coorX][coorY] = indexShip;
            this.Ships[indexShip].Cell[i] = this.getLetter(coorX)+''+coorY;
            coorY++;
        }
    }
    else
    {
        console.log(indexShip);

        for(var i = 0; i < sizeShip; i++)
        {
            this.cell[coorX][coorY] = indexShip;
            this.Ships[indexShip].Cell[i] = this.getLetter(coorX)+''+coorY;
            coorX++;
        }
    }


}
Table.prototype.getLetter = function (index){
    var abcd = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
    return abcd[index];
}


/*************************/
Table.prototype.init = function()
{
    for (var fil = 0 ; fil < this.sizeTable; fil++)
    {
        this.cells[fil] = [];
        for (var col=0; col < this.size; col++)
            this.cells[fil][col] = this.emptyCell;
    }
};



Table.prototype.createShips = function(ships){
    this.ships.push(new Ship(2));

};

Table.prototype.drawShips = function(){
    var shipSize = this.ships[0].sizeTable;
    var initPs = Math.round(Math.random() * this.size);
    var size = this.size - shipSize;
    for (var i = initPs; i < (initPs - shipSize); i++)
        this.cells[0][i] = '1';
};