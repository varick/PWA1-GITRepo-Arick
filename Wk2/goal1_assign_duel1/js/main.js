/*
Vincent Arick
11-01-14
ANALYZEDuel#1
 */

//self-executing function
(function(){

    console.log("FIGHT!!!");// console.log FIGHT!!!

    /*//player name
    var playerOneName = "Spiderman";// setting variable player one name to Spiderman
    var playerTwoName = "Batman";// setting variable player two name to Batman

    //player damage
    var player1Damage = 20;// variable player one damage to 20
    var player2Damage = 20;// variable player two damage to 20

    //player health
    var playerOneHealth = 100;// variable player one max health to 100
    var playerTwoHealth = 100;// variable player two max health to 100
*/
    var fighter1 = ["Spiderman",100,20];//fighter1 array name, max health, min health; index 0 name, 1 max, 2 min health
    var fighter2 = ["Batman",100,20];//fighter2 array, name, max health, min health
    
    var round = 0;//variable set first round to start at 1

    function fight(){// function for fight
        console.log("in the fight function");//console.log in the fight function

        alert(fighter1[0]+":"+fighter1[1]+" *Start* " +playerTwoName+":"+playerTwoHealth);/*alert Spiderman, and
        health Start Batman and health*/

        for (var i=0; i<10; i++){//variable i for round numbers

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;// min damage1 = Spiderman damage multiply .5
            var minDamage2 = player2Damage * .5;// min damage2 = Batman damage multiply .5
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1) + minDamage1);/* Math formula to create random
            and round the number Math.floor*/
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2) + minDamage2);/* Math formula to create random
            and round the number Math.floor*/

            //inflict damage
            playerOneHealth-=f1;//inflict damage
            playerTwoHealth-=f2;//inflict damage

            console.log(playerOneName+":"+playerOneHealth+" *Start* " +playerTwoName+":"+playerTwoHealth);/* console.log
            Spiderman player health Start Batman player health*/

            var results = winnerCheck();//variable result winner check function
            console.log(results);//console.log winner check

            if(results==="no winner"){// if no winner add a round loop
                round++;
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* " +playerTwoName+":"+playerTwoHealth);/*
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

        if(playerOneHealth<1&&playerTwoHealth<1){//if boh players health goes below 1
            result = "You Both Die";//they both die
        }else if(playerOneHealth<1){//Spidermans health goes below 1
            result =playerTwoName+" WINS!!!"//Batman wins
        }else if(playerTwoName<1){//Batmans health goes below 1
            result =playerOneName+" WINS!!!"//Spiderman wins
        };

        return result;//Show result

    };

    /****** The program gets started below ******/
    console.log ("program starts here");// console.log program starts here
    fight();//begin fight

})();