<?php 

$recepient = 'iamtherealblackfish@gmail.com';
$sender = "From: " . $_POST['fromName'] . "<" . $_POST['fromEmail'] . ">\r\n";
$subject = $_POST['subject'];
$message = $_POST['message'];

if(mail($recepient, $subject, $message, $sender))
{
	print "<p class='success'>Mail Sent.</p>";
}
else
{
	print "<p class='error'>Problem in Sending Mail.</p>";
}

?>