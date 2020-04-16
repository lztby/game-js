class SceneTitle extends GuaScene{
    constructor(game) {
        super(game)
        game.registerAction('k', function () {
            var s = Scene(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.context.fillText("按k游戏开始", 100, 290)
    }
}