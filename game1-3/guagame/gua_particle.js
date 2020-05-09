class GuaParticle extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {
        this.left = 3
    }
    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }
    update() {
        this.left--
        this.x += this.vx
        this.y += this.vy
        var factor = 1
        this.vx += (this.vx > 0) ? factor : -factor
        this.vy += (this.vy > 0) ? factor : -factor
    }

}