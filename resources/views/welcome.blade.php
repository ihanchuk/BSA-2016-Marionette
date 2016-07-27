<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <style type="text/css">
        #testDiv{
           border:1px solid red;
        }
        #header{
            background-color: #a6e1ec;
        }
        #main{
            background-color: #9d9d9d;
        }
    </style>
</head>
<body>

<div class="container">
    <div id="main">
        <div id="nav">
            Navigate
        </div>
        <div id="content">
            Content
        </div>
    </div>

</div>

<script type="text/template" id="books-template">
    <td id="name"><%= author %></td>
  <td id="age"><%= year%></td>
  <td id="userid"><%= title%></td>
</script>

<script type="text/template" id="tTemplate">
    <div class='author'>Author:: <%= author %></div>
    <div class='title'>Title:: <%= title %></div>
    <input type='button' id='changeModel' value="chnge title">
</script>



<script src="js/underscore-min.js"></script>
<script src="js/jquery-3.1.0.min.js"></script>
<script src="js/backbone-min.js"></script>
<script src="js/backbone.marionette.min.js"></script>
<script src="app/app.webpack.js"></script>
</body>
</html>