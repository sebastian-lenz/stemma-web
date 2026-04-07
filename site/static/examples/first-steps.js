let trinkey;

function preload() {
  trinkey = startTrinkey();
}

function setup() {
  createCanvas(254, 254);
  colorMode(HSB);
}

function draw() {
  let rainbowColor = color(frameCount % 360, 100, 100);

  background(rainbowColor);
  trinkey.setPixelColor(rainbowColor);
}
