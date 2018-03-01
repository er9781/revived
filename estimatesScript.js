//estimates Script
var iPhoneM1V1Ps=["",330,310,150,80];
var iPhoneM1V2Ps=["",320,300,150,80];
var iPhoneM1V3Ps=["",310,290,150,80];
var iPhoneM1Vs={"64GB":iPhoneM1V1Ps,"32GB":iPhoneM1V2Ps,"16GB":iPhoneM1V3Ps};
var iPhoneM2V1Ps=["",220,200,100,50];
var iPhoneM2V2Ps=["",210,190,100,50];
var iPhoneM2V3Ps=["",200,180,100,50];
var iPhoneM2Vs={"64GB":iPhoneM2V1Ps,"32GB":iPhoneM2V2Ps,"16GB":iPhoneM2V3Ps};
var iPhoneM3V1Ps=["",120,110,50,30];
var iPhoneM3V2Ps=["",120,110,50,30];
var iPhoneM3V3Ps=["",120,110,50,30];
var iPhoneM3Vs={"32GB":iPhoneM3V1Ps,"16GB":iPhoneM3V2Ps,"8GB":iPhoneM3V3Ps};
var iPhoneM4V1Ps=["",30,25,10,5];
var iPhoneM4V2Ps=["",30,25,10,5];
var iPhoneM4V3Ps=["",30,25,10,5];
var iPhoneM4Vs={"32GB":iPhoneM4V1Ps,"16GB":iPhoneM4V2Ps,"8GB":iPhoneM4V3Ps};
var iPhoneM5V1Ps=["",30,25,10,5];
var iPhoneM5V2Ps=["",30,25,10,5];
var iPhoneM5Vs={"16GB":iPhoneM5V1Ps,"8GB":iPhoneM5V2Ps};
var iPhoneModels={"5":iPhoneM1Vs,"4S":iPhoneM2Vs,"4":iPhoneM3Vs,"3GS":iPhoneM4Vs,"3G":iPhoneM5Vs};

var BlackberryM1V1Ps=["",100,80,30,20];
var BlackberryM1V2Ps=["",80,60,20,10];
var BlackberryM1V3Ps=["",40,35,10,5];
var BlackberryM1V4Ps=["",40,35,10,5];
var BlackberryM1V5Ps=["",20,10,5,2.5];
var BlackberryM1Vs={"9900":BlackberryM1V1Ps,"9790":BlackberryM1V2Ps,"9780":BlackberryM1V3Ps,"9700":BlackberryM1V4Ps,"9000":BlackberryM1V5Ps};
var BlackberryM2V1Ps=["",55,50,10,5];
var BlackberryM2V2Ps=["",50,45,10,5];
var BlackberryM2V3Ps=["",40,35,10,5];
var BlackberryM2Vs={"9860":BlackberryM2V1Ps,"9810":BlackberryM2V2Ps,"9800":BlackberryM2V3Ps};
var BlackberryM3V1Ps=["",30,20,10,5];
var BlackberryM3V2Ps=["",40,30,10,5];
var BlackberryM3V3Ps=["",20,15,10,5];
var BlackberryM3V4Ps=["",5,5,1,1];
var BlackberryM3V5Ps=["",5,5,2,1];
var BlackberryM3V6Ps=["",5,5,2,1];
var BlackberryM3Vs={"9380":BlackberryM3V1Ps,"9360":BlackberryM3V2Ps,"9300":BlackberryM3V3Ps,"8900":BlackberryM3V4Ps,"8530":BlackberryM3V5Ps,"8520":BlackberryM3V6Ps};
var BlackberryM4V1Ps=["",5,5,2,1];
var BlackberryM4V2Ps=["",5,2.5,1,1];
var BlackberryM4V3Ps=["",5,2.5,1,1];
var BlackberryM4Vs={"9100":BlackberryM4V1Ps,"8220":BlackberryM4V2Ps,"8100":BlackberryM4V3Ps};
var BlackberryM5V1Ps=["",5,5,2,1];
var BlackberryM5V2Ps=["",5,5,2,1];
var BlackberryM5V3Ps=["",5,2.5,1,1];
var BlackberryM5V4Ps=["",5,2.5,1,1];
var BlackberryM5Vs={"9550":BlackberryM5V1Ps,"9520":BlackberryM5V2Ps,"9530":BlackberryM5V3Ps,"9500":BlackberryM5V4Ps};
var BlackberryModels={"Bold":BlackberryM1Vs,"Torch":BlackberryM2Vs,"Curve":BlackberryM3Vs,"Pearl":BlackberryM4Vs,"Storm":BlackberryM5Vs};

