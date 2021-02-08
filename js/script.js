const hourPos = [7, 3, 9, 0, 0, 6, 3];
const minutePos = [35, 30, 30, 45, 15, 0, 45];

const handPos = [
  // 0
  [7, 35],
  // 1
  [3, 30],
  // 2
  [9, 30],
  // 3
  [0, 45],
  // 4
  [0, 15],
  // 5
  [6, 0],
  // 6
  [3, 45]
];

var numArray = [
  "zero()",
  "one()",
  "two()",
  "three()",
  "four()",
  "five()",
  "six()",
  "seven()",
  "eight()",
  "nine()"
];

var a = 0;

function setup() {
  let cnv = createCanvas(720, 300);
  cnv.parent("canvasContainer")
  angleMode(DEGREES);
  background(255);
  frameRate(2);
}

function draw() {
  background(255);
  d = new Date();
  var mm = minute();
  var hh = hour();
  var ss = second();

  var milli = d.getMilliseconds();
  var p_milli = milli/1000 + .001;
  var s = d.getSeconds() + p_milli;
  var p_s = s/60 + .001;
  var m = d.getMinutes() + p_s;
  var p_m = m/60 + .001;
  var h = d.getHours() + p_m;
  var p_h = h%12/12 + .001;


  let h1 = Math.trunc(hh / 10);
  let h2 = hh % 10;

  let m1 = Math.trunc(mm / 10);
  let m2 = mm % 10;

  let s1 = Math.trunc(ss / 10);
  let s2 = ss % 10;

  
  push();
  scale(1.1);
  digitClock(h1,h2,m1,m2,s1,s2,0.3);
  pop()
  
}

function digitClock(h1, h2, m1, m2, s1, s2,size) {
  push();
  scale(size);
  
  push();
  translate(0, 0);
  eval(numArray[h1]);
  pop();
  
  push();
  translate(400, 0);
  eval(numArray[h2]);
  pop();
  
  push()
  translate(800, 0);  
  dotdot();
  pop()
  
  push();
  translate(1000, 0);
  eval(numArray[m1]);
  pop();
  
  push();
  translate(1400, 0);
  eval(numArray[m2]);
  pop();
  
  pop();
}

function handFunction(x, y, h, m) {
  push();
  translate(x, y);
//   console.log(h, m);

    // var secondsLeft = 60 - second()
    // var framesLeft = secondsLeft * 30
    // console.log(Math.floor(((60 - second()) * 30) / 0.018))

  var m2 = map(m, 0, 60, 0, 359);
  var h2 = map(h, 0, 12, 0, 359);

  var ss = 100;
  var f = 255;

  stroke(0);
  strokeWeight(5);
  fill(f);
  ellipse(0, 0, ss, ss);

  push();
  rotate(-90);
  rotate(h2);
  strokeWeight(10);
  stroke(0);
  line(0, 0, ss / 2 - 10, 0);
  pop();

  push();
  rotate(-90);
  rotate(m2);
  strokeWeight(10);
  stroke(0);
  line(0, 0, ss / 2 - 10, 0);
  pop();

  pop();
}

function dotdot() {
  handFunction(200, 200, hourPos[0], minutePos[0]);
  handFunction(200, 300, hourPos[1], minutePos[1]);
  handFunction(200, 400, hourPos[4], minutePos[4]);
  handFunction(200, 500, hourPos[1], minutePos[1]);
  handFunction(200, 600, hourPos[4], minutePos[4]);
  handFunction(200, 700, hourPos[0], minutePos[0]);
  
  handFunction(300, 200, hourPos[0], minutePos[0]);
  handFunction(300, 300, hourPos[2], minutePos[2]);
  handFunction(300, 400, hourPos[3], minutePos[3]);
  handFunction(300, 500, hourPos[2], minutePos[2]);
  handFunction(300, 600, hourPos[3], minutePos[3]);
  handFunction(300, 700, hourPos[0], minutePos[0]);
}

