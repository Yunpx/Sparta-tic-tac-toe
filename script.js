$(document).ready(function() {
  var playerTurn = true;
//click on the block, block changes to X.
//Next click, will display O
//$("[attribute=value]")

// console.log($("td").attr("data-num"))
  var theOne=0;

  $("[data-num]").click(function () {
    if(playerTurn && $(this).html() ==""){
      $(this).addClass("X").html("X");
      theOne = $(this).data("num");
      // console.log("first"+theOne);
      playerTurn=false;
      // console.log($('[data-num ="' + theOne + '"]').hasClass('X'));
      // $('td[data-num="0"]')
      console.log("X win yet ? "+win(theOne));
    }else if(!playerTurn && $(this).html() =="") {
      $(this).addClass("O").html("O");
      theOne = $(this).data("num");
      // console.log("second"+theOne);
      playerTurn = true;
      // console.log($('[data-num ="' + theOne + '"]').hasClass('X'));

      // console.log($("td").attr("data-num",theOne).hasClass('X'));
      // win(theOne);
      console.log("X win yet ? "+win(theOne));

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

    var counter = 1;

    function win(number) {
      //number is data-num of td being clicked
      console.log("number is "+number);
      //loops array of array
      for (var i = 0; i < winConditions.length; i++) {
        //loops the inner array of each
        for (var j = 0; j < winConditions[i].length; j++) {
          //check if the value in array = selecte data-num
          if(number ==winConditions[i][j]){
            console.log("i = "+ i+" and j = "+ j);
            //loops all the arrays that contains data-num
             for (var k = 0; k < winConditions[i].length; k++){
               //
                if(!$('[data-num ="' + winConditions[i][k] + '"]').hasClass('X')){
                  counter = 1;
                }
                else {
                  counter+=1;
                }
               // console.log("got it?"+$('[data-num ="' + winConditions[i][k] + '"]').hasClass('X'));
             }
            //  if(!$('[data-num ="' + winConditions[i][k] + '"]').hasClass('X')) return false;
            // return true;
          }
        }
      }
      return counter;
      // return true;
    }

  //"[data-num=2]"

});