var SamsungM1V1Ps=["",330,300,100,50];
var SamsungM1Vs={"N/A":SamsungM1V1Ps};
var SamsungM2V1Ps=["",220,200,40,30];
var SamsungM2Vs={"N/A":SamsungM2V1Ps};
var SamsungM3V1Ps=["",90,70,10,10];
var SamsungM3Vs={"N/A":SamsungM3V1Ps};
var SamsungM4V1Ps=["",90,70,10,10];
var SamsungM4Vs={"N/A":SamsungM4V1Ps};
var SamsungM5V1Ps=["",40,25,5,5];
var SamsungM5Vs={"N/A":SamsungM5V1Ps};
var SamsungM6V1Ps=["",70,60,5,5];
var SamsungM6Vs={"Google":SamsungM6V1Ps};
var SamsungM7V1Ps=["",30,30,5,5];
var SamsungM7Vs={"Google":SamsungM7V1Ps};
var SamsungModels={"Galaxy S4":SamsungM1Vs,"Galaxy S3 {GT-i9300}":SamsungM2Vs,"Galaxy S2 {GT-i9100}":SamsungM3Vs,"Galaxy S2X":SamsungM4Vs,"Galaxy S {GT-i9000}":SamsungM5Vs,"Galaxy Nexus {GT-i9250}":SamsungM6Vs,"Nexus S {GT-i9020}":SamsungM7Vs};

var iPadM1V1Ps=["",285,260,155,125];
var iPadM1V2Ps=["",280,255,150,120];
var iPadM1V3Ps=["",275,250,145,115];
var iPadM1V4Ps=["",270,245,140,110];
var iPadM1V5Ps=["",265,240,135,105];
var iPadM1V6Ps=["",260,235,130,100];
var iPadM1Vs={"64GB WIFI+3G":iPadM1V1Ps,"64GB WIFI":iPadM1V2Ps,"32GB WIFI+3G":iPadM1V3Ps,"32GB WIFI":iPadM1V4Ps,"16GB WIFI+3G":iPadM1V5Ps,"16GB WIFI":iPadM1V6Ps};
var iPadM2V1Ps=["",215,195,115,95];
var iPadM2V2Ps=["",210,190,110,95];
var iPadM2V3Ps=["",205,185,105,90];
var iPadM2V4Ps=["",200,180,100,90];
var iPadM2V5Ps=["",195,175,95,85];
var iPadM2V6Ps=["",190,170,90,85];
var iPadM2Vs={"64GB WIFI+3G":iPadM2V1Ps,"64GB WIFI":iPadM2V2Ps,"32GB WIFI+3G":iPadM2V3Ps,"32GB WIFI":iPadM2V4Ps,"16GB WIFI+3G":iPadM2V5Ps,"16GB WIFI":iPadM2V6Ps};
var iPadM3V1Ps=["",120,100,40,35];
var iPadM3V2Ps=["",115,95,40,35];
var iPadM3V3Ps=["",110,90,40,35];
var iPadM3V4Ps=["",105,85,40,35];
var iPadM3V5Ps=["",100,80,40,35];
var iPadM3V6Ps=["",95,75,40,35];
var iPadM3Vs={"64GB WIFI+3G":iPadM3V1Ps,"64GB WIFI":iPadM3V2Ps,"32GB WIFI+3G":iPadM3V3Ps,"32GB WIFI":iPadM3V4Ps,"16GB WIFI+3G":iPadM3V5Ps,"16GB WIFI":iPadM3V6Ps};
var iPadModels={"3rd Gen":iPadM1Vs,"2nd Gen":iPadM2Vs,"Original":iPadM3Vs};

