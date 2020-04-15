var Block = function (positon,game) {

    // var img = game.imageByName('block')
    
    // var o = {
    //     x: positon[0],
    //     y: positon[1],
    //     alive: true,
    //     lives: positon[2] || 1,
    // }
    // o.image = img.image
    // o.w = img.w
    // o.h = img.h
    var o = game.imageByName('block')
    
    o.x = positon[0]
    o.y = positon[1]
    o.w = 50
    o.h = 20
    o.alive = true
    o.lives = positon[2] || 1

    o.kill = function () {
        o.lives--
        if(o.lives < 1){
            o.alive = false
        }
    }
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}