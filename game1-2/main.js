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

    // 这里的function参数不是很理解
    var game = Guagame(30,images,function(g){
        // log("game1:",game)
        // log("g1:",g)
        var s = Scene(g)
        g.runWithScene(s)
        // log("game2:",game)
        // // log("g2:",g)
    })

    EnableDebugMode(true,game)
}

__main()