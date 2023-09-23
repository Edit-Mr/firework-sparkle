function c (_0: number, _1: number, _2: number) {
    led.plotBrightness(2, 2, _0)
    let i;
    for (i = 0; i <= 3; i++)led.plotBrightness(1, i + 1, _1)
    for (i = 0; i <= 3; i++)led.plotBrightness(3, i + 1, _1)
    led.plotBrightness(2, 1, _1)
    led.plotBrightness(2, 3, _1)
    for (i = 0; i <= 4; i++)led.plotBrightness(0, i, _2)
    for (i = 0; i <= 4; i++)led.plotBrightness(4, i, _2)
    for (i = 0; i <= 4; i++)led.plotBrightness(i, 0, _2)
    for (i = 0; i <= 4; i++)led.plotBrightness(i, 4, _2)
    basic.pause(200)
}
basic.forever(function () {
    c(50, 0, 0)
    c(100, 0, 0)
    c(255, 0, 0)
    c(100, 255, 0)
    c(50, 100, 255)
    c(0, 50, 100)
    c(0, 0, 50)
    c(0, 0, 0)
})
