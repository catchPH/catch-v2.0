<?php 

$recepient = $_POST['to'];
$sender = "From: " . $_POST['fromName'] . "<" . $_POST['fromEmail'] . ">\r\n";
$subject = $_POST['subject'];
$message = $_POST["message"];


/*ini_set("SMTP", $_POST["fromEmail"]);
ini_set("smtp_port","25");
ini_set("send_email", $_POST["to"]);*/

mail($recepient, $subject, $message, $sender);

/*if(mail($recepient, $subject, $message, $sender))
{
	print "<p class='success'>Mail Sent.</p>";
}
else
{
	print "<p class='error'>Problem in Sending Mail.</p>";
}*/

?>