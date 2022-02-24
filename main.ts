function displayPip (degrees: number) {
    pipNumber = Math.round(degrees / 22.5)
    if (pipNumber == 0) {
        led.toggle(2, 0)
    } else if (pipNumber == 1) {
        led.toggle(1, 0)
    } else if (pipNumber == 2) {
        led.toggle(0, 0)
    } else if (pipNumber == 3) {
        led.toggle(0, 1)
    } else if (pipNumber == 4) {
        led.toggle(0, 2)
    } else if (pipNumber == 5) {
        led.toggle(0, 3)
    } else if (pipNumber == 6) {
        led.toggle(0, 4)
    } else if (pipNumber == 7) {
        led.toggle(1, 4)
    } else if (pipNumber == 8) {
        led.toggle(2, 4)
    } else if (pipNumber == 9) {
        led.toggle(3, 4)
    } else if (pipNumber == 10) {
        led.toggle(4, 4)
    } else if (pipNumber == 11) {
        led.toggle(4, 3)
    } else if (pipNumber == 12) {
        led.toggle(4, 2)
    } else if (pipNumber == 13) {
        led.toggle(4, 1)
    } else if (pipNumber == 14) {
        led.toggle(4, 0)
    } else {
        led.toggle(3, 0)
    }
}
input.onGesture(Gesture.ScreenUp, function () {
    basic.clearScreen()
    displayPip(input.compassHeading())
})
let pipNumber = 0
basic.showString("Compass")
