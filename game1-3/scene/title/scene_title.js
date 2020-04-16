var SceneTitle = function (game) {
    var s = {
        game: game,
    }   
    game.registerAction('k', function () {
        var s = Scene(game)
        game.replaceScene(s)
    })
    s.update = function () {
       
    } 
    s.draw = function () {
       
        game.context.fillText("按k游戏开始", 100, 290)
    }
    return s
}