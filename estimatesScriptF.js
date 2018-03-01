//estimates Script
var IphoneModel1Version1Prices=["",320,305,145,100];
var IphoneModel1Version2Prices=["",315,300,140,95];
var IphoneModel1Version3Prices=["",305,290,135,90];
var IphoneModel1Versions={"64GB":IphoneModel1Version1Prices,"32GB":IphoneModel1Version2Prices,"16GB":IphoneModel1Version3Prices};
var IphoneModel2Version1Prices=["",215,200,85,65];
var IphoneModel2Version2Prices=["",205,190,80,60];
var IphoneModel2Version3Prices=["",195,180,70,50];
var IphoneModel2Versions={"32GB":IphoneModel2Version1Prices,"16GB":IphoneModel2Version2Prices,"8GB":IphoneModel2Version3Prices};
var IphoneModel3Version1Prices=["",195,180,55,50];
var IphoneModel3Version2Prices=["",175,170,50,45];
var IphoneModel3Version3Prices=["",165,150,45,40];
var IphoneModel3Versions={"32GB":IphoneModel3Version1Prices,"16GB":IphoneModel3Version2Prices,"8GB":IphoneModel3Version3Prices};
var IphoneModel4Version1Prices=["",110,90,40,30];
var IphoneModel4Version2Prices=["",100,80,40,30];
var IphoneModel4Version3Prices=["",90,70,40,30];
var IphoneModel4Versions={"32GB":IphoneModel4Version1Prices,"16GB":IphoneModel4Version2Prices,"8GB":IphoneModel4Version3Prices};
var IphoneModel5Version1Prices=["",50,40,20,15];
var IphoneModel5Version2Prices=["",45,40,20,15];
var IphoneModel5Versions={"16GB":IphoneModel5Version1Prices,"8GB":IphoneModel5Version2Prices};
var IphoneModels={"iPhone 4S":IphoneModel1Versions,"iPhone4 GSM":IphoneModel2Versions,"iPhone4 CMDA":IphoneModel3Versions,"iPhone3GS":IphoneModel4Versions,"iPhone3G":IphoneModel5Versions};

var IpadM1V1Ps=["",355,325,195,165];
var IpadM1V2Ps=["",350,320,190,160];
var IpadM1V3Ps=["",340,315,185,155];
var IpadM1V4Ps=["",335,310,180,150];
var IpadM1V5Ps=["",330,305,175,145];
var IpadM1V6Ps=["",325,300,170,140];
var IpadM1Vs={"64GB WIFI+3G":IpadM1V1Ps, "64GB WIFI":IpadM1V2Ps, "32GB WIFI+3G":IpadM1V3Ps, "32GB WIFI":IpadM1V4Ps,"16GB WIFI+3G":IpadM1V5Ps, "16GB WIFI":IpadM1V6Ps};
var IpadM2V1Ps=["",250,225,135,105];
var IpadM2V2Ps=["",245,220,135,105];
var IpadM2V3Ps=["",240,215,132.5,102.5];
var IpadM2V4Ps=["",235,210,132.5,102.5];
var IpadM2V5Ps=["",230,205,130,100];
var IpadM2V6Ps=["",225,200,130,100];
var IpadM2Vs={"64GB WIFI+3G":IpadM2V1Ps, "64GB WIFI":IpadM2V2Ps, "32GB WIFI+3G":IpadM2V3Ps, "32GB WIFI":IpadM2V4Ps,"16GB WIFI+3G":IpadM2V5Ps, "16GB WIFI":IpadM2V6Ps};
var IpadM3V1Ps=["",190,165,60,45];
var IpadM3V2Ps=["",180,160,60,45];
var IpadM3V3Ps=["",185,155,55,42.5];
var IpadM3V4Ps=["",175,140,55,42.5];
var IpadM3V5Ps=["",180,150,50,40];
var IpadM3V6Ps=["",170,135,50,40];
var IpadM3Vs={"64GB WIFI+3G":IpadM3V1Ps,"64GB WIFI":IpadM3V2Ps,"32GB WIFI+3G":IpadM3V3Ps,"32GB WIFI":IpadM3V4Ps,"16GB WIFI+3G":IpadM3V5Ps,"16GB WIFI":IpadM3V6Ps};
var IpadModels={"iPad 3":IpadM1Vs,"iPad 2":IpadM2Vs,"iPad (orginal)":IpadM3Vs};

