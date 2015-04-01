self.Game = function(c, ship) {
    this.ctx = c;
    this.ship = ship;
};

self.Game.prototype = function() {
    var
        x = 10,
        direction = 1,
        l = 0,
        TOTAL_BG_PARTICLES = 1000,
        backgroundParticles = [],
        getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },
        fillBackgroundParticles = function() {
            for (var i = 0; i < TOTAL_BG_PARTICLES; i++) {
                backgroundParticles[i] = {
                    x: getRandomInt(0, this.ctx.canvas.width),
                    y: getRandomInt(0, this.ctx.canvas.height),
                    size: 2,
                    speed: getRandomInt(1,5)
                }
            }
        },
        moveAndDrawParticles = function() {
            var ctx = this.ctx;
            backgroundParticles.forEach(function(particle) {
                // Move particle
                particle.x = particle.x < 0 ? ctx.canvas.width : particle.x - particle.speed;
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'green';
                ctx.fill();
            });
        },
        drawBackgound = function() {
            // Fill the background starts if needed
            if (!backgroundParticles.length > 0) {
                fillBackgroundParticles.call(this);
            }

            moveAndDrawParticles.call(this);
        },

        loop = function() {
            this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
            drawBackgound.call(this);
            this.ship.draw(this.ctx);
        };

    return {
        loop: loop
    }
}();