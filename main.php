<?php
$username="Bibek";
$password="Nepal123";
session_start();
if(isset($_SESSION['username'])){
    //echo "<h1>hello todo</h1>";
    //echo "<a href='logout.php'><input type='button' name='logout' value='logout'></a>";
}else{
    if(isset($_POST['submit']) && $_POST['username']==$username &&$_POST['password']==$password){
        $_SESSION['username'] = $_POST['username'];
        echo "<script>location.href='main.php'</script>";
    }else{
       echo "<script>alert('Incorret username/password')</script>";  
        echo "<script>location.href='login.php'</script>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO_LIST</title>
</head>
<body>
<a href='logout.php'><input type='button' name='logout' value='logout'></a>
</body>
</html>
