var SceneEnd = function (game) {
    var s = {
        game: game,
    }   
    s.update = function () {
       
    } 
    s.draw = function () {
       
        game.context.fillText("游戏结束", 100, 290)
    }
    return s
}


