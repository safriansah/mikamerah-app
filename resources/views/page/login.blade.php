    <!-- Main content -->
    <div class="main-content">
        <!-- Header -->
        <div class="header bg-app-yellow p-5">
            <div class="container">
                <div class="header-body text-center mb-5">
                    <div class="row justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-8 px-5 mb-5">
                            <h1 class="text-dark">Welcome Yolla!</h1>
                            <p class="text-lead text-dark">Mikamerah app</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Page content -->
        <div class="container mt--7">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-7">
                    <div class="card bg-white border-0 mb-0">
                        <!-- <div class="card-header bg-transparent pb-5"> -->
                        <!-- <div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div> -->
                            <!-- <div class="btn-wrapper text-center">
                                <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img src="{{ asset('img/icons/common/github.svg') }}"></span>
                                <span class="btn-inner--text">Github</span>
                                </a>
                                <a href="#" class="btn btn-neutral btn-icon">
                                <span class="btn-inner--icon"><img src="{{ asset('img/icons/common/google.svg') }}"></span>
                                <span class="btn-inner--text">Google</span>
                                </a>
                            </div> -->
                        <!-- </div> -->
                        <div class="card-body px-lg-5 py-lg-5">
                            <div class="text-center text-muted mb-4">
                                <small>Sign in with credentials</small>
                            </div>
                            <form role="form">
                                <div class="form-group mb-3">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-single-02"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Username" type="text" id="usernameText">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group-merge input-group-alternative">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input class="form-control" placeholder="Password" type="password" id="passwordText">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fa fa-eye togglePassword cursor-pointer" data-target="#passwordText"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="custom-control custom-control-alternative custom-checkbox">
                                <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                                <label class="custom-control-label" for=" customCheckLogin">
                                    <span class="text-muted">Remember me</span>
                                </label>
                                </div> -->
                                <div class="text-center">
                                    <button type="button" class="btn btn-neutral bg-app-dark my-4 col-12 text-app-yellow" id="loginButton">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <!-- <div class="col-6">
                        <a href="#" class="text-light"><small>Forgot password?</small></a>
                        </div> -->
                        <div class="col-12 text-right">
                            <a href="#" id="registerText" class="text-app-dark">Create new account <i class="ml-1 fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>