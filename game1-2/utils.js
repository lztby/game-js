var log = console.log.bind(console)
// 在自己的区域输出log
// var e = sel => document.querySelector(sel)
// var log = function (s) {
//     e('#id-text-log').value += '\n' + s
// }

var imagefromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function (a, b) {
    var o = a
    // log('o.image.height',o.image.height)
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}