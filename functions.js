var dice1 = document.createElement('div');
var dice2 = document.createElement('div');
var lmDot = document.createElement('div');

dice1.className = 'dice-1';
dice2.className = 'dice-2';
lmDot.className = 'dot-1';

var size = 200;
var dotSize = 40;
dice1.style.width = size + 'px';
dice1.style.height = size + 'px';

dice2.style.width = size + 'px';
dice2.style.height = size + 'px';

lmDot.style.height = dotSize + 'px';
lmDot.style.width = dotSize + 'px';

document.getElementById('container').appendChild(dice1);
document.getElementById('container').appendChild(dice2);
document.getElementById('leftDotContainer').appendChild(lmDot);

function rollDice() {
    lmDot.style.zIndex = 0;
}