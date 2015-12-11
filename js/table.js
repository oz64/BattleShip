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
    this.drawTable();
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
            colu[col] = '0';
        this.cell[row] = colu;
    }
};

/**
 *  function for display the table
 */
Table.prototype.displayTable = function(name){
    console.log('Table for the player: ',name);
    for(var row = 0; row < this.sizeTable; row++)
        console.log(this.cell[row]);
};

/**
 * This function is to createships
 */
Table.prototype.createShips = function(){
    var indexShips = 0;
    var cantFill = (Math.pow(this.sizeTable,2)*0.4 ).toFixed();
    do{
        var sizeShip =  Math.floor((Math.random() * 3) + 1);
        if (cantFill >= sizeShip) {
            this.Ships[indexShips] = new Ship(sizeShip);
            cantFill = cantFill - sizeShip;
            indexShips++;
        }
    }while(cantFill > 0);
};
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
//
Table.prototype.setShipsOnTable = function(){
    var indexShip = 0;
    do
    {
        var orientation = Math.round(Math.random()*1);
        var coorX = Math.round(Math.random() * (this.sizeTable - 1));
        var coorY = Math.round(Math.random() * (this.sizeTable - 1));

        if(orientation==1 && coorX + this.Ships[indexShip].sizeShip <= this.sizeTable )
        {
            if(this.verifyOverDraw(coorX,coorY,this.Ships[indexShip].sizeShip,orientation)==true)
            {
                this.fillShips(coorX,coorY,indexShip,orientation);
                indexShip++;
            }
        }
        if(orientation == 0 && coorY + this.Ships[indexShip].sizeShip <= this.sizeTable)
        {
            if(this.verifyOverDraw(coorX,coorY,this.Ships[indexShip].sizeShip,orientation)==true)
            {
                this.fillShips(coorX,coorY,indexShip,orientation);
                indexShip++;
            }
        }

    }
    while(indexShip < this.Ships.length);
};
Table.prototype.verifyOverDraw = function(coorX,coorY,sizeS,orientation){
    var counter = 0;
    for(var i = 0; i < sizeS; i++)
    {
        if(this.cell[coorX][coorY] == '0')
        {
            counter++;
            if(orientation == 1)
                coorX++;
            else
                coorY++;
        }
        else
            return false;
    }
    if(counter == sizeS)
        return true;
    else
        return false;
};
Table.prototype.fillShips = function (coorX,coorY,indexS,orientation){
    if(orientation==0)
        this.Ships[indexS].orientaton = 'H';
    else
        this.Ships[indexS].orientaton = 'V';
    for(var i = 0; i < this.Ships[indexS].sizeShip; i++)
    {
        this.cell[coorX][coorY] = indexS+1;

        this.Ships[indexS].Cell[i] = coorX + ',' + coorY;
        if(orientation == 1)
            coorX++;
        else
            coorY++;
    }
};


