radio.onReceivedNumber(function (receivedNumber) {
    if (cvzc == 1 && vccz == 1) {
        // if8
        music.play(music.stringPlayable("C5 B C5 B A G A B ", 120), music.PlaybackMode.UntilDone)
        // if8
        music.play(music.stringPlayable("A B C5 A C5 G A B ", 120), music.PlaybackMode.UntilDone)
        soroban.showNumber(receivedNumber)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    power.lowPowerEnable(LowPowerEnable.Prevent)
})
input.onPinPressed(TouchPin.P2, function () {
    vccz = 0
})
input.onGesture(Gesture.ScreenDown, function () {
    power.lowPowerEnable(LowPowerEnable.Allow)
    power.lowPowerRequest()
})
input.onPinPressed(TouchPin.P1, function () {
    vccz = 1
})
let vccz = 0
let cvzc = 0
radio.setGroup(1)
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
        music.play(music.stringPlayable("C5 B C5 B A G A B ", 120), music.PlaybackMode.UntilDone)
        // if8
        music.play(music.stringPlayable("A B C5 A C5 G A B ", 120), music.PlaybackMode.UntilDone)
        radio.sendNumber(randint(0, 20000))
    }
})
