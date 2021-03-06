<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="_token" content="{!! csrf_token() !!}"/>
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <style type="text/css">
        .mainTable,.mainUsersTable{
            width:100%;
        }
        .mainTable td,.mainUsersTable td{
            border-bottom:1px solid #F7F7F7;
            padding:5px 0 5px 0;
        }

        .mainTable td input[type=text],.mainUsersTable td input[type=text]{
            border:none;
        }

        .mainTable td input[type=button],.mainTable td input[type=password], .mainUsersTable td input[type=button]{
            border:none;
            background-color:#FFEE00;
            border-radius:3px;
            padding:5px 10px 5px 10px;
        }

        .mainTable td input[type=button]:hover,.mainUsersTable td input[type=button]:hover{
            background-color: #EDCF24;
        }

        .mainTable td, .mainUsersTable td{
            font-family: Arial;
        }

        #nav{
            background-color:#2e3436;
        }

        #nav ul li{
            display:inline-block;
            padding:10px;
        }

        #nav ul li a{
            color:white;
        }
    </style>
</head>
<body>

<div class="container">
    <div id="main">
        <div id="nav">
            <ul>
                <li><a href="/">Main page</a></li>
                <li><a href="/#/books">Books page</a></li>
                <li><a href="/#/users">Users page</a></li>
                <<li><a href="/#/createuser">New User</a></li>
                <<li><a href="/#/createbook">New Book</a></li>
            </ul>
        </div>
        <div id="content">
            Content
        </div>
    </div>

</div>

<script type="text/javascript">
    window.__token ="{!! csrf_token() !!}";
</script>

<script type='text/template' id='book-create-template'>
    <div class='useCreateForm'>
        <table class='createUserTable mainTable'>
            <tr>
                <td class='legend'>Book Author:: </td>
                <td class='input'><input type='text'  id='new_book_author' placeholder="book author"></td>
            </tr>
            <tr>
                <td class="legend">Book Title:: </td>
                <td class="input"><input type="text" id="new_book_title" placeholder="book title"></td>
            </tr>
            <tr>
                <td class="legend">Book Genre:: </td>
                <td class="input"><input type="text" id="new_book_genre" placeholder="boo genre"></td>
            </tr>
            <tr>
                <td class="legend">Year Book was published:: </td>
                <td class="input"><input type="text" id="new_book_year" placeholder="year"></td>
            </tr>
            <tr>
                <td class="legend">Save Book:: </td>
                <td class="input"><input type="button" id="createNewBook" value="Save new Book"></td>
            </tr>
            <tr>
                <td class="legend">Cancel:: </td>
                <td class="input"><input type="button" id="cancelNewUser" value="Cancel"></td>
            </tr>
        </table>
    </div>
</script>


<script type='text/template' id='user-create-template'>
    <div class='useCreateForm'>
        <table class='createUserTable mainTable'>
            <tr>
                <td class='legend'>User First name:: </td>
                <td class='input'><input type='text' name='newUserFirstName' id='new_first_name' placeholder="first name"></td>
            </tr>
            <tr>
                <td class="legend">User Last name:: </td>
                <td class="input"><input type="text" name="newUserLastName" id="new_last_name" placeholder="last name"></td>
            </tr>
            <tr>
                <td class="legend">User Email:: </td>
                <td class="input"><input type="text" name="newUserEmail" id="new_email" placeholder="email"></td>
            </tr>
            <tr>
                <td class="legend">User Password:: </td>
                <td class="input"><input type="password" name="newUserPassword" id="new_password" placeholder="password"></td>
            </tr>
            <tr>
                <td class="legend">Save User:: </td>
                <td class="input"><input type="button" id="saveNewUser" value="Save new User"></td>
            </tr>
            <tr>
                <td class="legend">Cancel:: </td>
                <td class="input"><input type="button" id="cancelNewUser" value="Cancel"></td>
            </tr>
        </table>
    </div>
</script>
<script type="text/template" id="user-template">
    <td><input type='text' value='<%= first_name %>' class="first_name"></td>
    <td><input type='text' value='<%= last_name %>' class="last_name"></td>
    <td><input type='text' value='<%= email %>' class="email"></td>
    <td><input type='button' class='deleteUser' value='delete'></td>
    <td><input type='button'  class='syncModel' value='Sync to server'></td>
</script>
<script type="text/template" id="books-template">
    <td><input type='text' value='<%= author %>' class="author"></td>
    <td><input type='text' value='<%= year %>' class="year"></td>
    <td><input type='text' value='<%= title %>' class="title"></td>
    <td><input type='text' value='<%= genre %>' class="genre"></td>
    <td><input type='button' class='deleteModel' value='delete'></td>
    <td><input type='button'  class='syncModel' value='Sync to server'></td>
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