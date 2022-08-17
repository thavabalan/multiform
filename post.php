<!DOCTYPE html>
<html lang="en">

<body>
 <h1> Company Details</h1>   
    <ul>
        <li>Comapany Name:- <?= $_POST['copmanyname']?></li>
        <li>Comapany Name 2:- <?= $_POST['copmanyname2']?></li>
        <li>Company type:- <?= $_POST['comtype']?></li>
        <?php if($_POST['comtype'] == "Limited By Qurantee"):?>
        <li> Object Clause :- <?= $_POST['clause'] ?></li>
        <?php else: ?>

        <?php endif ?>

    </ul>
<?php
$i = 0;
foreach ($_POST['directorlastname'] as $val):?> 
    <h1><?= $_POST['directorlastname'][$i] ?></h1>
 <?php $i++; ?>
<?php endforeach?>
</body>
</html>
