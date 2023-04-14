let lightLevel = 0
basic.showString("LIGHT")
basic.forever(function () {
    lightLevel = input.lightLevel()
    basic.showString("" + (lightLevel))
    basic.pause(200)
})
