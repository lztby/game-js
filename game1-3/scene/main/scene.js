const config = {
    player_speed :10,
    cloud_speed : 1,
    enemy_speed : 5,
    bullet_speed : 5,
}

const randomBetween = function(start,end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start) 
}

class Scene extends GuaScene{
    constructor(game) {
        super(game)
        this.setup()
        this.setupInput()
    }

    setup() {
        this.enemiesOfNum = 10
        this.bg = new GuaImage(this.game,'sky') 
        this.cloud = new Cloud(this.game,'cloud') 
        this.player = new Player(this.game)  
        this.player.x = 150
        this.player.y = 150
        
        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)
        this.addElements()

    }
    addElements() {
        var es = []
        for (let index = 0; index < this.enemiesOfNum; index++) {
            var e = new Enemy(this.game)
            // es.push(e)
            this.addElement(e)
            
        }
        this.enemys = es
    }
    setupInput() {
        var g = this.game
        // s 必须替换
        var s = this
        g.registerAction('a', function () {
            s.player.moveLeft()
        })
        g.registerAction('d', function () {
            s.player.moveRight()
        })
        g.registerAction('w', function () {
            s.player.moveUp()
        })
        g.registerAction('s', function () {
            s.player.moveDown()
        })
        g.registerAction('j', function () {
            s.player.fire()
        })
    }
        
    update() {
        super.update()
        this.cloud.y += 1
    }
}

