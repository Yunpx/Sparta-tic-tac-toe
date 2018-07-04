$(document).ready(function() {
  var playerTurn = true;
//click on the block, block changes to X.
//Next click, will display O
//$("[attribute=value]")

// console.log($("td").attr("data-num"))
  var theOne=0;
  $("td").click(function () {
    if(playerTurn){
      $(this).addClass("X").html("X");
      theOne = $(this).data("num");
      // console.log("first"+theOne);
      playerTurn=false;
      // console.log($("td").data("num",1).hasClass('X'));
      $('td[data-slide="0"]')
      //win(theOne);
    }else {
      $(this).addClass("O").html("O");
      theOne = $(this).data("num");
      // console.log("second"+theOne);
      playerTurn = true;
      // console.log($("td").attr("data-num",theOne).hasClass('X'));
      //win(theOne);
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

            console.log("Does "+winConditions[i][k]+" have X ? "+$("td").data("num",winConditions[i][k]).hasClass('X'));
            // if($("td").data("num",winConditions[i][k]).hasClass('X')==false){
            //   console.log("i am false");
            //   return false;  ony returns true if all returns true
            // }
            // // console.log("i am true");
            // return true;
          }
        }
      }
    }
  }

//"[data-num=2]"

});
