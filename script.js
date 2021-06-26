const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d");

canvas.width = 500
canvas.height = 500

const input = {
	KEY_U: false,
	KEY_D: false,
	KEY_L: false,
	KEY_R: false,
}

var delta = 2

window.addEventListener('keydown', function(event) {
	switch (event.key) {
		case 'ArrowUp': input.KEY_U = true; break
		case 'ArrowDown': input.KEY_D = true; break
		case 'ArrowLeft': input.KEY_L = true; break
		case 'ArrowRight': input.KEY_R = true; break
	}
}, false);

window.addEventListener('keyup', function(event) {
	switch (event.key) {
		case 'ArrowUp': input.KEY_U = false; break
		case 'ArrowDown': input.KEY_D = false; break
		case 'ArrowLeft': input.KEY_L = false; break
		case 'ArrowRight': input.KEY_R = false; break
	}
}, false);

const player = {
	w: 20,
	h: 20,
	x: 0,
	y: 0,
	draw: () => {
		ctx.beginPath()
		ctx.rect(player.x, player.y, 10, 10)
		ctx.closePath();
		ctx.fill()
	},

	recalc: () => {
        if (input.KEY_U) player.y -= delta
        if (input.KEY_L) player.x -= delta
        if (input.KEY_R) player.x += delta
        if (input.KEY_D) player.y += delta
	}
}

function redraw() {
	ctx.clearRect(0, 0, 500, 500)
	player.recalc()
	// document.getElementById('stats').innerText = `x: ${player.x}, y: ${player.y}`
	player.draw()
	window.requestAnimationFrame(redraw)
}

window.requestAnimationFrame(redraw)