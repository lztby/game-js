class Enemy extends GuaImage{
    constructor(game) {
        var type = randomBetween(1,3)
        var name = 'enemy' + type
        super(game,name)
        this.setup()
    }
    setup() {
        this.speed = randomBetween(2,5)
        this.x = randomBetween(0,300)
        this.y = -randomBetween(0,200)
    }
    update() {
        this.speed = config.enemy_speed
        this.y += this.speed
        if(this.y > 600) {
            this.setup()
        }
    }
}