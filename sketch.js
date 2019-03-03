var colorArray = [
	"#427BCF",
  "#FFFFFF"
];

var randColor = [
	

];

var score = 0;
var count = 0;
var i = 0;
var sqobjAr = [];
var finalScore = 0;
var velocity = 5;



function setup() {
	
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	createCanvas(width, height);
	r1 = new rectangle(width/2,height/2,20,40,"#427BCF");
	r2 = new rectangle(width/2,r1.y + 40,20,40,"#FFFFFF"); 
  	r3 = new rectangle(0,0,width,height,"#f44286");
  	generate();
	
  
}

function draw() {
	count++;
	background("#f2cbbc");
	frameRate(120);
	r1.drawIt();
	r2.drawIt();
  
  if(score !== "End"){
    
  	
    sqobjAr[i].drawS();
    sqobjAr[i].x += velocity;
    checkCollision(sqobjAr[i],i);
	

    if(count > 90){
    sqobjAr[i+1].drawS();
    sqobjAr[i+1].x += velocity;
    checkCollision(sqobjAr[i+1],i+1);
    }

    // if(count > 180){
    // sqobjAr[i+2].drawS();
    // sqobjAr[i+2].x += velocity;
    // checkCollision(sqobjAr[i+2],i+2);
    // }


    // if(count > 270){
    // sqobjAr[i+3].drawS();
    // sqobjAr[i+3].x += velocity;
    // checkCollision(sqobjAr[i+3],i+3);
    // }
		
   //  text(count + " " + sqobjAr.length,200,130);
  	// if(count == 350){
   //  	count=0;
  	// }
  
  fill(120);
  textSize(30);
  text(score,width - 70,40);

  textSize(20);
  text("Blocks - HTML5 Game", 90, 40 );
  }


  else {
  	r3.drawIt();
    textSize(30);
    textAlign("center");
    fill(255);
    text("Thanks for Playing",width/2,height/2);
    textSize(20);
    text("Your Final Score " + finalScore,width/2,height/2+50);
    text("Click Anywhere to Play Again",width/2,height/2+200);
    window.addEventListener('click',function(){
		window.location.assign("index.html");
	});

  }
}

function checkCollision(s1,p){
  var hlimit = height/2 + 40;
  
  if(s1.x >= width / 2 && s1.x <= width / 2 + 20){
		if(s1.y <= hlimit - 4){
      // text("2nd condition",200,100);
      if(s1.c === r1.c){
        score+=1;
        sqobjAr.splice(p,1);
        

      }
			else{
        finalScore = score;
        score = "End";
        s1.w = 0;
        s1.h = 0;
			}
    }
  	else{
  		if(s1.c === r2.c){
        score+=1;
        sqobjAr.splice(p,1);
       
		}
      	else{
        	finalScore = score;
     		score = "End";
        	s1.w = 0;
        	s1.h = 0;
      		}	
	}
	if(score == 10 || score == 20 || score == 30 || score == 40 ){
    	velocity++;
    }
  }
}

function keyPressed(){
	if(keyCode == UP_ARROW){
			var col1 = r1.c;
			r1.c = r2.c;
			r2.c = col1;
	}
}


function rectangle(x,y,w,h,c){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.c = c;
	
	this.drawIt = function(){
		noStroke();
		fill(this.c);	
		rect(this.x,this.y,this.w,this.h);	
	}
}

//square class

function square(x,y,w,h,c){
	this.x = x;//4;
	this.y = y;//height/2 + 30;
	this.w = w;//10;
	this.h = h;//10;
	this.c = c;//"#FFFFFF";
	
	this.drawS = function(){
		noStroke();
		fill(this.c);
		rect(this.x,this.y,this.w,this.h);
	}
}


function generate(){
	  
    for(var i = 0; i < 40;i++){
  	sqobjAr.push(new square(-2,random(height/2,height/2 + 60),20,20,colorArray[getRandomInt(2)]));  
    }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}








