<?php
session_start();
if(isset($_SESSION['username'])){
    echo "<script>location.href='main.php'</script>"; //using js
}else{
    //the login page will be shown
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Bibek">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO_LIST</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://kit.fontawesome.com/ba71ba095c.js"></script>
</head>
<body>
    <div id="main">
       <div id="head">
       <i class="fas fa-list-alt"></i>
        <h1><span style="color:rgb(17,231,17)">TODO </span><span style="color:yellow">LIST</span></h1>
        <h3>LOG-IN</h3>
       </div>
        <form method="post"  action="main.php">
            <div class="input">
                <i id="first" class="fas fa-user-circle"></i>
                <input type="text" autocomplete="off" placeholder="Username" name="username" required>
            </div>
            <div class="input">
                <i id="second" class="fas fa-lock"></i>
                <input type="password" name="password" placeholder="password" required>
            </div>
            <input type="submit" name="submit" value="LOGIN">
        </form>
    </div>
    
</body>
</html>