/**
 * Created by MARIA on 04/12/2015.
 */
var Ship = function(size){
    this.sizeShip = size;
    this.orientaton = '';
    this.state = 'live';
    this.Cell = [];
    //this.createNewShip();//es necesario???
};
/**
 * este metodo solo es para prueba
 * @constructor
 */
//Ship.prototype.createNewShip = function(){
//    for(var i = 0; i < this.sizeShip; i++)
//        this.Cell[i] = '0';
//};


Table.prototype.shot2ship = function(positionX, positionY)
{
    if (this.cell[positionX][positionY] != '0')
    {
        var s = this.cell[positionX][positionY];
        this.Ships[s-1].shotShip(positionX,positionY);
        this.cell[positionX][positionY] = 'X';
    }
    else
    {
        alert('Shot missed.');
        this.cell[positionX][positionY] = 'X';
    }

};

Table.prototype.drawTable = function () {
    var w = this.sizeTable * 50;
    //var styleStr  =  '<style>' +
    //    '.cell {background: green; width: 50px; height: 50px; display: inline-block;}' +
    //    '.container {background-color: red; width: '+w +'px;}' +
    //    '</style>';

    var containerStr = '<div class = "table" style="width: '+w+'px;"></div>';
    var cellStr = '<div class = "cell"></div>';

    var containerEl = $(containerStr); //html element
    //var styleEl = $(styleStr);

    for(var i = 0, total = this.sizeTable * this.sizeTable; i < total; i++){
        var cellEl = $(cellStr);
        cellEl.on('click',function(e){
            console.log(e);
            console.log('you clicked on a cell');
            $(e.target).css('background','yellow');

        });
        containerEl.append(cellEl);
    }
    //$('body').html(styleEl);
    $('body').append(containerEl);
};