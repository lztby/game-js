class Cloud extends GuaImage{
    constructor(game) {
        super(game,'cloud')
        this.setup()
    }
    setup() {
        this.speed = randomBetween(2,5)
        this.x = randomBetween(0,300)
        this.y = -randomBetween(0,200)
    }
    update() {
        this.speed = config.cloud_speed
        this.y += this.speed
        if(this.y > 600) {
            this.setup()
        }
    }
}