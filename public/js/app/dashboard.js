const notFoundCard = '<div class="text-center w-100 py-5">No data found</div>';
const elementLoading = `<div class="w-100 py-5 text-center">
<div class="spinner-border bg-app-dark text-app-yellow" role="status">
    <span class="sr-only">Loading...</span>
</div>
</div>`;

$(document).on('click', '#newTransactionSave', function(){
    saveTransactionData()
})

$(document).on('show.bs.modal', '#newTransactionModal', async function (e) {
    $('#transactionInputType').val('create');
    let parent = $(e.relatedTarget).data('parent');
    let id = $(e.relatedTarget).data('id');
    if (parent) {
        $('#newTransactionParent').val(parent);
    } else {
        $('#newTransactionParent').val('');
    }
    if (id) {
        $('#newTransactionId').val(id);
        let token = localStorage.getItem('token');
        let body = {
            "id": id
        };
        if (parent) {
            body.parent = parent;
        }
        let settings = {
            "url": "/api/app/getTransaction",
            "method": "POST",
            "timeout": 0,
            "headers": {
            "Content-Type": "application/json",
            "token": token
            },
            "data": JSON.stringify(body),
        };
        let result = await sentRequest(settings);
        if (result.responseCode != 200) {
            showNotif(result);
        } else if (result.data.length != 1) {
            showNotif({
                'responseCode': '500'
            });
        } else {
            let data = result.data[0];
            $('#newTransactionTitle').val(data.title);
            $('#newTransactionAmount').val(data.amount);
            $('#newTransactionType').val(data.type);
            $('#newTransactionDate').val(data.date);
            $('#transactionInputType').val('update');  
        }
    } else {
        $('#newTransactionId').val('');
        $('#newTransactionTitle').val('');
        $('#newTransactionAmount').val(0);
        $('#newTransactionType').val('');
        $('#newTransactionDate').val(getTodayDate());    
    }
});

$(document).on('click', '.deleteTransaction', async function(){
    let token = localStorage.getItem('token');
    let body = {
        id: $(this).data('id'),
    }
    let settings = {
        "url": "/api/app/deleteTransaction",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "token": token
        },
        "data": JSON.stringify(body),
    };
    confirmDelete($(this).data('title'), settings, getTransaction);
})

async function saveTransactionData(){
    setLoading(true);
    let token = localStorage.getItem('token'),
    id = $('#newTransactionId').val(),
    parent = $('#newTransactionParent').val(),
    title = $('#newTransactionTitle').val(),
    amount =  $('#newTransactionAmount').val(),
    type = $('#newTransactionType').val(),
    date = $('#newTransactionDate').val(),
    url = "/api/app/saveTransaction",
    inputType = $('#transactionInputType').val();
    if (inputType == 'update') {
        url = "/api/app/updateTransaction"
    }
    let body = {
        title: title,
        amount: amount,
        type: type,
        date: date,
        status: '1'
    }
    if (id) {
        body.id = id;
    }
    if (parent) {
        body.parent = parent;
    }
    console.log('body::', body);
    // console.log('token::', token);
    let settings = {
        "url": url,
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
    if (result.responseCode == 200) {
        $('#newTransactionModal').modal('toggle');
        getTransaction();
    }
}

async function getTransaction(){
    const transactionCard = $('#transactionCard');
    transactionCard.html(elementLoading);
    let token = localStorage.getItem('token');
    let settings = {
        "url": "/api/app/getTransaction",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "token": token
        },
        "data": JSON.stringify({}),
    };
    let result = await sentRequest(settings);
    transactionCard.html('');
    if (result.responseCode != 200) {
        showNotif(result);
    }
    if (result.data.length < 1) {
        transactionCard.append(notFoundCard);
    } else {
        for(let data of result.data){
            // console.log('data::', data);
            // console.log('volume::', data.amount, data.volume);
            let amount = (data.type == 'db' ? data.amount * (-1) : data.amount)
            let volume =  data.volume;
            let save = (amount - volume) * (-1);
            let content = `<div class="w-100 px-4"><div class="card border-light mb-3">
                <div class="card-body">
                    <div class="row card-title">
                        <div class="col-10 h5">${data.title}</div>
                        <div class="col-2 h6 text-right">
                            <div class="dropdown show">
                                <div class="" id="dropdownMenuLink" data-toggle="dropdown">
                                    <i class="fas fa-ellipsis-v"></i>
                                </div>
                            
                                <div class="dropdown-menu bg-transparent p-0 border-0 justify-content-center" style="margin-left: -128px;" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item m-0 my-2 p-2 text-center bg-app-dark text-app-yellow rounded-circle" href="#" data-toggle="modal" data-target="#newTransactionModal" style="width: 40px; margin-left: 116px !important" data-parent="${data.id}"><i class="fas fa-plus"></i></a>
                                    <a class="dropdown-item text-center m-0 my-2 p-2 bg-white bg-app-dark text-app-yellow rounded-circle" href="#" data-toggle="modal" data-target="#newTransactionModal" style="width: 40px; margin-left: 116px !important" data-id="${data.id}"><i class="fas fa-pencil-alt"></i></a>
                                    <a class="dropdown-item text-center m-0 my-2 p-2 bg-white deleteTransaction bg-app-dark text-app-yellow rounded-circle" data-id="${data.id}" style="width: 40px; margin-left: 116px !important" data-title="${data.title}" href="#"><i class="fas fa-trash-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-1">
                        <div class="col-4">
                            Target
                        </div>
                        <div class="col-8 text-right ${(amount > 0 ? 'text-dark' : 'text-danger')}">
                            ${formatAmount(amount + '', 'Rp. ')}
                        </div>
                    </div>
                    <div class="row py-1">
                        <div class="col-4">
                            Volume
                        </div>
                        <div class="col-8 text-right ${(volume > 0 ? 'text-dark' : 'text-danger')}">
                            (${(volume/amount*100).toFixed(2)}%) ${formatAmount(volume + '', 'Rp. ')}
                        </div>
                    </div>
                    <div class="row py-1">
                        <div class="col-4">
                            Save
                        </div>
                        <div class="col-8 text-right ${(save > 0 ? 'text-dark' : 'text-danger')}">
                            ${formatAmount(save + '', 'Rp. ')}
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-transparent text-app-dark text-center h6 cursor-pointer">View</div>
            </div></div>`
            transactionCard.append(content);
        }
    }
}

