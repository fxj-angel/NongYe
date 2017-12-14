<?php
    header('content-Type:application/json;charset=utf-8');
    require('init.php');

    $sql="select content,cname,uname,time from t_message order by time desc";
        $result=mysqli_query($conn,$sql);
        $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
        $str=json_encode($rows);
        echo $str;
?>