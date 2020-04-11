var __main = function () {
    EnableDebugMode(true)

    var game = Guagame(30)
    //去掉var可在网页查paddle.image.width
    var paddle = Paddle()
    var ball = Ball()

    var score = 0

    blocks = loadLevel(1)

    game.registerAction('a', function () {
        paddle.moveLeft()
    })
    game.registerAction('d', function () {
        paddle.moveRight()
    })
    game.registerAction('f', function () {
        ball.fire()
    })

    game.update = function () {
        if (window.paused) {
            return
        }
        ball.move()
        //ball 和 paddle相撞
        if (paddle.collide(ball)) {
            ball.reSpeed()
        }
        //ball 和 block相撞
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                block.kill()
                ball.reSpeed()
                score += 100
            }
        }

    }
    game.draw = function () {
        //draw
        game.drawImage(paddle)
        game.drawImage(ball)
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        game.context.fillText("分数: " + score, 10, 290)
    }

}