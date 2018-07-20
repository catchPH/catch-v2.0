function sendEmail()
{ 
	var from_name = $('#name').val();
	var from_email = $('#email').val();
	var message = $('#message').val();
	var data_string = 'name='+from_name+'&email='+from_email+'&message='+message;
	var valid;
	valid = validateEmail();

	if(valid)
	{	
		$('.contact-button').addClass('loading');
		$.ajax({
			method: 'POST',
			url: 'assets/php/contact.php',
			data: data_string,
			dataType: 'json',
			success: function(data)
			{
				console.log(data);
				if(data.status == 'sent')
				{
					setTimeout(function(){
						$('.contact-button').addClass('hide');
						$('.done').addClass('finish');	
						$('.contact-input').val('');
					}, 3000)
				}
				else
				{
					$('.contact-button').addClass('hide');
					$('.failed').addClass('finish');
					$('.contact-input').val('');					
				}
				setTimeout(function(){
					$('.contact-button').removeClass('loading');
				    $('.contact-button').removeClass('hide');
				    $('.done').removeClass('finish');
				    $('.failed').removeClass('finish');
				}, 5000);
			}
		})
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