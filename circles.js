var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var drawCircle = function(x, y, context, radius, color ){
    var counterClockwise = false;
    context.beginPath();
    context.arc(x, y, radius, 0 ,  2* Math.PI , counterClockwise);
    context.fillStyle = color;
    context.fill();
}

var drawCircles  = function( context, circles , selectedIndex) {
    var currentOffset = 5;
    var middle = Math.floor(circles.length/2);


    var xBase = 0;
    var xOffset = 4;
    for(var ii = 0; ii < circles.length; ii++) {
        var circle = circles[ii];
        var radius = circle.radius;
        var x = 0;
        x  = currentOffset;
        var color = "white";
        if (ii === selectedIndex ) {
            color = "red";
        }

        if (ii >= middle ) {
            xBase -=xOffset;
        } else {
            xBase +=xOffset;
        }
        drawCircle(x+radius , 100 + xBase  , context, radius, color);
        currentOffset += (radius*2);
    }
};



// Sample implementation:
var circles = [];
for(var ii = 0; ii < 6; ii++) {
    var radiusRandom = Math.random();
    var radius = 10 * radiusRandom + 2;
    radius = Math.ceil(radius);
    circles.push({"radius": radius});
}



var max = function(numbers) {
    var length = numbers.length;
    max = numbers[0];
    for (var ii = 0; ii < length; ii++) {
        if (max < numbers[ii]) {
            max = numbers[ii];
        }
    }

    return max;
}


console.log('max', max([1,5,50,2,3,5]));
var selectedIndex = Math.floor( Math.random() * 6);
drawCircles(context, circles, selectedIndex );

// */