var iPodM1V1Ps=["",70,60,20,10];
var iPodM1V2Ps=["",50,40,15,10];
var iPodM1V3Ps=["",30,20,10,10];
var iPodM1Vs={"64GB":iPodM1V1Ps,"32GB":iPodM1V2Ps,"8GB":iPodM1V3Ps};
var iPodM2V1Ps=["",30,30,10,10];
var iPodM2V2Ps=["",25,25,10,10];
var iPodM2Vs={"64GB":iPodM2V1Ps,"32GB":iPodM2V2Ps};
var iPodM3V1Ps=["",25,20,5,5];
var iPodM3V2Ps=["",25,20,5,5];
var iPodM3V3Ps=["",20,15,5,5];
var iPodM3Vs={"32GB":iPodM3V1Ps,"16GB":iPodM3V2Ps,"8GB":iPodM3V3Ps};
var iPodModels={"4th Gen":iPodM1Vs,"3rd Gen":iPodM2Vs,"2nd Gen":iPodM3Vs};

var OtherM1V1Ps=["Kindly Contact Us and we shall provide a quote ASAP",,,,];
var OtherM1Vs={"N/A":OtherM1V1Ps};
var OtherModels={"N/A":OtherM1Vs};

var phones={"iPhone":iPhoneModels,"Blackberry":BlackberryModels,"Samsung":SamsungModels,"iPad":iPadModels,"iPod":iPodModels,"Other":OtherModels};

var numRows=0;

function updateMakeDropList(){
	var options='';
	var keys=getKeys(phones);
	for(var i=0;i<keys.length-1;i++){
		options+='<option value="'+i+'">'+keys[i]+'</option>'
	}
	document.getElementById("makeDropList").innerHTML=options;
}

function updateModelDropList(){
	var makeDropList=document.getElementById("makeDropList");
	var make=makeDropList.options[makeDropList.selectedIndex].text;
	var listOfModels=getKeys(phones[make]);
	var options='';
	for(var i=0;i<listOfModels.length;i++){
		if(i==0){
			options=options+'<option selected value="'+i+'">'+listOfModels[i]+'</option>';
		}
		else{
			options=options+'<option value="'+i+'">'+listOfModels[i]+'</option>';
		}
	}
	var modelsList=document.getElementById("modelDropList");
	modelsList.innerHTML=options;
	updateVersionDropList();
}

function updateVersionDropList(){
	var makeDropList=document.getElementById("makeDropList");
	var make=makeDropList.options[makeDropList.selectedIndex].text;
	var modelDropList=document.getElementById("modelDropList");
	var model=modelDropList.options[modelDropList.selectedIndex].text;
	var listOfVersions=getKeys(phones[make][model]);
	var options='';
	for(var i=0;i<listOfVersions.length;i++){
		options=options+'<option value="'+i+'">'+listOfVersions[i]+'</option>';
	}
	var versionsList=document.getElementById("versionDropList");
	versionsList.innerHTML=options;
}

function submitRequest(){
	var makeList=document.getElementById("makeDropList");
	var modelList=document.getElementById("modelDropList");
	var versionList=document.getElementById("versionDropList");
	var qualityList=document.getElementById("qualityDropList");
	var make=makeList.options[makeList.selectedIndex].text;
	var makeIndex=makeList.selectedIndex;
	var model=modelList.options[modelList.selectedIndex].text;
	var modelIndex=modelList.selectedIndex;
	var version=versionList.options[versionList.selectedIndex].text;
	var versionIndex=versionList.selectedIndex;
	var quality=qualityList.value;
	var condition=qualityList.options[qualityList.selectedIndex].text;
	var value=phones[make][model][version][quality];
	var phone=getKeys(phones)[makeIndex];
	phone+=" "+getKeys(phones[make])[modelIndex];
	phone+=" "+getKeys(phones[make][model])[versionIndex];
	
	var c=phone.charAt(0);
	document.getElementById("valueBox").value=value;
	document.getElementById("messageBox").value="Hi, I have "+(c=="i"?"an":"a")+" "+phone+" in "+condition+" condition to sell.";
	document.getElementById("calcWidgetDiv").style.height="490px";
	document.getElementById("centerDiv").style.height="860px";
	str="Your Item is Worth $"+value;
	document.getElementById("valueText2").innerHTML=str;
	document.getElementById("valueDiv").style.display='block';
}

