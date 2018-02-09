//Carol Pan
//SoftDev2 pd7
//K3 -- What is it saving the screen from?
//2018-02-09

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
console.log("printing canvas.....");
console.log(c);
console.log(ctx);

//circle in and out
var a = document.getElementById("animate");
var inc = true;
var started = false;
var frame = 0;
var r = 70
var drawCircle1 = function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,850,600);
    ctx.beginPath();
    ctx.arc(475, 300, r, 0, 2* Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#0000ff";
    ctx.fill();
}

var growingCallBack = function(e){
    console.log(frame)
    if (!started){
	
	drawCircle1();
	started = true;
    }
    else{
	
	if (inc){
	    r += 1;
	    drawCircle1();
	    if (r>=140){
		inc = false;
	    };
	}
	else{
	    r -= 1;
	    drawCircle1();
	    if (r<=0){
		inc = true;
	    };
	};
	
    }
    frame = window.requestAnimationFrame(growingCallBack);
};

var s = document.getElementById("stop");
var stopCallBack = function(e){
    window.cancelAnimationFrame(frame);
};

var l = document.getElementById("clear");
var clearCallBack = function(e){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,600,800);
    inc = true;
    started = false;
    r=60;
    x=300;
    y=300;
};

var x = 300;
var y = 300;
var add_x = 2;
var add_y = 2;
var color = 1
var drawCircle2 = function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,850,600);
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2* Math.PI);
    ctx.stroke();
    if (color==1)
	ctx.fillStyle = "#ffff00";
    else
	ctx.fillStyle = "#00ff00";
    ctx.fill();
}

var screenSaverCallBack = function(e){
    console.log(frame);
    drawCircle2();
    if (x>=850 || x<=0 ){
	add_x *= -1;
	color *= -1;
    }
    if (y>=600 || y<=0){
	add_y *= -1;
	color *= -1;
    }
    x += add_x;
    y += add_y;
    frame = window.requestAnimationFrame(screenSaverCallBack);

};

var toggle = 0;
var t = document.getElementById("toggle");

var toggleCallBack = function(e){
    stopCallBack();
    clearCallBack();
    if (toggle == 0)
	toggle = 1;
    else
	toggle = 0;
};

var animateCallBack = function(e){
    e.preventDefault();
    if (toggle == 0)
	growingCallBack(e);
    else
	screenSaverCallBack(e);
}

t.addEventListener('click', toggleCallBack);
a.addEventListener('click', animateCallBack);
s.addEventListener('click', stopCallBack);
l.addEventListener('click', clearCallBack);
