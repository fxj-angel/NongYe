<?php
    header('content-Type:application/json;charset=utf-8');

    @$cname=$_REQUEST['cname'] or die("-1");
    @$uname=$_REQUEST['uname'] or die("-2");
    @$phone=$_REQUEST['phone'] or die("-3");
    @$email=$_REQUEST['email'] or die("-4");
    @$content=$_REQUEST['content'] or die("-5");
    @$time=$_REQUEST['time'] or die("-8");
    require('init.php');

    $sql="insert into t_message values(null,'$cname','$uname',$time,'$phone','$email','$content')";
    $result=mysqli_query($conn,$sql);

    if($result===false){
    		echo"-6";
    }else{
    	$num=mysqli_affected_rows($conn);
    	if($num>0){
    		echo"1";
    	}else{
    		echo"-7";
    	}
    }
?>