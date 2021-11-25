let IR = 0
let ultrasonic = 0
let Stature = 0
basic.forever(function () {
    IR = pins.analogReadPin(AnalogPin.P16)
    if (IR == 1) {
        ultrasonic = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_mm, DigitalPin.P16)
        Stature = 200 - ultrasonic
        basic.showNumber(Stature)
    }
})
