/*
Vincent Arick
11-14-14
Duel#3
 */

//self-executing function
(function(){

    console.log("Test");// console.log Test

    //DOM variables
    var superman = document.getElementById("sm");
    var batman = document.getElementById("bm");
    var round = document.getElementById("head");
    var button = document.getElementById("fight button");

    //Button setup
    button.addEventListener("click", fight, false);

    //Array Fighters
    var fighter1 = ["Superman",100,20];//array fighter1 index 0 name, 1 max health, 2 min health

    var fighter2 = ["Batman",100,20];//array fighter2 index 0 name, 1 max health, 2 min health

    var round = 0;//variable set first round to start at 1

    //Inner html
    superman.innerHTML = fighter1[0] + ":" + fighter[2];
    batman.innerHTML = fighter2[0] + ":" + fighter[2];
    round.innerHTML = "Click button to fight!";

    function fight(){// function for fight
        console.log("in the fight function");//console.log in the fight function


        /*alert(fighter1[0]+":"+fighter1[1]+" *Start* " +fighter2[0]+":"+fighter2[1]);/*alert Spiderman, and
        health Start Batman and health*/

        for (var i=0; i<10; i++){//variable i for round numbers

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = fighter1[2] * .5;// min damage1 = Spiderman damage multiply .5
            var minDamage2 = fighter2[2] * .5;// min damage2 = Batman damage multiply .5
            var f1 = Math.floor(Math.random()*(fighter1[2]-minDamage1) + minDamage1);/* Math formula to create random
            and round the number Math.floor*/
            var f2 = Math.floor(Math.random()*(fighter2[2]-minDamage2) + minDamage2);/* Math formula to create random
            and round the number Math.floor*/

            //inflict damage
            fighter1[1]-=f1;//inflict damage
            fighter2[1]-=f2;//inflict damage

            console.log(fighter1[0]+":"+fighter1[1]+" *Start* " +fighter2[0]+":"+fighter2[1]);/* console.log
            Spiderman player health Start Batman player health*/

            var results = winnerCheck();//variable result winner check function
            console.log(results);//console.log winner check

            if(results==="no winner"){// if no winner add a round loop
                round++;
                alert(fighter1[0]+":"+fighter1[1]+" *ROUND "+round+" OVER* " +fighter2[0]+":"+fighter2[1]);/*
                alert Spiderman and health round number over Batman and health*/
            }else{// or there is a winner break function
                alert(results);// alert outcome of fight
                break;//break function
            };

        }
    };

    function winnerCheck(){//setup winner check function
        console.log("in winnerCheck FN")//console.log winner check function
        var result="no winner";//variable result no winner

        if(fighter1[1]<1&&fighter2[1]<1){//if boh players health goes below 1
            result = "You Both Die";//they both die
        }else if(fighter1[1]<1){//Spidermans health goes below 1
            result =fighter2[0]+" WINS!!!"//Batman wins
        }else if(fighter2[0]<1){//Batmans health goes below 1
            result =fighter1[0]+" WINS!!!"//Spiderman wins
        };

        return result;//Show result

    };

    /****** The program gets started below ******/
    console.log ("program starts here");// console.log program starts here
    fight();//begin fight

})();