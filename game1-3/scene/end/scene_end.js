var SceneEnd = function (game) {
    var s = {
        game: game,
    }   
    s.update = function () {
       
    } 
    s.draw = function () {
       
        game.context.fillText("游戏结束,按r重新开始", 100, 290)
    }
    game.registerAction('r', function () {
        var s = SceneTitle(game)
        game.replaceScene(s)
    })
    return s
}


