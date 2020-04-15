var Ball = function (game) {
    var o = game.imageByName('ball')
   
    o.x = 150
    o.y = 200
    o.speedX = 10
    o.speedY = 10
    o.fired = false

    // var image = game.imageByName('ball')
    // var o = {
    //     image: image,
    //     x: 100,
    //     y: 200,
    //     speedX: 5,
    //     speedY: 5,
    //     fired: false,
    // }

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