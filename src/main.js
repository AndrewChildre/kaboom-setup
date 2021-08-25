import kaboom from "kaboom";

const k = kaboom({
    clearColor: [0, 0, 0, 1]
})

k.scene('main', () => {
    k.add([
        k.text('KABOOM!', 32),
        k.pos(k.width() * 0.5, k.height() * 0.5),
        k.color(1,1,1,1),
        k.origin('center'),
    ])

})
k.start('main')