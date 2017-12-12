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
			ctx.rotate(Math.PI*2/(i*6));
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


(() => {
	draw();
	rotateTest(document.getElementById('rotateTest').getContext('2d'));
})();