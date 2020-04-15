var Paddle = function (game) {
    var o = game.imageByName('paddle')
    // var o = {
    //     image: image,
    //     x: 150,
    //     y: 250,
    //     speed: 10,
    // }
    o.x = 100
    o.y = 200
    o.speed = 15
    o.move = function (x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.image.width) {
            x = 400 - o.image.width
        }
        o.x = x
    }
    o.moveLeft = function () {
        o.move(o.x - o.speed)
    }
    o.moveRight = function () {
        o.move(o.x + o.speed)
    }
    o.collide = function (ball) {
        return rectIntersects(ball,o) || rectIntersects(o,ball)
    }
    return o
}