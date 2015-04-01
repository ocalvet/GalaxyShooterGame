self.Ship = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 150;
    this.height = 100;
    this.image = new Image();
    this.image.src = "spaceship.png";
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

        drawShip = function(ctx) {
//                    ctx.save(); //saves the state of canvas
//                    ctx.translate(this.width, this.height); //let's translate
//                    ctx.rotate(Math.PI / 180 * (this.angle += 5)); //increment the angle and rotate the image
            ctx.drawImage(this.image, this.x, this.y);
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
        draw: drawShip
    };
}();