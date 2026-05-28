const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rainDrops = [];

for(let i=0;i<180;i++){
    rainDrops.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        l:Math.random()*1,
        xs:-4+Math.random()*4+2,
        ys:Math.random()*10+10
    });
}

function drawRain(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle='rgba(255,255,255,0.12)';
    ctx.lineWidth=1;

    for(let i=0;i<rainDrops.length;i++){
        let r=rainDrops[i];
        ctx.beginPath();
        ctx.moveTo(r.x,r.y);
        ctx.lineTo(r.x+r.l*r.xs,r.y+r.l*r.ys);
        ctx.stroke();
    }

    moveRain();
}

function moveRain(){
    for(let i=0;i<rainDrops.length;i++){
        let r=rainDrops[i];
        r.x+=r.xs;
        r.y+=r.ys;

        if(r.x>canvas.width || r.y>canvas.height){
            r.x=Math.random()*canvas.width;
            r.y=-20;
        }
    }
}

setInterval(drawRain,30);

window.addEventListener('resize',()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
