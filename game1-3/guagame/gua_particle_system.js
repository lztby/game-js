class GuaParticleSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game) {
        return new this(game)
    }
    setup() {
        this.duration = 50
        this.x = 150
        this.y = 200
        this.numberOfParticles = 80
        this.particles = []
    }
    draw() {
        if (this.duration < 0) {
            // 这里应该是从scene中删除particle
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
    update() {
        this.duration--
        // 添加小火花
        if (this.particles.length < this.numberOfParticles) {
            var p = GuaParticle.new(this.game)
            //设置初始化坐标
            var s = 10
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        // 更新所有的小火花
        for (var p of this.particles) {
            p.update()
        }
        // 删除死掉的小火花
        this.particles = this.particles.filter(p => p.left > 0)
    }
}