let numero1 = 0
let numero2 = 0
input.onButtonPressed(Button.A, function () {
    numero1 = randint(1, 9)
    basic.showNumber(numero1)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    numero2 = randint(1, 9)
    basic.showNumber(numero2)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(numero1 * numero2)
    basic.pause(500)
    basic.showLeds(`
        # # . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
