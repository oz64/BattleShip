/**
 * Created by oscardelgadillo on 11/20/2015.
 */
var Player = function(name, sizeTable){
    this.name = name;
    this.field = new Table(sizeTable);
    this.shot = new Shot(sizeTable);

    //console.log('Table for the player: ',this.name);
    this.field.createShips();
    this.field.setShipsOnTable();
    this.field.displayTable(this.name);


};