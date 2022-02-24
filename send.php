<?php

$accountName = 'bbooster';
$secretKey = 'izN89Eudwvt9GRM5uAn8htHtNMHliCzJ61IyPsTpnHUDZu4tobKIPFLV8OQkE5Rdjv1EFYWE0VlSDwMEovPgID4EDOiGpAi0vQQraRpYdulPQ0VQJ4wQdbOcZ1XgvAmW';

echo $_POST['data'];

$user = [];
$user['user']['email'] = $_POST['email'];
$user['user']['first_name'] = $_POST['name'];
$user['user']['phone'] = $_POST['phone'];

// utm-метки пользователя
$user['user']['addfields'] = [];
$user['user']['addfields']['utm_source1'] = $_POST['utm_source']; //значение utm source из get запроса
$user['user']['addfields']['utm_medium1'] = $_POST['utm_medium'];
$user['user']['addfields']['utm_campaign1'] = $_POST['utm_campaign'];
$user['user']['addfields']['utm_term1'] = $_POST['utm_term'];
$user['user']['addfields']['utm_content1'] = $_POST['utm_content'];

$user['system']['refresh_if_exists'] = 1;
$user['deal']['offer_code'] = 'ht_seb_ssm';
$user['deal']['deal_status'] = 'new';
$user['deal']['deal_cost'] = '0';
$user['deal']['deal_comment'] = $_POST['message'];

$json = json_encode($user);
$base64 = base64_encode($json);

$curl = curl_init();

if( $curl = curl_init() ) {
    //curl_setopt($curl, CURLOPT_URL, 'https://' . $accountName . '.getcourse.ru/pl/api/users');
	curl_setopt($curl, CURLOPT_URL, 'https://' . $accountName . '.getcourse.ru/pl/api/deals');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, 'action=add&key=' . $secretKey . '&params=' . $base64);
    //echo $out = curl_exec($curl);
    curl_exec($curl);
    curl_close($curl);
} else {
    echo 'Failed initialization';
}


// Создаем платный заказ
$user['deal']['offer_code'] = 'art_034_2005';
$user['deal']['deal_cost'] = '29000';

$json = json_encode($user);
$base64 = base64_encode($json);

$curl = curl_init();

if( $curl = curl_init() ) {
	curl_setopt($curl, CURLOPT_URL, 'https://' . $accountName . '.getcourse.ru/pl/api/deals');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, 'action=add&key=' . $secretKey . '&params=' . $base64);
    echo $out = curl_exec($curl);
    curl_close($curl);
} else {
    echo 'Failed initialization';
}