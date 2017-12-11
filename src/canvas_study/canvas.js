function draw() {
	const canvasEle = document.getElementById('canvas');
	let context = canvasEle.getContext('2d');
	context.fillStyle = 'rgb(200,0,0)';
	drawRectangles_way1(context, 10, 10, 50, 50);

	drawRectangles_way2(context, 50, 50, 60, 60);

	drawRectangles_way3(context, 20, 20, 30, 30);

	drawTriangle(context);
	drawSmile()
}

draw();


/**
 * draw rectangles
 */

function drawRectangles_way1(context, x, y, width, height) {
	context.fillRect(x, y, width, height)
}

function drawRectangles_way2(context, x, y, width, height) {
	context.strokeRect(x, y, width, height)
}

function drawRectangles_way3(context, x, y, width, height) {
	context.clearRect(x, y, width, height)
}

/**
 * draw Paths
 * step1: create path   beginPath()
 * step2: draw    methods:  stoke()  fill()
 * step3: close path   closePath()
 */

function drawTriangle(context) {
	context.beginPath();

	context.moveTo(200, 50);

	context.lineTo(300, 0);
	context.lineTo(300, 100);

	context.fill();  // Note: When you call fill(), any open shapes are closed automatically, so you don't have to call closePath().
}


/**
 * draw Smile
 */
function drawSmile(context = document.getElementById('smile').getContext('2d')) {
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

