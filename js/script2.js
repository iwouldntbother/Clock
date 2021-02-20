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

const handPositions = [
    // 0
    [
        1,6,6,2,
        5,1,2,5,
        5,5,5,5,
        5,5,5,5,
        5,4,3,5,
        4,6,6,3
    ],
    // 1
    [
        1,6,2,0,
        4,2,5,0,
        0,5,5,0,
        0,5,5,0,
        1,3,4,2,
        4,6,6,3
    ],
    // 2
    [
        1,6,6,2,
        4,6,2,5,
        1,6,3,5,
        5,1,6,3,
        5,4,6,2,
        4,6,6,3
    ],
    // 3
    [
        1,6,6,2,
        4,6,2,5,
        1,6,3,5,
        4,6,2,5,
        1,6,3,5,
        4,6,6,3
    ],
    // 4
    [
        1,2,1,2,
        5,5,5,5,
        5,4,3,5,
        4,6,2,5,
        0,0,5,5,
        0,0,4,3
    ],
    // 5
    [
        1,6,6,2,
        5,1,6,3,
        5,4,6,2,
        4,6,2,5,
        1,6,3,5,
        4,6,6,3
    ],
    // 6
    [
        1,6,6,2,
        5,1,6,3,
        5,4,6,2,
        5,1,2,5,
        5,4,3,5,
        4,6,6,3
    ],
    // 7
    [
        1,6,6,2,
        4,6,2,5,
        0,0,5,5,
        0,0,5,5,
        0,0,5,5,
        0,0,4,3
    ],
    // 8
    [
        1,6,6,2,
        5,1,2,5,
        5,4,3,5,
        5,1,2,5,
        5,4,3,5,
        4,6,6,3
    ],
    // 9
    [
        1,6,6,2,
        5,1,2,5,
        5,4,3,5,
        4,6,2,5,
        1,6,3,5,
        4,6,6,3
    ],
    // 10
    [
        0,0,
        1,2,
        4,3,
        1,2,
        4,3,
        0,0
    ]
]

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

document.getElementById("canvasContainer").innerHTML += "<p id='console'></p>"
var con = document.getElementById("console")

con.style.position = "fixed"
con.style.bottom = "0";
con.innerHTML = "test"

var a = 0;

function setup() {
    let cnv = createCanvas(720, 300);
    cnv.parent("canvasContainer")
    angleMode(DEGREES);
    background(255);
    frameRate(24);
}

function draw() {
    background(255);
    d = new Date();

    var milli = d.getMilliseconds();
    var p_milli = milli/1000 + .001;
    var s = d.getSeconds() + p_milli;
    var p_s = s/60 + .001;
    var m = d.getMinutes() + p_s;
    var p_m = m/60 + .001;
    var h = d.getHours() + p_m;
    var p_h = h%12/12 + .001;

    var s2 = Number(String(s)[1])
    var s2_p = Number(String(p_milli))
    // 
    var s1 = Number(String(s)[0])
    var s1_p = (s2 + s2_p) / 10
    //
    var m2 = Number(String(m)[1])
    var m2_p = Number(String(p_s))
    // 
    var m1 = Number(String(m)[0])
    var m1_p = (m2 + m2_p) / 10
    // 
    var h2 = Number(String(h)[1])
    var h2_p = Number(String(p_m))
    // 
    var h1 = Number(String(h)[0])
    var h1_p =  (h2 + h2_p) / 10

    con.innerHTML = s1 +" "+ s1_p +" | "+ s2 +" "+ s2_p
    
    push();

        scale(0.8)

        push()
        translate(0, 0);
        singleNumber(100, 100, h1, h1_p)
        pop()

        push()
        translate(120, 0);
        singleNumber(100, 100, h2, h2_p)
        pop()

        push()
        translate(240, 0);
        singleNumber(100, 100, 10, 0)
        pop()

        push()
        translate(300, 0);
        singleNumber(100, 100, m1, m1_p)
        pop()

        push()
        translate(420, 0);
        singleNumber(100, 100, m2, m2_p)
        pop()

        push()
        translate(540, 0);
        singleNumber(100, 100, 10, 0)
        pop()

        push()
        translate(600, 0);
        singleNumber(100, 100, s1, s1_p)
        pop()

        push()
        translate(720, 0);
        singleNumber(100, 100, s2, s2_p)
        pop()

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

function singleNumber(x, y, number, percent) {
    // con.innerHTML = number + " . " + percent

    var handvalues = eval(handPositions[number])
    var targetHandValues = eval(handPositions[number++])

    push();
    
    scale(0.3);
    var i=0
    for (iy=0; iy < (handvalues.length / (handvalues.length / 6)); iy++) {
        // console.log(iy)
        for (ix=0; ix < (handvalues.length / 6); ix++) {
            // console.log(ix)

            var oM = map(handPos[handvalues[i]][1], 0, 60, 0, 359);
            var oH = map(handPos[handvalues[i]][0], 0, 12, 0, 359);
            
            var tM = map(handPos[targetHandValues[i]][1], 0, 60, 0, 359);
            var tH = map(handPos[targetHandValues[i]][0], 0, 12, 0, 359);

            var dM = tM - oM
            var dH = tH - oM

            var cM = oM + (dM * percent)
            var cH = oH + (dH * percent)

            // console.log(cM, cH)

            // console.log(handPos[handvalues[i]])

            push();

                translate(x+(x*ix),y+(y*iy))

                stroke(0);
                strokeWeight(5);
                fill(255);
                ellipse(0, 0, 100, 100);  

                push();
                    rotate(-90);
                    rotate(cM);
                    strokeWeight(10);
                    stroke(0);
                    line(0, 0, 100 / 2 - 10, 0);
                pop();

                push();
                    rotate(-90);
                    rotate(cH);
                    strokeWeight(10);
                    stroke(0);
                    line(0, 0, 100 / 2 - 10, 0);
                pop();

            pop();
            i++
        }
    }

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
