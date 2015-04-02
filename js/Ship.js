self.Ship = function(ctx, x, y, speed) {
    // Initialize elements
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.speed = speed;
    this.width = 150;
    this.height = 100;
    this.image = new Image();
    this.image.src = "spaceship.png";
    this.shotImgSrc = "shot.png";
    this.shots = [];
    this.shotSpeed = 10;
    this.angle = 0;
}

self.Ship.prototype = function() {

    var
        moveUp = function() {
            this.y -= this.speed
        },
        moveDown = function() {
            this.y += this.speed
        },
        moveLeft = function() {
            this.x -= this.speed
        },
        moveRight = function() {
            this.x += this.speed
        },

        shoot = function() {
            var ship = this;
            // add a shot to the collection
            var image = new Image();
            image.src = ship.shotImgSrc;
            ship.shots.push({
                image: image,
                x: ship.x + ship.width,
                y: (ship.y + ship.height / 2),
                speed: ship.shotSpeed
            })
        },

        drawShip = function() {
            var ship = this;
//                    ctx.save(); //saves the state of canvas
//                    ctx.translate(this.width, this.height); //let's translate
//                    ctx.rotate(Math.PI / 180 * (this.angle += 5)); //increment the angle and rotate the image
            ship.ctx.drawImage(ship.image, ship.x, ship.y);
            ship.shots.forEach(function(shot) {
                // Draw each shot
                ship.ctx.drawImage(shot.image, shot.x, shot.y);
                shot.x += shot.speed;
                if (shot.x > ship.ctx.canvas.width) {
                    ship.shots.splice(ship.shots.indexOf(shot), 1);
                }
            });
//                    ctx.drawImage(img, -cache.width / 2, -cache.height / 2, cache.width, cache.height); //draw the image ;)
//                    ctx.restore(); //restore the state of canvas
//                    ctx.fillStyle="#FF0000";
//                    ctx.fillRect(this.x,this.y,this.width,this.height);
        };

    return {
        up: moveUp,
        down: moveDown,
        left: moveLeft,
        right: moveRight,
        draw: drawShip,
        shoot: shoot
    };
}();