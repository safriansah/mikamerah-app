$(document).on('click', '#profileButton', function(){
    loadProfile();
})

$(document).on('click', '#logoutButton', function(){
    logout();
})

$(document).on('click', '#backButton', function(){
    if (prevPage) {
        if (prevPage == '/app/profile') {
            loadProfile()
        } else {
            loadPage(prevPage);
        }   
    }
})

async function logout(){
    const token = localStorage.getItem("token");
    let body = {
        'token': token
    }
    console.log('body::', body);

    let settings = {
        "url": "/api/app/logout",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
        },
        "data": JSON.stringify(body),
    };
    let result = await sentRequest(settings);
    if (result.responseCode == '200') {
        localStorage.clear();
        startScreen();
    } else {
        showNotif(result);
    }
}