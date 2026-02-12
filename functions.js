var dice1 = document.createElement('div');
var dice2 = document.createElement('div');
var lmDot = document.createElement('div');
var ltlDot = document.createElement('div');
var lmlDot = document.createElement('div');
var lblDot = document.createElement('div');
var ltrDot = document.createElement('div');
var lmrDot = document.createElement('div');
var lbrDot = document.createElement('div');

dice1.className = 'dice-1';
dice2.className = 'dice-2';
lmDot.className = 'dot-1';
ltlDot.className = 'leftTopLeftDot';
lmlDot.className = 'leftMiddleLeftDot';
lblDot.className = 'leftBottomLeftDot';
ltrDot.className = 'leftTopRightDot';
lmrDot.className = 'leftMiddleRightDot';
lbrDot.className = 'leftBottomRightDot';


var size = 200;
var dotSize = 40;
dice1.style.width = size + 'px';
dice1.style.height = size + 'px';

dice2.style.width = size + 'px';
dice2.style.height = size + 'px';

lmDot.style.height = dotSize + 'px';
lmDot.style.width = dotSize + 'px';

ltlDot.style.height = dotSize + 'px';
ltlDot.style.width = dotSize + 'px';

lmlDot.style.height = dotSize + 'px';
lmlDot.style.width = dotSize + 'px';

lblDot.style.height = dotSize + 'px';
lblDot.style.width = dotSize + 'px';

ltrDot.style.height = dotSize + 'px';
ltrDot.style.width = dotSize + 'px';

lmrDot.style.height = dotSize + 'px';
lmrDot.style.width = dotSize + 'px';

lbrDot.style.height = dotSize + 'px';
lbrDot.style.width = dotSize + 'px';

document.getElementById('container').appendChild(dice1);
document.getElementById('container').appendChild(dice2);
document.getElementById('leftDotContainer').appendChild(lmDot);
document.getElementById('leftDotContainer').appendChild(ltlDot);
document.getElementById('leftDotContainer').appendChild(lmlDot);
document.getElementById('leftDotContainer').appendChild(lblDot);
document.getElementById('leftDotContainer').appendChild(ltrDot);
document.getElementById('leftDotContainer').appendChild(lmrDot);
document.getElementById('leftDotContainer').appendChild(lbrDot);

function rollDice() {
    const dice1roll = Math.floor(Math.random() * 6) + 1;
    
    if(dice1roll == 1) {
        document.querySelector(".dot-1").style.zIndex = "2";
        document.querySelector(".leftTopLeftDot").style.zIndex = "0";
        document.querySelector(".leftMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".leftBottomLeftDot").style.zIndex = "0";
        document.querySelector(".leftTopRightDot").style.zIndex = "0";
        document.querySelector(".leftMiddleRightDot").style.zIndex = "0";
        document.querySelector(".leftBottomRightDot").style.zIndex = "0";
    }

    else if(dice1roll == 2) {
        document.querySelector(".dot-1").style.zIndex = "0";
        document.querySelector(".leftTopLeftDot").style.zIndex = "2";
        document.querySelector(".leftMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".leftBottomLeftDot").style.zIndex = "0";
    }
}