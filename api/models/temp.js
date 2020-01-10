const five = require('johnny-five');
const Oled = require('oled-js');

const board = new five.Board();

board.on('ready', () => {
  console.log('Connected to Arduino, ready.');

  const thermometer = new Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  const opts = {
    width: 128,
    height: 64,
    address: 0x3D
  };

  const oled = new Oled(board, five, opts);

  thermometer.on("change", () => {
    const {celsius, fahrenheit, kelvin} = thermometer;
    console.log("Thermometer");
    console.log("  celsius      : ", celsius);
    console.log("  fahrenheit   : ", fahrenheit);
    console.log("  kelvin       : ", kelvin);
    console.log("--------------------------------------");
  });
});
