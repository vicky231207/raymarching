class Boundry {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    show(context){
        context.strokeStyle = 'white';
        context.lineWidth = 2;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.stroke();
    }
}