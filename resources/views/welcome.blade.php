<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="_token" content="{!! csrf_token() !!}"/>
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <style type="text/css">
        .mainTable{
            width:100%;
        }
        .mainTable td{
            border-bottom:1px solid silver;
            padding:5px 0 5px 0;
        }

        .mainTable td input[type=text]{
            border:none;
        }

        .mainTable td{
            font-family: Arial;
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

<script type="text/javascript">
    window.__token ="{!! csrf_token() !!}";
</script>
<script type="text/template" id="books-template">
    <td><input type='text' value='<%= author %>' class="author"></td>
    <td><input type='text' value='<%= year %>' class="year"></td>
    <td><input type='text' value='<%= title %>' class="title"></td>
    <td><input type='text' value='<%= genre %>' class="genre"></td>
    <td class='delete'><input type='button' class='deleteModel' value='delete'></td>
    <td class='edit'><input type='button'  class='updateModel' value='Sync to server'></td>
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