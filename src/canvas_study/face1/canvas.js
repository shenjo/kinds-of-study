function draw () {
  const canvasEle = document.getElementById('canvas');
  let context = canvasEle.getContext('2d');
  context.fillStyle = 'rgb(200,0,0)';
  drawRectangles_way1(context, 10, 10, 50, 50);

  drawRectangles_way2(context, 50, 50, 60, 60);

  drawRectangles_way3(context, 20, 20, 30, 30);

  drawTriangle(context);
  drawSmile();
  drawSpeechBallon(context);
  drawGame();
}

draw();


/**
 * draw rectangles
 */

function drawRectangles_way1 (context, x, y, width, height) {
  context.fillRect(x, y, width, height)
}

function drawRectangles_way2 (context, x, y, width, height) {
  context.strokeRect(x, y, width, height)
}

function drawRectangles_way3 (context, x, y, width, height) {
  context.clearRect(x, y, width, height)
}

/**
 * draw Paths
 * step1: create path   beginPath()
 * step2: draw    methods:  stoke()  fill()
 * step3: close path   closePath()
 */

function drawTriangle (context) {
  context.beginPath();

  context.moveTo(200, 50);

  context.lineTo(300, 0);
  context.lineTo(300, 100);

  context.fill();  // Note: When you call fill(), any open shapes are closed automatically, so you don't have to call closePath().
}


/**
 * draw Smile
 */
function drawSmile (context = document.getElementById('smile').getContext('2d')) {
  let twoTT = Math.PI * 2;
  context.beginPath();

  context.arc(200, 200, 200, 0, twoTT, false);
  context.moveTo(175, 100);
  context.arc(150, 100, 25, 0, twoTT, true);
  context.moveTo(225, 100);
  context.arc(250, 100, 25, Math.PI, 0, true);
  context.arc(250, 100, 25, 0, Math.PI, true);

  context.moveTo(275, 200);
  context.arc(200, 200, 75, 0, Math.PI, false);


  context.stroke();

  context.closePath();

}

/**
 *draw Bezier and quadratic curves
 * quadraticCurveTo(cp1x, cp1y, x, y)
 *
 * bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
 */

function drawSpeechBallon (context) {
  context.beginPath();
  context.moveTo(75, 25);
  context.quadraticCurveTo(25, 25, 25, 62.5);
  context.quadraticCurveTo(25, 100, 50, 100);
  context.quadraticCurveTo(50, 120, 30, 125);
  context.quadraticCurveTo(60, 120, 65, 100);
  context.quadraticCurveTo(125, 100, 125, 62.5);
  context.quadraticCurveTo(125, 25, 75, 25);
  context.stroke();
}

/**
 * draw game
 */

function roundedRect (context, x, y, witdh, height, radius) {
  context.beginPath();

  context.moveTo(x, y + radius);
  context.lineTo(x, y + height - radius);
  context.quadraticCurveTo(x, y + height, x + radius, y + height);
  context.lineTo(x + witdh - radius, y+height);
  context.quadraticCurveTo(x + witdh, y + height, x + witdh, y + height - radius);
  context.lineTo(x + witdh, y + radius);
  context.quadraticCurveTo(x + witdh, y, x + witdh - radius, y);
  context.lineTo(x + radius, y);
  context.quadraticCurveTo(x, y, x, y + radius);

  context.stroke();
}

function drawGame (context = document.getElementById('game').getContext('2d')) {
  let baseXpoint = 50,baseYPoint=50;
  roundedRect(context,baseXpoint,baseYPoint,300,300,15);
  roundedRect(context,baseXpoint+50,baseYPoint+60,60,60,5);
  roundedRect(context,baseXpoint+50,baseYPoint+180,60,60,5);
  roundedRect(context,baseXpoint+200,baseYPoint+60,60,60,5);
  roundedRect(context,baseXpoint+200,baseYPoint+180,60,60,5);

  // draw eater
  context.beginPath();
  context.arc(baseXpoint+25,baseYPoint+30,15,Math.PI/7,-Math.PI/7,false);
  context.lineTo(baseXpoint+20,baseYPoint+30);
  context.fill();

  // draw food
  for(let startXpoint=baseXpoint+50,ypoint=baseXpoint+27.5;startXpoint<=350-5;startXpoint+=20){
    context.fillRect(startXpoint,ypoint,5,5);
  }
}

