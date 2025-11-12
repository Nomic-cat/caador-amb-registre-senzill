// Canvia per cada caçador
radio.onReceivedString(function (receivedString) {
    if (receivedString == "tresor") {
        força = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        // Convertir de -128...0 a 0...255
        brillantor = força + 128
        if (brillantor < 0) {
            brillantor = 0
        }
        if (brillantor > 255) {
            brillantor = 255
        }
        led.setBrightness(brillantor)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(meuId)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
    // Restaurar brillantor normal
    led.setBrightness(255)
})
let brillantor = 0
let força = 0
let meuId = ""
radio.setGroup(7)
// Canvia per cada caçador
meuId = "caçador1"
