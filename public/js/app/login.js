$(document).on('click', '#registerText', function(){
    loadPage('/app/register');
})

$(document).on('click', '#loginButton', function(){
    login();
})

$(document).on('keypress', '#passwordText', function(e){
    if(e.which == 13) {
        login();
    }
})

async function login(){
    const usernameText = $('#usernameText'),
    passwordText = $('#passwordText');

    let body = {
        'username': usernameText.val(),
        'password': passwordText.val()
    }
    console.log('body::', body);

    let settings = {
        "url": "/api/app/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
        },
        "data": JSON.stringify(body),
    };

    let result = await sentRequest(settings);
    if (result.responseCode == '200') {
        localStorage.setItem("token", result.data.token);
        startScreen();
    } else {
        showNotif(result);
    }
}