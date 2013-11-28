      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      var drawCircle = function(x, y, context, radius ){
          var counterClockwise = false;

          context.beginPath();
          context.arc(x, y, radius, 0 ,  2* Math.PI , counterClockwise);
          context.fillStyle = 'green';
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

              var y = 0;
              currentOffset += radius*2;
              x  = currentOffset
              drawCircle(x, 100 , context,   radius);
          }
  };



  // Sample implementation:
  var circles = [
  ];
  for(var ii = 0; ii < 10 ; ii++) {
      circles.push({"radius": 2*ii});
  }

  drawCircles(context, circles, 3);

