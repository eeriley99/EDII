let transD = 0;
let imgHeight = 270;
let imgWidth = 270;

var F1;
var F2;
var F3;
var F4;
var F5;
var F6;
var F7;

function preload() {

    F1 = loadImage('images/F1.jpg');
    F2 = loadImage('images/F2.jpg');
    F3 = loadImage('images/F3.jpg');
    F4 = loadImage('images/F4.jpg');
    F5 = loadImage('images/F5.jpg');
    F6 = loadImage('images/F6.jpg');
    F7 = loadImage('images/F7.jpg');
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    frameRate(0.5);
}

function draw() {
    background(255);

    Pos1();
    Pos2();
    Pos3();
    Pos4();
    Pos5();
    Pos6();

}

function Pos1() {
    let I_gs = [F1, F2, F3, F4, F5, F6, F7];
    let I_g = random(I_gs);
    image(I_g, 0, height / 3, 270, 270);
}

function Pos2() {
    let I_gs = [F1, F2, F3, F4, F5, F6, F7];
    let I_g = random(I_gs);
    translate(imgWidth, 0);
    image(I_g, 0, height / 3, 270, 270);
}

function Pos3() {
    let I_gs = [F1, F2, F3, F4, F5, F6, F7];
    let I_g = random(I_gs);
    translate(imgWidth, 0);
    fill(255, 0, 0);
    image(I_g, 0, height / 3, 270, 270);
}

function Pos4() {
    let I_gs = [F1, F2, F3, F4, F5, F6, F7];
    let I_g = random(I_gs);
    translate(imgWidth, 0);
    image(I_g, 0, height / 3, 270, 270);
}

function Pos5() {
    let I_gs = [F1, F2, F3, F4, F5, F6, F7];
    let I_g = random(I_gs);
    translate(imgWidth, 0);
    fill(255, 0, 0);
    image(I_g, 0, height / 3, 270, 270);
}

function Pos6() {
    let I_gs = [F1, F2, F3, F4, F5, F6, F7];
    let I_g = random(I_gs);
    translate(imgWidth, 0);
    fill(255, 0, 0);
    image(I_g, 0, height / 3, 270, 270);
}
