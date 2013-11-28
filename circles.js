      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      var drawCircle = function(x, y, context, color,  endingAngle, radius ){
          var counterClockwise = false;

          context.beginPath();
          context.arc(x, y, radius, 0 ,  2* Math.PI , counterClockwise);
          context.fillStyle = 'green';
          context.fill();
          context.lineWidth = 5;
          context.strokeStyle = '#003300';
          context.stroke();
      }

      var radius = 10;
      drawCircle(20, 20, context, 'yellow', 0.4,  radius);

