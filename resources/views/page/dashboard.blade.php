  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Header -->
    <div class="header bg-app-yellow pt-5 pb-5">
      <div class="container-fluid pb-5">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h5 class="text-dark d-inline-block mb-0">Dashboard</h5>
            </div>
          </div>
          <!-- Card stats -->
          <div class="row">
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--7 mb-5">
      <div class="row" id="transactionCard">
        
      </div>
      <div class="col-lg-12 col-12 text-right">
        <a href="#" class="btn bg-app-dark text-white col-12" data-toggle="modal" data-target="#newTransactionModal">New</a>
        <!-- <a href="#" class="btn btn-sm btn-neutral">Filters</a> -->
      </div>
      <div class="row">

      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="newTransactionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog w-100 m-0" role="document">
      <div class="modal-content">
        <div class="modal-header d-none">
          <h5 class="modal-title" id="exampleModalLabel">Transaction Form</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <input type="hidden" id="transactionInputType">
              <input type="hidden" id="newTransactionId">
              <input type="hidden" id="newTransactionParent">
              <label for="recipient-name" class="col-form-label">Title:</label>
              <input type="text" class="form-control" id="newTransactionTitle">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Amount:</label>
              <input type="number" class="form-control" id="newTransactionAmount">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Type:</label>
              <select name="" id="newTransactionType" class="form-control">
                <option value="" disabled>Choose</option>
                <option value="cr">In</option>
                <option value="db">Out</option>
              </select>
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Date:</label>
              <input type="date" class="form-control" id="newTransactionDate">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
          <button type="button" class="btn btn-neutral bg-app-dark text-app-yellow col-12 px-0 mx-0" id="newTransactionSave" >Save</button>
        </div>
      </div>
    </div>
  </div>