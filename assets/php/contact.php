<?php 

//declare variables: $_POST['value'] was passed from php.js
$to = 'iamtherealblackfish@gmail.com';
$subject = 'new message has arrived!';
$body = "Name: " .$_POST['name'] ."\n"
 ."Email Address: " .$_POST['email'] ."\n"
 ."Message: " .$_POST['message'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try 
{
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'catchphilippines@gmail.com';                 // SMTP username
    $mail->Password = 'dre@mCATCHer2018';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('catchphilippines@gmail.com', 'catch');
    $mail->addAddress($to);     						  // Add a recipient
    $mail->addAddress('ellen@example.com');               // Name is optional

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    
    $contact_status = 'sent';
}
catch (Exception $e) 
{
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;    
    $contact_status = 'failed';
}

    echo json_encode(array(
        'status' => $contact_status
    ));
?>