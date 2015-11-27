/**
 * Created by oscardelgadillo on 11/20/2015.
 */
var Player = function(name){
    this.name = name;
    this.field = new Table(4);
    console.log('Table for the player: ',this.name);
    this.field.draw();


};