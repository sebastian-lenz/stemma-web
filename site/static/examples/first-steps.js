let trinkey;

function preload() {
  trinkey = startTrinkey();
}

function setup() {
  colorMode(HSB);
}

function draw() {
  trinkey.setPixelColor(color(frameCount * 0.01, 100, 100));
}
