var Out;
(function (Out) {
    Out["bowled"] = "Bowled";
    Out["catch"] = "Catch";
    Out["run"] = "run Out";
    Out["lbw"] = "Lbw";
})(Out || (Out = {}));
var Scoreboard = /** @class */ (function () {
    function Scoreboard(name, scores, balls, outs) {
        this.name = name;
        this.scores = scores;
        this.balls = balls;
        this.outs = outs;
    }
    return Scoreboard;
}());
var lists = [];
var player1 = new Scoreboard("rahul", 43, 45, Out.bowled);
var player2 = new Scoreboard("sahvag", 103, 95, Out.lbw);
var player3 = new Scoreboard("sachin", 13, 15, Out.run);
var player4 = new Scoreboard("amit", 13, 15, Out["catch"]);
var player5 = new Scoreboard("anil", 23, 35, Out.lbw);
var player6 = new Scoreboard("zaheer", 40, 45, Out.run);
var player7 = new Scoreboard("mishra", 0, 5, Out.bowled);
var player8 = new Scoreboard("smith", 43, 45, Out.lbw);
var player9 = new Scoreboard("ravi", 0, 5, Out["catch"]);
var player10 = new Scoreboard("suneel", 3, 5, Out.run);
var player11 = new Scoreboard("kohali", 23, 35, Out.lbw);
lists.push(player1);
lists.push(player2);
lists.push(player3);
lists.push(player4);
lists.push(player5);
lists.push(player6);
lists.push(player7);
lists.push(player8);
lists.push(player9);
lists.push(player10);
lists.push(player11);
console.log(lists);
window.onload = function () {
    var list1 = document.getElementById("scoreList");
    var list = "";
    for (var index = 0; index < lists.length; index++) {
        list = list + "<tr> <td> " + lists[index].name + ' </td> <td>' + lists[index].scores + '</td> <td>' + lists[index].balls + '</td> <td>' + lists[index].outs + '</td></tr>';
    }
    // list += "</tr>"
    list1.innerHTML = list;
};
