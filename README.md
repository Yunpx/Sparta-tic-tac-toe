# Sparta-tic-tac-toe

The Task is to implement TicTacToe game in jQuery, using provided html and css.


## Logic explained
- Set a turn boolean, switches between 2 players.
- Adding X class and O class in alternating turns.

- Create a multidimensional array, containing the winning data-num values for the td tag.

- Loop through the whole array, every time the array value matches with the selected data-num value.
```jQuery
for (var i = 0; i < winConditions.length; i++) {
  for (var j = 0; j < winConditions[i].length; j++) {
    if(number ==winConditions[i][j]){
      check if it has class of X or O ,then return booleanSSSSSS
    }
  }
}
```
- loop that inner array, to see if they all have X tag or all have O tag. Only if all of them returns true, it will then return true outside the for loop. stating victory.
```jQuery
winConditions[i][k] //k for the third loop
```

## Issues

>I think the logic is correct. But I was not able to find the solution on how to use the data-* attributes and use it in jQuery, for my array checks. Due to time constraints, I was unable to finish implementation.
