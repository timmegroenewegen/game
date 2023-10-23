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
    for (let Obstakel of Obstakels) {
        Obstakel.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        Empty_obstakels = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != Empty_obstakels) {
                Obstakels.push(game.createSprite(4, index))
            }
        }
    }
    Ticks += 1
    basic.pause(1000)
})
