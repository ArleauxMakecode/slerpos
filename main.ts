input.onGesture(Gesture.ScreenUp, function () {
    power.lowPowerEnable(LowPowerEnable.Prevent)
})
input.onPinPressed(TouchPin.P2, function () {
    vccz = 0
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    power.lowPowerEnable(LowPowerEnable.Allow)
    power.lowPowerRequest()
})
input.onPinPressed(TouchPin.P1, function () {
    vccz = 1
})
let vccz = 0
radio.setGroup(1)
let cvzc = 1
vccz = 0
let list = images.createImage(`
    . # # # #
    # . . . .
    . # # # .
    . . . . #
    # # # # .
    `)
let list1 = images.createImage(`
    . . # . .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
let list2 = images.createImage(`
    . # # # .
    # . . . .
    # . # # #
    # . . . .
    . # # # .
    `)
let list3 = images.createImage(`
    . . . . .
    . . . . #
    . # . # .
    # . # . .
    # # # # #
    `)
let list4 = images.createImage(`
    # # . . .
    # . # . .
    # # . . .
    # . # . .
    # . . # .
    `)
let list5 = images.createImage(`
    # # # # #
    . . # . #
    . . # . #
    . . # . #
    . . . # .
    `)
let list6 = images.createImage(`
    # # # # .
    # . . . #
    # # # # .
    # . . . .
    # . . . .
    `)
let list7 = images.createBigImage(`
    . # # # . . # # # #
    # . . . # # . . . .
    # . . . # . # # # .
    # . . . # . . . . #
    . # # # . # # # # .
    `)
let list8 = images.createImage(`
    . . # . .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
list.showImage(0)
list1.showImage(0)
list2.showImage(0)
list3.showImage(0)
list4.showImage(0)
list5.showImage(0)
list6.showImage(0)
list7.scrollImage(1, 200)
list8.showImage(0)
images.iconImage(IconNames.Square).showImage(0)
images.iconImage(IconNames.SmallSquare).showImage(0)
images.iconImage(IconNames.Diamond).showImage(0)
images.iconImage(IconNames.SmallDiamond).showImage(0)
basic.clearScreen()
basic.forever(function () {
    if (cvzc == 1 && vccz == 1) {
        led.plot(input.acceleration(Dimension.X), input.acceleration(Dimension.Y))
    }
    if (cvzc == 1 && vccz == 1) {
        // if8
        music.play(music.stringPlayable("C5 B C5 B A G A B ", 120), music.PlaybackMode.UntilDone)
        // if8
        music.play(music.stringPlayable("A B C5 A C5 G A B ", 120), music.PlaybackMode.UntilDone)
        soroban.showNumber(randint(0, 20000))
    }
    if (cvzc == 1 && vccz == 1) {
        // if8
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        // if8
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . # . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
