const mainPage = $('#mainPage');
const loadingContainer = $('#loadingContainer')
let thisPage = false, prevPage = false;

$(function(){
    startScreen();
})

$(document).on('click', '#profileButton', function(){
    loadProfile();
    $('.menuButton').removeClass('active');
    $(this).addClass('active');
})

$(document).on('click', '#homeButton', async function(){
    await loadPage('/app/dashboard');
    getTransaction()
    $('.menuButton').removeClass('active');
    $(this).addClass('active');
})

async function startScreen(){
    let result = await checkToken();
    if (result) {
        await loadPage('/app/dashboard');
        getTransaction()
        showBottomBar()
    } else {
        showBottomBar(false);
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
        $('.modal').modal('hide');
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

function formatAmount(amount, prefix){
    var number_string = amount.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(','),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function confirmDelete(name, settings, afterFunction){
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover " + name,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then(async (willDelete) => {
        if (willDelete) {
            let result = await sentRequest(settings);
            showNotif(result);
            afterFunction();
        } else {
            // swal("Your imaginary file is safe!");
        }
    });
}

function showBottomBar(param = true) {
    if (param) {
        $('#bottomBar').removeClass('d-none');
        $('#bottomBar').addClass('d-flex');
    } else {
        $('#bottomBar').removeClass('d-flex');
        $('#bottomBar').addClass('d-none');
    }
}

function getTodayDate() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    return today;
}