class Ray {
    constructor(x, y, a){
        this.x = x;
        this.y = y;
        this.a = a;
    }
    march(context, boundries, c){
        let record = Infinity;
        // let counter = 0;
        let cx = this.x;
        let cy = this.y;
        while (true){
            for(const b of boundries){
                const d = signedDist(cx, cy, b.x, b.y, b.r);
                if (d < record) record = d;
            }
            if(record < 1) break;
            if(cx > c.width || cy > c.height || cx < 0 || cy < 0) break;
            // record = Infinity;
            // this.show(context, record);
            const r = record;
            context.strokeStyle = 'rgba(255, 255, 0, 0.4)';
            context.lineWidth = 2;
            context.beginPath();
            context.arc(cx, cy, r, 0, Math.PI*2);
            context.stroke();
            const vx = r * Math.cos(this.a);
            const vy = r * Math.sin(this.a);
            cx += vx;
            cy += vy;
            // const x = r * Math.cos(this.a);
            // const y = r * Math.sin(this.a);
            record = Infinity;
            // counter++;
            
        }
        context.lineWidth = 5;
        context.strokeStyle = 'red';
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(cx, cy);
        context.stroke();
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(this.x, this.y, 10, 0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.arc(this.x, this.y, 10, 0, Math.PI*2);
        context.stroke();
        context.beginPath();
        context.arc(cx, cy, 10, 0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.arc(cx, cy, 10, 0, Math.PI*2);
        context.stroke();
    }
    // show(context, r_){
    // }
}