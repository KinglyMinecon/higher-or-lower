input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (hidden > shown) {
        basic.showLeds(`
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        `)
        basic.showString("IW")
        basic.showNumber(hidden)
        control.reset()
    }
    
    if (hidden < shown) {
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        `)
        basic.showString("IW")
        basic.showNumber(hidden)
        control.reset()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (hidden < shown) {
        basic.showLeds(`
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        `)
        basic.showString("IW")
        basic.showNumber(hidden)
        control.reset()
    }
    
    if (hidden > shown) {
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        `)
        basic.showString("IW")
        basic.showNumber(hidden)
        control.reset()
    }
    
})
let hidden = 0
let shown = 0
shown = randint(2, 9)
hidden = randint(2, 9)
if (hidden == shown) {
    control.reset()
}

basic.showNumber(shown)
