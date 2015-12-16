/**
 * Created by oscardelgadillo on 11/20/2015.
 */
var Player = function(id, name, sizeTable){
    this.idPlayer = id
    this.name = name;
    this.field = new Table(sizeTable);
    this.shot = new Shot(sizeTable);

    this.field.createShips();
    this.field.setShipsOnTable();
    this.field.displayTable(this.name);
    this.field.drawTable(this.idPlayer);

    this.insertName(id+1);
};

Player.prototype.insertName = function(id) {
    $("#p"+id+"").append('<h2>'+ this.name +'</h2>');
};