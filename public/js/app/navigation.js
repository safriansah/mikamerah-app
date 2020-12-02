const mainPage = $('#mainPage');
const loadingContainer = $('#loadingContainer')
let thisPage = false, prevPage = false;

$(function(){
    startScreen();
})

async function startScreen(){
    let result = await checkToken();
    if (result) {
        loadPage('/app/dashboard');   
    }
}

async function checkToken(){
    const token = localStorage.getItem("token");
    if (!token) {
        return loadPage('/app/login');
    }
    let body = {
        'token': token
    }
    console.log('body::', body);
    let settings = {
        "url": "/api/app/checkToken",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
        },
        "data": JSON.stringify(body),
    };
    let result = await sentRequest(settings);
    if (result.responseCode == '200') {
        localStorage.setItem("profile", JSON.stringify(result.data));
        return true  
    } else {
        localStorage.clear();
        showNotif(result);
        loadPage('/app/login');
        return false;
    }
}

async function loadPage(page){
    setLoading(true);
    if (thisPage != page) {
        prevPage = thisPage;   
    }
    mainPage.html('');
    let content = await getPage(page);
    mainPage.html(content);
    if (page!='/app/login' && page!='/app/register') {
        let navbar = await getPage('/app/navbar');
        mainPage.prepend(navbar);
    }
    thisPage = page;
    setLoading(false);
}

function getPage(page){
    return new Promise(async function(resolve){
        var settings = {
            "url": page,
            "method": "GET",
            "timeout": 0,
            "headers": {
                
            },
        };
        $.ajax(settings).done(function (response) {
            // console.log(response);
            resolve(response);
        });
    })
}

function sentRequest(settings){
    return new Promise(async function(resolve){
        $.ajax(settings).done(function (response) {
            console.log('response::', response);
            return resolve(response);
        });
    })
}

function showNotif(data){
    setLoading(false);
    // And with a third argument, you can add an icon to your alert! There are 4 predefined ones: "warning", "error", "success" and "info".
    let title = 'Warning',
    message = 'Shometing wrong',
    icon = 'warning';
    if (data.responseCode == 500) {
        title = 'Error'
        icon = 'error'    
    }
    else if (data.responseCode == 200) {
        title = 'Success'
        icon = 'success'    
    } else if (data.responseCode >= 400 && data.responseCode < 500) {
        title = 'Info'
        icon = 'info'
    }

    if (data.responseMessage) {
        message = data.responseMessage
    }

    swal(title, message, icon);
}

function setLoading(data){
    if (data) {
        loadingContainer.removeClass('d-none')
    } else {
        loadingContainer.addClass('d-none')
    }
}