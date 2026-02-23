var dice1 = document.createElement('div');
var dice2 = document.createElement('div');
var lmDot = document.createElement('div');
var ltlDot = document.createElement('div');
var lmlDot = document.createElement('div');
var lblDot = document.createElement('div');
var ltrDot = document.createElement('div');
var lmrDot = document.createElement('div');
var lbrDot = document.createElement('div');

var rmDot = document.createElement('div');
var rtlDot = document.createElement('div');
var rmlDot = document.createElement('div');
var rblDot = document.createElement('div');
var rtrDot = document.createElement('div');
var rmrDot = document.createElement('div');
var rbrDot = document.createElement('div');

dice1.className = 'dice-1';
dice2.className = 'dice-2';
lmDot.className = 'dot-1';
ltlDot.className = 'leftTopLeftDot';
lmlDot.className = 'leftMiddleLeftDot';
lblDot.className = 'leftBottomLeftDot';
ltrDot.className = 'leftTopRightDot';
lmrDot.className = 'leftMiddleRightDot';
lbrDot.className = 'leftBottomRightDot';

rmDot.className = 'rightMiddleDot';
rtlDot.className = 'rightTopLeftDot';
rmlDot.className = 'rightMiddleLeftDot';
rblDot.className = 'rightBottomLeftDot';
rtrDot.className = 'rightTopRightDot';
rmrDot.className = 'rightMiddleRightDot';
rbrDot.className = 'rightBottomRightDot';

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

rmDot.style.height = dotSize + 'px';
rmDot.style.width = dotSize + 'px';

rtlDot.style.height = dotSize + 'px';
rtlDot.style.width = dotSize + 'px';

rmlDot.style.height = dotSize + 'px';
rmlDot.style.width = dotSize + 'px';

rblDot.style.height = dotSize + 'px';
rblDot.style.width = dotSize + 'px';

rtrDot.style.height = dotSize + 'px';
rtrDot.style.width = dotSize + 'px';

rmrDot.style.height = dotSize + 'px';
rmrDot.style.width = dotSize + 'px';

rbrDot.style.height = dotSize + 'px';
rbrDot.style.width = dotSize + 'px';
// left dice
document.getElementById('container').appendChild(dice1);
document.getElementById('container').appendChild(dice2);
// left dice dots
document.getElementById('leftDotContainer').appendChild(lmDot);
document.getElementById('leftDotContainer').appendChild(ltlDot);
document.getElementById('leftDotContainer').appendChild(lmlDot);
document.getElementById('leftDotContainer').appendChild(lblDot);
document.getElementById('leftDotContainer').appendChild(ltrDot);
document.getElementById('leftDotContainer').appendChild(lmrDot);
document.getElementById('leftDotContainer').appendChild(lbrDot);

