<?php
	$madeItThrough=0;
	
	$name=$_POST[nameBox];
	$number=$_POST[numberBox];
	$email=$_POST[emailBox];
	$value=$_POST[valueBox];
	$message=$_POST[messageBox];
	
	//general stuff
	echo '
	<!DOCTYPE html>
<html>
	<head>
		<meta name="description" content="Sell your used cell phones and other technology to Revived! Get a quote at current market rates." />
		<title>Revived - Give your Phone a Second Life</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<script type="text/javascript" src="bannerScript.js"></script>
		<script type="text/javascript" src="headerScript.js"></script>
		<script type="text/javascript" src="generalScript.js"></script>
		<script type="text/javascript" src="estimatesScript.js"></script>
		<link rel="stylesheet" type="text/css" href="headerStyles.css" />
		<link rel="stylesheet" type="text/css" href="estimatesStyles.css" />
		<link rel="stylesheet" type="text/css" href="bannerStyles.css" />
		<link rel="stylesheet" type="text/css" href="general.css" />
		<link rel="stylesheet" type="text/css" href="footerStyles.css" />
		<link rel="stylesheet" type="text/css" href="lowerHomeStyles.css" />
		<!--[if IE]>
			<link rel="stylesheet" type="text/css" href="headerStylesIE.css" />
			<link rel="stylesheet" type="text/css" href="bannerStylesIE.css" />
			<link rel="stylesheet" type="text/css" href="generalIE.css" />
			<link rel="stylesheet" type="text/css" href="footerStylesIE.css" />
			<link rel="stylesheet" type="text/css" href="lowerHomeStylesIE.css" />	
		<![endif]-->
		
		<style type="text/css">
			#overall{
				text-align:left;
			}
			#overHeader{
				position:relative;
				margin:auto;
				width:1000px;
			}
			#calcWidgetDiv{
				position:relative;
				top:5px;
				margin:auto;
			}
			#footer{
				position:relative;
				top:150px;
			}
		</style>
		
	</head>
	<body>
		<div id="overall" align="center">
			<div id="overHeader">
				<!--<div id="languageDiv"><a id="languageText" href="indexF.html">Français</a></div>-->
				<script type="text/javascript" src="headerDivs.js" onload="loadImages(1);"></script>
			</div>
			<div id="banners">
				<div id="ubanners" onmouseover="fadeIn(document.getElementById(\'bannerButtonDiv\'));" onmouseout="fadeOut(document.getElementById(\'bannerButtonDiv\'));" class="center">
					<div id="bannerButtonDiv" class="hidden">
						<div id="leftBannerButton" onmouseover="fullOpacity(this)" onmouseout="point7opacity(this)" onClick="previousBannerFromButton();"><h1 id="bannerButtonTextLeft"><</h1></div>
						<div id="rightBannerButton" onmouseover="fullOpacity(this)" onmouseout="point7opacity(this)" onClick="nextBannerFromButton();"><h1 id="bannerButtonTextRight">></h1></div>
					</div>
					<img id="bannerMain1" src="Revived-giveYourPhoneASecondLife.png" class="visible"></img>
					<img id="bannerMain2" src="We_buy_used_and_broken_phones.png" class="hidden" ></img>
					<img id="bannerMain3" src="revived_upgrade_program.png" class="hidden" ></img>
					<img id="bannerMain4" src="revived_comes_to_you_mobile_needs.png" class="hidden" ></img>
					<img id="bannerMain5" src="revived_supports_the_wwf.png" class="hidden" ></img>
				</div>
			</div>
				';
	
	if($name=="" && $number=="" && $email=="" && $message==""){
		$madeItThrough=-1;
	}else{
		if($name==""||$number==""||$email==""){
			echo '
				<div id="responseDiv" class="center">
					<div id="uresponseDiv" class="widget">
						<p id="responseMissing">Missing required field - Please note that * denotes a required field</p>
				
					</div>
				</div>
			';
		}elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
			echo '
				<div id="responseDiv" class="center">
					<div id="uresponseDiv" class="widget">
						<p id="responseEmail">Please enter a valid email address</p>
				
					</div>
				</div>
			';
		}else{
			$madeItThrough=-1;
			$body="Name: ".$name."\nNumber: ".$number."\nEmail: ".$email."\n\nMessage\n\n".$message;		
			mail("contact@revived.ca","Calculator Submission -".$name,$body);
			
			echo '
				<div id="responseDiv" class="center">
					<div id="usubmitDiv" class="widget">
						<p id="responseSubmit">Your message has been delivered</p>
				
					</div>
				</div>
			';
		}
	}
	
	echo '
				<div id="centerDiv">
				<div id="calcWidgetDiv" class="widget">
					<div id="calculatorTextDiv">
						<p id="calculatorText">Below is a calculator which is made so you can get a quick evaluation of your item(s) at their current market value(s). Just enter what you have and click submit!</p>
					</div>
					<div id="calculatorDiv">
						<div id="submitButton" class="inWidgetButtonLight" onclick="submitRequestHome();" onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);"><p id="submitButtonText">Submit</p></div>
						<!--<div id="newLineButton" class="inWidgetButtonLight" onclick="addNewRow();" onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);"><p id="newLineButtonText">+ New Row</p></div>-->
						<div id="contactUsButton" class="inWidgetButtonLight" onclick="window.location=\'contactUs.html\'" onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);"><p id="contactUsButtonText">Message Us</p></div>
						<div id="valueText"></div>
						<form id="calculatorRow">
							<select id="makeDropList" onchange="updateModelDropList();">
								<script type="text/javascript">updateMakeDropList();</script>
							</select>
							<select id="modelDropList" onchange="updateVersionDropList();">
								<script type="text/javascript">updateModelDropList();</script>
							</select>
							<select id="versionDropList" onchange="clearValue();">
								<script type="text/javascript">updateVersionDropList();</script>
							</select>
							<select id="qualityDropList" onchange="clearValue();">
								<option value="1">Mint</option>
								<option selected="true" value="2">Good</option>
								<option value="3">Broken (with sign of life)</option>
								<option value="4">Broken (dead)</option>
							</select>
						</form>
					</div>
					<div id="valueDiv">
						<div id="valueLeftDiv">
							<div id="valueText1">Revived Estimates:</div>
							<div id="valueText2"></div>
							<div id="valueText3">Like the rate? Just fill in the remaining information over on the right and we\'ll get right back to you! If you have anything specific you want us to consider, just add it to the message.</div>
						</div>
						<div id="verticalBar"></div>
						<div id="valueRightDiv">
							<div id="boxTitlesDiv">
								<p id="boxTitle1">*Name:</p>
								<p id="boxTitle2">*Phone #:</p>
								<p id="boxTitle3">*Email:</p>
								<p id="boxTitle4">Message:</p>
							</div>
							<form id="boxesDiv" action="index.php" method="post">
								<input id="nameBox" type="text" name="nameBox" size="30" value="';if($madeItThrough==0){echo $name;}echo'" /><p />
								<input id="numberBox" type="text" name="numberBox" size="30" value="';if($madeItThrough==0){echo $number;}echo'" /><p />
								<input id="emailBox" type="text" name="emailBox" size="30" value="';if($madeItThrough==0){echo $email;}echo'" /><p />
								<input id="valueBox" type="text" name="valueBox" size="30" value="';if($madeItThrough==0){echo $value;}echo'" /><p />
								<textArea id="messageBox" name="messageBox" rows="7" cols="23" value="';if($madeItThrough==0){echo $message;}echo'" ></textArea><p />
								<input id="submitButtonForm" type="submit" value="Submit" class="inWidgetButtonLight" onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);" />
							</form>
						</div>
					</div>
				</div>
				<div id="ucentralSection" class="center">
					<div id="topRightBox" class="widget">
						<div id="topRightBoxLeft">
							<img id="boxes" src="boxes.png"></img>
						</div>
						<div id="topRightBoxRight">
							<p id="upgradeText">Get access to the latest tech, without paying the usual upgrade cost - we take your old phone and give you a new one!</p>
							<div id="upgradeBoxButton" align="center" class="inWidgetButtonLight" ><!--onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);" onclick="loadUpgradeProgram();"--><p id="upgradeBoxButtonText">Upgrade With Revived</p></div>
						</div>
					</div>
					<div id="bottomRightBox" class="widget">
						<div id="bottomRightBoxLeft">
							<p id="estimatesText">Planning on selling your stock of used phones? Get a rundown on how it all works and enter your inventory to get an estimate at current market rates.</p>
							<div id="estimatesBoxButton" align="center" class="inWidgetButtonLight" onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);" onclick="loadEstimates();"><p id="estimatesBoxButtonText">Get An Estimate</p></div>
						</div>
						<div id="bottomRightBoxRight">
							<img id="phoneStack" src="usedPhoneStack.png"></img>
						</div>
					</div>
					<div id="leftBox" class="widget">
						<div id="leftBoxRule"></div>
						<div id="leftBoxTopPicDiv">
							<img id="leftBoxTopPic" src="revived_Phone.png"></img>
						</div>
						<div id="leftBoxBottomPicDiv">
							<img id="leftBoxBottomPic" src="revived_leaves.png"></img>
						</div>
						<div id="leftBoxTopTextDiv">
							<p id="leftBoxTopText">Revived purchases used and broken cell phones, and gives them a second life. We focus on businesses, giving them the money to ensure they stay on the cutting edge when they trade in their old tech. Nonetheless, we are pleased to serve individuals as well!</p>
						</div>
						<div id="leftBoxBottomTextDiv">
							<p id="leftBoxBottomText">Take a look around! We\'re green and advocate sustainable consumerism and development. Pitch in towards who we support.</p>
						</div>
						<div id="leftBoxBottomButton" class="inWidgetButtonLight" onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);" onclick="loadInitiatives();"><p id="leftBoxBottomButtonText">Initiatives</p></div>
					</div>
					<div id="comingSoonBox" align="center"><p id="comingSoonText"><b>Coming Soon</b></p></div>
				</div>
			</div>
			<script type="text/javascript" src="footer.js"></script>
			';if($madeItThrough!=-1){echo '<script type="text/javascript">dropValueDiv("'; echo $message; echo '");</script>';}echo '
		</div>
	</body>
</html>
	';
?>