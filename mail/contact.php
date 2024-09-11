<?php
if(empty($_POST['Nombre']) || empty($_POST['Sobre']) || empty($_POST['Mensaje']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$Nombre = strip_tags(htmlspecialchars($_POST['Nombre']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_Sobre = strip_tags(htmlspecialchars($_POST['Sobre']));
$Mensaje = strip_tags(htmlspecialchars($_POST['Mensaje']));

$to = "francuello30@gmail.com"; 
$Sobre = "$m_Sobre:  $Nombre";
$body = "Tenes un nuevo mensaje de .\n\n"."detalles:\n\nNombre: $Nombre\n\n\nEmail: $email\n\nSobre: $m_Sobre\n\nMensaje: $Mensaje";
$header = "De: $email";
$header .= "Responder a: $email";	

if(!mail($to, $Sobre, $body, $header))
  http_response_code(500);
?>
