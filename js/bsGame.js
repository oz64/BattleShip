/**
 * Created by oscardelgadillo on 11/20/2015.
 */

var BSGame = function(){
    this.name = 'Battle Ship Game';
    this.players = [];
    this.turn = '0';


    this.start = function (){

        var url = location.search.substr(1).split("&");
        for (var i = 0, total = url.length; i < total; i ++)
            window[url[i].split("=")[0]] = url[i].split("=")[1];

        //var sizeTable = validatingSizeTable();
        //var name1 = validatingEmptyField('Insert name for player 1');
        //var name2 = validatingEmptyField('Insert name for player 2');
        //this.players.push(new Player(0, name1.toUpperCase(), sizeTable));
        //this.players.push(new Player(1, name2.toUpperCase(), sizeTable));
        var arrowB = $('<div id="bsgArrow" class="table"></div>');
        var sizeTable = gameSize;
        this.players.push(new Player(0, p1Name.toUpperCase(), sizeTable));
        $('.bsgBox').append(arrowB);
        this.players.push(new Player(1, p2Name.toUpperCase(), sizeTable));


    };

};

BSGame.prototype.getTurn = function (playerId, x, y, e) {

    if (this.turn == playerId) {
        //alert('Wrong table.');
        $('#errorMsg').css('padding','5px');
       // $('#errorMsg').append('INCORRECT PLAYER');
        $('#errorMsg').show();
        return false;
    }
    else {
        $('#errorMsg').hide();
        if(playerId == 1)
        {
            $('#bsgArrow').css('background-image', 'url("js/styles/FlechaDerecha.png")');
            $('#bsgArrow').css('transform', 'rotate(180deg)');
        }
        else
        {
            $('#bsgArrow').css('background-image', 'url("js/styles/FlechaDerecha.png"');
            $('#bsgArrow').css('transform', 'rotate(360deg)');
        }
        if (this.players[playerId].field.shot2ship(x, y)) {
            $(e.target).css('background-image', 'url("js/styles/buque.jpg")');
            $(e.target).css('background-size', 'contain');
            $(e.target).off('click');


            if (this.players[playerId].isDeadPlayer()) {
                //alert('PLAYER ' + this.players[this.turn].name + ' WIN...!!!');
                $('.cell').off('click');
                $('.winner').css('padding','5px');
                $('.bg-info').text(this.players[this.turn].name + " IS THE WINNER");
                $('.bg-info').show();
                var scr = "location.href='http://localhost:63342/BattleShip/index.html'";
                var t = '<a class="btn-success" href="http://localhost:63342/BattleShip/index.html" >PLAY AGAIN</a>';
                $('#winner').append(t);
                $('.btn-success').show();
            }
        }
        else {
            $(e.target).css('background-image', 'url("js/styles/water2.jpg")');
            $(e.target).css('background-size', 'contain');
            $(e.target).off('click');
        }

        if (this.turn == '1')
            this.turn = '0';
        else
            this.turn = '1';

        return true;
    }
};




