
function userValidate()
{
	var userName = document.getElementById('user').value.trim();
	var password = document.getElementById('password').value.trim();

	if (("" != userName) && ("" != password))
	{
		$.post("http://omega.uta.edu/~sxp8709/test.php?method=signInUser&signinusercallback=",
                                        {
                                            username : userName,
                                            password : password
                                        }, function(data) 
										{                                        
                                            alert(data);
                                        });
	}
	else
	{
		alert ("username/password cannot be empty");
	}
}
