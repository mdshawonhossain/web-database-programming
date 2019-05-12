<!DOCTYPE html>
<html>
<head>
<script>
function validateForm()
{
var age = document.getElementById('age').value;
var email = document.getElementById('email').value;
var filter = /^[a-zA-z0-9]+[a-zA-z0_.-]+[a-zA-z0-9]+@[a-zA-z0-9]+a-zA-z-.-]+[a-zA-z0-9]]+.[a-z]{2,4}$/;

if(age.length == 0 || isNoN(age))
{

alert('please enter any number');
return false;
}
else if(email.length == 0 || filter.test(email) != true)
{
alert('please enter valid email');
return false;
}
else
{
alert('form submitted');
return true;
}
}
</script>
</head>
<body>

<form action="test.php" name="wForm" method="post" onsubmit="return validateForm()">
<p>
<input type="text" name="age" id="age"/>
</p>
<p>
<input type="text" name="email" id="email"/>
</p>
<p>
<input type="submit" name="submit" value="submit"/>
</p>
</form>
</body>
</html>