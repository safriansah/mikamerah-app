$(document).on('click', '#createButton', function(){
    register();
})

$(document).on('click', '#backToLoginButton', function(){
    loadPage('/app/login');
})

async function register(){
    setLoading(true);
    const nameText = $('#nameText'),
    emailText = $('#emailText'),
    phoneText = $('#phoneText'),
    usernameText = $('#usernameText'),
    passwordText = $('#passwordText'),
    customCheckRegister = $('#customCheckRegister');
    if (!customCheckRegister.is(":checked")) {
        return showNotif({'responseMessage': 'Please check aggreement'});
    }
    if ($('#confirmPasswordText').val() != passwordText.val()) {
        return showNotif({'responseMessage': 'Please check your password'}); 
    }
    let body = {
        "username": usernameText.val(),
        "password": passwordText.val(),
        "fullname": nameText.val(),
        "email": emailText.val(),
        "phone": phoneText.val()
    }
    console.log('body::', body);
    let settings = {
        "url": "/api/app/register",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
        },
        "data": JSON.stringify(body),
    };

    let result = await sentRequest(settings);
    showNotif(result);
    if (result.responseCode == '200') {
        loadPage('/app/login');   
    }
}