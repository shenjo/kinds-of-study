function draw () {
  let ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.fillRect(75, 75, 10, 10);
  ctx.restore();
  ctx.translate(75, 75);

  for (let i = 1; i < 6; i++) { // Loop through rings (from inside to out)
    ctx.save();
    ctx.fillStyle = 'rgb(' + (51 * i) + ',' + (255 - 51 * i) + ',255)';

    for (let j = 0; j < i * 6; j++) {
      ctx.rotate(Math.PI * 2 / (i * 6));
      ctx.beginPath();
      ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
      ctx.fill();
    }

    ctx.restore();
  }
}

/**
 *
 * rotate 基于canvas原点旋转 ， 2PI = 360
 */

function rotateTest (context) {
  context.strokeRect(100, 100, 50, 50);

  context.save();
  context.translate(100+25, 100+25);
  context.rotate(Math.PI * 0.25);
  context.fillRect(0, 0, 50, 50);
  context.restore();


}

/**
 * scaling 缩放
 */
function scalingTest (context) {
  // test1  : only scale
  context.save();
  const baseRectTest1 = [10, 10, 50, 50];

  const scale2Test1 = baseRectTest1.map((val) => 2 * val);
  context.strokeRect(...scale2Test1);
  context.scale(2, 2);
  context.fillRect(...baseRectTest1);
  context.restore();


  //test2 scale + translate
  context.save();
  context.clearRect(0,0,canvas.width,canvas.height);
  context.translate(100,100);
  const baseRectTest2 = [10, 10, 50, 50];
  const scale2Test2 = baseRectTest1.map((val) => 2 * val);
  context.strokeRect(...scale2Test2);
  context.scale(2, 2);
  context.fillRect(...baseRectTest2);
  context.restore();

  //test3  scale + translate + rotate
  context.save();
  context.clearRect(0,0,canvas.width,canvas.height);
  context.translate(100,10);
  const baseRectTest3 = [10, 10, 50, 50];
  const scale2Test3 = baseRectTest1.map((val) => 2 * val);
  context.strokeRect(...scale2Test3);
  context.scale(2,2);
  context.rotate(Math.PI*0.5);
  context.fillRect(...baseRectTest3);
  context.restore();
}

/**
 * transform(a,b,c,d,e,f)
 */
function TransformTest(context){
  var sin = Math.sin(Math.PI/6);
  var cos = Math.cos(Math.PI/6);
  context.translate(100, 100);
  var c = 0;
  for (var i=0; i <= 12; i++) {
    c = Math.floor(255 / 12 * i);
    context.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
    context.fillRect(0, 0, 100, 10);
    context.transform(cos, sin, -sin, cos, 0, 0);
  }

  context.setTransform(-1, 0, 0, 1, 100, 100);
  context.fillStyle = "rgba(255, 128, 255, 0.5)";
  context.fillRect(0, 50, 100, 100);


}

(() => {
  draw();
  rotateTest(document.getElementById('rotateTest').getContext('2d'));
  scalingTest(document.getElementById('scaleTest').getContext('2d'));
  TransformTest(document.getElementById('transformTest').getContext('2d'));
})();
