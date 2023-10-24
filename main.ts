input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Empty_obstakels = 0
let Ticks = 0
let Bird: game.LedSprite = null
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
let Obstakels: game.LedSprite[] = []
basic.forever(function () {
    while (Obstakels.length > 0 && Obstakels[0].get(LedSpriteProperty.X) == 0) {
        Obstakels.removeAt(0).delete()
    }
    for (let Obstakel_2 of Obstakels) {
        Obstakel_2.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        Empty_obstakels = randint(0, 4)
        for (let Index2 = 0; Index2 <= 4; Index2++) {
            if (Index2 != Empty_obstakels) {
                Obstakels.push(game.createSprite(4, Index2))
            }
        }
    }
    for (let Obstakel_3 of Obstakels) {
        if (Obstakel_3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstakel_3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(1000)
})
