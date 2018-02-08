//Carol Pan
//SoftDev2 pd7
//K2 -- Locked in Motion
//2018-02-08

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
console.log("printing canvas.....");
console.log(c);
console.log(ctx);

var a = document.getElementById("animate");
var inc = true;
var started = false;
var frame = 0;
var x = 300;
var y = 300;
var r = 30
var drawCircle = function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,600,600);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2* Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#0000ff";
    ctx.fill();
}
var animateCallBack = function(e){
    console.log(frame)
    if (!started){
	
	drawCircle();
	started = true;
    }
    else{
	
	if (inc){
	    r += 1;
	    drawCircle();
	    if (r>=45){
		inc = false;
	    };
	}
	else{
	    r -= 1;
	    drawCircle();
	    if (r<=15){
		inc = true;
	    };
	};
	
    }
    frame = window.requestAnimationFrame(animateCallBack);
};

var s = document.getElementById("stop")
var stopCallBack = function(e){
    window.cancelAnimationFrame(frame);
};

a.addEventListener('click', animateCallBack);
s.addEventListener('click', stopCallBack);
