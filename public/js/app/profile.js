$(document).on('click', '#saveProfile', function(){
    saveProfile();
})

$(document).on('click', '#saveUsername', function(){
    saveUsername();
})

$(document).on('click', '#savePassword', function(){
    savePassword();
})

async function saveProfile(){
    setLoading(true);
    const name = $('#input-name'),
    email = $('#input-email'),
    phone = $('#input-phone'),
    token = localStorage.getItem('token');

    let body = {
        fullname: name.val(),
        email: email.val(),
        phone: phone.val()
    }
    console.log('body::', body);

    let settings = {
        "url": "/api/app/saveProfile",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "token": token
        },
        "data": JSON.stringify(body),
    };

    let result = await sentRequest(settings);
    showNotif(result);
}

async function saveUsername(){
    setLoading(true);
    const username = $('#input-username'),
    token = localStorage.getItem('token');

    let body = {
        username: username.val(),
    }
    console.log('body::', body);
    let settings = {
        "url": "/api/app/saveUsername",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "token": token
        },
        "data": JSON.stringify(body),
    };

    let result = await sentRequest(settings);
    showNotif(result);
}

async function savePassword(){
    setLoading(true);
    const password = $('#input-password'),
    confirmPassword = $('#input-confirm-password'),
    token = localStorage.getItem('token');

    if (password.val() == '') {
        return showNotif({'responseMessage': 'Password is required'});
    }

    if (password.val() != confirmPassword.val()) {
        return showNotif({'responseMessage': 'Please check your password'});
    }

    let body = {
        password: password.val(),
    }
    console.log('body::', body);
    let settings = {
        "url": "/api/app/savePassword",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "token": token
        },
        "data": JSON.stringify(body),
    };

    let result = await sentRequest(settings);
    showNotif(result);
}

async function loadProfile(){
    await loadPage('/app/profile');
    let profile = localStorage.getItem('profile')
    profile = JSON.parse(profile);
    console.log('profile::', profile.fullname);
    $('.usernameText').html(profile.username);
    $('#input-name').val(profile.fullname);
    $('#input-email').val(profile.email);
    $('#input-phone').val(profile.phone);
    $('#input-username').val(profile.username);
}