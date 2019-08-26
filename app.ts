enum Out {
    bowled ="Bowled",
    catch = "Catch",
    run="run Out",
    lbw ="Lbw"
  }
interface Score{
    name:string;
    scores: number;
    balls: number;
    outs: string;
}

class Scoreboard {
    constructor(public name: string, public scores: number, public balls: number, public outs: string){}
}
var lists: Scoreboard[] = [];
var player1 = new Scoreboard("rahul",43,45,Out.bowled)
var player2 = new Scoreboard("sahvag",103,95,Out.lbw)
var player3 = new Scoreboard("sachin",13,15,Out.run)
var player4 = new Scoreboard("amit",13,15,Out.catch)
var player5 = new Scoreboard("anil",23,35,Out.lbw)
var player6 = new Scoreboard("zaheer",40,45,Out.run)
var player7 = new Scoreboard("mishra",0,5,Out.bowled)
var player8 = new Scoreboard("smith",43,45,Out.lbw)
var player9 = new Scoreboard("ravi",0,5,Out.catch)
var player10 = new Scoreboard("suneel",3,5,Out.run)
var player11 = new Scoreboard("kohali",23,35,Out.lbw)
var players: Score[] =[
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled},
    {name:"rahul",scores:43,balls:23,outs:Out.bowled}
]
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

window.onload = function(){
    let list1= <HTMLInputElement>document.getElementById("scoreList");
    let list="";
    let list2= <HTMLInputElement>document.getElementById("scoreList1");
    let list21="";

    for(let index=0; index < lists.length;index++){
        list = list + "<tr> <td> " +lists[index].name + ' </td> <td>' + lists[index].scores + '</td> <td>' + lists[index].balls + '</td> <td>' + lists[index].outs + '</td></tr>';
    }
    list1.innerHTML = list;

    for(let index=0; index < players.length;index++){
        list21 = list21 + "<tr> <td> " +players[index].name + ' </td> <td>' + players[index].scores + '</td> <td>' + players[index].balls + '</td> <td>' + players[index].outs + '</td></tr>';
    }
    list2.innerHTML = list21;

}