function zero() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[6], minutePos[6]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[5], minutePos[5]);
  handFunction(300, 300, hourPos[1], minutePos[1]);
  handFunction(400, 300, hourPos[2], minutePos[2]);
  handFunction(500, 300, hourPos[5], minutePos[5]);

  handFunction(200, 400, hourPos[5], minutePos[5]);
  handFunction(300, 400, hourPos[5], minutePos[5]);
  handFunction(400, 400, hourPos[5], minutePos[5]);
  handFunction(500, 400, hourPos[5], minutePos[5]);

  handFunction(200, 500, hourPos[5], minutePos[5]);
  handFunction(300, 500, hourPos[5], minutePos[5]);
  handFunction(400, 500, hourPos[5], minutePos[5]);
  handFunction(500, 500, hourPos[5], minutePos[5]);

  handFunction(200, 600, hourPos[5], minutePos[5]);
  handFunction(300, 600, hourPos[4], minutePos[4]);
  handFunction(400, 600, hourPos[3], minutePos[3]);
  handFunction(500, 600, hourPos[5], minutePos[5]);

  handFunction(200, 700, hourPos[4], minutePos[4]);
  handFunction(300, 700, hourPos[6], minutePos[6]);
  handFunction(400, 700, hourPos[6], minutePos[6]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function one() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[2], minutePos[2]);
  handFunction(500, 200, hourPos[0], minutePos[0]);

  handFunction(200, 300, hourPos[4], minutePos[4]);
  handFunction(300, 300, hourPos[2], minutePos[2]);
  handFunction(400, 300, hourPos[5], minutePos[5]);
  handFunction(500, 300, hourPos[0], minutePos[0]);

  handFunction(200, 400, hourPos[0], minutePos[0]);
  handFunction(300, 400, hourPos[5], minutePos[5]);
  handFunction(400, 400, hourPos[5], minutePos[5]);
  handFunction(500, 400, hourPos[0], minutePos[0]);

  handFunction(200, 500, hourPos[0], minutePos[0]);
  handFunction(300, 500, hourPos[5], minutePos[5]);
  handFunction(400, 500, hourPos[5], minutePos[5]);
  handFunction(500, 500, hourPos[0], minutePos[0]);

  handFunction(200, 600, hourPos[1], minutePos[1]);
  handFunction(300, 600, hourPos[3], minutePos[3]);
  handFunction(400, 600, hourPos[4], minutePos[4]);
  handFunction(500, 600, hourPos[2], minutePos[2]);

  handFunction(200, 700, hourPos[4], minutePos[4]);
  handFunction(300, 700, hourPos[6], minutePos[6]);
  handFunction(400, 700, hourPos[6], minutePos[6]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function two() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[6], minutePos[6]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[4], minutePos[4]);
  handFunction(300, 300, hourPos[6], minutePos[6]);
  handFunction(400, 300, hourPos[2], minutePos[2]);
  handFunction(500, 300, hourPos[5], minutePos[5]);

  handFunction(200, 400, hourPos[1], minutePos[1]);
  handFunction(300, 400, hourPos[6], minutePos[6]);
  handFunction(400, 400, hourPos[3], minutePos[3]);
  handFunction(500, 400, hourPos[5], minutePos[5]);

  handFunction(200, 500, hourPos[5], minutePos[5]);
  handFunction(300, 500, hourPos[1], minutePos[1]);
  handFunction(400, 500, hourPos[6], minutePos[6]);
  handFunction(500, 500, hourPos[3], minutePos[3]);

  handFunction(200, 600, hourPos[5], minutePos[5]);
  handFunction(300, 600, hourPos[4], minutePos[4]);
  handFunction(400, 600, hourPos[6], minutePos[6]);
  handFunction(500, 600, hourPos[2], minutePos[2]);

  handFunction(200, 700, hourPos[4], minutePos[4]);
  handFunction(300, 700, hourPos[6], minutePos[6]);
  handFunction(400, 700, hourPos[6], minutePos[6]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function three() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[6], minutePos[6]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[4], minutePos[4]);
  handFunction(300, 300, hourPos[6], minutePos[6]);
  handFunction(400, 300, hourPos[2], minutePos[2]);
  handFunction(500, 300, hourPos[5], minutePos[5]);

  handFunction(200, 400, hourPos[1], minutePos[1]);
  handFunction(300, 400, hourPos[6], minutePos[6]);
  handFunction(400, 400, hourPos[3], minutePos[3]);
  handFunction(500, 400, hourPos[5], minutePos[5]);

  handFunction(200, 500, hourPos[4], minutePos[4]);
  handFunction(300, 500, hourPos[6], minutePos[6]);
  handFunction(400, 500, hourPos[2], minutePos[2]);
  handFunction(500, 500, hourPos[5], minutePos[5]);

  handFunction(200, 600, hourPos[1], minutePos[1]);
  handFunction(300, 600, hourPos[6], minutePos[6]);
  handFunction(400, 600, hourPos[3], minutePos[3]);
  handFunction(500, 600, hourPos[5], minutePos[5]);

  handFunction(200, 700, hourPos[4], minutePos[4]);
  handFunction(300, 700, hourPos[6], minutePos[6]);
  handFunction(400, 700, hourPos[6], minutePos[6]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function four() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[2], minutePos[2]);
  handFunction(400, 200, hourPos[1], minutePos[1]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[5], minutePos[5]);
  handFunction(300, 300, hourPos[5], minutePos[5]);
  handFunction(400, 300, hourPos[5], minutePos[5]);
  handFunction(500, 300, hourPos[5], minutePos[5]);

  handFunction(200, 400, hourPos[5], minutePos[5]);
  handFunction(300, 400, hourPos[4], minutePos[4]);
  handFunction(400, 400, hourPos[3], minutePos[3]);
  handFunction(500, 400, hourPos[5], minutePos[5]);

  handFunction(200, 500, hourPos[4], minutePos[4]);
  handFunction(300, 500, hourPos[6], minutePos[6]);
  handFunction(400, 500, hourPos[2], minutePos[2]);
  handFunction(500, 500, hourPos[5], minutePos[5]);

  handFunction(200, 600, hourPos[0], minutePos[0]);
  handFunction(300, 600, hourPos[0], minutePos[0]);
  handFunction(400, 600, hourPos[5], minutePos[5]);
  handFunction(500, 600, hourPos[5], minutePos[5]);

  handFunction(200, 700, hourPos[0], minutePos[0]);
  handFunction(300, 700, hourPos[0], minutePos[0]);
  handFunction(400, 700, hourPos[4], minutePos[4]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function five() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[6], minutePos[6]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[5], minutePos[5]);
  handFunction(300, 300, hourPos[1], minutePos[1]);
  handFunction(400, 300, hourPos[6], minutePos[6]);
  handFunction(500, 300, hourPos[3], minutePos[3]);

  handFunction(200, 400, hourPos[5], minutePos[5]);
  handFunction(300, 400, hourPos[4], minutePos[4]);
  handFunction(400, 400, hourPos[6], minutePos[6]);
  handFunction(500, 400, hourPos[2], minutePos[2]);

  handFunction(200, 500, hourPos[4], minutePos[4]);
  handFunction(300, 500, hourPos[6], minutePos[6]);
  handFunction(400, 500, hourPos[2], minutePos[2]);
  handFunction(500, 500, hourPos[5], minutePos[5]);

  handFunction(200, 600, hourPos[1], minutePos[1]);
  handFunction(300, 600, hourPos[6], minutePos[6]);
  handFunction(400, 600, hourPos[3], minutePos[3]);
  handFunction(500, 600, hourPos[5], minutePos[5]);

  handFunction(200, 700, hourPos[4], minutePos[4]);
  handFunction(300, 700, hourPos[6], minutePos[6]);
  handFunction(400, 700, hourPos[6], minutePos[6]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function six() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[6], minutePos[6]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[5], minutePos[5]);
  handFunction(300, 300, hourPos[1], minutePos[1]);
  handFunction(400, 300, hourPos[6], minutePos[6]);
  handFunction(500, 300, hourPos[3], minutePos[3]);

  handFunction(200, 400, hourPos[5], minutePos[5]);
  handFunction(300, 400, hourPos[4], minutePos[4]);
  handFunction(400, 400, hourPos[6], minutePos[6]);
  handFunction(500, 400, hourPos[2], minutePos[2]);

  handFunction(200, 500, hourPos[5], minutePos[5]);
  handFunction(300, 500, hourPos[1], minutePos[1]);
  handFunction(400, 500, hourPos[2], minutePos[2]);
  handFunction(500, 500, hourPos[5], minutePos[5]);

  handFunction(200, 600, hourPos[5], minutePos[5]);
  handFunction(300, 600, hourPos[4], minutePos[4]);
  handFunction(400, 600, hourPos[3], minutePos[3]);
  handFunction(500, 600, hourPos[5], minutePos[5]);

  handFunction(200, 700, hourPos[4], minutePos[4]);
  handFunction(300, 700, hourPos[6], minutePos[6]);
  handFunction(400, 700, hourPos[6], minutePos[6]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function seven() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[6], minutePos[6]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[4], minutePos[4]);
  handFunction(300, 300, hourPos[6], minutePos[6]);
  handFunction(400, 300, hourPos[2], minutePos[2]);
  handFunction(500, 300, hourPos[5], minutePos[5]);

  handFunction(200, 400, hourPos[0], minutePos[0]);
  handFunction(300, 400, hourPos[0], minutePos[0]);
  handFunction(400, 400, hourPos[5], minutePos[5]);
  handFunction(500, 400, hourPos[5], minutePos[5]);

  handFunction(200, 500, hourPos[0], minutePos[0]);
  handFunction(300, 500, hourPos[0], minutePos[0]);
  handFunction(400, 500, hourPos[5], minutePos[5]);
  handFunction(500, 500, hourPos[5], minutePos[5]);

  handFunction(200, 600, hourPos[0], minutePos[0]);
  handFunction(300, 600, hourPos[0], minutePos[0]);
  handFunction(400, 600, hourPos[5], minutePos[5]);
  handFunction(500, 600, hourPos[5], minutePos[5]);

  handFunction(200, 700, hourPos[0], minutePos[0]);
  handFunction(300, 700, hourPos[0], minutePos[0]);
  handFunction(400, 700, hourPos[4], minutePos[4]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function eight() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[6], minutePos[6]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[5], minutePos[5]);
  handFunction(300, 300, hourPos[1], minutePos[1]);
  handFunction(400, 300, hourPos[2], minutePos[2]);
  handFunction(500, 300, hourPos[5], minutePos[5]);

  handFunction(200, 400, hourPos[5], minutePos[5]);
  handFunction(300, 400, hourPos[4], minutePos[4]);
  handFunction(400, 400, hourPos[3], minutePos[3]);
  handFunction(500, 400, hourPos[5], minutePos[5]);

  handFunction(200, 500, hourPos[5], minutePos[5]);
  handFunction(300, 500, hourPos[1], minutePos[1]);
  handFunction(400, 500, hourPos[2], minutePos[2]);
  handFunction(500, 500, hourPos[5], minutePos[5]);

  handFunction(200, 600, hourPos[5], minutePos[5]);
  handFunction(300, 600, hourPos[4], minutePos[4]);
  handFunction(400, 600, hourPos[3], minutePos[3]);
  handFunction(500, 600, hourPos[5], minutePos[5]);

  handFunction(200, 700, hourPos[4], minutePos[4]);
  handFunction(300, 700, hourPos[6], minutePos[6]);
  handFunction(400, 700, hourPos[6], minutePos[6]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}

