<?php
if($_POST){
	//get data
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];

	//send email
	mail("brianholt@shaw.ca", "brianholt.ca: New message from $name", $message, "From:" . $email);
}
?>