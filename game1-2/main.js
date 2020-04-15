var loadLevel = function (n,game) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(p,game)
        blocks.push(b)
    }
    return blocks
}

var blocks = []
var EnableDebugMode = function (enable,game) {
    if (!enable) {
        return
    }
    window.paused = false

    //暂停
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(Number(k),game)
        }
    })

    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}
var __main = function () {

    var images = {
        ball:'ball.png',
        block:'block.png',
        paddle:'paddle.png',
    }

    var game = Guagame(30,images,function(g){
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
        });
        
        game.canvas.addEventListener('mouseup', e => {
            var x = e.offsetX
            var y = e.offsetY 
            enableDrag = false
        });   
    })

    EnableDebugMode(true,game)

    
}
__main()