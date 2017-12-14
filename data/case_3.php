<?php
    header("Content-Type:application/json;charset=utf-8");

    require("init.php");

    $sql="select * from t_case3";
    $result=mysqli_query($conn,$sql);

    $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
    $str=json_encode($rows);
    echo $str;
?>