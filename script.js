const fps = 30;
const boundries = [];
const amount = 20;
let ray;
let mouseAngle = false;;
window.onload = () => {
    addEventListener('keypress', e => {
        if(e.key === 'e') {
            if(mouseAngle) {
                mouseAngle = false;
            }else{
                mouseAngle = true;
            }
        }
    })
    c = document.getElementById('gc');
    ctx = c.getContext("2d");
    c.width  = window.innerWidth;
    c.height = window.innerHeight;
    for(let i = 0; i < amount; i++){
        boundries.push(new Boundry(Math.random()*c.width, Math.random() * c.height, Math.random() * 15 + 15));
    }
    ray = new Ray(c.width/2, c.height/2, Math.PI/2);
    setInterval(draw, 1000/fps);
}

let mouseX;
let mouseY;

function MouseMove() {
    const e = window.event;
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, c.width, c.height);
    for(const b of boundries){
        b.show(ctx);
    }
    // console.log(mouseAngle);
    ray.march(ctx, boundries, c)
    // ray.show(ctx, 100);
    if(!mouseAngle) {
        ray.a += 0.01;
    } else {
        const a = Math.atan2(ray.x - mouseX, ray.y - mouseY);
        ray.a = -a-Math.PI/2;
    }
}
function signedDist(x1, y1, x2, y2, r){
    const a = x1 - x2;
    const b = y1 - y2;
    const d = Math.sqrt(a*a + b*b);
    return d - r;
}
