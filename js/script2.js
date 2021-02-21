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


// document.getElementById("canvasContainer").innerHTML += "<p id='console'></p>"
// var con = document.getElementById("console")
// con.innerHTML = "test"

var a = 0;
var bg = 255;
var fg = 0;
var light = true;

function setup() {
    let cnv = createCanvas(1305, 315);
    cnv.parent("canvasContainer")
    angleMode(DEGREES);
    background(bg);
    frameRate(24);
}

function draw() {
    // background(bg);
    clear();
    d = new Date();

    var milli = d.getMilliseconds();
    var p_milli = milli/1000// + .001;
    var s = d.getSeconds() + p_milli;
    var p_s = s/60// + .001;
    var m = d.getMinutes() + p_s;
    var p_m = m/60// + .001;
    var h = d.getHours() + p_m;
    var p_h = h%12/12 + .001;

    var s2 = Number((String((("0"+s).split(".")[0]).slice(-2)))[1])
    var s2_p = Number(p_milli)
    // 
    var s1 = Number((String((("0"+s).split(".")[0]).slice(-2)))[0])
    var s1_p = (s2 + s2_p) / 10
    //
    var m2 = Number((String((("0"+m).split(".")[0]).slice(-2)))[1])
    var m2_p = Number(p_s)
    // 
    var m1 = Number((String((("0"+m).split(".")[0]).slice(-2)))[0])
    var m1_p = (m2 + m2_p) / 10
    // 
    var h2 = Number((String((("0"+h).split(".")[0]).slice(-2)))[1])
    var h2_p = Number(p_m)
    // 
    var h1 = Number((String((("0"+h).split(".")[0]).slice(-2)))[0])
    var h1_p =  (h2 + h2_p) / 10

    // con.innerHTML = ((h1_p > 1) ? console.log("h1") : h1_p) +"<br>"+ ((h2_p > 1) ? console.log("h2") : h2_p) +"<br>"+ ((m1_p > 1) ? console.log("m1") : m1_p) +"<br>"+ ((m2_p > 1) ? console.log("m2") : m2_p) +"<br>"+ ((s1_p > 1) ? console.log("s1") : s1_p) +"<br>"+ ((s2_p > 1) ? console.log("s2") : s2_p)
    
    push();

        scale(1.5)

        push()
        translate(0, 0);
        singleNumber(100, 100, h1, ((h1 == 1) ? 0 : (h1 + 1)), h1_p)
        pop()

        push()
        translate(120, 0);
        singleNumber(100, 100, h2, (h2 + 1), h2_p)
        pop()

        push()
        translate(240, 0);
        semiColon(100, 100)
        pop()

        push()
        translate(300, 0);
        singleNumber(100, 100, m1, ((m1 == 5) ? 0 : (m1 + 1)), m1_p)
        pop()

        push()
        translate(420, 0);
        singleNumber(100, 100, m2, (m2 + 1), m2_p)
        pop()

        push()
        translate(540, 0);
        semiColon(100, 100)
        pop()

        push()
        translate(600, 0);
        singleNumber(100, 100, s1, ((s1 == 5) ? 0 : (s1 + 1)), s1_p)
        pop()

        push()
        translate(720, 0);
        singleNumber(100, 100, s2, (s2 + 1), s2_p)
        pop()

    pop()
  
}

function singleNumber(x, y, number, targetNumber, percent) {

    var handvalues = eval(handPositions[number])
    var targetHandValues = eval(handPositions[((targetNumber == 10) ? 0 : targetNumber)])

    push();
    
    scale(0.3);
    var i=0
    for (iy=0; iy < (handvalues.length / (handvalues.length / 6)); iy++) {
        for (ix=0; ix < (handvalues.length / 6); ix++) {

            var oM = map(handPos[handvalues[i]][1], 0, 60, 0, 359);
            var oH = map(handPos[handvalues[i]][0], 0, 12, 0, 359);
            
            var tM = map(handPos[targetHandValues[i]][1], 0, 60, 0, 359);
            var tH = map(handPos[targetHandValues[i]][0], 0, 12, 0, 359);

            var dM = ((tM == oM) ? tM+360 : tM) - oM
            var dH = ((tH == oH) ? tH+360 : tH) - oH

            var cM = oM + (dM * percent)
            var cH = oH + (dH * percent)


            push();

                translate(x+(x*ix),y+(y*iy))

                stroke(fg);
                strokeWeight(5);
                fill(bg);
                noFill();
                ellipse(0, 0, 100, 100);  

                push();
                    rotate(-90);
                    rotate(cM);
                    strokeWeight(10);
                    stroke(fg);
                    line(0, 0, 100 / 2 - 10, 0);
                pop();

                push();
                    rotate(-90);
                    rotate(cH);
                    strokeWeight(10);
                    stroke(fg);
                    line(0, 0, 100 / 2 - 10, 0);
                pop();

            pop();
            i++
        }
    }

    pop();
    
}

function semiColon(x, y) {

    var handvalues = eval(handPositions[10])

    push();
    
    scale(0.3);
    var i=0
    for (iy=0; iy < (handvalues.length / (handvalues.length / 6)); iy++) {
        for (ix=0; ix < (handvalues.length / 6); ix++) {

            var oM = map(handPos[handvalues[i]][1], 0, 60, 0, 359);
            var oH = map(handPos[handvalues[i]][0], 0, 12, 0, 359);

            push();

                translate(x+(x*ix),y+(y*iy))

                stroke(fg);
                strokeWeight(5);
                // fill(bg);
                noFill();
                ellipse(0, 0, 100, 100);  

                push();
                    rotate(-90);
                    rotate(oM);
                    strokeWeight(10);
                    stroke(fg);
                    line(0, 0, 100 / 2 - 10, 0);
                pop();

                push();
                    rotate(-90);
                    rotate(oH);
                    strokeWeight(10);
                    stroke(fg);
                    line(0, 0, 100 / 2 - 10, 0);
                pop();

            pop();
            i++
        }
    }

    pop();
    
}

window.addEventListener("keypress", (e) => {
    if (e.code == "Space") {
        if (light) {
            bg = 0;
            fg = 255;
            document.body.style.backgroundColor = "#000000"
            light = false;
        } else {
            bg = 255;
            fg = 0;
            document.body.style.backgroundColor = "#FFFFFF"
            light = true;
        }
    }
})