document.getElementById('rightDotContainer').appendChild(rmDot);
document.getElementById('rightDotContainer').appendChild(rtlDot);
document.getElementById('rightDotContainer').appendChild(rmlDot);
document.getElementById('rightDotContainer').appendChild(rblDot);
document.getElementById('rightDotContainer').appendChild(rtrDot);
document.getElementById('rightDotContainer').appendChild(rmrDot);
document.getElementById('rightDotContainer').appendChild(rbrDot);

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
        document.querySelector(".leftTopRightDot").style.zIndex = "0";
        document.querySelector(".leftMiddleRightDot").style.zIndex = "0";
        document.querySelector(".leftBottomRightDot").style.zIndex = "2";
    }

    else if(dice1roll == 3) {
        document.querySelector(".dot-1").style.zIndex = "2";
        document.querySelector(".leftTopLeftDot").style.zIndex = "2";
        document.querySelector(".leftMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".leftBottomLeftDot").style.zIndex = "0";
        document.querySelector(".leftTopRightDot").style.zIndex = "0";
        document.querySelector(".leftMiddleRightDot").style.zIndex = "0";
        document.querySelector(".leftBottomRightDot").style.zIndex = "2";
    }

    else if(dice1roll == 4) {
        document.querySelector(".dot-1").style.zIndex = "0";
        document.querySelector(".leftTopLeftDot").style.zIndex = "2";
        document.querySelector(".leftMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".leftBottomLeftDot").style.zIndex = "2";
        document.querySelector(".leftTopRightDot").style.zIndex = "2";
        document.querySelector(".leftMiddleRightDot").style.zIndex = "0";
        document.querySelector(".leftBottomRightDot").style.zIndex = "2";
    }

    else if(dice1roll == 5) {
        document.querySelector(".dot-1").style.zIndex = "2";
        document.querySelector(".leftTopLeftDot").style.zIndex = "2";
        document.querySelector(".leftMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".leftBottomLeftDot").style.zIndex = "2";
        document.querySelector(".leftTopRightDot").style.zIndex = "2";
        document.querySelector(".leftMiddleRightDot").style.zIndex = "0";
        document.querySelector(".leftBottomRightDot").style.zIndex = "2";
    }

    else if(dice1roll == 6) {
        document.querySelector(".dot-1").style.zIndex = "0";
        document.querySelector(".leftTopLeftDot").style.zIndex = "2";
        document.querySelector(".leftMiddleLeftDot").style.zIndex = "2";
        document.querySelector(".leftBottomLeftDot").style.zIndex = "2";
        document.querySelector(".leftTopRightDot").style.zIndex = "2";
        document.querySelector(".leftMiddleRightDot").style.zIndex = "2";
        document.querySelector(".leftBottomRightDot").style.zIndex = "2";
    }

    const dice2roll = Math.floor(Math.random() * 6) + 1;

    if(dice2roll == 1) {
        document.querySelector(".rightMiddleDot").style.zIndex = "2";
        document.querySelector(".rightTopLeftDot").style.zIndex = "0";
        document.querySelector(".rightMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".rightBottomLeftDot").style.zIndex = "0";
        document.querySelector(".rightTopRightDot").style.zIndex = "0";
        document.querySelector(".rightMiddleRightDot").style.zIndex = "0";
        document.querySelector(".rightBottomRightDot").style.zIndex = "0";
    }

    else if(dice2roll == 2) {
        document.querySelector(".rightMiddleDot").style.zIndex = "0";
        document.querySelector(".rightTopLeftDot").style.zIndex = "2";
        document.querySelector(".rightMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".rightBottomLeftDot").style.zIndex = "0";
        document.querySelector(".rightTopRightDot").style.zIndex = "0";
        document.querySelector(".rightMiddleRightDot").style.zIndex = "0";
        document.querySelector(".rightBottomRightDot").style.zIndex = "2";
    }

    else if(dice2roll == 3) {
        document.querySelector(".rightMiddleDot").style.zIndex = "2";
        document.querySelector(".rightTopLeftDot").style.zIndex = "2";
        document.querySelector(".rightMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".rightBottomLeftDot").style.zIndex = "0";
        document.querySelector(".rightTopRightDot").style.zIndex = "0";
        document.querySelector(".rightMiddleRightDot").style.zIndex = "0";
        document.querySelector(".rightBottomRightDot").style.zIndex = "2";
    }

    else if(dice2roll == 4) {
        document.querySelector(".rightMiddleDot").style.zIndex = "0";
        document.querySelector(".rightTopLeftDot").style.zIndex = "2";
        document.querySelector(".rightMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".rightBottomLeftDot").style.zIndex = "2";
        document.querySelector(".rightTopRightDot").style.zIndex = "2";
        document.querySelector(".rightMiddleRightDot").style.zIndex = "0";
        document.querySelector(".rightBottomRightDot").style.zIndex = "2";
    }

    else if(dice2roll == 5) {
        document.querySelector(".rightMiddleDot").style.zIndex = "2";
        document.querySelector(".rightTopLeftDot").style.zIndex = "2";
        document.querySelector(".rightMiddleLeftDot").style.zIndex = "0";
        document.querySelector(".rightBottomLeftDot").style.zIndex = "2";
        document.querySelector(".rightTopRightDot").style.zIndex = "2";
        document.querySelector(".rightMiddleRightDot").style.zIndex = "0";
        document.querySelector(".rightBottomRightDot").style.zIndex = "2";
    }

    else if(dice2roll == 6) {
        document.querySelector(".rightMiddleDot").style.zIndex = "0";
        document.querySelector(".rightTopLeftDot").style.zIndex = "2";
        document.querySelector(".rightMiddleLeftDot").style.zIndex = "2";
        document.querySelector(".rightBottomLeftDot").style.zIndex = "2";
        document.querySelector(".rightTopRightDot").style.zIndex = "2";
        document.querySelector(".rightMiddleRightDot").style.zIndex = "2";
        document.querySelector(".rightBottomRightDot").style.zIndex = "2";
    }
}

function theme1() {
    dice1.style.backgroundColor = "black";
    dice2.style.backgroundColor = "black";
    dice2.style.borderWidth = '3px';
    dice2.style.borderColor = 'white';
    dice2.style.borderStyle = 'solid';
    dice1.style.borderWidth = '3px';
    dice1.style.borderColor = 'white';
    dice1.style.borderStyle = "solid";

    lmDot.style.backgroundColor = 'white';
    ltlDot.style.backgroundColor = 'white';
    lmlDot.style.backgroundColor = 'white';
    lblDot.style.backgroundColor = 'white';
    ltrDot.style.backgroundColor = 'white';
    lmrDot.style.backgroundColor = 'white';
    lbrDot.style.backgroundColor = 'white';

    rmDot.style.backgroundColor = 'white';
    rtlDot.style.backgroundColor = 'white';
    rmlDot.style.backgroundColor = 'white';
    rblDot.style.backgroundColor = 'white';
    rtrDot.style.backgroundColor = 'white';
    rmrDot.style.backgroundColor = 'white';
    rbrDot.style.backgroundColor = 'white';
}

function theme2() {
    dice1.style.backgroundColor = 'lightblue';
    dice1.style.borderWidth = '3px';
    dice1.style.borderColor = 'red';
    dice1.style.borderStyle = 'solid';
    dice2.style.backgroundColor = 'lightblue';
    dice2.style.borderWidth = '3px';
    dice2.style.borderColor = 'red';
    dice2.style.borderStyle = 'solid';

    lmDot.style.backgroundColor = 'black';
    ltlDot.style.backgroundColor = 'black';
    lmlDot.style.backgroundColor = 'black';
    lblDot.style.backgroundColor = 'black';
    ltrDot.style.backgroundColor = 'black';
    lmrDot.style.backgroundColor = 'black';
    lbrDot.style.backgroundColor = 'black';

    rmDot.style.backgroundColor = 'black';
    rtlDot.style.backgroundColor = 'black';
    rmlDot.style.backgroundColor = 'black';
    rblDot.style.backgroundColor = 'black';
    rtrDot.style.backgroundColor = 'black';
    rmrDot.style.backgroundColor = 'black';
    rbrDot.style.backgroundColor = 'black';
}

function theme3() {
    /* Maybe add more customization for user */
    /* like header dice backround, and some color option buttons */
    /* do that for every element in the dice */
}