function nine() {
  handFunction(200, 200, hourPos[1], minutePos[1]);
  handFunction(300, 200, hourPos[6], minutePos[6]);
  handFunction(400, 200, hourPos[6], minutePos[6]);
  handFunction(500, 200, hourPos[2], minutePos[2]);

  handFunction(200, 300, hourPos[5], minutePos[5]);
  handFunction(300, 300, hourPos[1], minutePos[1]);
  handFunction(400, 300, hourPos[2], minutePos[2]);
  handFunction(500, 300, hourPos[5], minutePos[5]);

  handFunction(200, 400, hourPos[5], minutePos[5]);
  handFunction(300, 400, hourPos[4], minutePos[4]);
  handFunction(400, 400, hourPos[3], minutePos[3]);
  handFunction(500, 400, hourPos[5], minutePos[5]);

  handFunction(200, 500, hourPos[4], minutePos[4]);
  handFunction(300, 500, hourPos[6], minutePos[6]);
  handFunction(400, 500, hourPos[2], minutePos[2]);
  handFunction(500, 500, hourPos[5], minutePos[5]);

  handFunction(200, 600, hourPos[1], minutePos[1]);
  handFunction(300, 600, hourPos[6], minutePos[6]);
  handFunction(400, 600, hourPos[3], minutePos[3]);
  handFunction(500, 600, hourPos[5], minutePos[5]);

  handFunction(200, 700, hourPos[4], minutePos[4]);
  handFunction(300, 700, hourPos[6], minutePos[6]);
  handFunction(400, 700, hourPos[6], minutePos[6]);
  handFunction(500, 700, hourPos[3], minutePos[3]);
}
