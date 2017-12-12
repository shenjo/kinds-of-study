(() => {
  const canvasEle = document.getElementById('canvas');
  let context = canvasEle.getContext('2d');
  pathDrawRectCirCle(context);
  drawRectUsePathSVG(context);
  lineAttributeExample(context);
  drawLineDashRect(context);
  drawLinerGradientExample();
  drawRadialGradientExample();
  patternExample(context);
  textShadows(context);
  drawText();
})();

/**
 * Draw Rect , Circle use Path Object
 */
function pathDrawRectCirCle (context) {
  const rectPath = new Path2D();
  rectPath.rect(20, 20, 50, 25);

  const circlePath = new Path2D();
  circlePath.arc(90, 60, 25, 0, Math.PI * 2, false);

  context.fill(rectPath);
  context.stroke(circlePath);
}

/**
 * Draw Rect use Path with SVG
 */

function drawRectUsePathSVG (context) {
  const rectPath = new Path2D('M100 100 h 80 v 80 h -80 Z');
  context.fill(rectPath);
}

/**
 * Styles
 * fillStyle strokeStyle
 * Transparency (透明度） globalAlpha = transparencyValue 0.0 <==> 1.0
 */

function lineAttributeExample (context) {
  for (let i = 0; i < 10; i++) {
    context.lineWidth = 1 + i;
    context.beginPath();
    context.moveTo(5 + i * 14, 5);
    context.lineTo(5 + i * 14, 140);
    context.stroke();
  }

  // lineCap :[butt,round,square] default butt
  // lineJoin  :[round,bevel, miter] default miter
}

/**
 * line dash
 */
function drawLineDashRect (context) {
  context.lineWidth = 1;
  context.setLineDash([1, 1]);
  context.lineDashOffset = -100;
  context.strokeRect(0, 150, 100, 100);
}

/**
 * 渐变 Gradients
 * createLinearGradient(x1, y1, x2, y2)
 * createRadialGradient(x1, y1, r1, x2, y2, r2)
 * gradient.addColorStop(position, color)
 */

function drawLinerGradientExample (context = document.getElementById('gradient').getContext('2d')) {
  const linerGradient = context.createLinearGradient(0,0,100,50);
  linerGradient.addColorStop(0.5,'blue');
  linerGradient.addColorStop(1,'red');

  context.fillStyle = linerGradient;

  context.fillRect(0,0,200,50)
}

function drawRadialGradientExample (context = document.getElementById('gradient').getContext('2d')) {
  const radialGradient = context.createRadialGradient(30,130,30,40,130,10);
  radialGradient.addColorStop(0, '#A7D30C');
  radialGradient.addColorStop(0.9, '#019F62');
  radialGradient.addColorStop(1, 'rgba(1,159,98,0)');

  context.fillStyle = radialGradient;

  context.fillRect(0,100,200,100)
}

/**
 *  Pattern
 */
function patternExample(context){
  const img = new Image();
  img.src = '../assets/imgs/favicon.ico';
  img.onload = function(){

    // 创建图案
    const ptrn = context.createPattern(img,'repeat');
    context.fillStyle = ptrn;
    context.fillRect(0,150,50,50);

  }
}

/**
 * 阴影 Shadows
 * 文字阴影example
 */

function textShadows (context) {
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.shadowBlur = 2;
  context.shadowColor = "rgba(0, 0, 0, 0.5)";

  context.font = "20px Times New Roman";
  context.fillStyle = "Black";
  context.fillText("Sample String", 50,150);
}

/**
 * text
 */
function drawText(context = document.getElementById('text').getContext('2d')){
  // fillText(text, x, y [, maxWidth])
  // strokeText(text, x, y [, maxWidth])
  // font textAlign textBaseline direction  measureText()
  context.font="20px serif";
  context.fillText('hello world',10,20);
  context.strokeText('hello world',10,50);
}


