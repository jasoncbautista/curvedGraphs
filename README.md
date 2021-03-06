# Hipster Charts

Interesting alternatives to standard bar graphs.  Simple in design, and not too complex. 


## Curved Bar Graph

Curved graphs are simple bar graphs in a curve shape.



```javascript 
var canvasEl =  document.getElementById('myCanvas');
HipsterGraphs.drawCurves(canvasEl, 0.3, 0.8, 0.4, );
```


This will take the largest number and use it as a reference to graph those values relative to the largest graph.



![alt text](https://raw.github.com/jasoncbautista/curvedGraphs/master/curves.png "Curves")



## Circles  Graph

Another graph to represent "bucketing" of elements. 

```javascript
var canvasEl =  document.getElementById('myCanvas');
var dataArray = [0.1, 0.3, 0.5, 0.11, 0.09];
HipsterGraphs.drawCircles(canvasEl, dataArray);
```

![alt text](https://raw.github.com/jasoncbautista/curvedGraphs/master/circles.png "Circles")


## Circle Pattern

A simple percentage graph:

```javascript
var canvasEl =  document.getElementById('myCanvas');
HipsterGraphs.circlePattern(canvasEl, 0.75);
````
![alt text](https://raw.github.com/jasoncbautista/curvedGraphs/master/circlePattern.png "Circle with Pattern")


### Dependecies:

For some of the graphs, Charts.js is needed:

http://www.chartjs.org/


We have modified some of the chart.js code so it is included with the codebase of HipsterCharts.


