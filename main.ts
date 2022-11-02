input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        num += -1
        basic.showNumber(num)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        num3 += 2
        basic.showNumber(num3)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        basic.pause(100)
        num2 += 2
        basic.showNumber(num2)
        basic.pause(100)
    }
})
let num3 = 0
let num2 = 0
let num = 0
num = 9
num2 = 0
num3 = 1
