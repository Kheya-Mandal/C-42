var bgImg;
var harry, harryImg;
var symb1Img,
  symb2Img,
  symb3Img,
  symb4Img,
  symb5Img,
  symb6Img,
  symb7Img,
  symb8Img,
  symb9Img,
  symb10Img,
  symb11Img,
  symb12Img;
var symb13Img,
  symb14Img,
  symb15Img,
  symb16Img,
  symb17Img,
  symb18Img,
  symb19Img,
  symb20Img,
  symb21Img;
function preload() {
  bgImg = loadImage("images/back4.jpg");
  harryImg = loadImage("images/harry.png");
  /*symb1Img = loadImage("images/symb1.png");
  symb2Img = loadImage("images/symb2.png");
  symb3Img = loadImage("images/symb3.png");
  symb4Img = loadImage("images/symb4.png");
  symb5Img = loadImage("images/symb5.png");*/
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight - 150);
  harry = createSprite(100, 300);
  harry.addImage(harryImg);
  harry.scale = 0.3;
  // harry.shapeColor = "red";
}
function draw() {
  background(bgImg);
  drawSprites();
}
