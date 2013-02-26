
function registerUser() 
{
    var nameField = document.getElementById('name').value.trim();
    var selectField = document.getElementById('skillList');
    var contactField = document.getElementById('contact').value.trim();
    var passwordField = document.getElementById('password').value.trim();
    var rePasswordField = document.getElementById('password1').value.trim();
    var errorString = "";

    if (!(("" != nameField) && ("" != contactField)
            && ("" != passwordField) && ("" != rePasswordField))) 
	{
        errorString += "All fields are Mandatory ;";
    }
    else
	{
        if (!(nameField.match('^[A-Za-z. /]+$'))) 
		{
			errorString += "Name field can contain only alphabets,dot and whitespace ;";
		}
    
		if (!(contactField.match('^[0-9]+$')) || (contactField.length!=10)) 
		{
			errorString += "Contact number can only be numbers and should have only 10 digits;";
		}

		if (passwordField != rePasswordField) 
		{
			errorString += "Passwords doesnt match ;";
		}
    }
    
	if (errorString != "") 
	{
        alert(errorString);
    }
	else
	{
           $.post("http://omega.uta.edu/~sxp8709/test.php?method=registerUser&registercallback=",
                        {
                            name : nameField,
                            skillId : selectField.selectedIndex,
                            contact : contactField,
                            password : passwordField
                        }, function(data) 
						{
                            alert(data);
                        });
    }
}

function clearField() 
{
    document.getElementById('name').value = "";
    document.getElementById('skillList').selectedIndex = 0;
    document.getElementById('contact').value = "";
    document.getElementById('password').value = "";
    document.getElementById('password1').value = "";
}
