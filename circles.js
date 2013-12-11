var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ctx=context;



var drawLine = function(x1, y1, x2, y2) {

ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.strokeStyle = '#fff';
ctx.lineTo(x2, y2);
ctx.stroke();

}




var max = 100;
var startX = 0;
var endX = 100;
var multiple = 8;
// Draw lines BG
for (var ii = 0; ii < 100 ; ii++) {
    drawLine(startX,ii*multiple,  ii*multiple, 0);
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


drawCircle(100, 100, 55, "#242424");

var lineWidth = 20;
drawArc(100, 100, 55+lineWidth/2,  "red", 0.8, lineWidth);
var newWidth = 20;
for(var ii = 0 ; ii < 10; ii ++) {
    drawArc(100, 100, 55+lineWidth + newWidth/2,  "#242424", 1.0,  newWidth+5);
    newWidth +=ii*15
}
/*
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var drawCircle = function(x, y, context, radius, color ){
    var counterClockwise = false;
    context.beginPath();
    context.arc(x, y, radius, 0 ,  2* Math.PI , counterClockwise);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

var drawCircles  = function( context, circles , selectedIndex) {
    var currentOffset = 5;
    for(var ii = 0; ii < circles.length; ii++) {
        var circle = circles[ii];
        var radius = circle.radius;
        var x = 0;
        x  = currentOffset;
        var color = "green";
        if (ii === selectedIndex ) {
            color = "white";
        }
        drawCircle(x+radius, 100 , context, radius, color);
        currentOffset += (radius*2);
    }
};



// Sample implementation:
var circles = [];
for(var ii = 0; ii < 10 ; ii++) {
    var radiusRandom = Math.random();
    var radius = 30 * radiusRandom + 2;
    radius = Math.ceil(radius);
    circles.push({"radius": radius});
}

var selectedIndex = Math.floor( Math.random() * 10);
drawCircles(context, circles, selectedIndex );

*/
