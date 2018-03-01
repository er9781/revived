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
<!-- THIS IS THE ESTIMATES PAGE -->
	<head>
		<meta name="description" content="Get an estimate for your used phone or other technology at current market rates" />
		<title>Rates - Find out what your Phone is Worth</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" type="text/css" href="headerStyles.css" />
		<script type="text/javascript" src="headerScript.js"></script>
		<link rel="stylesheet" type="text/css" href="general.css" />
		<link rel="stylesheet" type="text/css" href="footerStyles.css" />
		<script type="text/javascript" src="generalScript.js"></script>
		<script type="text/javascript" src="estimatesScript.js"></script>
		<link rel="stylesheet" type="text/css" href="estimatesStyles.css" />
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
		</style>
		
	</head>
	<body>
		<!-- INSERT HEADER -->
		<div id="overall" align="center">
			<div id="overHeader">
				<!--<div id="languageDiv"><a id="languageText" href="estimatesF.html">Français</a></div>-->
				<script type="text/javascript" src="headerDivs.js" onload="loadImages(2);"></script>
			</div>
			<div id="bannerDiv" class="center">
				<div id="ubannerDiv" class="widgets">
					<img id="banner" src="bannerEstimates.png"></img>
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
			<div id="centerDiv" class="center">
				<div id="calcWidgetDiv" class="widget">
					<div id="calculatorTextDiv">
						<p id="calculatorText">Below is a calculator which is made so you can get a quick evaluation of your item(s) at their current market value(s). Just enter what you have and click submit!</p>
					</div>
					<div id="calculatorDiv">
						<div id="submitButton" class="inWidgetButtonLight" onclick="submitRequest();" onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);"><p id="submitButtonText">Submit</p></div>
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
							<form id="boxesDiv" action="estimates.php" method="post">
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
				<div id="uCenterDiv" class="widget">
					<img id="topPic" src="picEstimates.png"> </img>
					<div id="tableButton" class="inWidgetButtonLight" onmouseover="lightInWidgetButtonMouseOver(this);" onmouseout="lightInWidgetButtonMouseOut(this);" onclick="loadTablePage()"><p id="tableButtonText">Full Price Table</p></div>
					<div id="topTextDiv">
						<p id="topText1">Curious as to how Revived works? It\'s simple. If you have used technology, we\'re willing to buy
						it! Check out the calculator we\'ve put together above. Just put in what you have and it\'ll get the current market value of the item!
						If you have anything which doesn\'t appear, don\'t hesitate to <a href="contactUs.html">contact us</a> and we\'ll get back to you right away
						with a quote.</p>
						<p if="topText2">We welcome all, businesses and individuals, to check us out and contact us. If you\'re local (near
						our headquarters in Montreal) we\'ll try our best to come to you! Every item dealt with is inspected
						to make sure it\'s functional and matches its description. If so, we promise to pay you the offered rate
						through your preferred means (cash, check or PayPal). Before passing on your phone, we\'ll also wipe its
						memory clean.</p>
					</div>
				</div>
			</div>
			
			<!--INSERT FOOTER-->
			<script type="text/javascript" src="footer.js"></script>
			';if($madeItThrough!=-1){echo '<script type="text/javascript">dropValueDiv("'; echo $message; echo '");</script>';}echo '
		</div>
	</body>
</html>	
	';
?>