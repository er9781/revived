<?php
	$madeItThrough=0;
	
	$name=$_POST[nameBox];
	$company=$_POST[companyBox];
	$number=$_POST[numberBox];
	$email=$_POST[emailBox];
	$message=$_POST[messageBox];
	
	//write half page, validate email, then add as necessary, and then add second half.
	
	echo '
<!DOCTYPE html>
<html>
<!-- THIS IS THE CONTACT US PAGE -->
	<head>
		<title>Revived</title>
		<link rel="shortcut icon" href="favicon.ico" />
		<link rel="stylesheet" type="text/css" href="headerStyles.css" />
		<script type="text/javascript" src="headerScript.js"></script>
		<link rel="stylesheet" type="text/css" href="general.css" />
		<link rel="stylesheet" type="text/css" href="footerStyles.css" />
		<script type="text/javascript" src="generalScript.js"></script>
		<link rel="stylesheet" type="text/css" href="contactUsStyles.css" />
		<!--[if IE]>
			<link rel="stylesheet" type="text/css" href="headerStylesIE.css" />
			<link rel="stylesheet" type="text/css" href="bannerStylesIE.css" />
			<link rel="stylesheet" type="text/css" href="generalIE.css" />
			<link rel="stylesheet" type="text/css" href="footerStylesIE.css" />
			<link rel="stylesheet" type="text/css" href="lowerHomeStylesIE.css" />	
		<![endif]-->		
	</head>
	<body>
		<!-- INSERT HEADER -->
		<script type="text/javascript" src="headerDivs.js" onload="loadImages(4);"></script>
		<div id="overDiv">
		';
		
		
	if($name==""||$number==""||$email==""){
		echo '
			<div id="responseDiv" class="center">
				<div id="uresponseDiv" class="widget">
					<p id="responseMissing">Missing required field - Please note that * denotes a required field</p>
			
				</div>
			</div>
		';
		//RESPOND MISSING INFO OR INVALID EMAIL
	}elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		echo '
			<div id="responseDiv" class="center">
				<div id="uresponseDiv" class="widget">
					<p id="responseEmail">Please enter a valid email address</p>
			
				</div>
			</div>
		';
	}else{
		//all required fields are complete, continue onwards to send email
		$madeItThrough=1;
		$body="Name: ".$name."\nCompany: ".$company."\nNumber: ".$number."\nEmail: ".$email."\n\nMessage\n\n".$message;		
		mail("contact@revived.ca","Form Response -".$name,$body);
		
		echo '
			<div id="responseDiv" class="center">
				<div id="usubmitDiv" class="widget">
					<p id="responseSubmit">Your message has been delivered</p>
			
				</div>
			</div>
		';
	}
	
	echo'
			<div id="largeCenterSection" class="center">
				<div id="mainDiv" class="widget">
					<div id="verticalRule"></div>
					<div id="contactLeftDiv">
						<h5 id="title">Contact Information</h5>
						<div id="blurbAboveForm">
							Feel free to enter your information here, or to drop us an email.
							<img src="contactEmail.png" id="contactEmailAddress"></img>
						</div>
						<div id="boxTitlesDiv">
							<p id="boxTitle1">*Name:</p>
							<p id="boxTitle2">Company:</p>
							<p id="boxTitle3">*Phone #:</p>
							<p id="boxTitle4">*Email:</p>
							<p id="boxTitle5">Message:</p>
						</div>
						<div id="boxesDiv">
							<form action="contactUsFormResponse.php" method="post">
								<input id="nameBox" type="text" name="nameBox" size="30" value="';if($madeItThrough==0){echo $name;}echo'" /><p />
								<input id="companyBox" type="text" name="companyBox" size="30" value="';if($madeItThrough==0){echo $company;} echo'" /><p />
								<input id="numberBox" type="text" name="numberBox" size="30" value="';if($madeItThrough==0){echo $number;}echo'" /><p />
								<input id="emailBox" type="text" name="emailBox" size="30" value="';if($madeItThrough==0){echo $email;}echo'" /><p />
								<textArea id="messageBox" name="messageBox" rows="7" cols="23">';if($madeItThrough==0){echo $message;}echo'</textArea><p />
								<div id="submitButtonDiv"><input id="submitButton" type="submit" value="Submit" class="inWidgetButton" onmouseover="inWidgetButtonMouseOver(this);" onmouseout="inWidgetButtonMouseOut(this);" /></div>
							</form>
						</div>
					</div>
					<div id="mapBack">
						<img id="map" src="map.png"></img>
					</div>
					<div id="address">
						<h3 id="addressTitle" align="left">Revived</h3>
						<p>Phone#: 514-576-1512</p>
						<p>405 Notre Dame East, Suite 401,<br>Montreal,Canada,<br>H2Y1C9</p>
					</div>
				</div>
			</div>
			<!--INSERT FOOTER-->
			<script type="text/javascript" src="footer.js"></script>
		</div>
	</body>
</html>
	';

?>
