let neoDriver;
let rotaryEncoder;

function preload() {
  neoDriver = startNeoDriver();
  rotaryEncoder = startRotaryEncoder();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  neoDriver.setLength(32);
  neoDriver.setBrightness(33);
}

function draw() {
  background(100);

  text(frameCount, 20, 50);

  let focus = rotaryEncoder.getValue();
  let sign = focus < 0 ? -1 : 1;
  focus = Math.abs(focus % 32);
  if (sign < 0) focus = 32 - focus;

  for (let index = 0; index < 32; index++) {
    let distance = Math.abs(focus - index);
    while (distance > 32) distance -= 32;

    let red = Math.abs(Math.max(0, 1 - distance / 16));

    neoDriver.setPixelColor(index, color(index == focus ? 50 : 0, 0, 0));
  }
}
