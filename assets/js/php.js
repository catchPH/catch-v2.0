function sendEmail()
{ 
	var from_name = $('#name').val();
	var from_email = $('#email').val();
	var message = $('#message').val();
	var data_string = 'fromName='+from_name+'&fromEmail='+from_email+'&message='+message;
	var valid;
	valid = validateEmail();
	if(valid)
	{
		$.ajax({
			type: 'POST',
			url: 'assets/php/contact.php',
			data: data_string,
			success: function(data)
			{
				$('.contact-email-status').html(data);
			},
			error: function(){}
		});
	}
}

function validateEmail()
{
	var valid = true;
	$('.info').html('');
	if(!$('#name').val())
	{
		$('#lblName').html("<i class='icon-close' aria-hidden='true'></i> name is required");
		$('#lblName').css('color', 'red');
		valid = false;
	}
	if(!$('#email').val())
	{
		$('#lblEmail').html("<i class='icon-close' aria-hidden='true'></i> email is required");
		$('#lblEmail').css('color', 'red');
		valid = false;
	}
	if(!$('#email').val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
	{
		$('#lblEmail').html("<i class='icon-close' aria-hidden='true'></i> invalid email");
		$('#lblEmail').css('color', 'red');
		valid = false;
	}
	if(!$('#message').val())
	{
		$('#lblMessage').html("<i class='icon-close' aria-hidden='true'></i> message is required");
		$('#lblMessage').css('color', 'red');
		valid = false;
	}
	return valid;
}