var BlackberryModel1Version1Prices=["",170,150,70,35];
var BlackberryModel1Version2Prices=["",150,130,50,30];
var BlackberryModel1Version3Prices=["",65,55,30,15];
var BlackberryModel1Version4Prices=["",60,50,25,10];
var BlackberryModel1Version5Prices=["",20,10,5,2.5];
var BlackberryModel1Versions={"9900":BlackberryModel1Version1Prices,"9790":BlackberryModel1Version2Prices,"9780":BlackberryModel1Version3Prices,"9700":BlackberryModel1Version4Prices,"9000":BlackberryModel1Version5Prices};
var BlackberryModel2Version1Prices=["",105,85,40,20];
var BlackberryModel2Version2Prices=["",100,80,37.5,15];
var BlackberryModel2Version3Prices=["",60,45,20,10];
var BlackberryModel2Versions={"9860":BlackberryModel2Version1Prices,"9810":BlackberryModel2Version2Prices,"9800":BlackberryModel2Version3Prices};
var BlackberryModel3Version1Prices=["",90,70,30,15];
var BlackberryModel3Version2Prices=["",90,70,35,20];
var BlackberryModel3Version3Prices=["",50,40,20,10];
var BlackberryModel3Version4Prices=["",20,10,5,2.5];
var BlackberryModel3Version5Prices=["",20,10,5,2.5];
var BlackberryModel3Version6Prices=["",30,20,10,5];
var BlackberryModel3Versions={"9380":BlackberryModel3Version1Prices,"9360":BlackberryModel3Version2Prices,"9300":BlackberryModel3Version3Prices,"8900":BlackberryModel3Version4Prices,"8530":BlackberryModel3Version5Prices,"8520":BlackberryModel3Version6Prices};
var BlackberryModel4Version1Prices=["",40,30,15,10];
var BlackberryModel4Version2Prices=["",5,2.5,1,1];
var BlackberryModel4Version3Prices=["",5,2.5,1,1];
var BlackberryModel4Versions={"9100":BlackberryModel4Version1Prices,"8220":BlackberryModel4Version2Prices,"8100":BlackberryModel4Version3Prices};
var BlackberryModel5Version1Prices=["",20,15,5,2.5];
var BlackberryModel5Version2Prices=["",25,20,5,2.5];
var BlackberryModel5Version3Prices=["",5,2.5,1,1];
var BlackberryModel5Version4Prices=["",10,5,2.5,1];
var BlackberryModel5Versions={"9550":BlackberryModel5Version1Prices,"9520":BlackberryModel5Version2Prices,"9530":BlackberryModel5Version3Prices,"9500":BlackberryModel5Version4Prices};
var BlackberryModels={"Bold":BlackberryModel1Versions,"Torch":BlackberryModel2Versions,"Curve":BlackberryModel3Versions,"Pearl":BlackberryModel4Versions,"Storm":BlackberryModel5Versions};

var SamsungModel1Version1Prices=["",300,280,120,75];
var SamsungModel1Versions={"N/A":SamsungModel1Version1Prices};
var SamsungModel2Version1Prices=["",180,160,50,25];
var SamsungModel2Versions={"N/A":SamsungModel2Version1Prices};
var SamsungModel3Version1Prices=["",100,80,20,10];
var SamsungModel3Versions={"N/A":SamsungModel3Version1Prices};
var SamsungModels={"Galaxy S3{GT-i9300}":SamsungModel1Versions,"Galaxy S2{GT-i9100}":SamsungModel2Versions,"Galaxy S{GT-i9000}":SamsungModel3Versions};

var OtherModel1Version1Prices=["!!!Kindly Contact Us and we shall provide a quote ASAP","","","",""];
var OtherModel1Versions={"":OtherModel1Version1Prices};
var OtherModels={"":OtherModel1Versions};

var phones=	
{
	"iPhone":IphoneModels,
	"Blackberry":BlackberryModels,
	"Samsung":SamsungModels,
	"Ipad":IpadModels,
	"Other":OtherModels
};

var numRows=0;

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

function addNewRow(){
	var calculatorRow='\
						<form id="calculatorRow">\
							<select id="makeDropList" onchange="updateModelDropList();">\
								<option value="1">Iphone</option>\
								<option value="2">Blackberry</option>\
								<option value="3">Samsung</option>\
							</select>\
							<select id="modelDropList" onchange="updateVersionDropList();">\
								<script type="text/javascript">updateModelDropList();</script><!--load models for first make-->\
							</select>\
							<select id="versionDropList">\
								<script type="text/javascript">updateVersionDropList();</script><!--load versions for first model-->\
							</select>\
							<label id="flawlessLabel"># Flawless</label>\
							<label id="goodLabel"># Good</label>\
							<label id="brokenLabel"># Broken</label>\
							<label id="destroyedLabel"># Destroyed</label>\
							<input type="text" id="quantityFlawlessBox" value="0"></input>\
							<input type="text" id="quantityGoodBox" value="0"></input>\
							<input type="text" id="quantityBrokenBox" value="0"></input>\
							<input type="text" id="quantityDestroyedBox" value="0"></input>\
						</form>\
	';
	document.getElementById("calculatorDiv").innerHTML+=calculatorRow;
	numRows++;
	updateModelDropList();
}

function submitForm(){
	
}

function buildTable(){
	var table='';
	table+='<table id="priceTable" cellspacing="2" align="center">\
	<tr>\
		<td width="100px" rowspan="2"> !!!Make </td>\
		<td width="100px" rowspan="2"> !!!Model </td>\
		<td width="75px" rowspan="2"> !!!Version </td>\
		<td colspan="4"> !!!Condition </td>\
		<td width="200px" rowspan="2"> !!!Note </td>\
	</tr>\
	<tr>\
		<td> !!!Mint/New </td>\
		<td> !!!Used<br/>(In Good<br/>Condition)</td>\
		<td> !!!Broken<br/>(With Sign<br/>of Life) </td>\
		<td> !!!Broken<br/>(Dead) </td>\
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
	document.getElementById("footer").style.top = "0px";
	document.getElementById("priceTable").style.top = heightTopPartOnly + "px";
}

function getKeys(map){
	var keys=[];
	for(var key in map)keys.push(key);
	return keys
}