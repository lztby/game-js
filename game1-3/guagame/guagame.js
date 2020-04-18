class Guagame {
    constructor(fps,images,runcallBack) {
        // images 是一个对象, 里面是图片的引用名字和图片路径
        // 程序会在所有图片载入成功后才运行
        window.fps = fps
        this.images = images
        this.runcallBack = runcallBack

        this.scene = null
        this.actions = {}
        this.keydowns = {}

        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        //events,事件函数的this一直都指向window,因为回调是windows调用的
        //可log试一试
        var self = this
        window.addEventListener('keydown', function (event) {
            self.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = false
        })
        this.init()
        
    }   
    //单例
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    //draw
    drawImage(img) {
        this.context.drawImage(img.texture, img.x, img.y)
    }
    //注册函数
    registerAction (key, callback) {
        this.actions[key] = callback
    }

    //time
    runloop (){
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        //update
        g.update()
        //clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.draw()
        //next runloop
        setTimeout(function(){
            g.runloop()
        },1000 / window.fps)
    }
    textureByName (name) {
        var g = this
        var img = g.images[name]
        return img
    }
    replaceScene (scene) {
        this.scene = scene
    }

    update () {
        this.scene.update()
    }
    draw () {
        this.scene.draw()
    }
    runWithScene  (scene) {
        var g = this
        g.scene = scene
        //开始运行程序
        setTimeout(function(){
            g.runloop()
        },1000 / window.fps)
    }
    __start () {
        this.runcallBack(this)
    }
    init() {
        var g = this
        var loads = []
        //预先载入所有图片
        var names = Object.keys(g.images)
        for(let i = 0;i < names.length;i++)
        {
            let name = names[i]
            let path = g.images[name]
            let img = new Image()
            img.src = path
            // 所有图片载入成功之后,调用g.run
            img.onload = function () {
                g.images[name] = img
                loads.push(1)
                if(loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }

}
