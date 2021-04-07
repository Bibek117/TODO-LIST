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
        header("location:main.php");
    }else{
       echo "<script>alert('Incorret username/password')</script>";  
       echo "<script>location.href='login.php'</script>";
    }
} 
?> 
<!DOCTYPE html>
<html lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TODO_LIST</title>
    <link rel="stylesheet" href="css/app.css">
    <script src="https://kit.fontawesome.com/ba71ba095c.js"></script></>
</head>
<body>
<div id="main-container">
    <div id="header">
         <h1><span style="color:rgb(17,231,17)">TODO </span><span style="color:yellow">LIST</span></h1>
         <p>keep track of your task..</p>
    </div>
    <div id="task-start">
         <input type="text" id="input-task"  placeholder="Add new task..." autocomplete="off">
         <button id="submit">ADD</button>
   </div>
   <div id="identifier">
   <div id="accomplished"><p>Accomplished</p></div>
   <div id="pending"><p>Pending</p></div>
   </div>
   <div id="sub-container">
         <!-- <div class="task">
          <p>Code until night Lorem ipsum, rg  amet dfdf</p>
          <div class="icondiva"><i class="fas fa-check"></i></div>
          <div class="icondivb"><i class="fas fa-trash"></i></div>
          </div>-->
              
   </div>
   <a href='logout.php'><input type='button' name='logout' value='logout'></a>
</div>
<script  src="js/app.js"></script>
</body>
</html>
