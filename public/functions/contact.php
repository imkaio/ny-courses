<?php
  // Setting up CORS
  header("Access-Control-Allow-Origin: *");

  // Form variables
  $full_name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $text = $_POST['message'];
  $date = date('d/m/Y');
  $hour = date('H:i');

  // HTML
  $markup = "
    <html>
      <table cellspacing='0' cellpadding='0' width='680' style='background-color: #FAFAFA; border: none; font-family: Arial, Helvetica;'>
        <thead>
          <tr style='background-color: #FD6A01;'>
            <th style='padding: 30px;'>
              <img border='0' style='width: 280px; text-align: center;' src='https://minhanovayork.com.br/images/image-logo.png'>
              <h1 style='color: #FFFFFF; font-size: 22px; margin: 0; padding: 0 0 10px;'>NOVO ORÇAMENTO RECEBIDO</h1>
              <span style='color: #FFFFFF;'>$date às $hour</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style='padding: 30px;'>
              <ul style='list-style: none; padding: 0;'>
                <li style='padding: 5px 0;'><b>Nome:</b> $full_name</li>
                <li style='padding: 5px 0;'><b>Telefone:</b> $phone</li>
                <li style='padding: 5px 0;'><b>Email:</b> $email</li>
                <li style='background-color: #ececec; border-radius: 5px; padding: 20px; text-indent: 15px;'>$text</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </html>
  ";

  // Basic Config
  $destination = "adriano@minhanovayork.com.br";
  $title = "Novo Contato de $full_name";
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
  $headers .= "From: $full_name <$email>";

  $response = new stdClass();

  if ($full_name && $email) {
    $action = mail($destination, $title, $markup, $headers);

    if ($action) {
      $response->status = 200;
      echo json_encode($response);
    } else {
      header('HTTP/1.1 500 Internal Server Error');

      $response->status = 500;
      $response->full_name = $full_name;
      $response->email = $full_name;
      echo json_encode($response);
    }
  } else {
    header('HTTP/1.1 500 Internal Server Error');
    
    $response->status = 500;
    $response->full_name = $full_name;
    $response->email = $full_name;
    echo json_encode($response);
  }
?>