/*
Vincent Arick
11-14-14
Duel#3
 */

//self-executing function
(function(){

    console.log("Test1");// console.log Test

    //DOM variables
    var superman = document.getElementById("sm");//
    var batman = document.getElementById("bm");
    var rounds = document.querySelector("h5");// getElementById didn't work got type error null
    var button = document.getElementById("fight button");

    //Button setup
    button.addEventListener("click", fight, false);

    //Array Fighters
    var fighter1 = ["Superman",100,20];//array fighter1 index 0 name, 1 max health, 2 damage

    var fighter2 = ["Batman",100,20];//array fighter2 index 0 name, 1 max health, 2 damage

    var round = 1;//variable set first round to start at 1

    //Inner html
    superman.innerHTML = fighter1[0] + ":" + fighter1[1];
    batman.innerHTML = fighter2[0] + ":" + fighter2[1];
    round.innerHTML = "Click button to fight!";

    //Fight function
    function fight(){

        /*alert(fighter1[0]+":"+fighter1[1]+" *Start* " +fighter2[0]+":"+fighter2[1]);/*alert Spiderman, and
        health Start Batman and health*/
        superman.innerHTML = fighter1[0] + ":" + fighter1[1];
        batman.innerHTML = fighter2[0] + ":" + fighter2[1];



            //determine damage
            var f1 = Math.floor(Math.random()* fighter1[2] + fighter1[2] * .5);
            var f2 = Math.floor(Math.random()* fighter2[2] + fighter2[2] * .5);

            //inflict damage
            fighter1[1]-=f1;//inflict damage
            fighter2[1]-=f2;//inflict damage

            console.log(fighter1[0]+":"+fighter1[1]+" *Start* " +fighter2[0]+":"+fighter2[1]);


            //check for winner
            var results = winnerCheck();//variable result winner check function


            rounds.innerHTML = "ROUND #" + round + "Results:";
            round++;
            if(results==="no winner"){// if no winner add a round loop

                superman.innerHTML = fighter1[0] + ":" + fighter1[1];
                batman.innerHTML = fighter2[0] + ":" + fighter2[1];

            }else{// or there is a winner break function
                superman.innerHTML = results;
                batman.innerHTML = "";

                //Disable button
                button.removeEventListener("click", fight, false);

                document.querySelector(".buttonblue"). innerHTML = "Finished";
            };


    };

    function winnerCheck(){//setup winner check function
        console.log("in winnerCheck FN")//console.log winner check function
        var result="no winner";//variable result no winner

        if(fighter1[1] < 1 && fighter2 [1] <1){//if boh players health goes below 1
            result = "You Both Die";//they both die
        }else if(fighter1[1] <1){//Superman's health goes below 1
            result =fighter2[0]+" WINS!!!"//Batman wins
        }else if(fighter2[1]<1){//Batmans health goes below 1
            result =fighter1[0]+" WINS!!!"//Spiderman wins
        };

        return result;//Show result

    };


})();