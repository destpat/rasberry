const express = require('express');
const Gpio = require('onoff').Gpio;
const router = express.Router();
const led = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output

router.post('/on', function(req, res, next) {
  if (LED.readSync() === 0) {
    LED.writeSync(1); //set pin state to 1 (turn LED on)
  } else {
    LED.writeSync(0); //set pin state to 0 (turn LED off)
  }
});

module.exports = router;
