var numImages=5;
var currentImage=0;
var bannerLink="test.html";
var curInterval=0;
var isInTransition=false;
beginBannerInterval();
function nextBanner(){
	if(!isInTransition){
		isInTransition=true;
		var oldImage=currentImage;
		currentImage=(currentImage+1)%numImages;
		var banner=document.getElementById("bannerMain"+(oldImage+1));
		banner.className="hidden";
		var newBanner=document.getElementById("bannerMain"+(currentImage+1));
		setTimeout(function(){
			banner.zIndex=0;
			newBanner.zIndex=1;
			newBanner.className="visible";
			setTimeout(function(){
				isInTransition=false;
			},1000);
		},1000);
	}
}

function resetTimer(){
	clearInterval(curInterval);
	curInterval=setInterval(function(){nextBanner();},10000);
}

function nextBannerFromButton(){
	nextBanner();
	resetTimer();
}

function previousBannerFromButton(){
	if(!isInTransition){
		isInTransition=true;
		var oldImage=currentImage;
		currentImage=currentImage-1;
		if(currentImage<0){
			currentImage=numImages-1;
		}
		var banner=document.getElementById("bannerMain"+(oldImage+1));
		banner.className="hidden";
		var newBanner=document.getElementById("bannerMain"+(currentImage+1));
		setTimeout(function(){
			banner.zIndex=0;
			newBanner.zIndex=1;
			newBanner.className="visible";
			resetTimer();
			setTimeout(function(){
				isInTransition=false;
			},1000);
		},1000);
	}
}

function beginBannerInterval(){
	curInterval=setInterval(function(){nextBanner();},10000);
}
function goToBannerLink(){
	if(currentImage!=2){
		window.location=linksForImages[currentImage];
	}
}

function fadeIn(element){element.className="visibleFast";}
function fadeOut(element){element.className="hiddenFast";}

function fullOpacity(element){
	element.style.opacity=1;
}
function point7opacity(element){
	element.style.opacity=0.5;	
}

