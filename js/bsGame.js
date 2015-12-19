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

        var sizeTable = gameSize;
        this.players.push(new Player(0, p1Name.toUpperCase(), sizeTable));
        this.players.push(new Player(1, p2Name.toUpperCase(), sizeTable));

    };

};

BSGame.prototype.getTurn = function (playerId, x, y, e) {

    if (this.turn == playerId) {
        alert('Wrong table.');
        return false;
    }
    else {
        if (this.players[playerId].field.shot2ship(x, y)) {
            $(e.target).css('background-image', 'url("js/styles/buque.jpg")');
            $(e.target).css('background-size', 'contain');
            $(e.target).off('click');

            if (this.players[playerId].isDeadPlayer()) {
                //alert('PLAYER ' + this.players[this.turn].name + ' WIN...!!!');
                $('.cell').off('click');
                var tmp = $('<h2>'+ this.players[this.turn].name + " IS THE WINNER" + '</h2>');
                $('.contentWinner').append(tmp);
                var scr = "location.href='http://localhost:63342/BattleShip/index.html'";
                var t = $('<input type="button" onclick="'+scr+'" value="Play Again" name="button"/>');
                $('.playAgain').append(t);
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




