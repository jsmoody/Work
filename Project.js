var color = d3.scale.category20();
var width = 1680;
var height = 960;
var radius = 25;

var canvas = d3.select('body')
  .append('svg')
  .attr('oncontextmenu', 'return false;')
  .attr('width', width)
  .attr('height', height);

var length = 10; // user defined length

var createData = function() {
                for(var i = 0; i < length; i++) {
                  var x = Math.random()*1;
                  if (x < 0.5 ) {
                    x = 0;
                  } else {
                    x = 1;
                  }
                    data[i] = x;
                }
              }

var createNodes = function(x, y, position, z) {
                // if (position === 0) {
                //   var color = source;
                // } else if (d[i] == 1) {
                //   var color = dependant;
                // } else {
                //   var color = undependant;
                // }

                var circle = canvas.append('circle')
                            .attr('cx', x)
                            .attr('cy', y)
                            .attr('r', radius)
                            .attr("fill",function(d,i){return color(i);});
                          }

var createLine = function(x1, y1, x2, y2) {
                var line = canvas.append('line')
                          .attr('x1', x1)
                          .attr('y1', y1)
                          .attr('x2', x2)
                          .attr('y2', y2)
                          .attr('stroke', 'green')
                          .attr('stroke-width', 10)
                        }
var data = [];
createData();
for(i = 0; i < length; i++){
  var ranX = Math.random()*width;
  var ranY = Math.random()*height;

  if (ranX + radius > width) {
    ranX = ranX - (ranX + radius - width);
  } else if (ranX - radius < 0) {
      ranX = ranX - (ranX - radius);
  };

  if (ranY - radius < 0) {
      ranY = ranY - (ranY - radius);
  } else if (ranY + radius > height) {
      ranY= ranY - (ranY + radius - height);
  };


  createNodes(ranX, ranY, i, data);
};

// for(i = 0; i < length; i++){
//   var data = [];
//   createData();
//   var x  = data
//   console.log(x);
//
//   // for(j = 0; j < length; i++) {
//   //   if (data[j] === 1) {
//   //     console.log('Service' + i + 'depends on servie' + j + '.')
//   //     //createLine(xLocation[i], yLocation[i], xLocation[j], yLocation[j])
//   //   }
//   //
//   // }
// }
