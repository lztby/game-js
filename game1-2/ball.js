var Ball = function () {
    var image = imagefromPath('ball.png')
    var o = {
        image: image,
        x: 150,
        y: 200,
        speedX: 10,
        speedY: 10,
        fired: false,
    }
    o.fire = function () {
        o.fired = true
    }
    o.move = function () {
        if (o.fired) {
            // log("move")
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.reSpeed = function () {
        o.speedY = -o.speedY
    }

    return o
}