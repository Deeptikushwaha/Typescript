"use strict";
//Enums - used to define a set of named constants.
// type Direction = 'up' | 'down' | 'left' | 'right';
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed === Direction.Up) {
        console.log('Moving Up');
    }
    else if (keyPressed === Direction.Down) {
        console.log('Moving Down');
    }
    else if (keyPressed === Direction.Left) {
        console.log('Moving Left');
    }
    else if (keyPressed === Direction.Right) {
        console.log('Moving Right');
    }
    else {
        console.log('Invalid key pressed');
    }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
