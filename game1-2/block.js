var Block = function () {
    var image = imagefromPath('block.png')
    var o = {
        image: image,
        x: 100,
        y: 100,
        // w : ,
        // h : ,
        alive: true
    }
    o.kill = function () {
        o.alive = false
    }
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}