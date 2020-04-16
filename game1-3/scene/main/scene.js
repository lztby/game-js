var Scene = function (game) {
    var s = {
        game: game,
    }   
    //去掉var可在网页查paddle.image.width
    var paddle = Paddle(game)
    var ball = Ball(game)

    var score = 0
    blocks = loadLevel(1,game)

    game.registerAction('a', function () {
        paddle.moveLeft()
    })
    game.registerAction('d', function () {
        paddle.moveRight()
    })
    game.registerAction('f', function () {
        ball.fire()
    })
     
    s.update = function () {
        if (window.paused) {
            return
        }
        ball.move()
        //结束游戏
        if(ball.y > paddle.y) {
            var end = SceneEnd(game)
            game.replaceScene(end)
        }
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
    s.draw = function () {
        //draw 背景
        game.context.fillStyle = "#554";
        game.context.fillRect(0, 0, 400, 300); 
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
    //mouse event
    var enableDrag = false
    game.canvas.addEventListener('mousedown', e => {
        var x = e.offsetX
        var y = e.offsetY  
        if(ball.hasPoint(x,y)) {
            enableDrag = true
        }  
    })
    
    game.canvas.addEventListener('mousemove', e => {
        var x = e.offsetX
        var y = e.offsetY 
        if(enableDrag) {
            ball.x = x
            ball.y = y
        }    
    })
     
    game.canvas.addEventListener('mouseup', e => {
        var x = e.offsetX
        var y = e.offsetY 
        enableDrag = false
    })

    return s
}


