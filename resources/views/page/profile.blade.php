<!-- Header -->
    <div class="header bg-app-yellow pb-2 d-flex align-items-center" style="min-height: 360px; background-image: url({{asset('img/theme/profile-cover.jpg')}}); background-size: cover; background-position: center top;">
      <!-- Mask -->
      <span class="mask"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h3 class="display-5 text-dark">Hello <a class="usernameText"></a></h1>
            <p class="text-dark mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
            <!-- <a href="#!" class="btn btn-neutral">Edit profile</a> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid bg-app-light">
      <div class="row">
        <div class="col-xl-6 order-xl-1 mt--6 mb-4">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8 py-2">
                  <h6 class="mb-0">Edit profile </h6>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                      <div class="input-group input-group-merge input-group-alternative mb-3">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                        </div>
                        <input class="form-control" placeholder="Name" type="text" id="input-name">
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge input-group-alternative mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                          </div>
                          <input class="form-control" placeholder="Email" type="email" id="input-email">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge input-group-alternative mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-mobile-button"></i></span>
                          </div>
                          <input class="form-control" placeholder="Phone" type="phone" id="input-phone">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-right my-2">
                      <button class="btn btn-neutral bg-app-dark text-app-yellow col-12" id="saveProfile">Save</button>
                    </div>
                  </div>
                </div>
                <!-- Description -->
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-6 order-xl-1 mb-4">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8 py-2">
                  <h6 class="mb-0">Edit username </h6>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form action="">
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge input-group-alternative mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-single-02"></i></span>
                          </div>
                          <input class="form-control" placeholder="Username" type="text" id="input-username">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-right my-2">
                      <button class="btn btn-neutral bg-app-dark text-app-yellow col-12" id="saveUsername">Save</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-6 order-xl-1 mb-4">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8 py-2">
                  <h6 class="mb-0">Edit password </h6>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form action="">
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge input-group-alternative">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                          </div>
                          <input class="form-control" placeholder="Password" type="password" id="input-password">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="fa fa-eye togglePassword cursor-pointer" data-target="#input-password"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <div class="input-group input-group-merge input-group-alternative">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                          </div>
                          <input class="form-control" placeholder="Confirm password" type="password" id="input-confirm-password">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="fa fa-eye togglePassword cursor-pointer" data-target="#input-confirm-password"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-right my-2">
                      <button id="savePassword" class="btn btn-neutral bg-app-dark text-app-yellow col-12">Save</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>