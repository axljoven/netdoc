<?php
	//	Email
		// $to = "axlmorenojoven@gmail.com";
		$to = "axl_joven@yahoo.com";	
		
		// Informations
		$name = ucfirst(trim($_POST['name']));
		$subject = trim($_POST['subject']);
		$email = trim($_POST['email']);
		$contact = preg_replace("/([^0-9\/+]+)/", "", trim($_POST['contact']));
		
		$msg = wordwrap(($_POST['msg']), 70, "\r\n");
		if(isset($contact) && is_numeric($contact)) {
			$msg .= "\r\nContact Number: $contact";
		}

		// Headers
		$headers = "From: $name <" . strip_tags($email) . ">\r\n";
		$headers .= "Reply-To: <". strip_tags($email) . ">\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		
		$isSent = mail($to, $subject, $msg, $headers);
		
		// Display Message
		if($isSent) echo "Message Sent!<br/>";
		else echo "Message failed!";

?>