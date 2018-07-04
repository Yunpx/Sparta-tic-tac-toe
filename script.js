$(document).ready(function() {
  var playerTurn = true;
//click on the block, block changes to X.
//Next click, will display O
//$("[attribute=value]")

// console.log($("td").attr("data-num"))
var theOne;
  $("td").click(function () {
    if(playerTurn){
      $(this).addClass("X").html("X");
      console.log($(this).attr("data-num"));
      theOne = $(this).attr("data-num");
      playerTurn=false;
      win(theOne);
    }else {
      $(this).addClass("O").html("O");
      playerTurn = true;
      console.log($(this).attr("data-num"));
      theOne = $(this).attr("data-num")
      win(theOne);
    }
  });


    var winConditions= [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [2,5,8],
      [1,4,7],
      [0,3,6],
      [0,4,8],
      [2,4,6]
    ]
  function win(number) {
    console.log("number is "+number);
    for (var i = 0; i < winConditions.length; i++) {
      for (var j = 0; j < winConditions[i].length; j++) {
        if(number ==winConditions[i][j]){
          console.log("i = "+ i+" and j = "+ j);
          for (var k = 0; k < winConditions[i].length; k++) {
            console.log("win cond "+ winConditions[i][k]);
            // if($("td").attr("data-num",winConditions[i][k]).hasClass('X')==false){
            //   console.log("i am false");
            //   return false;
            // }
            // // console.log("i am true");
            // return true;
          }

          //5 , does 2 have x , does 5 have x , deos 8 have x
          //
          // does it have X?

          // if($("td").attr("data-num",winConditions[number][j]).hasClass('X')){
             // console.log("yes");
          // }
        }
      }
      // var hay = allTrue(i);
      //console.log(hay);
    }
  }

  function allTrue(number){
    for(j=0;j<3;j++){
      // console.log("win"+ winConditions[number][j]);
      // console.log($("td").attr("data-num",winConditions[number][j]).hasClass('2'));
      // if($("td").attr("data-num",winConditions[number][j]).hasClass('X'));
        // if($("td").attr("data-num",winConditions[number][j]).className!= "X"){
          //return false;
       //}
      }
    return true;
  }


  // $("[data-num=1]")



  /*for (var i = 0; i < winConditions.length; i++) {
      if(x-positions = winConditions[i]) x win
      if(o-positions = winConditions[i]) o win
  }
  for (var i = 0; i < array.length; i++) {
    if(array[])
  }
  */
// var winConditions= [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [2,5,8],
//   [1,4,7],
//   [0,3,6],
//   [0,4,8],
//   [2,4,6]
//
// j=0;
// for (var i = 0; i < 3; i++) {
//
//     for (var j = 0; j <winConditions; j++) {
//        x[i][j]; //2
//   }
//
// }
//
// x[i][j],x[i][j+1],x[i][j+2]
// if[0]
  //setting winning condtions
  /*
row win 3.
colum win
diagonal win
  */


//"[data-num=2]"

});

/*

set wining condtions{
class must be all X . or all O

X |
row[ [0,1,2],[3,4,5],[6,7,8] ]
column[ [0,3,6], [1,4,7], [2,5,8]]
diagonal[]


O | row[] column[] diagonal[]

012
345
678
258
147
036
048
246

row = [3, 12, 21]
column = [9, 12, 15]
diagonal = [12, 12]
}


0 1 2
3 4 5
6 7 8

display new page wining

*/