function submitRequestHome(){
	var makeList=document.getElementById("makeDropList");
	var modelList=document.getElementById("modelDropList");
	var versionList=document.getElementById("versionDropList");
	var qualityList=document.getElementById("qualityDropList");
	var make=makeList.options[makeList.selectedIndex].text;
	var makeIndex=makeList.selectedIndex;
	var model=modelList.options[modelList.selectedIndex].text;
	var modelIndex=modelList.selectedIndex;
	var version=versionList.options[versionList.selectedIndex].text;
	var versionIndex=versionList.selectedIndex;
	var quality=qualityList.value;
	var condition=qualityList.options[qualityList.selectedIndex].text;
	var value=phones[make][model][version][quality];
	var phone=getKeys(phones)[makeIndex];
	phone+=" "+getKeys(phones[make])[modelIndex];
	phone+=" "+getKeys(phones[make][model])[versionIndex];
	
	var c=phone.charAt(0);
	document.getElementById("valueBox").value=value;
	document.getElementById("messageBox").value="Hi, I have "+(c=="i"?"an":"a")+" "+phone+" in "+condition+" condition to sell.";
	document.getElementById("calcWidgetDiv").style.height="490px";
	document.getElementById("centerDiv").style.height="845px";
	str="Your Item is Worth $"+value;
	document.getElementById("valueText2").innerHTML=str;
	document.getElementById("valueDiv").style.display='block';
}

function dropValueDiv(message){
	document.getElementById("calcWidgetDiv").style.height="490px";
	document.getElementById("centerDiv").style.height="860px";
	str="Your Item is Worth $"+document.getElementById("valueBox").value;
	document.getElementById("valueText2").innerHTML=str;
	document.getElementById("valueDiv").style.display='block';
	document.getElementById("messageBox").value=message;
}

function buildTable(){
	var table='';
	table+='<table id="priceTable" cellspacing="2" align="center">\
	<tr>\
		<td width="100px" rowspan="2"> Make </td>\
		<td width="100px" rowspan="2"> Model </td>\
		<td width="75px" rowspan="2"> Version </td>\
		<td colspan="4"> Condition </td>\
		<td width="200px" rowspan="2"> Note </td>\
	</tr>\
	<tr>\
		<td> Mint/New </td>\
		<td> Used<br/>(In Good<br/>Condition)</td>\
		<td> Broken<br/>(With Sign<br/>of Life) </td>\
		<td> Broken<br/>(Dead) </td>\
	</tr>\
	';
	var makes=getKeys(phones);

	for(var i=0;i<makes.length;i++){
		var modelsMap=phones[makes[i]];
		var models=getKeys(modelsMap);
		var totNumVersionsForMake=0;
		for(var j=0;j<models.length;j++){
			totNumVersionsForMake+=getKeys(modelsMap[models[j]]).length;
		}
		for(var j=0;j<models.length;j++){
			var versions=getKeys(phones[makes[i]][models[j]]);
			for(var k=0;k<versions.length;k++){
				table+='<tr>';
				if(j==0 && k==0){table+='<td rowspan="'+totNumVersionsForMake+'">'+makes[i]+'</td>';}
				if(k==0){table+='<td rowspan="'+versions.length+'">'+models[j]+'</td>';}
				table+='<td>'+versions[k]+'</td>';
				var prices=phones[makes[i]][models[j]][versions[k]];
				for(var l=1;l<5;l++){
					table+='<td>'+prices[l]+'</td>';
				}
				table+='<td>'+prices[0]+'</td></tr>';
			}
		}
	}
	table+='</table>';
	document.getElementById("tableDiv").innerHTML = table;
	var heightTopPartOnly = document.getElementById("uCenterDiv").offsetHeight;
	var tableH=document.getElementById("priceTable").offsetHeight;
	var belowTableH=50;
	document.getElementById("uCenterDiv").style.height = (heightTopPartOnly + tableH + belowTableH)+"px";
	document.getElementById("centerDiv").style.height = heightTopPartOnly + tableH + belowTableH + 40 + "px";
	document.getElementById("priceTable").style.top = heightTopPartOnly + "px";
	document.getElementById("footer").style.top = "30px";
}

function loadTablePage(){
	window.location="table.html";
}

function getKeys(map){
	var keys=[];
	for(var key in map)keys.push(key);
	return keys
}