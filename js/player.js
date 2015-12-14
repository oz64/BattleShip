/**
 * Created by oscardelgadillo on 11/20/2015.
 */
var Player = function(id, name, sizeTable){
    this.idPlayer = id
    this.name = name;
    this.field = new Table(sizeTable);
    this.shot = new Shot(sizeTable);

    //console.log('Table for the player: ',this.name);
    this.field.createShips();
    this.field.setShipsOnTable();
    this.field.displayTable(this.name);
    this.field.drawTable(this.idPlayer);



};