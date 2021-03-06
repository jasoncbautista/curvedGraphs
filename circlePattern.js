var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ctx=context;



var drawLine = function(x1, y1, x2, y2) {

ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.strokeStyle = '#eee';
ctx.lineTo(x2, y2);
ctx.stroke();

}




var max = 100;
var startX = 0;
var endX = 100;
var multiple = 5;
// Draw lines BG
for (var ii = 0; ii < 100 ; ii++) {
    drawLine(startX +10,ii*multiple,  ii*multiple + 10, 0);
}


// Draw circle
//

var drawCircle = function(x, y,  radius, color ){
    var counterClockwise = false;
    context.beginPath();
    context.arc(x, y, radius, 0 ,  2* Math.PI , counterClockwise);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#242424';
    context.stroke();
}


var drawArc= function(x, y,  radius, color, arc, lineWidth){
    var counterClockwise = false;
    context.beginPath();
    context.arc(x, y, radius, 0 ,  arc * 2 * Math.PI , counterClockwise);
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.stroke();
}


//drawCircle(100, 100, 30, "#242424");

var lineWidth = 25;
// drawArc(100, 100, 30+lineWidth/2,  "red", 0.75, lineWidth);
var newWidth = 20;
for(var ii = 0 ; ii < 10; ii ++) {
    drawArc(100, 100, 30+lineWidth + newWidth/2,  "#242424", 1.0,  newWidth);
    newWidth +=ii*25
}


// SHould draw these last:
var lineWidth = 25;
drawArc(100, 100, 30+lineWidth/2,  "red", 0.75, lineWidth);

drawCircle(100, 100, 30, "#242424");

