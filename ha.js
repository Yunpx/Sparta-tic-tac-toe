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

for (var i = 0; i < winConditions.length; i++) {
  var hay = allTrue(i);
  console.log(hay);
}

function allTrue(number){
      for(j=0;j<3;j++){
          if($("td").attr("data-num",winConditions[number][j]).className!= "X" ) return false;
        }
      return true;
  }
