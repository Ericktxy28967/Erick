<?php
$x = 12;
echo $x;
function addTwoNumbers() {
    global $x;
    $x = 12;
}

 addTwoNumbers();
 echo $x

?>