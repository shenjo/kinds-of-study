function draw() {
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

function rotateTest(context) {
	context.save();
	context.strokeRect(100, 100, 50, 50);
	context.restore();

	context.translate(100, 100);
	context.rotate(Math.PI * 0.5);
	context.fillRect(0, 0, 50, 50);

}

function clipTest(ctx) {
	ctx.fillRect(0, 0, 150, 150);
	ctx.translate(75, 75);

	// Create a circular clipping path
	ctx.beginPath();
	ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
	ctx.clip();

	// draw background
	let lingrad = ctx.createLinearGradient(0, -75, 0, 75);
	lingrad.addColorStop(0, '#232256');
	lingrad.addColorStop(1, '#143778');

	ctx.fillStyle = lingrad;
	ctx.fillRect(-75, -75, 150, 150);

	// draw stars
	for (let j = 1; j < 50; j++) {
		ctx.save();
		ctx.fillStyle = '#fff';
		ctx.translate(75 - Math.floor(Math.random() * 150),
			75 - Math.floor(Math.random() * 150));
		drawStar(ctx, Math.floor(Math.random() * 4) + 2);
		ctx.restore();
	}
}

function drawStar(ctx, r) {
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(r, 0);
	for (let i = 0; i < 9; i++) {
		ctx.rotate(Math.PI / 5);
		if (i % 2 === 0) {
			ctx.lineTo((r / 0.525731) * 0.200811, 0);
		} else {
			ctx.lineTo(r, 0);
		}
	}
	ctx.closePath();
	ctx.fill();
	ctx.restore();
}

let earth = new Image();
let moon = new Image();
let sun = new Image();
function sunEarthMoonTest() {

	// earth.src = '../assets/img/Canvas_earth.png';
	// moon.src = '../assets/img/Canvas_moon.png';
	// sun.src = '../assets/img/Canvas_sun.png';
	sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
	moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
	earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
	window.requestAnimationFrame(drawSunEarthMoon);
}

function drawSunEarthMoon() {

	let context = document.getElementById('sunEarthMoonTest').getContext('2d');
	context.globalCompositeOperation = 'destination-over';
	context.clearRect(0,0,300,300); // clear canvas

	context.fillStyle = 'rgba(0,0,0,0.4)';
	context.strokeStyle = 'rgba(0,153,255,0.4)';
	context.save();
	context.translate(150, 150);

	// Earth
	const time = new Date();
	context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
	context.translate(105,0);
	context.fillRect(0,-12,50,24); // Shadow
	context.drawImage(earth,-12,-12);


	// Moon
	context.save();
	context.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
	context.translate(0,28.5);
	context.drawImage(moon,-3.5,-3.5);
	context.restore();

	context.restore();

	context.beginPath();
	context.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
	context.stroke();

	context.drawImage(sun,0,0,300,300);

	window.requestAnimationFrame(draw);
}

(() => {
	draw();
	rotateTest(document.getElementById('rotateTest').getContext('2d'));
	clipTest(document.getElementById('clipTest').getContext('2d'));
	sunEarthMoonTest(document.getElementById('sunEarthMoonTest').getContext('2d'));
})();