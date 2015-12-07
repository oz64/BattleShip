/**
 * Created by oscardelgadillo on 11/20/2015.
 */
var Player = function(name, sizeTable){
    this.name = name;
    this.field = new Table(sizeTable);
    console.log('Table for the player: ',this.name);
    this.field.displayTable();


};