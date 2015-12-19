/**
 * Created by oscardelgadillo on 11/20/2015.
 */
var Player = function(id, name, sizeTable){
    this.idPlayer = id
    this.name = name;
    this.field = new Table(sizeTable);
    this.shot = new Shot(sizeTable);

    this.insertName(id+1);

    this.field.createShips();
    this.field.setShipsOnTable();
    this.field.displayTable(this.name);
    this.field.drawTable(this.idPlayer);



    this.isDeadPlayer = function(){
        var flag = true;

        for (var index = 0; index < this.field.Ships.length; index++)
        {
            if (this.field.Ships[index].state == 'hurt' || this.field.Ships[index].state == 'live')
                flag = false;
        }
        return flag;
    };
};

Player.prototype.insertName = function(id) {
    $("#p"+id+"").append('<h2>'+ this.name +'</h2>');
};

