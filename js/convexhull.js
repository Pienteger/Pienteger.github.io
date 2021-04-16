const points = [];
const hull = [];

let leftMost;
let currentVertex;
let index;
let nextIndex = -1;
let nextVertex;

function setup() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    var canvas = createCanvas((vw * 70) / 100, (vh * 60) / 100);
    var name = window.prompt("Enter the number of points: ");
    canvas.parent('convexHolder');
    let buffer = 20;
    for (let i = 0; i < name; i++) {
        points.push(
            createVector(
                random(buffer, width - buffer),
                random(buffer, height - buffer)
            )
        );
    }
    points.sort((a, b) => a.x - b.x);
    leftMost = points[0];
    currentVertex = leftMost;
    hull.push(currentVertex);
    nextVertex = points[1];
    index = 2;
}
function windowResized() {
    resizeCanvas((windowWidth * 50) / 100, (windowHeight * 50) / 100);
}
function draw() {
    background("#1b1a19");

    stroke("#edebe9");
    strokeWeight(8);
    for (let p of points) {
        point(p.x, p.y);
    }

    stroke(98, 100, 167);
    fill(98, 100, 167, 50);
    strokeWeight(3)
    beginShape();
    for (let p of hull) {
        vertex(p.x, p.y);
    }
    endShape(CLOSE);

    stroke("#3955a3");
    strokeWeight(20);
    point(leftMost.x, leftMost.y);

    stroke("#008272");
    strokeWeight(20);
    point(currentVertex.x, currentVertex.y);

    stroke("#0078d4");
    strokeWeight(2);
    line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);

    let checking = points[index];
    stroke(255);
    line(currentVertex.x, currentVertex.y, checking.x, checking.y);

    const a = p5.Vector.sub(nextVertex, currentVertex);
    const b = p5.Vector.sub(checking, currentVertex);
    const cross = a.cross(b);

    if (cross.z < 0) {
        nextVertex = checking;
        nextIndex = index;
    }

    index = index + 1;
    if (index == points.length) {
        if (nextVertex == leftMost) {
            console.log('done');
            mySound.play();
            noLoop();
        } else {
            hull.push(nextVertex);
            currentVertex = nextVertex;
            index = 0;
            nextVertex = leftMost;
        }
    }
}


let mySound;
function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('../audio/60443_35187-lq');
}
