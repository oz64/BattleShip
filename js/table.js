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
    {
        //for(var col = 0; col < this.sizeTable; col++)
        //{
        console.log(this.cell[row]);
        //}
    }
}
/**
 * This function is to createships
 */
Table.prototype.createShips = function(){
    console.log('empezo');
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
    console.log('termino');
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
        var orientation = Math.round(Math.random()*1);
        var coorX = Math.round(Math.random() * (this.sizeTable - 1));
        var coorY = Math.round(Math.random() * (this.sizeTable - 1));

        if(orientation==1 && coorX + this.Ships[indexShip].sizeShip <= this.sizeTable )
        {
            if(this.verifyOverDraw(coorX,coorY,this.Ships[indexShip].sizeShip,orientation)==true);
            {
                this.fillShips(coorX,coorY,indexShip,orientation);
                indexShip++;
            }
        }
        if(orientation == 0 && coorY + this.Ships[indexShip].sizeShip <= this.sizeTable)
        {
            if(this.verifyOverDraw(coorX,coorY,this.Ships[indexShip].sizeShip,orientation)==true);
            {
                this.fillShips(coorX,coorY,indexShip,orientation);
                indexShip++;
            }
        }

    }
    while(indexShip < this.Ships.length);
}
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
        {
            if(orientation == 1)
                coorX++;
            else
                coorY++;
        }
    }
    if(counter == sizeS)
        return true;
    else
        return false;
}
Table.prototype.fillShips = function (coorX,coorY,indexS,orientation){
    if(orientation==0)
        this.Ships[indexS].orientaton = 'H';
    else
        this.Ships[indexS].orientaton = 'V';
    for(var i = 0; i < this.Ships[indexS].sizeShip; i++)
    {
        this.cell[coorX][coorY] = indexS+1;

        this.Ships[indexS].Cell[i] = coorX+''+coorY;
        if(orientation == 1)
            coorX++;
        else
            coorY++;
    }
}
//Table.prototype.setShipsOnTable = function(){
//
//    var indexShip = 0;
//    do
//    {
//        var coorX = Math.round(Math.random() * (t.sizeTable - 1));
//        var coorY = Math.round(Math.random() * (t.sizeTable - 1));
//        //this line is to validate that there is space for the ship
//        var pos = Math.round(Math.random()*1);
//        //console.log('H'+pos);
//        console.log(coorY + this.Ships[indexShip].sizeShip);
//        if(pos ==1 && ((coorY + this.Ships[indexShip].sizeShip) <= this.sizeTable) ){
//            var sizeS = this.Ships[indexShip].sizeShip -1;
//            if (this.VerifySpaceFreeV(coorX, coorY, sizeS,pos)==true)
//            {
//                this.fillShipsV(coorY,coorX,indexShip);
//                indexShip++;
//            }
//        }
//        else
//        {
//            if(pos==0 && coorX + this.Ships[indexShip].sizeShip <= this.sizeTable)
//            {
//                var sizeS1 = this.Ships[indexShip].sizeShip -1;
//                if(this.VerifySpaceFreeH(coorX, coorY, sizeS1, pos)==true)
//                {
//                    this.fillShipsH(coorX,coorY,indexShip);
//                    indexShip++;
//                }
//            }
//        }
//    }
//    while(indexShip < this.Ships.length);
//
//}

/**
 * THis functions fill a ship in the table
 * @constructor
 */
//Table.prototype.fillShipsV = function (coorX, coorY, indexShip){
//
//    var sizeShip = this.Ships[indexShip].sizeShip;
//
//        console.log(indexShip);
//        for(var i = 0; i < sizeShip; i++)
//        {
//            this.cell[coorX][coorY] = indexShip;
//            this.Ships[indexShip].Cell[i] = coorX+''+coorY;
//                coorX++;
//        }
//}
//Table.prototype.fillShipsH = function (coorX, coorY, indexShip){
//
//    var sizeShip = this.Ships[indexShip].sizeShip;
//
//    console.log(indexShip);
//    for(var i = 0; i < sizeShip; i++)
//    {
//        this.cell[coorX][coorY] = indexShip;
//        this.Ships[indexShip].Cell[i] = coorX+''+coorY;
//        coorY++;
//    }
//}
//
//Table.prototype.VerifySpaceFreeH = function(coorX, coorY, indexShip){
//    var counter = 0;
//    do
//    {
//        if(this.cell[coorX][coorY] = '0')
//        {
//            counter++;
//        }
//
//            coorY++;
//
//
//    }while(counter <= indexShip);
//    if(counter== indexShip + 1)
//        return true;
//    else
//        return false;
//}
//Table.prototype.VerifySpaceFreeV = function(coorX, coorY, indexShip){
//    var counter = 0;
//    do
//    {
//        if(this.cell[coorX][coorY] = '0')
//        {
//            counter++;
//        }
//            coorX++;
//
//    }while(counter <= indexShip);
//    if(counter== indexShip + 1)
//        return true;
//    else
//        return false;
//}

