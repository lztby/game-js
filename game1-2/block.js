var Block = function (positon) {
    var image = imagefromPath('block.png')
    var o = {
        image: image,
        x: positon[0],
        y: positon[1],
        w: 50,
        h: 20,
        alive: true,
    }
    o.kill = function () {
        o.alive = false
    }
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}