<?php 

$recepient = 'iamtherealblackfish@gmail.com';
$subject = 'new message has arrived!';
$message = "Name: " .$_POST['fromName'] ."\n"
 ."Email Address: " .$_POST['fromEmail'] ."\n"
 ."Message: " .$_POST['message'];

if(mail($recepient, $subject, $message))
{
	print "<p class='success'>Mail Sent.</p>";
}
else
{
	print "<p class='error'>Problem in Sending Mail.</p>";
}

?>