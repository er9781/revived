var currentPageButtonNum=0;

function darkenCurrentButton(cNum){
	currentPageButtonNum=cNum;
	x=document.getElementById("button"+cNum);
	x.style.background="black";
	x.style.opacity=0.3;
	
}

function buttonChange(num){
	if(num!=currentPageButtonNum){
		x=document.getElementById("button"+num);
		x.style.background="black";
		x.style.opacity=0.3;
		y=document.getElementById("button"+currentPageButtonNum);
		y.style.background="none";
		y.style.opacity=1;
	}
}
function changeBack(num){
	if(num!=currentPageButtonNum){
		x=document.getElementById("button"+num);
		x.style.background="none";
		x.style.opacity=1;
		y=document.getElementById("button"+currentPageButtonNum);
		y.style.background="black";
		y.style.opacity=0.3;
	}
}

function loadHome(){window.location="index.html";}
function loadContactUs(){window.location="contactUs.html";}
function loadEstimates(){window.location="estimates.php";}
function loadInitiatives(){window.location="initiatives.html";}
function loadUpgradeProgram(){window.location="upgradeProgam.html"}

function loadImages(num){
	document.getElementById("logo").src="tree.png";
	document.getElementById("revivedText").src="text.png";
	if(num!=0){
		darkenCurrentButton(num);
	}
}