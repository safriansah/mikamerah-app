<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Start your development with a Dashboard for Bootstrap 4.">
    <meta name="author" content="Creative Tim">
    <title>Mikamerah App</title>
    <!-- Favicon -->
    <link href='https://safriansah.blogspot.com/favicon.ico' rel='icon' type='image/x-icon'/>
    <!-- <link rel="icon" href="{{ asset('img/brand/favicon.png') }}" type="image/png"> -->
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
    <!-- Icons -->
    <link rel="stylesheet" href="{{ asset('vendor/nucleo/css/nucleo.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('vendor/@fortawesome/fontawesome-free/css/all.min.css') }}" type="text/css">
    <!-- Argon CSS -->
    <link rel="stylesheet" href="{{ asset('css/argon.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" type="text/css">
    <!-- <link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"> -->
</head>

<body class="bg-white">
    <div id="loadingContainer" class="">
        <div id="loadingContent" class="text-center w-100 h-100 bg-dark position-fixed d-flex justify-content-center opacity-5">
            <div class="spinner-border align-self-center text-white" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    <div id="mainPage" class="pb-5">
    </div>
    <div id="bottomBar" class="bottom-menu bg-lighter d-none justify-content-center">
        <div class="row w-100">
            <div class="col-6">
                <a href="#" id="homeButton" class="menuButton active">
                    <i class="fas fa-home"></i>
                    <div class="w-100 mt--1" style="font-size: 10px; font-weight: bold;">Home</div>
                </a>
            </div>
            <div class="col-6">
                <a href="#" id="profileButton" class="menuButton mx-2">
                    <i class="fas fa-user"></i>
                    <div class="w-100 mt--1" style="font-size: 10px; font-weight: bold;">Profile</div>
                </a>
            </div>
        </div>
    </div>
    <!-- Argon Scripts -->
    <!-- Core -->
    <script src="{{ asset('vendor/jquery/dist/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('vendor/js-cookie/js.cookie.js') }}"></script>
    <script src="{{ asset('vendor/jquery.scrollbar/jquery.scrollbar.min.js') }}"></script>
    <script src="{{ asset('vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js') }}"></script>
    <script src="//unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <!-- Argon JS -->
    <script src="{{ asset('js/argon.js') }}"></script>
    <!-- custom js -->
    <script src="{{ asset('js/app/navigation.js') }}"></script>
    <script src="{{ asset('js/app/register.js') }}"></script>
    <script src="{{ asset('js/app/navbar.js') }}"></script>
    <script src="{{ asset('js/app/login.js') }}"></script>
    <script src="{{ asset('js/app/profile.js') }}"></script>
    <script src="{{ asset('js/app/dashboard.js') }}"></script>
</body>

</html>