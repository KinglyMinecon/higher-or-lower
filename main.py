def on_button_pressed_a():
    if hidden > shown:
        basic.show_leds("""
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        """)
        basic.show_string("IW")
        basic.show_number(hidden)
        control.reset()
    if hidden < shown:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
        basic.show_string("IW")
        basic.show_number(hidden)
        control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if hidden < shown:
        basic.show_leds("""
            . . . . .
                        . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
        """)
        basic.show_string("IW")
        basic.show_number(hidden)
        control.reset()
    if hidden > shown:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
        basic.show_string("IW")
        basic.show_number(hidden)
        control.reset()
input.on_button_pressed(Button.B, on_button_pressed_b)

hidden = 0
shown = 0
shown = randint(2, 9)
hidden = randint(2, 9)
if hidden == shown:
    control.reset()
basic.show_number(shown)